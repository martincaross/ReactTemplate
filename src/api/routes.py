"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Reporte, Media, Comment, Favorite, Vote, Denuncia, Sancion, Eliminado
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    create_access_token, jwt_required,
    get_jwt_identity, get_jwt, current_user, get_current_user
)

from datetime import datetime

api = Blueprint('api', __name__)

app = Flask(__name__)
bcrypt = Bcrypt(app)

# Allow CORS requests to this API
CORS(api)
CORS(app)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/hello_protected', methods=['POST', 'GET'])
@jwt_required()
def handle_hello_protected():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    response_body=get_current_user()
    # profile_picture = response_body["database"]["profile_picture"]
    # print(f"Profile picture del usuario autenticado: {profile_picture}")
    return jsonify(response_body), 200


## ENDPOINTS 







# FIN ENDPOINTS 
