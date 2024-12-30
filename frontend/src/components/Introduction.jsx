import React from "react";
import ProfilePicture from "./ProfilePicture";
import SocialLinks from "./SocialLinks";
import Button from "./Button";
import { PROFILE_TEXT, BUTTON_TEXT_CONTACT, BUTTON_TEXT_DOWNLOAD_CV } from "../assets/constant";

export default function Introduction() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
        <ProfilePicture />
        <div className="w-full sm:w-2/4 mt-10">
          <h1 className="text-3xl sm:text-4xl font-medium text-center mb-4">
            {PROFILE_TEXT}
          </h1>
          <p className="text-3xl sm:text-lg text-center font-semibold max-w-2xl mx-auto">
            
          </p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6 mt-10">
          <Button>{BUTTON_TEXT_CONTACT}</Button>
          <Button className="flex items-center">
            {BUTTON_TEXT_DOWNLOAD_CV} <span className="ml-2 text-xl">⬇️</span>
          </Button>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}