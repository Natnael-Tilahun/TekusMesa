import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Subscribe() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const notify = () => {
    toast.success(
      "Thank you for reaching out to us. We will contact you very soon."
    );
  };

  const onSubmit = (data) => {
    console.log(data);
    notify();
    reset();
  };

  return (
    <section
      className="w-screen h-60  flex flex-col lg:flex-row lg:items-center justify-center px-10 py-5 lg:py-0 gap-5 lg:mt-80px] lg:px-14 xl:px-40  bg-[#ed2e35]"
      id="subscribe"
    >
      <div className="lg:basis-1/2 lg:text-2xl text-lg">
        <h1 className="text-white font-bold text-3xl">Newsletter </h1>
        <p className="text-gray-200 whitespace-nowrap">
          Stay tune and get the latest update
        </p>
      </div>
      <form
        className="flex lg:basis-1/2 lg:px-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="shadow appearance-none  rounded w-full py-3 px-3 text-gray-700  leading-tight focus:border-[#ed2e35] border-r-0 rounded-r-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter mail address"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <p className="text-sm text-gray-100 py-2">
            {errors.email?.type === "required" && "Email is required."}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format."}
          </p>
        </div>
        <button
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold max-h-11 py-2 px-10 rounded focus:outline-none focus:shadow-outline border-l-0 rounded-l-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Subscribe;
