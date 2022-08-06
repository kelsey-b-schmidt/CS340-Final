
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;
/* 
disable commits and foreign key checks at the beginning of your file 
and then turn them back on at the end to minimize import errors
*/


/*
Andy Chen
Kelsey Schmidt
Project Group 36
CS340 - Summer 2022
Project Step 3 Draft: Design HTML Interface + DML SQL (Group / On Ed Discussion ) - Project Group 36
Project name: CoffeeBuzz - A coffee products distributor database
*/

/*
-------------------------------------- Creating Tables --------------------------------------

------ Customer Tables ------
 */

CREATE OR REPLACE TABLE Customers (
    customerID INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customerName  VARCHAR(100) NOT NULL,
    email  VARCHAR(100) CHECK (email LIKE '%_@__%.__%'),
    phoneNumber VARCHAR(13) NOT NULL
) ENGINE=INNODB;

/*
------ Addresses Table ------
*/

CREATE OR REPLACE TABLE Addresses (
    addressID INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customerID INT,
    recipient  VARCHAR(100) NOT NULL,
    street  VARCHAR(100) NOT NULL,
    city  VARCHAR(100) NOT NULL,
    state  CHAR(2) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    isActive TINYINT(1) NOT NULL,
    isPrimary TINYINT(1) NOT NULL,
    CONSTRAINT FOREIGN KEY(customerID) REFERENCES Customers (customerID)
    ON DELETE SET NULL
) ENGINE=INNODB;

/*
------ Orders Table ------
*/

CREATE OR REPLACE TABLE Orders (
    orderID INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    addressID INT NOT NULL,
    customerID INT,
    shipDateTime DATETIME,
    CONSTRAINT FOREIGN KEY(addressID) REFERENCES Addresses (addressID) ON DELETE RESTRICT, 
    CONSTRAINT FOREIGN KEY(customerID) REFERENCES Customers (customerID)
    ON DELETE SET NULL
) ENGINE=INNODB;

/*
------ Products Table ------
*/

CREATE OR REPLACE TABLE Products (
    productID INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    productName VARCHAR(100) NOT NULL,
    description VARCHAR(1000),
    brand VARCHAR(100) NOT NULL,
    weightVal DECIMAL(19,2) NOT NULL,
    weightUnit VARCHAR(10) NOT NULL CHECK (weightUnit IN ('lbs', 'oz')),
    sellPrice DECIMAL(19,2) NOT NULL,
    replenishCost DECIMAL(19,2) NOT NULL,
    numberInStock INT NOT NULL
) ENGINE=INNODB;

/*
------ OrderDetails Table ------
*/

CREATE OR REPLACE TABLE OrderDetails (
    odID INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    orderID INT NOT NULL,
    productID INT NOT NULL,
    productQuantity INT NOT NULL,
    unitPrice DECIMAL(19,2) NOT NULL,
    lineTotal DECIMAL(19,2) AS (productQuantity * unitPrice), -- this live calculates the lineTotal on entry INSERT
    CONSTRAINT FOREIGN KEY (orderID) REFERENCES Orders (orderID) ON DELETE CASCADE,
    CONSTRAINT FOREIGN KEY (productID) REFERENCES Products (productID)
    ON DELETE RESTRICT
) ENGINE=INNODB;

/*
-------------------------------------- Creating Insert Values --------------------------------------

------ Customers Table ------

*/

INSERT INTO Customers (
    customerName,
    email,
    phoneNumber
)
VALUES (
    "Joann Coffeelover",
    "joanncoffeelover@gmail.com",
    "415-387-2249"
),
(
    "General Koffobi's",
    "generalkoffobis@mail.com",
    "249-499-7546"
),
(
    "Peet's Coffee",
    "peet1@peets.com",
    "617-492-1844"
), 
(
    "Biggby Smith",
    "biggby1@biggbycoffee.com",
    "732-372-7683"
), 
(
    "Anetta NameHere",
    "anettanamehere@gmail.com",
    "773-743-0417"
);

