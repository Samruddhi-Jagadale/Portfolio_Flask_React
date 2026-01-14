import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Samruddhi</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#research">Research</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
