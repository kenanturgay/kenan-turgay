import React from "react";

export default function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="flex flex-row bg-gray-800 p-6 rounded-xl max-w-3xl h-64 mx-auto gap-10">
      <div className="w-6/12">
        <h3 className="text-xl font-bold text-white mb-2 text-left">{title}</h3>
        <p className="text-gray-300 mb-4 text-left">{description}</p>
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-300 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-8/12 transition transform duration-500 ease-in-out hover:rotate-3 hover:scale-105">
        <img src={image} alt={`${title} Screenshot`} />
      </div>
    </div>
  );
}
