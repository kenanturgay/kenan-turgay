import React from "react";

const experiences = [
  {
    year: "2017",
    title: "Graduated From Electrical-Electronics Engineering",
    location: "Balıkesir, Turkey",
    description:
      "I graduated after 4 years of studying. I worked as a Network and Automation Engineer for 7 year.",
    icon: "🎓",
  },
  {
    year: "2024 - present",
    title: "Full-Stack Developer Education",
    location: "Istanbul, Turkey",
    description:
      "I gratuated from React training after 6 mounth. Now I'm contuining training Java. I work freelance as a front-end developer.",
    icon: "🎓",
  },
  {
    year: "2024 - present",
    title: "Full-Stack Developer",
    location: "Istanbul, Turkey",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, JavaScript, Java, SQL, and DBMS. I'm open to full-time opportunities.",
    icon: "💻",
  },
];

export default function Experience() {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">
        My Experience
      </h2>
      <div className="relative  mx-52">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center lg:items-start  mb-8 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-gray-800 text-white rounded-full text-5xl">
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
  );
}
