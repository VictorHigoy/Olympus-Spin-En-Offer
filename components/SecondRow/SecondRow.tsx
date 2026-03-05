"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";

const futuraBold = localFont({
  src: "../../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

export default function SecondRow() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
    // Add your click logic here
  };

  return (
    <section
      className="-mt-2 z-20 relative bg-no-repeat bg-top bg-cover sm:bg-contain sm:bg-repeat py-[17.22px] sm:py-[25.5px] lg:py-[34px] xl:py-[100px] px-8"
      style={{ backgroundImage: "url('/images/BG/Third-BG.svg')" }}
    >
      <div className=" mx-auto">
        <div className="flex flex-col items-center">
          <h2
            className={`${futuraBold.className} text-center text-[7.45px] sm:text-[11px] lg:text-[15px] tracking-widest uppercase text-white`}
          >
            Deposit a minimum of rm10 and get
          </h2>
          <Image
            width={200}
            height={16.8}
            className="w-[200px] sm:w-[300px] lg:w-[400px] h-auto"
            src="/images/second-row/50-FREE-SPINS.svg"
            alt="Phone with game"
          />
          <h2
            className={`${futuraBold.className} text-center text-[7.45px] sm:text-[11px] lg:text-[15px] tracking-widest uppercase text-white`}
          >
            Stand a chance to win huge jackpots!
          </h2>

          <p
            className={`${futuraBold.className} mt-2 text-center text-[7.45px] sm:text-[11px] lg:text-[15px] tracking-wider text-white`}
          >
            The bonus will be instantly credited into your account, <br />
            Grab this chance and play now!
          </p>
          <Image
            width={240}
            height={105}
            className="w-[240px] sm:mt-1 lg:mt-2 sm:w-[360px] lg:w-[480px] h-auto"
            src="/images/second-row/Phone.svg"
            alt="Phone with game"
          />
          <button
            onClick={handleClick}
            className={`
                   transform transition-transform duration-150 cursor-pointer
                  ${clicked ? "scale-90" : "scale-100"} 
                  focus:outline-none
                `}
          >
            <Image
              width={130.32}
              height={31.2}
              className="w-[130.32px] mt-2 sm:mt-3 lg:mt-4 mb-1 sm:w-[195.48px] lg:w-[260.64px] h-auto "
              src="/images/first-row/claim-button.svg"
              alt="claim button"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
