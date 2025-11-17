import React, { useState } from "react";

// Placeholder images — replace these with your real images later
import img1 from "../assets/headshot.jpg";
import img2 from "../assets/headshot.jpg";
import img3 from "../assets/headshot.jpg";

export default function About() {
        // Tracks the index of the currently displayed image
        const [currentIndex, setCurrentIndex] = useState(0);

        // Array of images + captions
        const slides = [
                { image: img1, caption: "Playing football during my college years." },
                { image: img2, caption: "Working on ML projects at Seeweed." },
                { image: img3, caption: "A snapshot from one of my travels." }
        ];

        // Move to next image
        const goNext = () => {
                setCurrentIndex((prev) =>
                        prev === slides.length - 1 ? 0 : prev + 1
                );
        };

        // Move to previous image
        const goPrev = () => {
                setCurrentIndex((prev) =>
                        prev === 0 ? slides.length - 1 : prev - 1
                );
        };

        return (
                <section
                        id="about"
			className="w-full min-h-screen flex items-center px-6 md:px-10 bg-gradient-to-b from-[#000000] to-[#8d8d8d] text-white"

                >

                        {/* Wrapper for content */}
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                                {/* Left side — image carousel */}
                                <div className="w-full md:w-1/2">

                                        {/* Image container */}
                                        <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-xl shadow-lg">

                                                {/* Sliding image */}
                                                <img
                                                        src={slides[currentIndex].image}
                                                        alt="About slide"
                                                        className="w-full h-full object-cover"
                                                />

                                                {/* Caption */}
                                                <p className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded">
                                                        {slides[currentIndex].caption}
                                                </p>

                                                {/* Left arrow */}
                                                <button
                                                        onClick={goPrev}
                                                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                                                >
                                                        ‹
                                                </button>

                                                {/* Right arrow */}
                                                <button
                                                        onClick={goNext}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                                                >
                                                        ›
                                                </button>
                                        </div>
                                </div>

                                {/* Right side — about text */}
                                <div className="w-full md:w-1/2 space-y-4">

                                        <h2 className="text-3xl md:text-4xl font-bold">
                                                About Me
                                        </h2>

                                        <p className="text-white-500 leading-relaxed">
                                                I'm Tyler Bowman, a software engineer with a passion for
                                                machine learning, deep learning, and building high-impact
                                                applications. I enjoy solving real-world problems, optimizing
                                                systems, and bringing ideas to life through code.
                                        </p>

                                        <p className="text-white-500 leading-relaxed">
                                                My experience spans from developing custom AI models at Seeweed
                                                (an underwater camera company) to building full-stack tools,
                                                data pipelines, and more recently creating modern web
                                                experiences using React and TailwindCSS.
                                        </p>

                                        <p className="text-white-500 leading-relaxed">
                                                Outside of work, I’m passionate about fitness, football, and
                                                learning new technologies. I'm always pushing myself to grow as
                                                a developer and person.
                                        </p>
                                </div>

                        </div>
                </section>
        );
}

