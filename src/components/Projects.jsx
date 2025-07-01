import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-green-100 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">My Projects</h2>

        {/* Ongoing Works */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Ongoing Works</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <h4 className="text-2xl font-semibold mb-2">3D Animation for Bangla Sign Language</h4>
              <p className="text-gray-600 mb-3">
                Developing a 3D animation system using CNN and Blender to convert Bangla speech into sign language.
              </p>
              <a
                href="https://github.com/ar1ya9?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Repository
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <h4 className="text-2xl font-semibold mb-2">Private University Application System</h4>
              <p className="text-gray-600 mb-3">
                Collaborating on a web-based system to streamline university admissions.
              </p>
              <a
                href="https://github.com/ar1ya9?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Complete Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Complete Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <h4 className="text-2xl font-semibold mb-2">Personal Portfolio Website</h4>
              <p className="text-gray-600 mb-3">
                Built a portfolio using React & Tailwind to showcase my work, skills, and background.
              </p>
              <a
                href="https://almahmud23.github.io/Personal-Website/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block mb-1"
              >
                View Live Website
              </a>
              <a
                href="https://github.com/ar1ya9?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Repository
              </a>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <h4 className="text-2xl font-semibold mb-2">CNN for Bangla Letter Classification</h4>
              <p className="text-gray-600 mb-3">
                Developed a CNN-based model to classify handwritten Bangla letters using Python & Scikit-learn.
              </p>
              <a
                href="https://github.com/ar1ya9?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
