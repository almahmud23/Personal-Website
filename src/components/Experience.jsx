import React from 'react';

function Experience() {
    return (
        <section id="experience" className="bg-orange-100 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-10 text-center">
                    Experience & Workshops
                </h2>

                {/* Work Experience */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-10 transition-transform hover:scale-[1.02]">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Work Experience</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                        <li>
                            No formal work experience yet, but actively leading group projects and technical teams in university assignments.
                        </li>
                        <li>
                            Freelance Developer – Working on freelance projects focusing on web development and UI design.
                        </li>
                    </ul>
                </div>

                {/* Workshops */}
                <div className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-[1.02]">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Workshops</h3>
                    <ul className="list-disc list-inside space-y-6 text-gray-700 text-lg">
                        <li>
                            <p>
                                <span className="font-semibold">Professional Life Skills Development (PLSD):</span> Participated in a hands-on Non-Credit Course on the basics of professional training and applications.
                            </p>
                            <button className="mt-2 bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
                                Academic Course
                            </button>
                        </li>

                        <li>
                            <p>
                                <span className="font-semibold">Python Programming Course (Batch-4):</span> Digital Skills Development Program for Python.
                            </p>
                            <button className="mt-2 bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
                                On-Going Course
                            </button>
                        </li>

                        <li>
                            <p>
                                <span className="font-semibold">Frontend Development Bootcamp:</span> Completed a bootcamp focusing on React frontend development.
                            </p>
                            <a
                                href="/react.png"
                                download
                                className="inline-block mt-2"
                            >
                                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
                                    Download Certificate
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
