import React from "react";
import { ABOUT_ME_TITLE, ABOUT_ME_DESCRIPTION } from "../assets/constant";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
      <div className="w-full sm:w-2/4 mt-6 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {ABOUT_ME_TITLE}
        </h1>
        <p className="text-base sm:text-lg text-center font-semibold max-w-2xl mx-auto">
          <em>
            {ABOUT_ME_DESCRIPTION.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </em>
        </p>
      </div>
    </div>
  );
}