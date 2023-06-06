import React from "react";

const Loading = () => {
  return (
    <div className="animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-5 flex  space-x-5 items-center">
          <div className="h-10 w-12 bg-gray-100 rounded-md" />
          <div className="w-full flex justify-between">
            <div className=" flex-1">
              <div className="h-4 w-1/2 bg-gray-100 rounded-md mt-2" />
              <div className="h-4 w-1/4 bg-gray-100 rounded-md mt-2" />
            </div>
            <div className="h-4 w-1/4 bg-gray-100 rounded-md mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
