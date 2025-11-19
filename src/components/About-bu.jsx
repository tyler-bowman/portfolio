import React, { useState } from "react";

// Images
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

    // PDF tab state
    const [selectedPDF, setSelectedPDF] = useState(ResumePDF);

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

            {/* FULL GRID */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* LEFT COLUMN */}
                <div className="flex flex-col space-y-12 w-full">

                    {/* Gallery */}
                    <div className="w-full max-w-[90%]">
                        <div className="relative w-full h-80 lg:h-[600px] overflow-hidden rounded-xl shadow-xl mx-auto">
                            <img
                                src={slides[currentIndex].image}
                                alt="Gallery slide"
                                className="w-full h-full object-cover"
                            />

                            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-lg px-3 py-1 rounded">
                                {slides[currentIndex].caption}
                            </p>

                            <button
                                onClick={goPrev}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-6 py-4 rounded-full hover:bg-black/60"
                            >
                                ◀
                            </button>

                            <button
                                onClick={goNext}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-6 py-4 rounded-full hover:bg-black/60"
                            >
                                ▶
                            </button>
                        </div>
                    </div>

                    {/* About Me — FROSTED BLACK BLUR CARD */}
                    <div className="backdrop-blur-sm bg-black/60 p-8 rounded-xl shadow-xl space-y-6 max-w-[90%]">
                        <h2 className="text-4xl font-bold">About Me</h2>

                        <p className="leading-relaxed text-white text-xl">
                            I’m a Computer Science and Mathematics student at UW–La Crosse, graduating in May 2026 and planning to move back to Hudson, Wisconsin. I grew up in Spring Valley, a small and close-knit community that shaped my values and appreciation for the outdoors.
                        </p>

                        <p className="leading-relaxed text-white text-xl">
                            During my time at UW–La Crosse, I competed as a student-athlete on the football team, which strengthened my leadership, discipline, work ethic, and ability to balance demanding schedules. Outside of academics, I enjoy hunting, fishing, birding, and spending time in nature whenever I can.
                        </p>

                        {/* UPDATED PARAGRAPH WITH LINK TO SEEWEED SECTION */}
                        <p className="leading-relaxed text-white text-xl">
                            I currently work remotely for{" "}
                            <a
                                href="#seeweed"
                                className="text-white hover:text-green-500 transition font bold italic"
                            >
                                Seeweed Underwater Game Cameras
                            </a>
                            , a Twin Cities company where I contribute to software development and machine learning projects for underwater imaging. Looking ahead, I’m excited to pursue a career in software engineering or continue expanding my work in AI and machine learning, where I can solve meaningful problems and build technology that makes an impact.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN — PDF VIEWER WITH TABS */}
                <div className="flex flex-col w-full space-y-6">

                    {/* TAB BUTTONS */}
                    <div className="flex space-x-4 bg-white/10 px-4 py-3 rounded-xl shadow-md w-full">
                        {[
                            { label: "Resume", file: ResumePDF },
                            { label: "Letter from Mitch G", file: MitchLetter },
                            { label: "Letter from Prof. Petullo", file: PetulloLetter },
                            { label: "Transcript", file: TranscriptPDF }
                        ].map((tab) => (
                            <button
                                key={tab.label}
                                onClick={() => setSelectedPDF(tab.file)}
                                className={`
                                    px-4 py-2 rounded-lg text-lg transition
                                    ${selectedPDF === tab.file
                                        ? "bg-blue-500 text-white shadow-md"
                                        : "bg-white/20 text-gray-200 hover:bg-white/30"}
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* PDF VIEWER */}
                    <div className="bg-white/10 p-5 rounded-xl shadow-2xl w-full h-[1120px]">
                        <iframe
                            src={`${selectedPDF}#zoom=110`}
                            className="w-full h-full rounded-lg bg-white shadow-lg"
                            title="PDF Viewer"
                        ></iframe>
                    </div>

                </div>

            </div>
        </section>
    );
}

