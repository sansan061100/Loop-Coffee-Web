import { useRouter } from "next/router";
import React from "react";

interface Props {
  title?: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
const ListNavigation: React.FC<Props> = ({ title, icon, href, onClick }) => {
  const router = useRouter();
  const handleNavigation = () => {
    if (href) router.push(href);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleNavigation}
      className="px-5 py-4 w-full cursor-pointer hover:bg-gray-100 flex items-center space-x-5"
    >
      {icon}
      <div>
        <h5 className="text-gray-800">{title}</h5>
      </div>
    </button>
  );
};

export default ListNavigation;
