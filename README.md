# Flask + React Portfolio Project

This is a **full-stack portfolio project** built with **Flask** as the backend and **React** as the frontend. It demonstrates fetching and displaying data dynamically, such as skills, projects, and other portfolio information.

---

## 📂 Project Structure

backend/
│── app.py
│── config.py
│── models.py
│── extensions.py
│── routes/
│     ├── projects.py
│     ├── research.py
│     ├── skills.py
│     ├── certifications.py
│     └── contact.py
│── requirements.txt

frontend/src/
│── api.js
│── components/
│     ├── Hero.jsx
│     ├── Projects.jsx
│     ├── Research.jsx
│     ├── Skills.jsx
│     ├── Certifications.jsx
│     ├── Contact.jsx
│── App.js







---

## ⚡ Features

- **Backend**: Flask REST API serving portfolio data (skills, projects, etc.)  
- **Frontend**: React app fetching data from the Flask API  
- **Dynamic Skills Section**: Displays categories and skills dynamically  
- **Clean folder structure**: Easy to extend for future projects  

---

## 🛠 Installation & Setup

### 1️⃣ Backend (Flask)
```bash
cd backend
python -m venv venv
venv\Scripts\activate     # Windows
# OR for Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
python app.py
----

### 2️⃣ Frontend (React)
```bash
cd frontend
npm install
npm start

```bash
Runs on:

http://localhost:3000


Make sure the backend is running to fetch API data.

🌐 Connect React & Flask

In frontend/package.json, add the proxy:
```bash
"proxy": "http://127.0.0.1:5000"


This allows React to make requests to the Flask backend easily.

