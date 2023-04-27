import sqlite3
from datetime import datetime

# TODO: DEBUG ONLY! REMOVE BEFORE DEPLOYMENT
def init_db():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("""
        CREATE TABLE scream (
            entered,
            content
        )
    """)

# TODO: DEBUG ONLY! REMOVE BEFORE DEPLOYMENT
def clear_db():
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute("""
        DROP TABLE scream
    """)

class DataModel:

    def __init__(self):
        self.con = sqlite3.connect("data.db")
        self.cur = self.con.cursor()

    def __del__(self):
        self.con.close()

    def addScream(self, entered: datetime, scream: str):
        ent = entered.strftime("%I:%M %p, %A, %d %B, %Y")
        sql_stmt = """
            INSERT INTO scream (entered, content) VALUES (
                '{}', '{}'
            );
        """.format(ent, scream)
        print(sql_stmt)
        try:
            self.cur.execute(sql_stmt)
            self.con.commit()
        # TODO: UPDATE EXCEPTION HERE
        except:
            print("Error")

    def gazeIntoVoid(self, search_term: str):
        sql_stmt = """
            SELECT * FROM scream WHERE content LIKE '%{}%'
        """.format(search_term)
        try:
            self.cur.execute(sql_stmt)
            results = self.cur.fetchall()
            return results
        # TODO: UPDATE EXCEPTION HERE
        except:
            print("Error")
        return None
    
