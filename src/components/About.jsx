import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
      <div className="w-full sm:w-2/4 mt-6 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-center font-semibold max-w-2xl mx-auto">
          <em>
            I am a passionate software developer who loves coding and solving
            problems. I enjoy the process of learning new technologies and
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
    </div>
  );
}
