# app.py
from flask import Flask, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class MathChallenge(Resource):
    def post(self):
        """Receive a math challenge in natural language and return the solution."""
        challenge = request.form['challenge']
        # Use a math parsing library to interpret the challenge and solve it
        solution = solve_math_challenge(challenge)
        return {'solution': solution}

api.add_resource(MathChallenge, '/math-challenge')
