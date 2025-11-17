import React from "react";

export default function Projects() {
  const projects = [
    { title: "Project 1", description: "Short description here.", link: "#" },
    { title: "Project 2", description: "Short description here.", link: "#" },
    { title: "Project 3", description: "Short description here.", link: "#" },
  ];

  return (
    <section id="projects" className="w-full min-h-screen flex items-center px-6 md:px-10 bg-gradient-to-b from-[#000000] to-[#8d8d8d] text-white">
      <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <a href={proj.link} className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

