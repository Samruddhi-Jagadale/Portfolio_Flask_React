import React from "react";

function Certifications() {
  return (
    <section style={styles.section}>
      <h2>Certifications</h2>
      <ul>
        <li>NPTEL – Data Science for Engineers (Silver Medal)</li>
        <li>AWS Academy Data Engineering</li>
        <li>AWS Academy Cloud Foundations</li>
        <li>Alteryx Machine Learning Foundation</li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    background: "#f1f5f9"
  }
};

export default Certifications;
