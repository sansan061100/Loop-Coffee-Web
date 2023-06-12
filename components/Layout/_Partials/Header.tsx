import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
const CartMenu = dynamic(() => import("@/components/Cart/CartMenu"), {
  ssr: false,
});

export interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <div className="navbar flex justify-between items-center sticky border-b top-0 z-50 bg-base-100">
      <div>
        <label
          htmlFor="my-drawer"
          className="btn drawer-button  btn-ghost btn-circle"
        >
          <Bars3BottomLeftIcon className="h-6 w-6" />
        </label>
      </div>
      <div>
        {title && <a className="btn btn-ghost normal-case text-xl">{title}</a>}
        {children}
      </div>
      <div>
        <CartMenu />
      </div>
    </div>
  );
};

export default Header;
