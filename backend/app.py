from flask import Flask, request, jsonify, make_response
from datetime import datetime
from db import DataModel
from flask_cors import CORS, cross_origin

app = Flask(__name__)

app.secret_key = "15cr3@my0u5cr3@mw3@115cr3@mf0r1c3cr3@m"

cors = CORS(app)

@app.route("/")
def blank_page():
    return "<p>Error: access denied</p>"

@app.route("/scream", methods=["POST"])
def scream():
    entered = datetime.now()
    scr = request.json['scream']
    d = DataModel()
    d.addScream(entered, scr)
    del(d)
    response = make_response(jsonify({"content": "Your scream echoes in the void."}), 200)
    return response

@app.route("/gaze", methods=["POST"])
def gaze():
    print(request)
    st = request.json['gaze']
    d = DataModel()
    result = d.gazeIntoVoid(st)
    del(d)
    response = make_response(jsonify(result), 200)
    return response