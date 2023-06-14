import React from "react";

const LoadingDetail = () => {
  return (
    <div className="animate-pulse">
      <div className="h-72 w-full bg-gray-100" />
      <div className="mt-5 px-5">
        <div className="h-4 mb-3 w-2/5 bg-gray-100 mt-5 rounded-sm" />
        <div className="h-4 w-5/5 bg-gray-100 mt-2 rounded-sm" />
      </div>
      <div className="h-10 w-full bg-gray-100 mt-5" />

      {/* // producct loading */}
      <div className="mt-5 space-y-5">
        {new Array(3).fill(0).map((_, i) => (
          <div key={i} className="flex flex-row">
            <div className="mt-5 space-y-3 px-5 flex-1">
              <div className="h-4 w-4/5 bg-gray-100 rounded-sm" />
              <div className="h-4 w-2/5 bg-gray-100 mt-2 rounded-sm" />
            </div>
            <div className="h-20 w-20 bg-gray-100 mr-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingDetail;
