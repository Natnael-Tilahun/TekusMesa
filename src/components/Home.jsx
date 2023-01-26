import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Services from "./Services";

function Home({ toggleMenu }) {
  return (
    <div
      className=" flex flex-col justify-center items-center px-5 lg:px-14 xl:px-40 w-screen"
      onClick={toggleMenu}
    >
      <Hero />
      <Services />
      <Pricing />
      <Subscribe />
      <Contact />
    </div>
  );
}

export default Home;
