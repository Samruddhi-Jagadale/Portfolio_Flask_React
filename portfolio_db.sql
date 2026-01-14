CREATE DATABASE portfolio_db;

ALTER DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE portfolio_db;

SELECT DATABASE();

CREATE TABLE education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institute VARCHAR(255),
    degree VARCHAR(255),
    specialization VARCHAR(255),
    cgpa DECIMAL(3,2),
    start_year YEAR,
    end_year YEAR
);


CREATE TABLE research (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    journal VARCHAR(255),
    year INT,
    description TEXT
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    tech_stack VARCHAR(500),
    start_date DATE,
    end_date DATE,
    description TEXT
);


CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100),
    skill_name VARCHAR(100)
);

CREATE TABLE certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    provider VARCHAR(255),
    year INT
);

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SHOW TABLES;

INSERT INTO education (institute, degree, specialization, cgpa, start_year, end_year)
VALUES (
  'Kolhapur Institute of Technology',
  'B.Tech',
  'Computer Science and Technology (Data Science)',
  9.40,
  2022,
  2026
);

SELECT * FROM education;

INSERT INTO projects (title, description, tech_stack, year)
VALUES
('Ecommerce Product Discovery Chatbot', 'RAG based ecommerce chatbot using LLMs and Pinecone', 'Flask, Pinecone, LangChain, Airflow', '2025'),
('Skin Disease Detection', 'VGG16 deep learning model to classify dermatology images', 'Python, TensorFlow, Keras', '2025'),
('PREJEX Career Optimization', 'ML/NLP web app to classify fake vs genuine job postings', 'Flask, NLP, ML', '2024');

DESCRIBE projects;

INSERT INTO projects (title, description, tech_stack, start_date, end_date) 
VALUES 
(
  'Ecommerce Product Discovery Chatbot', 
  'RAG based ecommerce chatbot using LLMs and Pinecone', 
  'Flask, Pinecone, LangChain, Airflow', 
  '2025-10-01', 
  '2025-12-01'
),
(
  'Skin Disease Detection', 
  'VGG16 deep learning model to classify dermatology images', 
  'Python, TensorFlow, Keras', 
  '2025-01-01', 
  '2025-04-01'
),
(
  'PREJEX Career Optimization', 
  'ML/NLP web app to classify fake vs genuine job postings', 
  'Flask, NLP, ML', 
  '2024-06-01', 
  '2024-12-01'
);











