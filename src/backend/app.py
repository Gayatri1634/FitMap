from flask import Flask, request, jsonify
from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Route for home (optional)
@app.route("/")
def home():
    return "FitMap Flask Backend is running!"

# Route to get exercise plan
@app.route("/get-plan", methods=["GET"])
def get_plan():
    try:
        # Load JSON from data folder
        file_path = os.path.join(os.path.dirname(__file__), 'data', 'exercises_json.json')
        with open(file_path, 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)


