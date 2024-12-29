import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "Description for project 1",
    tags: ["React", "JavaScript"],
    image: "path/to/image1.jpg",
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    tags: ["Node.js", "Express"],
    image: "path/to/image2.jpg",
  },
  // Diğer projelerinizi buraya ekleyin
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-200 mb-8">
        My Projects From Github
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
