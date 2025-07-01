import React, { useEffect, useState } from 'react';

function ProfilePic() {
    const designations = ['BSc in CSE', 'Researcher', 'Web Developer'];
    const [currentDesignation, setCurrentDesignation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDesignation((prev) => (prev + 1) % designations.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="profile" className="min-h-screen bg-white flex items-center justify-center py-16 px-4 md:px-20">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Profile Picture */}
                <div className="flex justify-center">
                    <div className="rounded-full overflow-hidden border-4 border-blue-500 w-48 h-48 md:w-64 md:h-64 shadow-xl">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Name, Title, Buttons */}
                <div className="flex flex-col items-start space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">MD. ALMAHMUD</h1>
                    <p
                        className="text-2xl md:text-3xl font-semibold transition-all duration-500"
                        style={{
                            color:
                                currentDesignation === 0
                                    ? 'blue'
                                    : currentDesignation === 1
                                        ? 'green'
                                        : 'red',
                        }}
                    >
                        {designations[currentDesignation]}
                    </p>

                    {/* Download Buttons */}
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="/Resume.pdf"
                            download="Almahmud_CV.pdf"
                            className="bg-blue-500 text-white px-5 py-2 rounded shadow hover:bg-blue-600 transition"
                        >
                            Download CV
                        </a>
                        <a
                            href="/formal.pdf"
                            download="Almahmud_FormalLetter.pdf"
                            className="bg-green-500 text-white px-5 py-2 rounded shadow hover:bg-green-600 transition"
                        >
                            Download Formal Letter
                        </a>
                    </div>

                    {/* Call & Email Buttons */}
                    <div className="flex space-x-6 mt-6">
                        <a
                            href="tel:+8801764230549"
                            className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition"
                            title="Call"
                        >
                            <i className="fas fa-phone-alt fa-lg"></i>
                        </a>
                        <a
                            href="mailto:arbinariyan49@gmail.com"
                            className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition"
                            title="Email"
                        >
                            <i className="fas fa-envelope fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfilePic;
