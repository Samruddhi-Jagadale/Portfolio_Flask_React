from extensions import db

from extensions import db

class Project(db.Model):
    __tablename__ = "projects"   # 👈 MUST match MySQL table name

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    description = db.Column(db.Text)
    tech_stack = db.Column(db.String(500))
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)


class Research(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300))
    journal = db.Column(db.String(200))
    conference = db.Column(db.String(200))
    year = db.Column(db.Integer)

class Skill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100))
    name = db.Column(db.String(100))

class Certification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    provider = db.Column(db.String(100))

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    message = db.Column(db.Text)
