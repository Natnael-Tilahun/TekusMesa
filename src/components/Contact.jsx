import React from "react";

function Contact() {
  return (
    <section
      className="w-full h-full flex flex-col gap-2 py-10 lg:flex-row justify-center items-center relative z-40"
      id="contact"
    >
      <div className="w-1/3 lg:w-1/4 h-1/3 lg:h-1/2 bg-pattern2 lg:block absolute left-0 top-0 opacity-20 -z-0"></div>
      <div className="flex flex-col items-center justify-center lg:basis-1/2 px-5 lg:px-16 z-50">
        {/* <div className='w-1/2 h-full bg-dot_reds'></div> */}
        <h1 className="text-3xl font-extrabold my-7 p-2 rounded-2xl border-b-8 border-red-600">
          Contact Us
        </h1>
        <p className="text-justify">
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the department email you'd like to contact below.
        </p>
      </div>

      {/* form inputs */}
      <div className="w-1/3 lg:w-1/4 h-1/2 lg:h-1/2 bg-pattern2 lg:block absolute right-0 bottom-0 -z-0 opacity-20 "></div>

      <form className="flex flex-col w-full items-start justify-start lg:basis-1/2 rounded px-5 py-5 z-50">
        <div className="mb-2 w-full">
          <label
            className="block text-gray-600 text-sm font-bold mb-2"
            for="username"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#ed2e35] focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-2 w-full">
          <label
            className="block text-gray-600 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-[#ed2e35] focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-2 w-full">
          <label
            className="block text-gray-600 text-sm font-bold mb-2"
            for="message"
          >
            What can we help you with?
          </label>
          <textarea
            name="message"
            id="message"
            cols=""
            rows="3"
            placeholder="Your message here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-[#ed2e35] focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex justify-start">
          <button
            className="bg-[#ed2e35] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-dashed focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
