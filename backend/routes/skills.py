from flask import Blueprint, jsonify
from models import Skill

skills_bp = Blueprint("skills", __name__)

@skills_bp.route("/", methods=["GET"])
def get_skills():
    data = {}
    for s in Skill.query.all():
        data.setdefault(s.category, []).append(s.name)
    return jsonify(data)
