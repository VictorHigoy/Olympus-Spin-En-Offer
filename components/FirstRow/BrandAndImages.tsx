import Image from "next/image";
import React from "react";

export default function BrandAndImages() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Logo */}
      <Image
        width={182.88}
        height={47.52}
        src="/images/first-row/Logo.svg"
        className="w-[182.88px] sm:w-[274.32px]  lg:w-[365.76px] h-auto sm:mb-5 lg:mb-5"
        alt="gates of olympus logo"
      />

      {/* Olympus Image */}
      <div className="relative left-5 sm:left-8 lg:left-11">
        <Image
          width={210}
          height={210}
          src="/images/first-row/Olympus.svg"
          className="w-[210px] sm:w-[301.68px] lg:w-[402.24px] h-auto"
          alt="gates of olympus"
        />

        {/* Free spins */}
        <div className="absolute bottom-3.5 left-6 sm:left-9 lg:left-10 lg:-bottom-4">
          <Image
            width={117.84}
            height={80.4}
            className="w-[117.84px] sm:w-[168.12px] lg:w-[234.48px] h-auto"
            src="/images/first-row/50-free-spins.svg"
            alt="50 free spins"
          />
        </div>

        {/* Emerald Red */}
        <div className="absolute top-4 left-3 sm:left-5 sm:top-6  lg:top-8">
          <Image
            width={24.72}
            height={24.96}
            className="w-[24.72px] sm:w-[36.84px] lg:w-[49.44px] h-auto"
            src="/images/first-row/emerald-red.svg"
            alt="emerald red"
          />
        </div>

        {/* Crown */}
        <div className="absolute top-7 sm:top-14 sm:left-55 lg:top-18 lg:left-72 left-36">
          <Image
            width={35.28}
            height={32.88}
            className="w-[35.28px] sm:w-[52.92px] lg:w-[70.56px] h-auto"
            src="/images/first-row/crown.svg"
            alt="crown"
          />
        </div>

        {/* 500x Icon */}
        <div className="absolute -left-8 sm:-left-10 sm:top-20 top-13 lg:-left-12 lg:top-27">
          <Image
            width={46}
            height={32.3}
            className="w-[46px] sm:w-[69px] lg:w-[92px] h-auto"
            src="/images/first-row/500x.svg"
            alt="500x icon"
          />
        </div>

        {/* Emerald Blue */}
        <div className="absolute -left-6 top-28 sm:-left-10 sm:top-42 lg:top-57 lg:-left-15">
          <Image
            width={30.5}
            height={32}
            className="w-[30.5px] sm:w-[45.25px] lg:w-[61px] h-auto"
            src="/images/first-row/emerald-blue.svg"
            alt="emerald blue"
          />
        </div>

        {/* 250x Icon */}
        <div className="absolute left-40 sm:left-58 sm:bottom-10.5 lg:left-75 lg:bottom-14 bottom-7.5">
          <Image
            width={52.5}
            height={37}
            className="w-[52.5px] sm:w-[78.75px] lg:w-[105px] h-auto"
            src="/images/first-row/250x.svg"
            alt="250x icon"
          />
        </div>
      </div>
    </div>
  );
}
