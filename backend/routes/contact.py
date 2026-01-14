from flask import Blueprint, request, jsonify
from models import Contact
from extensions import db

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/", methods=["POST"])
def submit_contact():
    db.session.add(Contact(**request.json))
    db.session.commit()
    return jsonify({"message": "Message sent"}), 201
from flask import Blueprint, request, jsonify
from models import Contact
from extensions import db

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/", methods=["POST"])
def submit_contact():
    db.session.add(Contact(**request.json))
    db.session.commit()
    return jsonify({"message": "Message sent"}), 201
