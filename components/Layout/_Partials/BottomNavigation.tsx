import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BottomNavigation = () => {
  return (
    <div className="btm-nav opacity-1 border-t bg-white drop-shadow-xl">
      <Link href={"/app/home"} className="active">
        <MagnifyingGlassIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Explore</span>
      </Link>
      <button>
        <ShoppingBagIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Keranjang</span>
      </button>
      <button>
        <UserIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
