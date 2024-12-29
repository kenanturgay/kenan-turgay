import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const linkedinUrl = import.meta.env.VITE_APP_LINKEDIN_URL;
const githubUrl = import.meta.env.VITE_APP_GITHUB_URL;

export default function SocialLinks() {
  return (
    <div className="flex space-x-2 sm:space-x-4">
      <a
        href={linkedinUrl}
        className="bg-gray-800 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-700 transition-all"
      >
        <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <a
        href={githubUrl}
        className="bg-gray-800 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-700 transition-all"
      >
        <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
}