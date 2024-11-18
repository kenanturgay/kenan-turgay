import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "PostgreSQL",
  ];
  return (
    <div>
      <h2 className=" text-3xl font-bold text-center text-gray-200 mb-8">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg text-xl font-medium shadow-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
