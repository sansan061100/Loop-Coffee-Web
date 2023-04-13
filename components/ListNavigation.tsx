import React from "react";

interface Props {
  title?: string;
  icon: React.ReactNode;
}
const ListNavigation: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className="px-5 py-4 border-b flex items-center space-x-5">
      {icon}
      <div>
        <h5 className="text-gray-500">{title}</h5>
      </div>
    </div>
  );
};

export default ListNavigation;
