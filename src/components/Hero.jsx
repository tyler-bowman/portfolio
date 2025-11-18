import React from "react";
import headshot from "../assets/headshot.jpg";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen bg-black flex items-center overflow-hidden"
        >
            {/* Background */}
            <div className="ml-grid-bg"></div>

            {/* LEFT SIDE CONTENT */}
            <div className="relative z-10 flex items-center gap-16 pl-28">

                {/* Headshot — made larger */}
                <img
                    src={headshot}
                    alt="Tyler Bowman"
                    className="w-100 h-100 rounded-full border-[5px] border-black-500 object-cover shadow-xl"
                />

                {/* Text */}
                <div>
                    {/* Larger name */}
                    <h1 className="text-6xl font-bold text-white mb-5">
                        Hi, I'm Tyler
                    </h1>

                    {/* Larger paragraph */}
                    <p className="text-gray-300 max-w-xl text-2xl leading-relaxed">
			Full-Stack Software Developer with experience in AI and Machine Learning, focusing on building modern web applications, backend services, and intelligent systems that deliver real value.
                    </p>

                    {/* Bigger button */}
                    <a
                        href="#about"
                        className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg text-xl font-medium hover:bg-blue-700 transition"
                    >
                        Learn More About Me
                    </a>
                </div>
            </div>
        </section>
    );
}

