import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Header({ collapseNav, toggleMenu }) {
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
    // <div>
    <nav
      id="header"
      className="flex justify-between flex-wrap py-5 px-5 lg:px-28 xl:px-52 w-screen h-20 shadow-md shadow-gray-200 lg:shadow-none fixed left-0 bg-white opacity-100 z-50"
    >
      <HashLink
        to="/#"
        smooth
        onClick={() => {
          !collapseNav && toggleMenu();
        }}
      >
        <div className="flex items-center justify-center w-auto h-auto flex-shrink-0 mr-6 ">
          <img
            src="/4.png"
            alt="A logo that shows when a man deliver food on the motor cycle "
            className="w-14 h-14 bg-contain"
          />
          <span className="font-semibold text-xl tracking-tight">
            Tekus Mesa
          </span>
        </div>
      </HashLink>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black hover:border-red-400 hover:text-red-200 border-black "
          onClick={toggleMenu}
        >
          {collapseNav ? (
            <svg
              className="fill-current h-3 w-3 font-bold"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          ) : (
            <svg
              className="fill-current h-3 w-3 font-bold"
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
        className={`w-full block lg:flex lg:items-center lg:w-auto  duration-500 ease-in-out transition-opacity shadow-lg lg:shadow-none fixed lg:static top-20 left-0 bg-white opacity-100 -z-0  ${
          collapseNav ? "hidden" : "block"
        }`}
      >
        <div className="text-lg font-bold text-center">
          <HashLink
            to="/#"
            smooth
            onClick={toggleMenu}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-10  border-red-500 pr-2 transition-all duration-200 hover:border-r-4"
          >
            Home
          </HashLink>
          <HashLink
            to="/#services"
            smooth
            onClick={toggleMenu}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-10  border-red-500 pr-2 transition-all duration-200 hover:border-r-4"
          >
            Services
          </HashLink>
          <HashLink
            to="/#pricing"
            smooth
            onClick={toggleMenu}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-10  border-red-500 pr-2 transition-all duration-200 hover:border-r-4"
          >
            Pricing
          </HashLink>
          <HashLink
            to="/#responsive-header"
            smooth
            onClick={toggleMenu}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-10  border-red-500 pr-2 transition-all duration-200 hover:border-r-4"
          >
            Blog
          </HashLink>
          <HashLink
            to="/#contact"
            smooth
            onClick={toggleMenu}
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#ed2e35] text-gray-600 mr-6  border-red-500 pr-2 transition-all duration-200 hover:border-r-4"
          >
            Contact
          </HashLink>
        </div>
        <div>
          <HashLink
            to="/#subscribe"
            smooth
            onClick={toggleMenu}
            className="block text-center py-3 text-lg px-5 leading-none border rounded-lg border-white text-white font-bold lg:inline-block lg:mx-4  lg:py-2   hover:border-transparent hover:bg-white mt-4 lg:mt-0 bg-gradient-to-tr from-[#ed2e35] to-red-400  hover:from-red-500 hover:to-yellow-500"
          >
            Join Us
          </HashLink>
        </div>
      </div>
      {/* </motion.div> */}
    </nav>
    // </div>
  );
}

export default Header;
