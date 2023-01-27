import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="w-full flex flex-col justify-center pt-[90px] shadow-md md:shadow-none"
    >
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl text-[#ed2e35]">What we serve</p>
        <h3 className="text-3xl font-bold text-center text-gray-800">
          Just sit back at your{" "}
          <span className="text-[#ed2e35]">workplace</span>
        </h3>
        <h3 className="text-4xl font-bold text-gray-800">
          we will <span className="text-[#ed2e35]">take care</span>
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-16">
        <div className="flex flex-col items-center px-10">
          <img
            src="/service-01.webp"
            alt="Service one image"
            className="w-32"
          />
          <h1 className="text-2xl font-bold text-gray-900 py-3">
            Quick Delivery
          </h1>
          <p className="text-lg text-gray-500 text-center">
            We will delivery your lunch box on time at your workplace
          </p>
        </div>
        <div className="flex flex-col items-center px-5">
          <img
            src="/service-02.webp"
            alt="Service one image"
            className="w-32"
          />
          <h1 className="text-2xl font-bold text-gray-900 py-3">
            Super Dine In
          </h1>
          <p className="text-lg text-gray-500 text-center">
          You will eat fresh and hot lunch at your workplace
          </p>
        </div>
        <div
          className="flex flex-col items-center px-5
        "
        >
          <img
            src="/service-03.webp"
            alt="Service one image"
            className="w-32"
          />
          <h1 className="text-2xl font-bold text-gray-900 py-3">
            Easy Pick Up
          </h1>
          <p className="text-lg text-gray-500 text-center">
            We will deliver to your workplace door, easy to pick up.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
