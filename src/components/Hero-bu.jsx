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

                {/* Headshot — fixed aspect ratio + correct border */}
                <img
                    src={headshot}
                    alt="Tyler Bowman"
                    className="w-85 h-85 aspect-square rounded-full border-[3px] border-black object-cover shadow-2xl"
                />

                {/* Text */}
                <div>
                    {/* Larger name */}
                    <h1 className="text-7xl font-bold text-white mb-5">
                        Hi, I'm Tyler
                    </h1>

                    {/* Larger paragraph */}
                    <p className="text-white max-w-xl text-3xl leading-relaxed">
                        Full-Stack Software Developer with experience in AI and Machine Learning.
                    </p>

                    {/* Bigger button */}
                    <a
                        href="#about"
                        className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl text-2xl font-semibold shadow-lg hover:bg-blue-700 transition"
                    >
                        Learn More About Me
                    </a>
                </div>
            </div>
        </section>
    );
}

