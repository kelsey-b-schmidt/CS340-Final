from flask import Flask
from flask_cors import CORS, cross_origin


app = Flask(__name__, static_folder="cs340-summer-2022-group-36/build", static_url_path="/")
cors = CORS(app)

@app.route("/api", methods = ["GET"])
@cross_origin()
def index():
    return {"tutorial": "Flask React Heroku"}

@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")



if __name__ == "__main__":
    app.run()