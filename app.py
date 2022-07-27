from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import json
import dml

app = Flask(__name__, static_folder="cs340-summer-2022-group-36/build", static_url_path="/")
cors = CORS(app)

app.config['MYSQL_HOST'] = 'cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'n1yj8shcuxjzwpjh'
app.config['MYSQL_PASSWORD'] = 'r5gkratzpgjyqh9r'
app.config['MYSQL_DB'] = 'utjfjcdn4jmf1grt'
app.config['MYSQL_CURSORCLASS'] = "DictCursor"

mysql = MySQL(app)

# Customers table
@app.route("/api/Customers", methods = ["GET"])
@cross_origin()
def index():
    # Query to return all Customers
    cur = mysql.connection.cursor()
    cur.execute(dml.selectAllCustomers)
    results = json.dumps(cur.fetchall())
    
    # Query to grab Customers ID and name for dropdown selection
    #cur = mysql.connection.cursor()
    #cur.execute(dml.selectCustomersKeys)
    #customerIDs = json.dumps(cur.fetchall())

    # Query for Customers search function
    #cur = mysql.connection.cursor()
    #cur.execute(dml.customersSearchFunction)
    #customerSearch = json.dumps(cur.fetchall())

    # Query for inserting Customers
    return results

# Customers Update
# @app.route("/CustomersUpdate", methods = ["POST", "GET"])
# @cross_origin()
# def updateCustomers():

#     # Query to update Customers
#     cur = mysql.connection.cursor()
#     cur.execute(dml.updateCustomers)
#     customerUpdate = json.dumps(cur.fetchall())

#     # Query to grab Customers ID and name for dropdown selection
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectCustomersKeys)
#     customerIDs = json.dumps(cur.fetchall())


# # Addresses Route
# @app.route("/Addresses", methods = ["POST", "GET"])
# @cross_origin()
# def index():

#     # Query to grab all Addresses
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectAllAddresses)
#     results = json.dumps(cur.fetchall())
    
#     # Query for Addresses search functionality
#     cur = mysql.connection.cursor()
#     cur.execute(dml.addressesSearchFunction)
#     addressSearch = json.dumps(cur.fetchall())
    
#     # Query for inserting Addresses

# # Addresses Update
# @app.route("/AddressesUpdate", methods = ["POST", "GET"])
# @cross_origin()
# def addressUpdate():

#     # Query to update Addresses
#     cur = mysql.connection.cursor()
#     cur.execute(dml.updateAddresses)
#     addressUpdate = json.dumps(cur.fetchall())

# Orders Route
# @app.route("/Orders", methods = ["POST", "GET"])
# @cross_origin()
# def index():

#     # Query to grab all Orders
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectAllOrders)
#     results = json.dumps(cur.fetchall())
    
#     # Query for Orders search functionality
#     cur = mysql.connection.cursor()
#     cur.execute(dml.ordersSearchFunction)
#     orderSearch = json.dumps(cur.fetchall())
    
#     # Query for inserting Orders

#     # Query for creating order invoices

#     # Query for updating shipdatetime

# # Orders Update
# @app.route("/OrderUpdate", methods = ["POST", "GET"])
# @cross_origin()
# def orderUpdate():

#     # Query to update Orders
#     cur = mysql.connection.cursor()
#     cur.execute(dml.updateOrders)
#     orderUpdate = json.dumps(cur.fetchall())


# # OrderDetails Route
# @app.route("/OrderDetails", methods = ["POST", "GET"])
# @cross_origin()
# def index():

#     # Query to grab all OrderDetails
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectAllOrderDetails)
#     results = json.dumps(cur.fetchall())
    
#     # Query for inserting OrderDetails

# OrderDetails Update
# @app.route("/OrderDetailsUpdate", methods = ["POST", "GET"])
# @cross_origin()
# def orderDetailsUpdate():

#     # Query to update OrderDetails
#     cur = mysql.connection.cursor()
#     cur.execute(dml.updateOrderDetails)
#     orderDetailUpdate = json.dumps(cur.fetchall())

# OrderDetails Delete
# @app.route("/OrderDetailsDelete")
# @cross_origin()
# def orderDetailsDelete():

    # # Query to delete OrderDetails
    # cur = mysql.connection.cursor()
    # cur.execute(dml.deleteFromOrderDetails)
    # mysql.connection.commit()

# Products Route
# @app.route("/Products", methods = ["POST", "GET"])
# @cross_origin()
# def index():

#     # Query to grab all Products
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectAllProducts)
#     results = json.dumps(cur.fetchall())
    
#     # Query for Products search functionality
#     cur = mysql.connection.cursor()
#     cur.execute(dml.productsSearchFunction)
#     productSearch = json.dumps(cur.fetchall())
    
#     # Query for inserting Products

# Products Update
# @app.route("/ProductsUpdate", methods = ["POST", "GET"])
# @cross_origin()
# def productsUpdate():

    # # Query to update Products
    # cur = mysql.connection.cursor()
    # cur.execute(dml.updateProducts)
    # productUpdate = json.dumps(cur.fetchall())











@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True)
