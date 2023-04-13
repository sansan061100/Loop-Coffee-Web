import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Stepper = () => {
  const [count, setCount] = useState(1);

  const handleCounter = (type: "plus" | "minus") => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count > 1) {
        setCount((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="flex items-center space-x-5">
      <button
        className="btn btn-circle btn-primary btn-outline"
        onClick={() => handleCounter("minus")}
      >
        <MinusIcon className="h-5 w-5" />
      </button>
      <div>
        <h4 className="text-xl  font-bold">{count}</h4>
      </div>
      <button
        className="btn btn-circle btn-primary btn-outline"
        onClick={() => handleCounter("plus")}
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Stepper;
