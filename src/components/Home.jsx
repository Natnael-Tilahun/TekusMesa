import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";

function Home() {
  return (
    <div className=" flex flex-col justify-center items-center px-5 lg:px-28 xl:px-52 w-screen">
      <Hero />
      <Pricing />
    </div>
  );
}

export default Home;
