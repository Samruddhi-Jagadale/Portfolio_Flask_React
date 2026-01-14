from flask import Blueprint, jsonify
from models import Certification

cert_bp = Blueprint("certifications", __name__)

@cert_bp.route("/", methods=["GET"])
def get_certs():
    return jsonify([
        {"title": c.title, "provider": c.provider}
        for c in Certification.query.all()
    ])
