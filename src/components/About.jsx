import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center my-8">
      {/* Dikey Çizgi */}
      <div className="h-16 border-l-4 border-gray-500 opacity-50 mb-4"></div>

      {/* Başlık */}
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-6 mt-16">
        About Me
      </h2>

      {/* Açıklama Metni */}
      <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
        <em>
          After graduating with a degree in Electrical-Electronics Engineering, I decided to
          pursue my passion for programming. I enrolled in a coding bootcamp and
          learned full-stack web development. My favorite part of programming is
          the problem-solving aspect. I <strong>love</strong> the feeling of
          finally figuring out a solution to a problem. My core stack is{" "}
          <strong>
            Java, Spring Boot, JavaScript, React,
          </strong>{" "}
          and <strong>DBMS</strong>. I am also familiar with <strong>C#</strong>{" "}
          and <strong>.NET</strong>. I am always looking to learn new
          technologies. I am currently looking for a{" "}
          <strong>full-time position</strong> as a software developer.
        </em>
        <br />
        <br />
        <em>
          When I'm not coding, I enjoy playing video games, watching movies, and
          meeting with my friends. I also enjoy traveling around the world. I am
          currently learning about how I can trip around all of the world.
        </em>
      </p>
    </div>
  );
}
