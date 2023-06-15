import openai
import json
from flask import request
from flask_restful import Resource

from settings import CHAT_GPT_API_KEY


class MathChallenge(Resource):
    def post(self):
        """Receive a math challenge and return the solution from ChatGPT."""
        challenge = request.get_json()['challenge']
        openai.api_key = CHAT_GPT_API_KEY
        chat_completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": challenge}]
        )
        response = json.loads(str(chat_completion))
        
        # Return answer from endpoint
        return {'problem': response['choices'][0]['message']['content']}
