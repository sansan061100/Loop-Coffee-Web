import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? "active" : "text-gray-400";
  };

  const [isHasNotch, setIsHasNotch] = useState(false);
  useEffect(() => {
    // check if iphone has notch and has gesture
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      const isIOS = userAgent.includes("iPhone");
      const hasNotch = window.screen.height >= 812;
      const hasGesture = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;
      if (isIOS && hasNotch && hasGesture) {
        setIsHasNotch(true);
      }
    }
  }, []);

  return (
    <div
      className={`btm-nav  pwa:fixed browser:lg:absolute opacity-1 border-t bg-white ${
        isHasNotch ? "mb-6" : ""
      }`}
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
    </div>
  );
};

export default BottomNavigation;
