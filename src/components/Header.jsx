import React, { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [collapseNav, setCollapseNav] = useState(true);
  const toggleMenu = () => {
    console.log(collapseNav);
    setCollapseNav((prevState) => !prevState);
  };
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: "-200%",
    },
  };

  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap py-6 px-5 lg:px-52 w-screen h-20 ">
        <div class="flex items-center flex-shrink-0 mr-6">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">Tekus Mesa</span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-black hover:border-red-400 hover:text-red-200 border-black "
            onClick={toggleMenu}
          >
            {collapseNav ? (
              <svg
                className="fill-current h-3 w-3 animate-[wiggle_3s_ease-in-out_infinite]"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            )}
          </button>
        </div>
        {/* <motion.div
          animate={!collapseNav ? "open" : "closed"}
          transition={{ duration: 0.7 }}
          variants={menuVariants}
          className="block px-4 py-3 w-full lg:flex lg:items-center lg:w-auto"
        > */}
        <div
          class={`w-full block lg:flex lg:items-center lg:w-auto  duration-500 ease-in-out transition-opacity  ${
            collapseNav ? "hidden" : "block"
          }`}
        >
          <div className="text-lg text-center">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-10"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-10"
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-6"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block text-center py-3 text-lg px-5 leading-none border rounded-lg border-white text-white font-bold lg:inline-block lg:mx-4  lg:py-2   hover:border-transparent hover:bg-white mt-4 lg:mt-0 bg-gradient-to-tr from-[#ed2e35] to-red-300"
            >
              Join Us
            </a>
          </div>
        </div>
        {/* </motion.div> */}
      </nav>
    </div>
  );
}

export default Header;
