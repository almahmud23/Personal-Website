import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
          I am a passionate web developer and researcher with a focus on machine learning and 3D animation.
        </p>

        {/* Educational Background */}
        <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 mb-10 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Educational Background
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I am currently pursuing my BSc in Computer Science & Engineering at Green University of Bangladesh.
            My academic interests include Machine Learning, Data Mining, and Artificial Intelligence.
            I’m also conducting research on 3D Animation for Bangla Sign Language using CNN and Blender.
          </p>
        </div>

        {/* Interests in Life */}
        <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Interest in Life
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Aside from academics, I enjoy learning about new technologies, playing online games, and watching
            movies and drama series from different countries. I’m constantly looking for ways to merge my technical
            skills with creative pursuits like animation and web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
