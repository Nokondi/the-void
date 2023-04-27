from flask import Flask, request
from datetime import datetime
from db import DataModel

app = Flask(__name__)

@app.route("/")
def blank_page():
    return "<p>Error: access denied</p>"

@app.route("/scream", methods=["POST"])
def scream():
    entered = datetime.now()
    scr = request.form['scream']
    d = DataModel()
    d.addScream(entered, scr)
    del(d)
    return "<p>You scream into the void</p>"

@app.route("/gaze", methods=["POST"])
def gaze():
    st = request.form['search_term']
    d = DataModel()
    result = d.gazeIntoVoid(st)
    return "<p>When you gaze long into the abyss, the abyss gazes also into you.</p>"