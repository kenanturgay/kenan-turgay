import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-700 text-white font-medium py-2 px-4 sm:py-2 sm:px-6 rounded-full shadow-md hover:bg-gray-600 transition-all ${className}`}
    >
      {children}
    </button>
  );
}