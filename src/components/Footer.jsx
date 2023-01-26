import React from "react";

function Footer({ toggleMenu }) {
  return (
    <section
      className="w-full flex flex-col  justify-between bg-[#000] text-white  m-0 px-10 lg:px-28 xl:px-52 py-6"
      onClick={toggleMenu}
      id="footer"
    >
      <div className="flex flex-wrap flex-col gap-5 md:flex-row justify-between pb-5">
        <div className="flex flex-col lg:flex-row items-center flex-shrink-0 mr-6">
          <img
            src="/7.png"
            alt="A logo that shows when a man deliver food on the motor cycle "
            className="w-32 h-32 bg-contain"
          />

          <span className="font-semibold text-xl tracking-tight">
            Tekus Mesa
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-extrabold text-lg uppercase py-3">Service Day</h1>
          <p className="text-gray-400"> Monday - Saturday</p>
          <p className="text-gray-400">Sunday - Off day</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-extrabold text-lg uppercase py-2">
            Get in touch
          </h1>
          <p>
            <i className="ri-phone-fill ri-lg text-[#ed2e35] pr-3"></i>{" "}
            <span className="text-gray-400">(+251) 933654654</span>
          </p>
          <p>
            <i className="ri-mail-fill ri-lg text-[#ed2e35] pr-3"></i>{" "}
            <span className="text-gray-400">support@tekusmesa.com</span>
          </p>
        </div>
      </div>
      <div className="text-gray-500 pt-5 border-t-[1px] border-gray-600 flex flex-wrap gap-5 justify-between">
        <div className="flex-shrink-0">
          © 2022 <span className="text-white">Tekus Mesa</span>. All Rights
          Reserved
        </div>
        <div className="flex text-white">
          <p className="pr-3">Follow: </p>
          <i className="ri-facebook-circle-fill text-[#ed2e35] ri-lg pr-2"></i>
          <i className="ri-telegram-fill ri-lg text-[#ed2e35] pr-2"></i>
          <i className="ri-mail-fill ri-lg text-[#ed2e35] pr-2"></i>
          <i className="ri-linkedin-box-fill ri-lg text-[#ed2e35] pr-2"></i>
          <i className="ri-youtube-fill ri-lg text-[#ed2e35] pr-2"></i>
          <i className="ri-twitter-fill ri-lg text-[#ed2e35] pr-0"></i>
        </div>
      </div>
    </section>
  );
}

export default Footer;
