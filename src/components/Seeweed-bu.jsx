import React from "react";

// Assets
import SeeweedLogo from "../assets/Seeweed.jpg";
import ModelPDF from "../assets/Model.pdf";

export default function SeeweedSection() {
    return (
        <section
            id="seeweed"
            className="relative w-full min-h-screen text-white px-10 py-20"
        >
            {/* Background */}
            <div className="ml-grid-bg"></div>

            {/* GRID LAYOUT */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">

                {/* LEFT COLUMN — PDF VIEWER */}
                <div className="flex flex-col w-full space-y-8">

                    <div className="bg-white/10 p-5 rounded-xl shadow-2xl w-full h-[950px]">
                        <iframe
                            src={`${ModelPDF}#zoom=110`}
                            className="w-full h-full rounded-lg bg-white shadow-lg"
                            title="Model Comparison Chart"
                        ></iframe>
                    </div>

                    {/* Centered Caption */}
                    <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
                        This chart highlights the difference in performance between the original Seeweed
                        model and the improved model I developed. Each row represents a real underwater
                        image used for evaluation.
                    </p>
                </div>

                {/* RIGHT COLUMN — LOGO + ROLE + BULLETS */}
                <div className="flex flex-col w-full space-y-10 mt-24">

                    {/* LOGO + TITLE (Centered Group) */}
                    <div className="w-full flex flex-col items-center text-center space-y-4">

                        {/* LARGE LOGO */}
                        <img
                            src={SeeweedLogo}
                            alt="Seeweed Logo"
                            className="w-[50rem] max-w-full h-auto rounded-lg shadow-xl"
                        />

                        {/* ROLE — Frosted Green */}
                        <p className="text-lg font-semibold bg-green-200/30 text-black px-5 py-2 rounded-lg shadow-md backdrop-blur-sm border border-green-300/20">
                            Software Developer Intern — May 2024 to Present
                        </p>

                        {/* WEBSITE — Green Link */}
                        <a
                            href="https://seeweedsystems.com"
                            target="_blank"
                            className="text-green-300 hover:text-green-400 text-lg"
                        >
                            seeweedsystems.com
                        </a>
                    </div>

                    {/* BULLET POINT GLASS CARD — Frosted Green */}
                    <div className="bg-green-300/10 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-green-300/20 max-w-[85%] mx-auto">
                        <h3 className="text-2xl font-semibold mb-3">What I Worked On</h3>

                        <ul className="list-disc ml-6 space-y-3 text-lg text-gray-200">
                            <li>
                                Developed custom machine learning models for species recognition using
                                TensorFlow and Google Vertex AI.
                            </li>
                            <li>
                                Built preprocessing pipelines, evaluation tools, and dataset automation.
                            </li>
                            <li>
                                Delivered a production-ready model for Discovery Channel under a strict 6-day deadline.
                            </li>
                            <li>
                                Collaborated with Cornell Lab of Ornithology on dataset strategy and test-set diversity.
                            </li>
                            <li>
                                Worked with founders, developers, and field testers on real-world underwater imaging.
                            </li>
                            <li>
                                Created documentation, model comparison charts, and deployment-ready engineering assets.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}

