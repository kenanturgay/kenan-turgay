import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  // Diğer yeteneklerinizi buraya ekleyin
];

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-200 mb-8">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg text-base sm:text-xl font-medium shadow-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
