import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import CartMenu from "@/components/Cart/CartMenu";

export interface HeaderProps {
  title?: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="navbar sticky border-b top-0 z-50 bg-base-100">
      <div className="navbar-start">
        <button className="btn  btn-ghost btn-circle">
          <Bars3BottomLeftIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      <div className="navbar-end">
        <CartMenu />
      </div>
    </div>
  );
};

export default Header;
