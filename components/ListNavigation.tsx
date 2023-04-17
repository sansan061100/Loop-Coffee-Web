import Link from "next/link";
import React from "react";

interface Props {
  title?: string;
  icon: React.ReactNode;
  href?: string;
}
const ListNavigation: React.FC<Props> = ({ title, icon, href }) => {
  return (
    <Link href={href ?? "#"}>
      <div className="px-5 py-4 cursor-pointer hover:bg-gray-100 flex items-center space-x-5">
        {icon}
        <div>
          <h5 className="text-gray-800">{title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ListNavigation;
