import React from "react";

const LoadingDetail = () => {
  return (
    <div className="animate-pulse">
      <div className="py-5 space-y-4 border-b">
        <div className="px-5 flex space-x-5">
          <div className="h-5 w-5 bg-gray-100" />
          <div className="w-2/4 h-5 bg-gray-100" />
        </div>
        <div className="px-5 flex space-x-5">
          <div className="h-5 w-5 bg-gray-100" />
          <div className="w-2/4 h-5 bg-gray-100" />
        </div>
        <div className="px-5 flex space-x-5">
          <div className="h-5 w-5 bg-gray-100" />
          <div className="w-3/4 h-5 bg-gray-100" />
        </div>
      </div>
      <div className="p-5 space-y-5">
        <div className=" flex justify-between">
          <div className="w-2/4 h-5 bg-gray-100" />
          <div className="w-1/4 h-5 bg-gray-100" />
        </div>
        <div className=" flex justify-between">
          <div className="w-2/4 h-5 bg-gray-100" />
          <div className="w-1/4 h-5 bg-gray-100" />
        </div>
        <div className=" flex justify-between">
          <div className="w-2/4 h-5 bg-gray-100" />
          <div className="w-1/4 h-5 bg-gray-100" />
        </div>
        <div className=" flex justify-between">
          <div className="w-2/4 h-5 bg-gray-100" />
          <div className="w-1/4 h-5 bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default LoadingDetail;
