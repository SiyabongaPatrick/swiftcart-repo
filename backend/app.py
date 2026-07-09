from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes.stores import stores_bp
from routes.products import products_bp
from routes.customers import customers_bp

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "hfgsdhg3467sdhg7efhgvshd"

jwt = JWTManager(app)
CORS(app)

blueprint = [stores_bp, products_bp, customers_bp]

for bp in blueprint:
    app.register_blueprint(bp)

@app.route("/")
def home():
    return "SwiftCart API Running"

if __name__ == "__main__":
    app.run(host="0.0.0.0", 
            port=5000, debug=True)