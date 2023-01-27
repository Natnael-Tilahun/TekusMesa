import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  // const NODE_ENV = process.env.NODE_ENV;
  const YOUR_SERVICE_ID = "service_ooam44u";
  const YOUR_TEMPLATE_ID = "template_g0arq1v";
  const YOUR_PUBLIC_KEY = "__i-jycM1GtKOAT84";

  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    sendEmail();
    reset();
    toast.success(
      "Thank you for reaching out to us. We will contact you very soon."
    );
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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

      <form
        className="flex flex-col w-full items-start justify-start lg:basis-1/2 rounded px-5 py-5 z-50"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-2 w-full">
          <label
            className="block text-gray-600 text-sm font-bold mb-2"
            htmlFor="user_name"
          >
            Name
          </label>
          <input
            name="user_name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#ed2e35] focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Name"
            {...register("user_name", { required: true, maxLength: 80 })}
          />
          <p className="text-sm text-red-500 py-2">
            {errors.user_name?.type === "required" && "Name is required."}
            {errors.user_name?.type === "maxLength" &&
              "Entered name is more than 80 character."}
          </p>
        </div>
        <div className="mb-2 w-full">
          <label
            className="block text-gray-600 text-sm font-bold mb-2"
            htmlFor="user_email"
          >
            Email
          </label>
          <input
            name="user_email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-[#ed2e35] focus:outline-none focus:shadow-outline"
            id="email"
            type=""
            placeholder="Email"
            {...register("user_email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <p className="text-sm text-red-500 pb-3">
            {errors.user_email?.type == "required" && "Email is required."}
            {errors.user_email?.type == "pattern" &&
              "Entered email is in wrong format."}
          </p>
        </div>
        <div className="mb-2 w-full">
          <label
            className="block text-gray-600 text-sm font-bold mb-2"
            htmlFor="message"
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
            {...register("message", { required: true, minLength: 15 })}
          ></textarea>
          <p className="text-sm text-red-500 pb-3">
            {errors.message?.type === "required" && "Your message is required."}
            {errors.message?.type === "minLength" &&
              "Entered message is less than 15 character."}
          </p>
        </div>
        <div className="flex justify-start">
          <button
            className="bg-[#ed2e35] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-dashed focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}

export default Contact;
