from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL


app = Flask(__name__, static_folder="cs340-summer-2022-group-36/build", static_url_path="/")
cors = CORS(app)

app.config['MYSQL_HOST'] = 'cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'n1yj8shcuxjzwpjh'
app.config['MYSQL_PASSWORD'] = 'r5gkratzpgjyqh9r'
app.config['MYSQL_DB'] = 'utjfjcdn4jmf1grt'
app.config['MYSQL_CURSORCLASS'] = "DictCursor"

mysql = MySQL(app)


@app.route("/api", methods = ["GET"])
@cross_origin()
def index():
    query4 = 'SELECT * FROM Orders;'
    cur = mysql.connection.cursor()
    cur.execute(query4)
    results = cur.fetchall()

    return results[1]

@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")



if __name__ == "__main__":
    app.run(debug=True)
