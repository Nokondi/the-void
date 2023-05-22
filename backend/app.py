from flask import Flask
from datetime import datetime
from db import DataModel
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from markupsafe import escape

app = Flask(__name__)

cors = CORS(app, resources={r"/*":{"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*", engineio_logger=True, logger=True)

@socketio.event
def scream(scream_text):
    print(scream_text)
    d = DataModel()
    d.addScream(datetime.now(), escape(scream_text))
    del(d)
    emit('scream', {'data': 'Your scream echoes in the void.'})

@socketio.event
def gaze(gaze_text):
    print(gaze_text)
    d = DataModel()
    result = d.gazeIntoVoid(escape(gaze_text))
    print(result)
    del(d)
    emit('gaze', result)

@socketio.event
def rows(table):
    d = DataModel()
    result = d.checkRows(escape(table))
    del(d)
    emit('rows', result)

@socketio.event
def screamAudio(sound):
    print('scream received')
    d = DataModel()
    d.addScreamAudio(datetime.now(), sound)
    del(d)
    emit('screamAudio', {'data': 'Your scream echoes in the void.'})

@socketio.event
def gazeAudio(offset, limit):
    print(offset, limit)
    d = DataModel()
    results = d.gazeIntoVoidAudio(offset, limit)
    del(d)
    for r in results:
        emit('gazeAudio', {'date': r[0], 'file': r[1]})

if __name__ == '__main__':
    socketio.run(app)