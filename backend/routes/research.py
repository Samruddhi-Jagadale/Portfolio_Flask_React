from flask import Blueprint, jsonify
from models import Research

research_bp = Blueprint("research", __name__)

@research_bp.route("/", methods=["GET"])
def get_research():
    return jsonify([
        {
            "title": r.title,
            "journal": r.journal,
            "conference": r.conference,
            "year": r.year
        } for r in Research.query.all()
    ])
