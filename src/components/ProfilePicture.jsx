import React from "react";
import profilePhoto from "../assets/profile-pic.png";

export default function ProfilePicture() {
  return (
    <div className="relative inline-block w-24 h-24 sm:w-36 sm:h-36">
      <img
        src={profilePhoto}
        alt="Profile Picture"
        className="w-full h-full rounded-full border-4 border-white shadow-lg"
      />
      <span className="absolute bottom-2 right-2 text-2xl sm:text-3xl">👋</span>
    </div>
  );
}