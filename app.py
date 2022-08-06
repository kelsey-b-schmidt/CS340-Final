# referenced FLASK Starter App code from course modules
# referenced heroku setup code from this tutorial https://www.youtube.com/watch?v=h96KP3JMX7Q
# referenced 404 error handler from this post https://stackoverflow.com/questions/48060556/flask-serving-a-react-application-cannot-refresh-pages
# referenced code snippets from previous coursework in CS290 from both authors, Andy Chen and Kelsey Schmidt
# referenced w3schools for SQL LIKE operators https://www.w3schools.com/sql/sql_like.asp

from flask import Flask, send_from_directory, request
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
import json
import decimal
import datetime
import dml


app = Flask(__name__, static_folder="cs340-summer-2022-group-36/build",
            static_url_path="/")
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
        elif isinstance(obj, datetime.datetime): return str(obj)

# for testing, "proxy" in the package.json file should be "http://127.0.0.1:5000"
# this needs to be changed back to "https://cs340-summer-2022-group-36.herokuapp.com/" when finished for the live site!
# also, change app.run to (debug=True) at the bottom of this file, and change back to app.run() when finished.
# this allows live updating for React and Flask both in your browser

# ------------------------------don't touch above here!-----------------------------------------


# ----------------------------------- Customers -------------------------------------
@app.route("/api/Customers", methods=["GET", "POST"])
@cross_origin()
def customers():
    if request.method == "GET":
            # Query to return all Customers
            cur = mysql.connection.cursor()
            cur.execute(dml.selectAllCustomers)
            mysql.connection.commit()
            return json.dumps(cur.fetchall(), cls=json_encoder)

    elif request.method == "POST":
        query = request.json
        print(query)
        if request.json["action"] == "Add":
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            insert_stmt = (
              "INSERT INTO Customers (customerName, email, phoneNumber) "
              "VALUES (%s, %s, %s)"
            )
            data = tuple(new_list)
            cur.execute(insert_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Update":
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            update_stmt = (
                "UPDATE Customers SET customerName = %s, email = %s, phoneNumber = %s"
                "WHERE customerID = %s"
            )
            data = tuple(new_list)
            cur.execute(update_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}


        elif request.json["action"] == "Delete":
            cur = mysql.connection.cursor()
            delete_stmt = (
            "DELETE FROM Customers WHERE customerID = %s"
            )
            data = (request.json["customerID"],)
            cur.execute(delete_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        return {"request_received": "error"}

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
            query = request.json
            print(query)
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            update_stmt = (
              "UPDATE Products SET productName = %s, description = %s, brand = %s, weightVal = %s, weightUnit = %s, sellPrice = %s, replenishCost = %s, numberInStock = %s "
              "WHERE productID = %s"
            )
            data = tuple(new_list)
            cur.execute(update_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}


        elif request.json["action"] == "Delete":
            query = request.json
            print(query)
            cur = mysql.connection.cursor()
            delete_stmt = (
            "DELETE FROM Products WHERE productID = %s"
            )
            data = (request.json["productID"],)
            cur.execute(delete_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Searchbar":
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    search_term_list = request.json[item].split()
                    for i in range(9):
                        for item in search_term_list:
                            new_list.append("%"+item+"%")
            print("new_list", new_list)
            cur = mysql.connection.cursor()

            search_stmt = (
                "SELECT * FROM Products WHERE productID LIKE %s"
            )

            for i in range((len(new_list)//9)-1):
                search_stmt = search_stmt + " OR productID LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR productName LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR description LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR brand LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR weightVal LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR weightUnit LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR sellPrice LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR replenishCost LIKE %s"
            for i in range((len(new_list)//9)):
                search_stmt = search_stmt + " OR numberInStock LIKE %s"

            print("search_stmt",search_stmt)
            data = tuple(new_list)
            print("data",data)
            cur.execute(search_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return json.dumps(cur.fetchall(), cls=json_encoder)

        return {"request_received": "error"}


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
        query = request.json
        print(query)
        if request.json['action'] == 'Add':
            new_list = list()
            for item in request.json:
                if item == 'action':
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            insert_stmt = (
              "INSERT INTO Addresses (customerID, recipient, street, city, state, zip, isActive, isPrimary) "
              "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
            )
            data = tuple(new_list)
            cur.execute(insert_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Update":
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            update_stmt = (
              "UPDATE Addresses SET recipient = %s, street = %s, city = %s, state = %s, zip = %s, isActive = %s, isPrimary = %s "
              "WHERE addressID = %s"
            )
            data = tuple(new_list)
            cur.execute(update_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Delete":
            cur = mysql.connection.cursor()
            delete_stmt = (
            "DELETE FROM Addresses WHERE addressID = %s"
            )
            data = (request.json["addressID"],)
            cur.execute(delete_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Search":
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            search_stmt = (
                "SELECT * FROM Addresses WHERE customerID = %s"
            )
            data = tuple(new_list)
            cur.execute(search_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return json.dumps(cur.fetchall(), cls=json_encoder)

        return {"request_received": "error"}


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
        query = request.json
        print(query)
        if request.json["action"] == "Add":
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            insert_stmt = (
                "INSERT INTO Orders (addressID, customerID, shipDateTime) "
                "VALUES (%s, %s, %s)"
            )
            data = tuple(new_list)
            cur.execute(insert_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Update":
            query = request.json
            print(query)
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            update_stmt = (
              "UPDATE Orders SET addressID = %s, shipDateTime = %s "
              "WHERE orderID = %s;"
            )
            data = tuple(new_list)
            print("data", data)
            cur.execute(update_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Delete":
                cur = mysql.connection.cursor()
                delete_stmt = (
                "DELETE FROM Orders WHERE orderID = %s;"
                )
                data = (request.json["orderID"],)
                cur.execute(delete_stmt, data)
                mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
                return {"request_received": "success"}
            
        return {"request_received": "error"}


# ----------------------------------- OrderDetails -------------------------------------


# OrderDetails Route
@app.route("/api/OrderDetails", methods = ["POST", "GET"])
@cross_origin()
def orderDetails():

    if request.method == "GET":
        # Query to grab all OrderDetails
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM OrderDetails;')
        mysql.connection.commit()
        return json.dumps(cur.fetchall(), cls=json_encoder)

    elif request.method == "POST":
        query = request.json
        print(query)
        if request.json["action"] == "Add":
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            insert_stmt = (
              "INSERT INTO OrderDetails (orderID, productID, productQuantity, unitPrice) "
              "VALUES (%s, %s, %s, %s)"
            )
            data = tuple(new_list)
            cur.execute(insert_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}

        elif request.json["action"] == "Update":
            query = request.json
            print(query)
            new_list = list()
            for item in request.json:
                if item == "action":
                    pass
                else:
                    new_list.append(request.json[item])
            cur = mysql.connection.cursor()

            update_stmt = (
              "UPDATE OrderDetails SET productQuantity = %s, unitPrice = %s "
              "WHERE orderID = %s;"
            )
            data = tuple(new_list)
            print("data", data)
            cur.execute(update_stmt, data)
            mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
            return {"request_received": "success"}


        elif request.json["action"] == "Delete":
             cur = mysql.connection.cursor()
             delete_stmt = (
               "DELETE FROM OrderDetails WHERE odID = %s"
             )
             data = (request.json["odID"],)
             cur.execute(delete_stmt, data)
             mysql.connection.commit() # this line is absolutely essential, do not delete!!!!
             return {"request_received": "success"}

        return {"request_received": "error"}



# ------------------------------don't touch below here!-----------------------------------------

# serve index.html for React rendering
@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


# catch 404 errors, allows us to refresh any main page and have it rendered
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run()

# debug=True
