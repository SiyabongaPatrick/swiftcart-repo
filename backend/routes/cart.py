from flask import Blueprint, jsonify, request
from config.database import get_connection
from helpers.errors import connection_error

cart_bp = Blueprint("cart", __name__)

@cart_bp.route("/cart/add", methods=["POST"])
def add_cart():
    data = request.get_json()

    customer_id = data.get('customer_id')
    product_id = data.get('product_id')
    quantity = data.get('quantity')
    size = data.get('size')

    connection = get_connection()
    connection_error(connection)

    try:
        cursor = connection.cursor()
        query = "INSERT INTO cart(customer_id, product_id, quantity, size)" \
        " VALUES(%s, %s, %s, %s)"

        cursor.execute(query, (customer_id, product_id, quantity, size,))
        connection.commit()

        return jsonify({"message": "Item added to cart"}), 201
    
    except Exception as e:
        connection.rollback()
        return jsonify({"error": str(e)}), 400
    finally:
        cursor.close()
        connection.close()