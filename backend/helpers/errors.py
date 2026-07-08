from flask import jsonify

def connection_error(connection):
    if connection is None:
        return jsonify({"error": "Datavase connection failed."}), 500