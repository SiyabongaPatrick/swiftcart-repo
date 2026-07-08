from config.database import get_connection
from flask import Blueprint, jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash
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

    if connection is None:
        return jsonify({"error": "Database connection failed."}), 500
    
    password_hash = generate_password_hash(password)

    try:
        cursor = connection.cursor()
        query = "INSERT INTO customers" \
        "(full_name, email, password)" \
        "VALUES (%s, %s, %s)"

        cursor.execute(query, (name, email, password_hash))

        connection.commit()

        return jsonify({"message": "User registered successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500 
    
    finally:
        if 'cursor' in locals() and cursor:
            cursor.close()
        if connection and connection.is_connected:
            connection.close()