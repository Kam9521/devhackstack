import React from "react";
export function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      {children}
    </div>
  );
}
export function CardContent({ children }) {
  return <div className="mt-2 text-gray-800">{children}</div>;
}
