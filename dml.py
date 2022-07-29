# Select all from each tables
selectAllCustomers = 'SELECT * FROM Customers;'
selectAllAddresses = 'SELECT * FROM Addresses;'
selectAllOrders = 'SELECT * FROM Orders;'
selectAllProducts = 'SELECT * FROM Products'
selectAllOrderDetails = 'SELECT * FROM OrderDetails;'

# Get primary and foreign keys
# Generate customer ID's to allow for a dropdown selection
selectCustomersKeys = 'SELECT customerID, customerName FROM Customers;'

# Create Orders Invoice showing recipient, address, shipDateTime, and orderTotal
createOrderInvoices = '''(SELECT Orders.orderID, Orders.customerID, Addresses.recipient, Addresses.street, Addresses.city, 
Addresses.state, Addresses.zip, Orders.shipDateTime, SUM(lineTotal) AS orderTotal FROM Orders
INNER JOIN OrderDetails ON Orders.orderID = OrderDetails.orderID
INNER JOIN Addresses ON Orders.addressID = Addresses.addressID
GROUP BY Orders.orderID;)'''


# Search functions for entity tables
customersSearchFunction = 'SELECT customerName, email, phoneNumber FROM Customers WHERE customerID = :customerIDInput;'

ordersSearchFunction = '''SELECT Orders.orderID, Orders.customerID, Addresses.recipient, Addresses.street, Addresses.city, Addresses.state, Addresses.zip, Orders.shipDateTime, SUM(lineTotal) AS orderTotal FROM Orders
INNER JOIN OrderDetails ON Orders.orderID = OrderDetails.orderID
INNER JOIN Addresses ON Orders.addressID = Addresses.addressID
WHERE Orders.orderID = :orderIDInput;'''

addressesSearchFunction = 'SELECT * FROM Addresses WHERE customerID = :customerIDInput;'

productsSearchFunction = 'SELECT * FROM Products WHERE productID = :productIDInput;'

# Delete functions for entity tables

# Does not allow deletion of an Order if OrderDetails have already been made. M-M Relationship 
deleteOrderID = 'DELETE FROM Orders WHERE :orderID_selected_from_orders_page;'

# Allowing deletion of OrderDetails and does not affect Orders or Products entity table 
deleteFromOrderDetails = 'DELETE FROM OrderDetails WHERE :orderID_selected_from_OrdersDetails_page;'

deleteProducts = 'DELETE FROM Products WHERE :productID_is_selected;'

# Update functions for entity tables

# update a Products data based on submission of the Update product form 
updateProducts = '''UPDATE Products SET sellPrice = :sellPriceInput, replenishCost = :replenishCostInput, numberInStock = :numberInStockInput WHERE productID = :productID_from_update_form'''
# updateProducts = '''UPDATE Products SET sellPrice = 2, replenishCost = 3, numberInStock = 1 WHERE productID = 1'''


# update Customers data based on submission from Update customers form
updateCustomers = 'UPDATE Customers SET customerName = :customerNameInput, email = :emailInput, phoneNumber = :phoneNumberInput WHERE customerID = :customerID_from_update_form'

# update Addresses data based on submission from Update addresses form

updateAddresses = 'UPDATE Addresses SET recipient = :recipientInput, street = :streetInput, city = :cityInput, state = :stateInput, zip = :zipInput, isActive = :isActiveInput, isPrimary = :isPrimaryInput WHERE addressID = :addressrID_from_update_form'

# update Orders data based on submission from Update orders form

updateOrders = 'UPDATE Orders SET shipDateTime = :shipDateTimeMarkedShipped WHERE orderID = :orderID_from_update_form'

# update OrderDetails data based on submission from Update orderdetails form

updateOrderDetails = 'UPDATE OrderDetails SET productQuantity = :productQuantityInput, unitPrice = :unitPriceInput WHERE odID = :odID_from_update_form'

# update command for update shipdate time when button is clicked from null to a set date 
# Need to implement
updateShipdateTime = 'UPDATE Orders SET shipDateTime = :dateVariable'


# Inserts for entity tables

# Customers Table
insertCustomers = '''Insert
INSERT INTO Customers (
    customerName,
    email,
    phoneNumber
)
VALUES (
    :customerNameInput,
    :customerEmailInput,
    :custonerPhoneNumberInput
),'''

# Addresses Table

insertAddresses = '''Insert
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
),''' 

# Orders
insertOrders = '''Insert
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
),'''

# Products


insertProducts = '''Insert
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
),''' 

# OrderDetails

insertOrderDetails = '''Insert
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
),''' 

