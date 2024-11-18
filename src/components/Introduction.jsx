import React from "react";
import profilePhoto from "../assets/profile-pic.png";

export default function Introduction() {
  return (
    <div>
      <div class="flex flex-col items-center justify-center mt-24  text-white p-4">
        <div class="relative inline-block w-36 h-36">
          <img
            src={profilePhoto}
            alt="Profile Picture"
            class="w-full h-full rounded-full border-4 border-white shadow-lg"
          />

          <span class="absolute bottom-2 right-2 text-3xl">👋</span>
        </div>

        <div class="w-2/4 mt-6">
          <h1 class="text-4xl font-bold text-center mb-4 typewriter-1">
            Hello, I'm Kenan.
          </h1>
          <p class="text-lg text-center font-semibold  max-w-2xl ">
            I'm a full-stack developer with about 1 year of experience. I enjoy coding & developing apps and sites. I love software and
            coding...
          </p>
          
        </div>

        <div class="flex space-x-4 mb-6 mt-6">
          <button class="bg-gray-700 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-600 transition-all">
            Contact me here →
          </button>
          <button class="bg-gray-700 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-600 transition-all flex items-center">
            Download CV <span class="ml-2 text-xl">⬇️</span>
          </button>
        </div>

        <div class="flex space-x-4">
          <a
            href="#"
            class="bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-700 transition-all"
          >
            <img src="linkedin-icon.png" alt="LinkedIn" class="w-5 h-5" />
          </a>
          <a
            href="#"
            class="bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-700 transition-all"
          >
            <img src="github-icon.png" alt="GitHub" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
