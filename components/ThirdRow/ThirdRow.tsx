import localFont from "next/font/local";
import Image from "next/image";

const futuraBold = localFont({
  src: "../../fonts/Futura-Bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-futura-bold",
});

export default function ThirdRow() {
  return (
    <section
      className=" bg-no-repeat bg-top bg-cover -mt-2 sm:-mt-3 lg:-mt-4 xl:-mt-5.5  py-[17.22px] sm:py-[25.5px] pb-[30px] lg:py-[34px] sm:pb-[40px] lg:pb-[50px] xl:py-[50px]  xl:pb-25 px-2 lg:px-8"
      style={{ backgroundImage: "url('/images/BG/bottom-bg.svg')" }}
    >
      <div className="">
        <div className="space-y-3 flex flex-col items-center">
          <h2
            className={`${futuraBold.className} text-center text-[7.45px] sm:text-[11px] lg:text-[15px] tracking-widest uppercase text-[#583B25]`}
          >
            You can even become a multi-millionaire just like them:
          </h2>
          <div className="flex flex-row max-[400px]:flex-col gap-2 lg:gap-5">
            <div className="relative">
              <Image
                width={130}
                height={71.52}
                className="w-[130px] sm:w-[200px] lg:w-[300px] h-auto"
                src="/images/third-row/User-1.svg"
                alt="User 1"
              />
              <h1
                className={`${futuraBold.className} absolute bottom-[5px] sm:bottom-2 lg:bottom-3.5 left-1/2 -translate-x-1/2  w-full text-center text-[5.5px] sm:text-[8.25px] lg:text-[11px] font-normal text-white tracking-widest`}
              >
                Julie Chen RM 250,998
              </h1>
            </div>
            <div className="relative">
              <Image
                width={130}
                height={71.52}
                className="w-[130px] sm:w-[200px] lg:w-[300px] h-auto"
                src="/images/third-row/User-2.svg"
                alt="User 2"
              />
              <h1
                className={`${futuraBold.className} absolute bottom-[5px] sm:bottom-2 lg:bottom-3.5 left-1/2 -translate-x-1/2  w-full text-center text-[5.5px] sm:text-[8.25px] lg:text-[11px] font-normal text-white tracking-widest`}
              >
                Marky Yin RM 481,257
              </h1>
            </div>
            <div className="relative">
              <Image
                width={130}
                height={71.52}
                className="w-[130px] sm:w-[200px] lg:w-[300px] h-auto"
                src="/images/third-row/User-3.svg"
                alt="User 3"
              />
              <h1
                className={`${futuraBold.className} absolute bottom-[5px] sm:bottom-2 lg:bottom-3.5 left-1/2 -translate-x-1/2  w-full text-center text-[5.5px] sm:text-[8.25px] lg:text-[11px] font-normal text-white tracking-widest`}
              >
                Leonard Zeng RM 674,251
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
