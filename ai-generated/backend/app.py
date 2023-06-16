# app.py
from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS

from .endpoints.math_challenge import MathChallenge

app = Flask(__name__)
api = Api(app)
CORS(app, origins='*')

post_endpoints = [MathChallenge]

for endpoint in post_endpoints:
    api.add_resource(endpoint, f'/{endpoint.__name__.lower()}', methods=['POST'])
