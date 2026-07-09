from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from config.database import get_connection
from helpers.errors import connection_error

cart_bp = Blueprint("cart", __name__)

@cart_bp.route("/cart", methods=["GET"])
@jwt_required()
def get_cart():
    print(get_jwt())
    print("IDENTITY:", get_jwt_identity())

    #customer_id = get_jwt_identity()
    customer_id = int(get_jwt_identity())

    connection = get_connection()
    connection_error(connection)

    try:
        cursor = connection.cursor()
        query = """
            SELECT
                c.id,
                c.customer_id,
                c.product_id,
                c.quantity,
                c.size,
                p.product_id,
                p.product_name,
                p.price,
                p.image_url,
                p.store_id,
                p.category
            FROM cart c
            JOIN products p
                ON c.product_id = p.product_id
            WHERE c.customer_id = %s
        """

        cursor.execute(query, (customer_id,))

        cart = cursor.fetchall()
        cart_list = []

        for item in cart:
            cart_list.append({
                "id": item[0],
                "customer_id": item[1],
                "product_id": item[2],
                "quantity": item[3],
                "size": item[4],
                "product_name": item[6],
                "price": item[7],
                "image_url": item[8],
                "store_id": item[9],
                "category": item[10],
            })
        return jsonify(cart_list), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()



@cart_bp.route("/cart/add", methods=["POST"])
@jwt_required()
def add_cart():
    customer_id = int(get_jwt_identity())
    data = request.get_json()

    product_id = data.get("product_id")
    quantity = data.get("quantity")
    size = data.get("size")

    if not product_id or not quantity or not size:
        return jsonify({"error": "Missing required fields"}), 400

    connection = get_connection()
    connection_error(connection)

    cursor = connection.cursor()

    try:
        # Check if the product already exists in the customer's cart
        check_query = """
            SELECT id, quantity
            FROM cart
            WHERE customer_id = %s
            AND product_id = %s
            AND size = %s
        """

        cursor.execute(check_query, (customer_id, product_id, size))
        existing_item = cursor.fetchone()

        if existing_item:
            update_query = """
                UPDATE cart
                SET quantity = quantity + %s
                WHERE id = %s
            """

            cursor.execute(update_query, (quantity, existing_item[0]))
            message = "Cart updated successfully"

        else:
            insert_query = """
                INSERT INTO cart (customer_id, product_id, quantity, size)
                VALUES (%s, %s, %s, %s)
            """

            cursor.execute(
                insert_query,
                (customer_id, product_id, quantity, size),
            )

            message = "Item added to cart"

        connection.commit()

        return jsonify({"message": message}), 200

    except Exception as e:
        print("CRASH ERROR:", str(e))
        connection.rollback()
        return jsonify({"error": str(e)}), 400

    finally:
        cursor.close()
        connection.close()

@cart_bp.route("/cart/increase", methods=["POST"])
@jwt_required()
def quantity_increase():

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
            UPDATE cart
            SET quantity = quantity + 1
            WHERE customer_id = %s AND product_id = %s;
        """

        cursor.execute(query, (customer_id, product_id,))
        connection.commit()

        return jsonify({"message": "Quantity updated successful"}), 200
    
    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@cart_bp.route("/cart/decrease", methods=["POST"])
@jwt_required()
def quantity_decrease():

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
            UPDATE cart
            SET quantity = quantity - 1
            WHERE customer_id = %s AND product_id = %s;
        """

        cursor.execute(query, (customer_id, product_id))
        connection.commit()

        return jsonify({"message": "Quantity updated successful"}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@cart_bp.route("/cart/remove", methods=["POST"])
@jwt_required()
def remove_quantity():

    customer_id = int(get_jwt_identity())

    data = request.get_json()
    id = data.get("id")

    connection = get_connection()
    connection_error(connection)

    if not id:
        return jsonify({"error": "Missing required fields"}), 400

    try:
        cursor = connection.cursor()
        query = """
            DELETE FROM cart
            WHERE id = %s AND customer_id = %s
        """

        cursor.execute(query, (id, customer_id))
        connection.commit()

        return jsonify({"message": "Quantity removed successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()


