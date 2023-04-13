import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? "active" : "text-gray-400";
  };

  return (
    <div className="btm-nav absolute opacity-1 border-t bg-white drop-shadow-xl">
      <Link href={"/app/home"} className={`${isActive("/app/home")}  `}>
        <MagnifyingGlassIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Explore</span>
      </Link>
      <Link href={"/app/cart"} className={`${isActive("/app/cart")} `}>
        <ShoppingCartIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Keranjang</span>
      </Link>
      <Link href={"/app/profile"} className={`${isActive("/app/profile")} `}>
        <UserIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Profile</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
