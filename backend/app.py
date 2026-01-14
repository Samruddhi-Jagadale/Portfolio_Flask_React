from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from extensions import db
from models import Project

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

@app.route("/")
def home():
    return {"message": "Flask backend running"}

@app.route("/api/projects/", methods=["GET"])
def get_projects():
    projects = Project.query.all()
    return jsonify([
        {
            "id": p.id,
            "title": p.title,
            "description": p.description,
            "tech_stack": p.tech_stack,
            "start_date": str(p.start_date),
            "end_date": str(p.end_date)
        }
        for p in projects
    ])

if __name__ == "__main__":
    app.run(debug=True)
