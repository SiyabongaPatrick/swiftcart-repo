from config.database import get_connection
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from helpers.errors import connection_error

wishlist_bp = Blueprint("wishlist", __name__)

@wishlist_bp.route("/wishlist", methods=["GET"])
@jwt_required()
def get_wishlist():

    customer_id = int(get_jwt_identity())

    connection = get_connection()
    connection_error(connection)

    try:
        cursor = connection.cursor()
        query = """
            SELECT
                w.id,
                w.customer_id,
                w.product_id,
                p.product_id,
                p.product_name,
                p.price,
                p.image_url,
                p.store_id,
                p.category
            FROM wishlist w
            JOIN products p
                ON w.product_id = p.product_id
            WHERE w.customer_id = %s
        """

        cursor.execute(query, (customer_id,))
        wishlist = cursor.fetchall()

        wishlist_list = []

        for item in wishlist:
            wishlist_list.append({
                "id": item[0],
                "customer_id": item[1],
                "product_id": item[2],
                "product_name": item[4],
                "price": item[5],
                "image_url": item[6],
                "store_id": item[7],
                "category": item[8]
            })
        
        return jsonify(wishlist_list), 200
    
    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@wishlist_bp.route("/wishlist/add", methods=["POST"])
@jwt_required()
def add_to_wishlist():

    customer_id = int(get_jwt_identity())
    data = request.get_json()

    product_id = data.get("product_id")

    if not product_id:
        return jsonify({"error": "Missing required fields"}), 400

    connection = get_connection()
    connection_error(connection)

    try:
        cursor = connection.cursor()
        query = """
            INSERT INTO wishlist (customer_id, product_id)
            VALUES (%s, %s)
        """

        cursor.execute(query, (customer_id, product_id))
        connection.commit()

        return jsonify({"message": "Added to wishlist"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@wishlist_bp.route("/wishlist/remove", methods=["POST"])
@jwt_required()
def remove_from_cart():

    customer_id = int(get_jwt_identity())
    data = request.get_json()

    id = data.get("id")

    if not id:
        return jsonify({"error": "Missing required fields"}), 400
    
    connection = get_connection()
    connection_error(connection)

    try:
        cursor = connection.cursor()
        query = """
            DELETE FROM wishlist
            WHERE customer_id = %s
            AND id = %s
        """

        cursor.execute(query, (customer_id, id))
        connection.commit()

        return jsonify({"message": "Item removed"}), 200
    except Exception as e:
        
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()

