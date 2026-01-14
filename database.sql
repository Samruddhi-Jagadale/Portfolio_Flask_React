CREATE DATABASE portfolio_db;
USE portfolio_db;

CREATE TABLE project (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  description TEXT,
  tech_stack VARCHAR(300),
  github VARCHAR(200)
);

CREATE TABLE research (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(300),
  journal VARCHAR(200),
  conference VARCHAR(200),
  year INT
);

CREATE TABLE skill (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(100),
  name VARCHAR(100)
);

CREATE TABLE certification (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  provider VARCHAR(100)
);

CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT
);
