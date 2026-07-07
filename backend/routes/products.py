from config.database import get_connection
from flask import Blueprint, jsonify

products_bp = Blueprint("products", __name__)

@products_bp.route("/products", methods=["GET"])
def get_products():
    connection = get_connection()
    if connection is None:
        return jsonify({"error": "Database connection failed."}), 500

    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM products")

        products = cursor.fetchall()

        products_list = []

        for product in products:
            products_list.append({
                "id": product[0],
                "name": product[1],
                "price": product[2],
                "image_url": product[3],
                "store_id": product[4]
            })

        cursor.close()
        connection.close()

        return jsonify(products_list), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@products_bp.route("/products/<int:product_id>", methods=["GET"])
def get_product(product_id):
    connection = get_connection()

    if connection is None:
        return jsonify({"error": "Database connection failed."}), 500
    
    try:
        cursor = connection.cursor()

        query = "SELECT * FROM products WHERE product_id = %s"

        cursor.execute(query, (product_id,))

        product = cursor.fetchone()
        
        if product is None:
            return jsonify({"error": "Product not found"}), 404
        
        product_data = {
            "id": product[0],
            "name": product[1],
            "price": product[2],
            "image_url": product[3],
            "store_id": product[4]
        }
        
        cursor.close()
        connection.close()

        return jsonify(product_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500