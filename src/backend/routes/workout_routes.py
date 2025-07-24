from flask import Blueprint, jsonify

workout_bp = Blueprint('workout_bp', __name__)

@workout_bp.route("/workouts", methods=["GET"])
def get_workouts():
    return jsonify({"message": "Workout endpoint ready!"})

