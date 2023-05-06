import sqlite3
from datetime import datetime
import zipfile
from os.path import exists
from os import remove

def init_db():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS scream (
            entered TEXT,
            content TEXT
        );
    """)
    cur.execute("""
        CREATE TABLE IF NOT EXISTS scream_audio (
            entered TEXT,
            content BLOB
        );
    """)

# TODO: DEBUG ONLY! REMOVE BEFORE DEPLOYMENT
def clear_db():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("""
        DROP TABLE IF EXISTS scream;
    """)
    cur.execute("""
        DROP TABLE IF EXISTS scream_audio;
    """)

class DataModel:

    def __init__(self):
        self.con = sqlite3.connect("data.db")
        self.cur = self.con.cursor()

    def __del__(self):
        self.con.close()

    def addScream(self, entered: datetime, scream: str):
        sql_stmt = "INSERT INTO scream (entered, content) VALUES (?, ?);"
        insert_data = (entered, scream)
        try:
            self.cur.execute(sql_stmt, insert_data)
            self.con.commit()
        except sqlite3.Error as error:
            print(error)

    def addScreamAudio(self, entered, scream):
        sql_stmt = "INSERT INTO scream_audio (entered, content) VALUES (?, ?);"
        insert_data = (entered, scream)
        try:
            self.cur.execute(sql_stmt, insert_data)
            self.con.commit()
            print("audio successfully loaded to database")
        except sqlite3.Error as error:
            print(error)

    def checkRows(self, table):
        sql_stmt = "SELECT COUNT(*) FROM {};".format(table)
        try:
            self.cur.execute(sql_stmt)
            results = self.cur.fetchone()[0]
        except sqlite3.Error as error:
            print(error)
            results = error
        return results

    def gazeIntoVoid(self, search_term: str):
        sql_stmt = """
            SELECT * FROM scream WHERE content LIKE '%?%'
        """
        try:
            self.cur.execute(sql_stmt, (search_term))
            results = self.cur.fetchall()
        except sqlite3.Error as error:
            results = error
        return results
    
    def gazeIntoVoidAudio(self, offset=0, limit=10):
        if exists('audio.zip'):
            remove('audio.zip')
        sql_stmt = "SELECT * FROM scream_audio LIMIT ?, ?"
        audio_zip = None
        try:
            self.cur.execute(sql_stmt, (limit, offset))
            results = self.cur.fetchall()
            audio_zip = zipfile.ZipFile('audio.zip', 'w', compression=zipfile.ZIP_STORED)
            for i, r in enumerate(results):
                date, time = r[0].split(' ')
                date = date.split('-')
                time = time.split('.')[0].split(':')
                file_info = zipfile.ZipInfo(filename='scream{}.webm'.format(i), 
                                            date_time=(int(date[0]), 
                                                    int(date[1]), 
                                                    int(date[2]), 
                                                    int(time[0]), 
                                                    int(time[1]), 
                                                    int(time[2])))
                audio_zip.writestr(file_info, r[1])
            audio_zip.close()
            return_value = 'audio.zip'
        except sqlite3.Error as error:
            return_value = error
            print(error)
        return return_value