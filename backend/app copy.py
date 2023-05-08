from flask import Flask, request, jsonify, make_response, send_file
from datetime import datetime
from db import DataModel
from flask_cors import CORS
from flask_socketio import SocketIO
from zipfile import is_zipfile
from markupsafe import escape

app = Flask(__name__)

app.secret_key = "15cr3@my0u5cr3@mw3@115cr3@mf0r1c3cr3@m"

socketio = SocketIO(app)
cors = CORS(app)


@socketio.event
def scream():
    scr = escape(request.json['scream'])
    d = DataModel()
    d.addScream(datetime.now(), scr)
    del(d)
    response = make_response(jsonify({"content": "Your scream echoes in the void."}), 200)
    return response

@app.route("/gaze", methods=["POST"])
def gaze():
    st = escape(request.json['gaze'])
    d = DataModel()
    result = d.gazeIntoVoid(st)
    del(d)
    response = make_response(jsonify(result), 200)
    return response

@app.route("/rows", methods=["POST"])
def returnRows():
    t = escape(request.json['table'])
    d = DataModel()
    result = d.checkRows(t)
    del(d)
    response = make_response(jsonify(result), 200)
    return response

@app.route("/screamAudio", methods=["POST"])
def screamAudio():
    sound = request.get_data()
    d = DataModel()
    d.addScreamAudio(datetime.now(), sound)
    del(d)
    response = make_response(jsonify({"content": "Your scream echoes in the void."}), 200)
    return response

@app.route("/gazeAudio", methods=["POST"])
def gazeAudio():
    offset = request.json['offset']
    limit = request.json['limit']
    d = DataModel()
    result = d.gazeIntoVoidAudio(offset, limit)
    del(d)
    audio_file = result[0]
    if is_zipfile(result):
        audio_file = send_file('audio.zip',
                                mimetype='zip',
                                as_attachment=True)
    return audio_file