export default function SeeweedSection() {
    return (
        <section
            id="seeweed"
            className="relative w-full min-h-screen flex items-center px-6 md:px-10 overflow-hidden"
        >
            {/* Apply ML Grid Background */}
            <div className="ml-grid-bg"></div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

                {/* Header */}
                <h2 className="text-4xl font-bold mb-6">
                    My Work at <span className="text-blue-600">Seeweed</span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                    During my internship at Seeweed — a company specializing in
                    underwater trail cameras and AI-powered species detection —
                    I developed custom machine learning models, improved
                    training workflows, and delivered a production-ready solution
                    under an extremely tight deadline.
                </p>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition border border-white/10">
                        <h3 className="text-xl font-semibold mb-3">Custom ML Training</h3>
                        <p className="text-gray-300">
                            Built & trained species-recognition models using TensorFlow,
                            Vertex AI, and custom data pipelines.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition border border-white/10">
                        <h3 className="text-xl font-semibold mb-3">Discovery Channel Project</h3>
                        <p className="text-gray-300">
                            Delivered a production-ready model in just 6 days —
                            working late hours to overcome training issues.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition border border-white/10">
                        <h3 className="text-xl font-semibold mb-3">Real-World Impact</h3>
                        <p className="text-gray-300">
                            Increased species detection accuracy for a real underwater
                            research product used globally.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

