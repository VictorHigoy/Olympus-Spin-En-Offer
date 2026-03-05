"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const futuraBold = localFont({
  src: "../../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

export default function FormUserLogin() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
    // Add your click logic here
  };

  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="relative">
        <Image
          width={167}
          height={247}
          className="w-[167px] sm:w-[267px] lg:w-[367px] h-auto"
          src="/images/first-row/classic-border.svg"
          alt="classic border"
        />

        <div className="absolute top-4 sm:top-6 lg:top-9 space-y-1 sm:space-y-2 lg:space-y-3 left-0 flex flex-col items-center w-full">
          <Image
            width={31.5}
            height={16.5}
            className="w-[31.5px] sm:w-[53px] lg:w-[73px] h-auto"
            src="/images/first-row/bp-9.svg"
            alt="bp 9"
          />
          <h2
            className={`${futuraBold.className} text-center uppercase text-[11px] sm:text-[14px] lg:text-[16px] leading-3 sm:leading-4 lg:leading-5 text-[#030302] tracking-wide`}
          >
            Enter your details <br /> to claim your
          </h2>

          <Image
            width={114.24}
            height={45.6}
            className="w-[114.24px] sm:w-[164px] lg:w-[214px] h-auto"
            src="/images/first-row/50-free-spins-bold.svg"
            alt="free spins bold"
          />

          {/* Inputs */}
          <div className="flex flex-col items-end space-y-1 sm:space-y-2 lg:space-y-3 mt-1">
            <input
              type="text"
              className="rounded-full text-black px-2 outline-gray-300 border-none bg-white h-[14.9px] sm:h-[22.35px] lg:h-[29.8px] w-[129.4px] sm:w-[194.1px] lg:w-[258.8px]"
            />
            <input
              type="text"
              className="rounded-full text-black px-2 outline-gray-300 border-none bg-white h-[14.9px] sm:h-[22.35px] lg:h-[29.8px] w-[129.4px] sm:w-[194.1px] lg:w-[258.8px]"
            />
            <input
              type="text"
              className="rounded-full text-black px-2 outline-gray-300 border-none bg-white h-[14.9px] sm:h-[22.35px] lg:h-[29.8px] w-[129.4px] sm:w-[194.1px] lg:w-[258.8px]"
            />
            <input
              type="text"
              className="rounded-full text-black px-2 outline-gray-300 border-none bg-white h-[14.9px] sm:h-[22.35px] lg:h-[29.8px] w-[129.4px] sm:w-[194.1px] lg:w-[258.8px]"
            />
            <input
              type="text"
              className="rounded-full text-black px-2 outline-gray-300 border-none bg-white h-[14.9px] sm:h-[22.35px] lg:h-[29.8px] w-[85.4px] sm:w-[100.3px] lg:w-[170.8px]"
            />
          </div>

          <button
            onClick={handleClick}
            className={`
        sm:mt-1 lg:mt-2 transform transition-transform duration-150 cursor-pointer
        ${clicked ? "scale-90" : "scale-100"} 
        focus:outline-none
      `}
          >
            <Image
              width={130.32}
              height={31.2}
              className="w-[130.32px] sm:w-[195.48px] lg:w-[260.64px] h-auto "
              src="/images/first-row/claim-button.svg"
              alt="claim button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
