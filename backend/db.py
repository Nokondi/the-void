import sqlite3
from datetime import datetime

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
        ent = entered.strftime("%I:%M %p, %A, %d %B %Y")
        sql_stmt = """
            INSERT INTO scream (entered, content) VALUES (
                '{}', '{}'
            );
        """.format(ent, scream)
        try:
            self.cur.execute(sql_stmt)
            self.con.commit()
        except sqlite3.Error as error:
            print(error)

    def addScreamAudio(self, entered, scream):
        ent = entered.strftime("%I:%M %p, %A, %d %B %Y")
        sql_stmt = "INSERT INTO scream_audio (entered, content) VALUES (?, ?);"
        insert_data = (entered, scream)
        try:
            self.cur.execute(sql_stmt, insert_data)
            self.con.commit()
            print("audio successfully loaded to database")
        except sqlite3.Error as error:
            print(error)

    def gazeIntoVoid(self, search_term: str):
        sql_stmt = """
            SELECT * FROM scream WHERE content LIKE '%{}%'
        """.format(search_term)
        try:
            self.cur.execute(sql_stmt)
            results = self.cur.fetchall()
            return results
        except sqlite3.Error as error:
            print(error)
        return None