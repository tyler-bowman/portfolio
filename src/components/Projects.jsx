import React from "react";

export default function Projects() {
    const projects = [
        { title: "Project 1", description: "Short description here.", link: "#" },
        { title: "Project 2", description: "Short description here.", link: "#" },
        { title: "Project 3", description: "Short description here.", link: "#" },
    ];

    return (
        <section
            id="projects"
            className="relative w-full min-h-screen flex items-center px-6 md:px-10 text-white"
        >
            {/* ML Background (black → light gray) */}
            <div className="ml-grid-bg1"></div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto py-20">

                {/* Header */}
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Projects
                </h3>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-black"
                        >
                            <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
                            <p className="text-gray-700 mb-4">{proj.description}</p>

                            <a
                                href={proj.link}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

