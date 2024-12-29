import React from "react";

const experiences = [
  {
    icon: "💼",
    title: "Software Developer",
    location: "Company XYZ",
    description: "Developed various web applications using React and Node.js.",
    year: "2021 - Present",
  },
  {
    icon: "💻",
    title: "Intern Developer",
    location: "Company ABC",
    description: "Assisted in developing internal tools using Java and Spring Boot.",
    year: "2020 - 2021",
  },
  // Diğer deneyimlerinizi buraya ekleyin
];

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
      <div className="w-full sm:w-2/4 mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Experience
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center lg:space-x-4">
              {/* Icon */}
              <div className="bg-gray-800 text-white rounded-full text-5xl p-4">
                {exp.icon}
              </div>
              {/* Line Connection */}
              <div className="hidden lg:block w-1 bg-gray-700 h-full"></div>
              {/* Content */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg lg:max-w-md">
                <h3 className="text-lg font-bold text-gray-200">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.location}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
                <p className="text-gray-400 mt-4 text-sm">{exp.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
