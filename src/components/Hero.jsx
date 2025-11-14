import React from "react";
import headshot from "../assets/headshot.jpg";

export default function Hero() {
        return (
                <div
                        className="w-full"
                        style={{
                                backgroundColor: "#0d1117",     // main dark background
                                color: "white",
                                minHeight: "60vh",              // hero height
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "3rem 1rem"
                        }}
                >

                        {/* Main hero content row */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl">

                                {/* Profile image section */}
                                <img
                                        src={headshot}
                                        alt="Tyler Bowman headshot"
                                        className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                                />

                                {/* Text section */}
                                <div className="text-center md:text-left max-w-xl">
                                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                                Hi, I'm Tyler
                                        </h2>
					<p className="text-red-500">TEST COLOR</p>
                                        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                                                Software Engineer | AI & Machine Learning | Web Development
                                        </p>

                                        <a
                                                href="#projects"
                                                className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
                                        >
                                                View My Work
                                        </a>
                                </div>

                        </div>

                </div>
        );
}

