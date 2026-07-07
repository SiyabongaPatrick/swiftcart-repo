from flask import Blueprint, jsonify
from config.database import get_connection

stores_bp = Blueprint("stores", __name__)

@stores_bp.route("/stores", methods=["GET"])
def get_stores():
    connection = get_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed"}), 500
    
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM stores")

        stores = cursor.fetchall()

        stores_list = []

        for store in stores:
            stores_list.append({
                "id": store[0],
                "name": store[1],
                "image_url": store[2]
            })

        cursor.close()
        connection.close()

        return jsonify(stores_list), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@stores_bp.route("/stores/<int:store_id>", methods=["GET"])
def get_store(store_id):
    connection = get_connection()

    if connection is None:
        return jsonify({"error": "Database connection failed."}), 500
    
    try:
        cursor = connection.cursor()
        query = "SELECT * FROM stores WHERE store_id = %s"

        cursor.execute(query, (store_id,))
        store = cursor.fetchone()

        if store is None:
            return jsonify({"error": "Store not found."}), 404

        store_data = {
            "id": store[0],
            "name": store[1],
            "image_url": store[2]
        }

        cursor.close()
        connection.close()

        return jsonify(store_data), 200
    
    except Exception as e:
        return jsonify({"error": str(e)})