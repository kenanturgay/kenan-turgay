import React from "react";
import ProfilePicture from "./ProfilePicture";
import SocialLinks from "./SocialLinks";
import Button from "./Button";

export default function Introduction() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
        <ProfilePicture />
        <div className="w-full sm:w-2/4 mt-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 typewriter-1">
            Hello, I'm Kenan.
          </h1>
          <p className="text-base sm:text-lg text-center font-semibold max-w-2xl mx-auto">
            I'm a full-stack developer with about 1 year of experience. I enjoy
            coding & developing apps and sites. I love software and coding...
          </p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6 mt-6">
          <Button>Contact me here →</Button>
          <Button className="flex items-center">
            Download CV <span className="ml-2 text-xl">⬇️</span>
          </Button>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}