/*
------ Addresses Table ------
*/

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
    (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover"), 
    "Joann Coffeelover", 
    "3595 California St",
    "San Francisco",
    "CA",
    "94118",
    1, 
    1
), 
(
    (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover"), 
    "Dotta Coffeelover", 
    "2701 University Dr",
    "Auburn Hills",
    "MI",
    "48326",
    1, 
    0
), 
(
    (SELECT customerID FROM Customers WHERE customerName = "Peet's Coffee"), 
    "Peter Coffeeman", 
    "100 Mt Auburn St",
    "Cambridge",
    "MA",
    "02138",
    1, 
    1
), 
(
    (SELECT customerID FROM Customers WHERE customerName = "Biggby Smith"), 
    "Biggby Smith", 
    "660 Middlesex Ave",
    "Metuchen",
    "NJ",
    "08840",
    1, 
    1
), 
(
    (SELECT customerID FROM Customers WHERE customerName = "Anetta NameHere"), 
    "Anetta NameHere", 
    "6738 N Sheridan Rd",
    "Chicago",
    "IL",
    "60626",
    1, 
    1
);

/*
------ Orders Table ------
*/

INSERT INTO Orders (
    addressID,
    customerID,
    shipDateTime
)
VALUES 
(
    (SELECT addressID FROM Addresses WHERE customerID = 
        (SELECT customerID FROM Customers WHERE customerName = "Biggby Smith")
        AND isPrimary = 1),
    (SELECT customerID FROM Customers WHERE customerName = "Biggby Smith"), 
    NULL
), 
(
    (SELECT addressID FROM Addresses WHERE customerID = 
        (SELECT customerID FROM Customers WHERE customerName = "Peet's Coffee")
        AND isPrimary = 1),
    (SELECT customerID FROM Customers WHERE customerName = "Peet's Coffee"), 
    NULL
), 
(
    (SELECT addressID FROM Addresses WHERE customerID = 
        (SELECT customerID FROM Customers WHERE customerName = "Anetta NameHere")
        AND isPrimary = 1),
    (SELECT customerID FROM Customers WHERE customerName = "Anetta NameHere"), 
    NULL
),
(
    (SELECT addressID FROM Addresses WHERE customerID = 
        (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover") 
        AND recipient = "Dotta Coffeelover"),
    (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover"), 
    NULL
), 
(
    (SELECT addressID FROM Addresses WHERE customerID = 
        (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover")
        AND isPrimary = 1),
    (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover"), 
    NULL
);

/*
------ Products Table ------
*/

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
    "Light Roast Coffee",
    "Light roast coffee",
    "Starbucks",
    5,
    "lbs",
    25.00,
    17.00,
    1500
), 
(
    "Dark Roast Coffee",
    "Dark roast coffee",
    "Starbucks",
    5,
    "lbs",
    25.00,
    17.00,
    2000
), 
(
    "Medium Roast Coffee",
    "Medium roast coffee",
    "Starbucks",
    7,
    "lbs",
    32.00,
    22.00,
    2000
), 
(
    "Super Rare Beans",
    "The most rare, probably",
    "BeanStalk",
    24,
    "oz",
    25.00,
    16.00,
    1781
), 
(
    "Less Rare Beans",
    "Less rare than you'd think",
    "BeanStalk",
    24,
    "oz",
    24.00,
    15.00,
    4000
);

/*
------ OrderDetails Table ------
*/

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
            (SELECT customerID FROM Customers WHERE customerName = "Peet's Coffee")
        AND isPrimary = 1)),
    (SELECT productID FROM Products WHERE productName = "Light Roast Coffee" 
    AND brand = "Starbucks" AND weightVal = 5 AND weightUnit = "lbs"), 
    100,
    (SELECT sellPrice FROM Products WHERE productName = "Light Roast Coffee" 
    AND brand = "Starbucks" AND weightVal = 5 AND weightUnit = "lbs") 
), 
(   
    (SELECT orderID from Orders WHERE addressID = 
        (SELECT addressID FROM Addresses WHERE customerID = 
            (SELECT customerID FROM Customers WHERE customerName = "Peet's Coffee")
        AND isPrimary = 1)),
    (SELECT productID FROM Products WHERE productName = "Less Rare Beans" 
    AND brand = "BeanStalk" AND weightVal = 24 AND weightUnit = "oz"),
    200,
    (SELECT sellPrice FROM Products WHERE productName = "Less Rare Beans" 
    AND brand = "BeanStalk" AND weightVal = 24 AND weightUnit = "oz")
), 
(   
    (SELECT orderID from Orders WHERE addressID = 
        (SELECT addressID FROM Addresses WHERE customerID = 
            (SELECT customerID FROM Customers WHERE customerName = "Anetta NameHere")
        AND isPrimary = 1)),
    (SELECT productID FROM Products WHERE productName = "Light Roast Coffee" 
    AND brand = "Starbucks" AND weightVal = 5 AND weightUnit = "lbs"), 
    145,
    (SELECT sellPrice FROM Products WHERE productName = "Light Roast Coffee" 
    AND brand = "Starbucks" AND weightVal = 5 AND weightUnit = "lbs")
), 
(   
    (SELECT orderID from Orders WHERE addressID = 
        (SELECT addressID FROM Addresses WHERE customerID = 
            (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover") 
        AND recipient = "Dotta Coffeelover")),
    (SELECT productID FROM Products WHERE productName = "Medium Roast Coffee" 
    AND brand = "Starbucks" AND weightVal = 7 AND weightUnit = "lbs"), 
    300,
    (SELECT sellPrice FROM Products WHERE productName = "Medium Roast Coffee" 
    AND brand = "Starbucks" AND weightVal = 7 AND weightUnit = "lbs")   
), 
(   
    (SELECT orderID from Orders WHERE addressID = 
        (SELECT addressID FROM Addresses WHERE customerID = 
            (SELECT customerID FROM Customers WHERE customerName = "Joann Coffeelover") 
        AND isPrimary = 1)),
    (SELECT productID FROM Products WHERE productName = "Super Rare Beans" 
    AND brand = "BeanStalk" AND weightVal = 24 AND weightUnit = "oz"),
    200,
    (SELECT sellPrice FROM Products WHERE productName = "Super Rare Beans" 
    AND brand = "BeanStalk" AND weightVal = 24 AND weightUnit = "oz")
);

/* 
disable commits and foreign key checks at the beginning of your file 
and then turn them bak on at the end to minimize import errors
*/
SET FOREIGN_KEY_CHECKS=1;
COMMIT;