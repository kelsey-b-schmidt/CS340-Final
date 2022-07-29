# referenced FLASK Starter App code from course modules
# referenced heroku setup code from this tutorial https://www.youtube.com/watch?v=h96KP3JMX7Q
# referenced 404 error handler from this post https://stackoverflow.com/questions/48060556/flask-serving-a-react-application-cannot-refresh-pages
# referenced code snippets from previous coursework in CS290 from both authors, Andy Chen and Kelsey Schmidt

from flask import Flask, send_from_directory, request
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import json
import decimal
import dml


app = Flask(__name__, static_folder="cs340-summer-2022-group-36/build", static_url_path="/")
cors = CORS(app)
app.config['MYSQL_HOST'] = 'cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'n1yj8shcuxjzwpjh'
app.config['MYSQL_PASSWORD'] = 'r5gkratzpgjyqh9r'
app.config['MYSQL_DB'] = 'utjfjcdn4jmf1grt'
app.config['MYSQL_CURSORCLASS'] = "DictCursor"
mysql = MySQL(app)

class json_encoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal): return str(obj)

# for testing, "proxy" in the package.json file should be "http://127.0.0.1:5000"
# this needs to be changed back to "https://cs340-summer-2022-group-36.herokuapp.com/" when finished for the live site!
# also, change app.run to (debug=True) at the bottom of this file, and change back to app.run() when finished.
# this allows live updating for React and Flask both in your browser

# ------------------------------don't touch above here!-----------------------------------------



# ----------------------------------- Customers -------------------------------------
@app.route("/api/Customers", methods = ["GET", "POST"])
@cross_origin()
def customers():
    if request.method == "GET":
            # Query to return all Customers
            cur = mysql.connection.cursor()
            cur.execute(dml.selectAllCustomers)
            mysql.connection.commit()
            return json.dumps(cur.fetchall(), cls=json_encoder)

    elif request.method == "POST":
    # insert other code later for C, U, D functions
        return {"request_received": "error"}

    
    # Query for inserting Customers
    # if request.method == "POST":
        # if request.form.get('Add New Customer'):
        
        # customerName = request.form[]
        # email = request.form[]
        # phoneNumber = request.form[]


    # Query to grab Customers ID and name for dropdown selection
    #cur = mysql.connection.cursor()
    #cur.execute(dml.selectCustomersKeys)
    #customerIDs = json.dumps(cur.fetchall())

    # Query for Customers search function
    #cur = mysql.connection.cursor()
    #cur.execute(dml.customersSearchFunction)
    #customerSearch = json.dumps(cur.fetchall())

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

# ----------------------------------- Products -------------------------------------
@app.route("/api/Products", methods = ["GET", "POST"])
@cross_origin()
def products():
    if request.method == "GET":
        # Query to return all Products
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM Products;')
        mysql.connection.commit()
        return json.dumps(cur.fetchall(), cls=json_encoder)

    elif request.method == "POST":
        query = request.json
        print(query)
        if request.json["action"] == "Add":
            table = "PRODUCTS"
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            insert_stmt = (
              "INSERT INTO Products (productName, description, brand, weightVal, weightUnit, sellPrice, replenishCost, numberInStock) "
              "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
            )
            data = tuple(new_list)
            cur.execute(insert_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Update":
            table = "PRODUCTS"
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            update_stmt = (
              "UPDATE Products SET productName = %s, description = %s, brand = %s, "
              "weightVal = %s, weightUnit = %s, sellPrice = %s, replenishCost = %s, numberInStock = %s"
              "WHERE productID = %s"
            )
            data = tuple(new_list)
            cur.execute(insert_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}


        elif request.json["action"] == "Delete":
             table = "PRODUCTS"
             cur = mysql.connection.cursor()
             delete_stmt = (
               "DELETE FROM Products WHERE productID = %s"
             )
             data = (request.json["productID"],)
             cur.execute(delete_stmt, data)
             mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
             return {"request_received": "success"}

        return {"request_received": "error"}


    # # Query for Products search functionality
    # cur = mysql.connection.cursor()
    # cur.execute(dml.productsSearchFunction)
    # productSearch = json.dumps(cur.fetchall())

    # # Query for inserting Products


    # if request.method == "POST":

    #     if request.form.get("Add New Product"):

    #         productName = request.form[]
    #         productDescription = request.form[]
    #         productBrand = request.form[]
    #         weightVal = request.form[]
    #         weightValUnit = request.form[]
    #         sellPrice = request.form[]
    #         replenishCost = request.form[]
    #         numberInStock = request.form[]

# Products Update
# @app.route("/ProductsUpdate", methods = ["POST", "GET"])
# @cross_origin()
# def productsUpdate():

#     # Query to update Products
#     cur = mysql.connection.cursor()
#     cur.execute(dml.updateProducts)
#     productUpdate = json.dumps(cur.fetchall())
#     return productUpdate

# Products Delete
# @app.route("/ProductsDelete")
# @cross_origin()
# def productsDelete():

    # # Query to delete Products
    # cur = mysql.connection.cursor()
    # cur.execute(dml.deleteProducts)
    # mysql.connection.commit()


# ----------------------------------- Addresses -------------------------------------

@app.route("/api/Addresses", methods = ["GET", "POST"])
@cross_origin()
def addresses():
    if request.method == "GET":
        # Query to return all Addresses
        cur = mysql.connection.cursor()
        cur.execute(dml.selectAllAddresses)
        mysql.connection.commit()
        return json.dumps(cur.fetchall(), cls=json_encoder)

    elif request.method == "POST":
    # insert other code later for C, U, D functions
        return {"request_received": "error"}

#     # Query to grab all Addresses
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectAllAddresses)
#     results = json.dumps(cur.fetchall())
    
