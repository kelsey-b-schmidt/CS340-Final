/*
Andy Chen
Kelsey Schmidt
Project Group 36
CS340 - Summer 2022
Project Step 3 Draft: Design HTML Interface + DML SQL (Group / On Ed Discussion ) - Project Group 36
Project name: CoffeeBuzz - A coffee products distributor database
*/

-- Displaying the tables
SELECT * FROM Customers; 
SELECT * FROM Addresses;
SELECT * FROM Orders;
SELECT * FROM Products;
SELECT * FROM OrderDetails;


-- Get primary and foreign keys
-- Generate customer ID's to allow for a dropdown selection
SELECT customerID, customerName FROM Customers;

-- Create Orders Invoice showing recipient, address, shipDateTime, and orderTotal
SELECT Orders.orderID, Orders.customerID, Addresses.recipient, Addresses.street, Addresses.city, Addresses.state, Addresses.zip, Orders.shipDateTime, SUM(lineTotal) AS orderTotal FROM Orders
INNER JOIN OrderDetails ON Orders.orderID = OrderDetails.orderID
INNER JOIN Addresses ON Orders.addressID = Addresses.addressID
GROUP BY Orders.orderID;

-------------------------------------------------------------- Search function ----------------------------------------------------------------------------

-- Customers search function
SELECT customerName, email, phoneNumber FROM Customers WHERE customerID = :customerIDInput;

-- Orders search function
SELECT Orders.orderID, Orders.customerID, Addresses.recipient, Addresses.street, Addresses.city, Addresses.state, Addresses.zip, Orders.shipDateTime, SUM(lineTotal) AS orderTotal FROM Orders
INNER JOIN OrderDetails ON Orders.orderID = OrderDetails.orderID
INNER JOIN Addresses ON Orders.addressID = Addresses.addressID
WHERE Orders.orderID = :orderIDInput;

-- Address search function

SELECT * FROM Addresses WHERE customerID = :customerIDInput;

-- Products search function
SELECT * FROM Products WHERE productID = :productIDInput;

-------------------------------------------------------------- Deletion from tables ----------------------------------------------------------------------------

-- Allowing deletion of orderID since it does not appear in OrderDetails
DELETE FROM Orders WHERE :orderID_selected_from_orders_page_that_does_not_have_OrderDetails;

-- Does not allow deletion of and Order if OrderDetails have already been made. M-M Relationship 
DELETE FROM Orders WHERE :orderID_selected_from_orders_page;

-- Allowing deletion of OrderDetails and does not affect Orders or Products entity table 
DELETE FROM OrderDetails WHERE :orderID_selected_from_OrdersDetails_page;

-- Delete Products
DELETE FROM Products WHERE :productID_is_selected;

-- Delete Customers
DELETE FROM Customers WHERE customerID = :customerID_is_selected

-- Delete Addresses
DELETE FROM Addresses WHERE addressID = :addressID_is_selected

--------------------------------------------------------------- Update from tables -----------------------------------------------------------------------------
-- update a Products data based on submission of the Update product form 
UPDATE Products SET sellPrice = :sellPriceInput, replenishCost = :replenishCostInput, numberInStock = :numberInStockInput WHERE productID = :productID_from_update_form

-- update Customers data based on submission from Update customers form
UPDATE Customers SET customerName = :customerNameInput, email = :emailInput, phoneNumber = :phoneNumberInput WHERE customerID = :customerID_from_update_form

-- update Addresses data based on submission from Update addresses form

UPDATE Addresses SET recipient = :recipientInput, street = :streetInput, city = :cityInput, state = :stateInput, zip = :zipInput, isActive = :isActiveInput, isPrimary = :isPrimaryInput WHERE addressID = :addressrID_from_update_form

-- update Orders data based on submission from Update orders form

UPDATE Orders SET shipDateTime = :shipDateTimeMarkedShipped WHERE orderID = :orderID_from_update_form

-- update OrderDetails data based on submission from Update orderdetails form

UPDATE OrderDetails SET productQuantity = :productQuantityInput, unitPrice = :unitPriceInput WHERE odID = :odID_from_update_form

-- update command for update shipdate time when button is clicked from null to a set date 

UPDATE Orders SET shipDateTime = :dateVariable

------------------------------------------------------- Query for Inserts for each entity ----------------------------------------------------------------------

-- Customers Table
-- Insert
INSERT INTO Customers (
    customerName,
    email,
    phoneNumber
)
VALUES (
    :customerNameInput,
    :customerEmailInput,
    :custonerPhoneNumberInput
),

--Addresses;
-- Insert
INSERT INTO Addresses (
    customerID,
    recipient, 
    street, 
    city, 
    state, 
    zip, 
    isActive, 
    isPrimary
)
VALUES (
    (SELECT customerID FROM Customers WHERE customerName = :customerNameDropdownInput), 
    :recipientInput, 
    :streetInput,
    :cityInput,
    :stateInput,
    :zipInput,
    1, 
    1
), 

--Orders;
-- Insert
INSERT INTO Orders (
    addressID,
    customerID,
    shipDateTime
)
VALUES 
(
    (SELECT addressID FROM Addresses WHERE customerID = 
        (SELECT customerID FROM Customers WHERE customerName = :customerNameDropdownInput)
        AND isPrimary = 1),
    (SELECT customerID FROM Customers WHERE customerName = :customerNameDropdownInput), 
    NULL
), 

--Products;
-- Insert
INSERT INTO Products (
    productName,
    description,
    brand,
    weightVal,
    weightUnit,
    sellPrice,
    replenishCost,
    numberInStock
)
VALUES 
(
    :productNameInput,
    :productDescriptionInput,
    :productBrandInput,
    :weightValInput,
    :weightValUnitInput,
    :sellPriceInput,
    :replenishCostInput,
    :numberInStockInput
), 

--OrderDetails;
-- Insert
INSERT INTO OrderDetails (
    orderID, 
    productID, 
    productQuantity, 
    unitPrice
)
VALUES 
(   
    (SELECT orderID from Orders WHERE addressID = 
        (SELECT addressID FROM Addresses WHERE customerID = 
            (SELECT customerID FROM Customers WHERE customerName = :customerNameDropdownInput)
        AND isPrimary = 1)),
    (SELECT productID FROM Products WHERE productName = :customerNameDropdownInput
    AND brand = :brandDropdownInput AND weightVal = :weightValInput AND weightUnit = :weightUnitDropdownInput), 
    :unitPriceInput,
    (SELECT sellPrice FROM Products WHERE productName = :customerNameDropdownInput
    AND brand = :brandDropdownInput AND weightVal = :weightValInput AND weightUnit = :weightUnitDropdownInput),
), 



