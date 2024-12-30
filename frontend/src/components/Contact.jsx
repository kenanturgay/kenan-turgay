import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 sm:mt-24 text-white p-4">
      <div className="w-full sm:w-2/4 mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Contact Me
        </h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-700 text-white font-medium py-2 px-4 sm:py-2 sm:px-6 rounded-full shadow-md hover:bg-gray-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}