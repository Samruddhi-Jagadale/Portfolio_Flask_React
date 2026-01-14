import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [data, setData] = useState({ education: [], projects: [], research: [] });

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          B.Tech in Data Science
        </h1>
        <p className="mt-4 text-slate-400 text-lg">Specializing in Computer Vision & GenAI</p>
      </header>

      <main className="max-w-5xl mx-auto space-y-20">
        
        {/* Research Section - Highlighting your Publication */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Research & Publications</h2>
          {data.research.map(pub => (
            <div key={pub.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold text-blue-300">{pub.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{pub.journal} • {pub.year}</p>
              <p className="mt-3 text-slate-300 italic">Scopus-Indexed / Presented at ICATCICT 2025</p>
            </div>
          ))}
        </section>

        {/* Projects Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-emerald-500 pl-4">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map(project => (
              <div key={project.id} className="group bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:bg-slate-800 transition">
                <h3 className="text-xl font-bold group-hover:text-emerald-400 transition">{project.title}</h3>
                <p className="text-xs font-mono text-emerald-500 mt-2 uppercase tracking-widest">{project.tech_stack}</p>
                <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Portfolio;