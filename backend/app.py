from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def blank_page():
    return "<p>Error: access denied</p>"

@app.route("/scream", methods=["POST"])
def scream():
    return "<p>You scream into the void</p>"

@app.route("/look", methods=["POST"])
def look():
    return "<p>When you gaze long into the abyss, the abyss gazes also into you.</p>"