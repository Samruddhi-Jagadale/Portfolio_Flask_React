from flask import Blueprint, jsonify
from models import Project

projects_bp = Blueprint("projects", __name__)

@projects_bp.route("/", methods=["GET"])
def get_projects():
    return jsonify([
        {
            "title": p.title,
            "description": p.description,
            "tech_stack": p.tech_stack,
            "github": p.github
        } for p in Project.query.all()
    ])
