import { useEffect, useState } from "react";
import { API } from "../api";

export default function Skills() {
  const skills = {
    "Programming": ["Python", "JavaScript", "MySQL","MongoDB","Machine Learning"],
    "Web Development": ["React", "Flask", "HTML", "CSS"],
    "Tools": ["Git", "Docker", "VS Code"],
  };

  return (
    <section>
      <h2>Skills</h2>
      {Object.keys(skills).map(cat => (
        <p key={cat}><b>{cat}:</b> {skills[cat].join(", ")}</p>
      ))}
    </section>
  );
}
