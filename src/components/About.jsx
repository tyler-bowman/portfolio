import React, { useState } from "react";

// Placeholder images
import img1 from "../assets/Sandy.jpg";
import img2 from "../assets/Football.jpg";
import img3 from "../assets/MomFam.jpg";
import img4 from "../assets/DadFam.jpg";
import img5 from "../assets/Friends.jpg";
import img6 from "../assets/Roommates.jpg";
import img7 from "../assets/Deer3.jpg";
import img8 from "../assets/Fish1.jpg";
import img9 from "../assets/Yogi.jpg";

// Documents
import ResumePDF from "../assets/Resume.pdf";
import MitchLetter from "../assets/MitchLetter.pdf";
import PetulloLetter from "../assets/PetulloLetter.pdf";
import TranscriptPDF from "../assets/Transcript.pdf";

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { image: img1, caption: "My fiancée Sandy and I." },
        { image: img2, caption: "A touchdown reception from my senior season at UW-La Crosse." },
        { image: img3, caption: "My Mom's side of the family." },
        { image: img4, caption: "My Dad's side of the family." },
        { image: img5, caption: "My high school friends and I after a game." },
        { image: img6, caption: "My college roommates and I at a friend's wedding." },
        { image: img7, caption: "Me with the buck I harvested in 2023." },
        { image: img8, caption: "Me with a smallmouth bass I caught in Door County." },
        { image: img9, caption: "My dog Yogi and I." }
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
        <section id="about" className="relative w-full min-h-screen text-white px-10 py-16">

            {/* Background */}
            <div className="ml-grid-bg1"></div>

            {/* FOREGROUND — Full width */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* LEFT COLUMN */}
                <div className="flex flex-col space-y-12 w-full">

                    {/* Gallery — reduced width */}
                    <div className="w-full max-w-[90%]">
                        <div className="relative w-full h-72 lg:h-110 overflow-hidden rounded-xl shadow-xl mx-auto">
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

                    {/* About Me */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">About Me</h2>

                        <p className="leading-relaxed text-gray-200 text-lg">
			   I’m a Computer Science and Mathematics student at UW–La Crosse, graduating in May 2026 and planning to move back to Hudson, Wisconsin. I grew up in Spring Valley, a small and close-knit community that shaped my values and appreciation for the outdoors.	
                        </p>

                        <p className="leading-relaxed text-gray-200 text-lg">
			   During my time at UW–La Crosse, I competed as a student-athlete on the football team, which strengthened my leadership, discipline, work ethic, and ability to balance demanding schedules. Outside of academics, I enjoy hunting, fishing, birding, and spending time in nature whenever I can.
                        </p>

                        <p className="leading-relaxed text-gray-200 text-lg">
			   I currently work remotely for Seeweed Underwater Game Cameras, a Twin Cities company where I contribute to software development and machine learning projects for underwater imaging. Looking ahead, I’m excited to pursue a career in software engineering or continue expanding my work in AI and machine learning, where I can solve meaningful problems and build technology that makes an impact.
                        </p>
                    </div>

                    {/* ADDITIONAL DOCUMENTS */}
                    <div className="space-y-6">
                        <h3 className="text-4xl font-semibold">Additional Documents</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                            {/* Letters */}
                            <div>
                                <h4 className="text-2xl font-semibold mb-2">Letters of Recommendation</h4>
                                <ul className="space-y-3 text-lg">
                                    <li>
                                        <a href={MitchLetter} download className="text-black hover:text-blue-500 underline">
                                            • Letter from Mitch (PDF)
                                        </a>
                                    </li>
                                    <li>
                                        <a href={PetulloLetter} download className="text-black hover:text-blue-500 underline">
                                            • Letter from Petullo (PDF)
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Transcript */}
                            <div>
                                <h4 className="text-2xl font-semibold mb-2">Transcript</h4>
                                <a
                                    href={TranscriptPDF}
                                    download
                                    className="text-black hover:text-blue-500 underline text-lg"
                                >
                                    • Download Transcript (PDF)
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN — Resume ONLY */}
                <div className="flex flex-col space-y-8 w-full">

                    {/* Resume Viewer — full-height */}
                    <div className="bg-white/10 p-5 rounded-xl shadow-2xl w-full h-[1000px]">
                        {/* Removed "Documents" header per your request */}
                        <h4 className="text-2xl font-semibold mb-3">Resume</h4>

                        <iframe
                            src={`${ResumePDF}#zoom=100`}
                            className="w-full h-full rounded-lg bg-white shadow-lg"
                            title="Resume Preview"
                        ></iframe>
                    </div>

                    <a
                        href={ResumePDF}
                        download
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition w-fit"
                    >
                        Download Resume
                    </a>
                </div>

            </div>
        </section>
    );
}

