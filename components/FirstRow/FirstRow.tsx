import BrandAndImages from "./BrandAndImages";
import FormUserLogin from "./FormUserLogin";

export default function FirstRow() {
  return (
    <section
      className="bg-no-repeat bg-cover py-[24.5px] bg-top sm:py-16 lg:py-24 px-2"
      style={{ backgroundImage: "url('/images/BG/Layer-1-Bg.svg')" }}
    >
      <div className="max-w-[460.8px] sm:max-w-162.5 lg:max-w-218.75 flex flex-row max-[400px]:flex-col justify-center gap-10 sm:gap-0 sm:justify-between mx-auto ">
        {/* First Column */}
        <BrandAndImages />

        {/* Second Column */}
        <FormUserLogin />
      </div>
    </section>
  );
}
