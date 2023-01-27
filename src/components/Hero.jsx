import React from "react";
import { HashLink } from "react-router-hash-link";

function Hero() {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row w-full h-screen lg:h-[calc(100vh-80px)] mt-[80px]"
      id="hero"
    >
      <div className=" flex flex-col justify-center lg:basis-1/2">
        <h1 className="text-5xl text-center lg:text-left lg:text-7xl font-extrabold text-[#ed2e35]  py-5">
          ትኩሱን በሰዓቱ
        </h1>
        <h1 className="text-3xl font-black text-gray-600 text-left leading-[50px] pb-5">
          Easy way to eat
          <span className="text-[#ed2e35] text-4xl"> hot lunch </span>
          from your home.
          <span className="text-4xl text-gray-800"> Just wait food at</span>
          <span className="text-[#ed2e35] text-4xl"> your workplace.</span>
        </h1>
        <p className="text-gray-600 text-lg">
          We will deliver your hot lunch box from either your home or your
          chosen restaurant to your workplace on time.
        </p>
        <div className="flex flex-wrap gap-7 py-7">
          <HashLink
            to="/#subscribe"
            smooth
            className="w-full lg:w-48 bg-[#ed2e35] hover:bg-gray-900  transition-all duration-700 text-white rounded-md py-2 font-bold text-center"
          >
            Join Us
          </HashLink>
          <HashLink
            to="/#pricing"
            smooth
            className="w-full lg:w-48 border-2 border-red-300 hover:border-red-600 transition-all duration-700 text-[#ed2e35] rounded-md py-2 font-bold text-center"
          >
            See our Packages
          </HashLink>
        </div>

        {/* <h1 className="font-black text-5xl animate-pulse text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-gray-400">
          Coming Soon...
        </h1> */}
      </div>
      <div className="h-full w-full bg-hero_lg bg-no-repeat bg-contain bg-center flex lg:basis-1/2"></div>
    </section>
  );
}

export default Hero;
