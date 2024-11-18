import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Book Store",
      description:
        "I worked as a full-stack developer on this app for using my skills. Users can save and store books to this application",
      tags: ["React", "Vite", "TailwindCSS"],
      image: "project-image.png", // Görsel yolunu buraya ekleyin.
    },
    {
      title: "Pricewise",
      description:
        "Track product prices effortlessly and save money on your online shopping. I am working on my own project.",
      tags: ["React", "Vite", "TailwindCSS"],
      image: "project-image.png", // Görsel yolunu buraya ekleyin.
    },
    {
      title: "Smart Edu Education College",
      description:
        "It is an Education Course application with Teacher, Student and Admin panels. Students can participate in courses created by the teacher.",
      tags: ["React", "Vite", "TailwindCSS"],
      image: "project-image.png", // Görsel yolunu buraya ekleyin.
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center my-16 gap-10">
        <h2 className=" text-3xl font-bold text-center text-gray-200 mb-8">
          My Projects From Github
        </h2>
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
