import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVisitorCount, incrementVisitorCount } from "../services/store";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sunucudan mevcut sayacı al
    dispatch(fetchVisitorCount());

    // Sayfa yüklendiğinde sayacı artır
    dispatch(incrementVisitorCount());
  }, [dispatch]);

  return (
    <div className="fixed top-0 right-0 lg:top-5 lg:right-5 bg-gray-800 text-white p-2 rounded-bl-lg lg:rounded-full shadow-lg z-50">
      <p className="text-sm lg:text-base">Visitors: {count}</p>
    </div>
  );
}