import React from "react";

// Assets
import SeeweedLogo from "../assets/Seeweed.jpg";
import ModelPDF from "../assets/Model.pdf";

export default function SeeweedSection() {
    return (
        <section
            id="seeweed"
            className="relative w-full min-h-screen text-white px-10 py-10"
        >
            {/* Background */}
            <div className="ml-grid-bg"></div>

            {/* GRID LAYOUT */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">

                {/* LEFT COLUMN — PDF VIEWER */}
                <div className="flex flex-col w-full space-y-8">

                    <div className="bg-white/10 p-5 rounded-xl shadow-2xl w-full h-[600px]">
                        <iframe
                            src={`${ModelPDF}#zoom=75`}
                            className="w-full h-full rounded-lg bg-white shadow-lg"
                            title="Model Comparison Chart"
                        ></iframe>
                    </div>

                    {/* Caption in Frosted Green Box */}
                    <div className="bg-green-300/10 text-gray-200 p-5 rounded-xl backdrop-blur-sm 
                                    border border-green-300/20 shadow-md text-center max-w-[100%] mx-auto">
                        <p className="text-sm">
				I created and presented this now-sanitized Excel chart to the Seeweed team to illustrate the improvements of the new model I developed compared to the previous version. All underlying data has been removed for confidentiality, but the chart still reflects a 28% improvement in overall success rate.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN — LOGO + ROLE + BULLETS */}
                <div className="flex flex-col w-full space-y-5 -ml-10">

                    {/* LOGO — aligned with top of PDF */}
                    <div className="w-full flex flex-col items-center text-center space-y-4">

                        <img
                            src={SeeweedLogo}
                            alt="Seeweed Logo"
                            className="w-[30rem] max-w-full h-auto rounded-lg shadow-xl"
                        />

                        {/* Role + Website in same frosted box */}
                        <div className="bg-green-200/30 backdrop-blur-sm border border-green-300/30 
                                        px-6 py-4 rounded-lg shadow-md flex flex-col items-center space-y-1">
                            <p className="text-lg font-semibold text-black">
                                Software Developer (AI) Intern — May 2024 to Present
                            </p>
                            <a
                                href="https://seeweedcameras.com/"
                                target="_blank"
                                className="text-green-700 hover:text-green-900 text-3lg font-medium"
                            >
                                seeweedcameras.com
                            </a>
                        </div>
                    </div>

                    {/* Bullet Point Glass Card — Frosted Green */}
                    <div className="bg-green-300/10 p-4 rounded-xl shadow-xl backdrop-blur-sm 
                                    border border-green-300/20 max-w-[85%] mx-auto">
                        <h3 className="text-lg font-semibold mb-3">What I Work On</h3>

                        <ul className="list-disc ml-6 space-y-3 text-m text-gray-200">
                            <li>
				Developed and deployed a custom AI model for Discovery Channel under a strict 6-day deadline, meeting specialized project requirements.
                            </li>
                            <li>
				Collaborated with the Cornell Lab of Ornithology to refine dataset structure, species classification strategy, and test-set diversity.
                            </li>
                            <li>
				Trained, evaluated, and deployed models using AWS SageMaker and Google Vertex AI, optimizing workflows for large-scale image datasets.
                            </li>
                            <li>
				Automated preprocessing pipelines in Python to ensure dataset consistency and compliance with model training standards.
                            </li>
                            <li>
				Processed and labeled thousands of underwater images to create high-quality datasets that improved overall model accuracy and reliability.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}