#     # Query for Addresses search functionality
#     cur = mysql.connection.cursor()
#     cur.execute(dml.addressesSearchFunction)
#     addressSearch = json.dumps(cur.fetchall())
    
#     # Query for inserting Addresses
#     if request.method == "POST":

#         if request.form.get("Add New Address"):

#             customerID = request.form[]
#             recipient = request.form[]
#             street = request.form[]
#             city = request.form[]
#             state = request.form[]
#             zip = request.form[]
#             isActive = request.form[]
#             isPrimary = request.form[]

# # Addresses Update
# @app.route("/AddressesUpdate", methods = ["POST", "GET"])
# @cross_origin()
# def addressUpdate():

#     # Query to update Addresses
#     cur = mysql.connection.cursor()
#     cur.execute(dml.updateAddresses)
#     addressUpdate = json.dumps(cur.fetchall())


# ----------------------------------- Orders -------------------------------------
@app.route("/api/Orders", methods = ["GET", "POST"])
@cross_origin()
def orders():
    if request.method == "GET":
        # Query to return all Orders
        cur = mysql.connection.cursor()
        cur.execute(dml.selectAllOrders)
        mysql.connection.commit()
        return json.dumps(cur.fetchall(), cls=json_encoder)

    elif request.method == "POST":
    # insert other code later for C, U, D functions
        return {"request_received": "error"}

#     # Query to grab all Orders
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectAllOrders)
#     results = json.dumps(cur.fetchall())
    
#     # Query for Orders search functionality
#     cur = mysql.connection.cursor()
#     cur.execute(dml.ordersSearchFunction)
#     orderSearch = json.dumps(cur.fetchall())
    
#     # Query for inserting Orders
#     if request.method == "POST":

#         if request.form.get("Add Order"):

#             addressID = request.form[]
#             customerID = request.form[]
#             shipDateTime = request.form[]

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

# ----------------------------------- OrderDetails -------------------------------------


# # OrderDetails Route
# @app.route("/OrderDetails", methods = ["POST", "GET"])
# @cross_origin()
# def index():

#     # Query to grab all OrderDetails
#     cur = mysql.connection.cursor()
#     cur.execute(dml.selectAllOrderDetails)
#     results = json.dumps(cur.fetchall())
    
#     # Query for inserting OrderDetails

#     # if request.method == "POST":

#         if request.form.get("Add Order Detail"):

#             orderID = request.form[]
#             productID = request.form[]
#             productQuantity = request.form[]
#             unitPrice = request.form[]



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











# ------------------------------don't touch below here!-----------------------------------------

# serve index.html for React rendering
@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


# catch 404 errors, allows us to refresh any page and have it rendered
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug=True)
