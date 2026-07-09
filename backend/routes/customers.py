from config.database import get_connection
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from helpers.errors import connection_error

customers_bp = Blueprint("customers", __name__)

@customers_bp.route("/register", methods=["POST"])
def sign_up():

    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"error": "Missing required fields"}), 400
    
    connection = get_connection()
    connection_error(connection)
    
    password_hash = generate_password_hash(password)

    try:
        cursor = connection.cursor()
        query = "INSERT INTO customers" \
        "(full_name, email, password)" \
        " VALUES (%s, %s, %s)"

        cursor.execute(query, (name, email, password_hash))

        connection.commit()

        return jsonify({"message": "User registered successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500 
    
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if connection:
            connection.close()

@customers_bp.route("/login", methods=["POST"])
def sign_in():
    data = request.json

    email = data.get("email")
    password = data.get("password")

    connection = get_connection()
    connection_error(connection)

    try:
        cursor = connection.cursor()
        query = "SELECT customer_id, full_name, email, password" \
        " FROM customers WHERE email = %s"

        cursor.execute(query, (email,))

        customer = cursor.fetchone()

        if customer is None:
            return jsonify({"error": "Invalid email or password"}), 401

        stored_password_hash = customer[3]

        if not check_password_hash(stored_password_hash, password):
            return jsonify({"error": "Invalid email or password"}), 401
        
        access_token = create_access_token(identity=customer[0])

        return jsonify({"message": "Login successful",
                        "access_token": access_token,
                        "user": {
                            "customer_id": customer[0],
                            "name": customer[1],
                            "email": customer[2]
                        }}), 200
    
        

    except Exception as e:
        return jsonify({"error": str(e)})
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if connection:
            connection.close()