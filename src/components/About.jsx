import React, { useState } from "react";

// Placeholder images — replace these with your real images later
import img1 from "../assets/headshot.jpg";
import img2 from "../assets/headshot.jpg";
import img3 from "../assets/headshot.jpg";

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { image: img1, caption: "Playing football during my college years." },
        { image: img2, caption: "Working on ML projects at Seeweed." },
        { image: img3, caption: "A snapshot from one of my travels." }
    ];

    const goNext = () => {
        setCurrentIndex((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const goPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <section
            id="about"
            className="relative w-full min-h-screen flex items-center px-6 md:px-10 text-white"
        >
            {/* ML Background Layer (black → white) */}
            <div className="ml-grid-bg1"></div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left – Image Carousel */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={slides[currentIndex].image}
                            alt="About slide"
                            className="w-full h-full object-cover"
                        />

                        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded">
                            {slides[currentIndex].caption}
                        </p>

                        <button
                            onClick={goPrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                        >
                            ‹
                        </button>

                        <button
                            onClick={goNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                        >
                            ›
                        </button>
                    </div>
                </div>

                {/* Right – About Text */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About Me
                    </h2>

                    <p className="leading-relaxed text-gray-200">
                        I'm Tyler Bowman, a software engineer with a passion for
                        machine learning, deep learning, and building high-impact
                        applications. I enjoy solving real-world problems,
                        optimizing systems, and bringing ideas to life through code.
                    </p>

                    <p className="leading-relaxed text-gray-200">
                        My experience spans from developing custom AI models at Seeweed
                        (an underwater camera company) to building full-stack tools,
                        data pipelines, and modern web experiences using React and TailwindCSS.
                    </p>

                    <p className="leading-relaxed text-gray-200">
                        Outside of work, I’m passionate about fitness, football, and
                        learning new technologies. I'm always pushing myself to grow as
                        a developer and person.
                    </p>
                </div>

            </div>
        </section>
    );
}

