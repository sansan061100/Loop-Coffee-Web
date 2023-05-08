import React from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
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

  const isIphoneHasNotch = () => {
    // check if iphone has notch and stand alone mode
    if (typeof window === "undefined") return false;
    if (
      window.matchMedia("(display-mode: standalone)").matches &&
      window.matchMedia("(max-device-width: 414px)").matches &&
      window.matchMedia("(max-device-height: 896px)").matches
    ) {
      return true;
    }
    return true;
  };

  return (
    <div
      className={`btm-nav  pwa:fixed browser:lg:absolute opacity-1 border-t bg-white `}
    >
      <Link href={"/app/home"} className={`${isActive("/app/home")}  `}>
        <MagnifyingGlassIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Explore</span>
      </Link>
      <Link
        href={"/app/transaction"}
        className={`${isActive("/app/transaction")} `}
      >
        <ReceiptPercentIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Transaksi</span>
      </Link>
      <Link
        href={"/app/notification"}
        className={`${isActive("/app/notification")} `}
      >
        <BellIcon className="h-5 w-5" strokeWidth={2} />
        <span className="btm-nav-label text-sm">Notifikasi</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
