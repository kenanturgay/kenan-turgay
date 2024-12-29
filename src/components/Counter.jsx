import React, { useState, useEffect } from "react";

export default function Counter() {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Sayfa yüklendiğinde sayacı artır
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="fixed top-0 right-0 lg:top-5 lg:right-5 bg-gray-800 text-white p-2 rounded-bl-lg lg:rounded-full shadow-lg z-50">
      <p className="text-sm lg:text-base">Visitors: {count}</p>
    </div>
  );
}