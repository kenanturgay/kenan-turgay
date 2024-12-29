import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../services/store.js";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sayfa yüklendiğinde sayacı artır
    dispatch(increment());
  }, [dispatch]);

  return (
    <div className="fixed top-0 right-0 lg:top-5 lg:right-5 bg-gray-800 text-white p-2 rounded-bl-lg lg:rounded-full shadow-lg z-50">
      <p className="text-sm lg:text-base">Visitors: {count}</p>
    </div>
  );
}