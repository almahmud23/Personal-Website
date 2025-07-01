import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', level: 80, color: 'bg-blue-500' },
    { name: 'Python', level: 70, color: 'bg-green-500' },
    { name: 'Tailwind CSS', level: 65, color: 'bg-purple-500' },
    { name: 'Machine Learning', level: 60, color: 'bg-yellow-500' },
    { name: 'JavaScript', level: 75, color: 'bg-orange-500' },
    { name: 'C', level: 80, color: 'bg-red-500' }
  ];

  return (
    <section id="skills" className="bg-green-100 py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">My Skills</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-6 shadow-inner">
                <div
                  className={`${skill.color} h-6 rounded-full text-white text-sm font-bold text-center flex items-center justify-center transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
