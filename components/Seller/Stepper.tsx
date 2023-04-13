import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Stepper = () => {
  return (
    <div className="flex items-center space-x-5">
      <button className="btn btn-circle btn-primary btn-outline">
        <MinusIcon className="h-5 w-5" />
      </button>
      <div>
        <h4 className="text-xl  font-bold">1</h4>
      </div>
      <button className="btn btn-circle btn-primary btn-outline">
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Stepper;
