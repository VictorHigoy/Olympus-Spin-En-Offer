import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div
      className="flex items-center justify-center flex-col min-h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/BG/Layer-1-Bg.svg')" }}
    >
      <Image
        width={182.88}
        height={47.52}
        src="/images/first-row/Logo.svg"
        className="w-[182.88px] sm:w-[274.32px]  lg:w-[365.76px] h-auto sm:mb-5 lg:mb-5"
        alt="gates of olympus logo"
      />
      <div className="sm:h-10 w-5 h-5 sm:w-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
