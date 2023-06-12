import React from "react";

const Loading = () => {
  return (
    <div className="animate-pulse space-y-5">
      {new Array(3).fill(0).map((_, i) => (
        <div key={i}>
          <div className="h-32 bg-gray-100 w-full" />
          <div className="mt-5 space-y-3 px-5">
            <div className="h-4 w-4/5 bg-gray-100 rounded-sm" />
            <div className="h-4 w-2/5 bg-gray-100 mt-2 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
