import { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) =>
        console.error("Failed to fetch projects:", err)
      );
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-heading">🚀 Projects</h2>

      <p className="projects-subheading">
        Real-world projects where I applied AI, ML, NLP, and full-stack development
        to solve meaningful problems.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <p className="tech-stack">
              <strong>Tech Stack:</strong> {project.tech_stack}
            </p>

            <p className="project-dates">
              {project.start_date} → {project.end_date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
