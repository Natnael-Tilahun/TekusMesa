import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="w-full py-16">
      <header class="text-center">
        <h3 class="text-5xl font-bold mb-5 text-gray-900">Our Pricing Plan</h3>
        <p class="text-xl text-gray-400 mb-2">
          Flexible offers, adopted to your needs.
        </p>
        <p class="text-xl font-bold text-gray-500">
          The right price for you, whoever you are
        </p>
      </header>
      <div class="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 xl:space-x-20 md:mx-0 justify-between">
        {/* Pricing one for students */}
        <div class="flex-1 transition transform duration-300 hover:scale-110">
          <div class="bg-gray-300 p-10 rounded-lg">
            <div class="flex justify-between items-center">
              <div>
                <h4 class="text-2xl font-bold text-gray-900">
                  Student (Basic)
                </h4>
                <p class="text-xs text-gray-500">Most Popular</p>
              </div>
              <div>
                <div class="bg-gray-100 p-2 rounded-lg text-center">
                  <h4 class="text-2xl font-bold text-gray-900">250</h4>
                  <p class="text-xs text-gray-500">Per month</p>
                </div>
              </div>
            </div>
            <hr class="text-gray-100 mt-5" />
            {/* <!-- START LIST SECTION--> */}
            <div class="mt-10">
              <ul role="list" class="space-y-4">
                <li class="flex items-center">
                  <div class="bg-black rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-black">
                    Deliver you lunch on time
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-black rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-black">
                    Custom permissions
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-black rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-black">
                    Custom help desk
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-gray-700 rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-gray-700">
                    Unlimited updates
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-gray-700 rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-gray-700">
                    Return your lunch box to your home
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- END LIST SECTION--> */}
            <div class="mt-10">
              <button class="bg-[#ed2e35] text-lg text-white w-full py-3 rounded-lg">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Pricing two, ultimate for both */}
        <div class="flex-1 transition transform duration-300 hover:scale-110">
          <div class="bg-black p-10 rounded-lg">
            <div class="flex justify-between items-center">
              <div>
                <h4 class="text-2xl font-bold text-white">Ultimate</h4>
                <p class="text-xs text-gray-300">Recommended</p>
              </div>
              <div>
                <div class="bg-gray-700 p-2 rounded-lg text-center">
                  <h4 class="text-2xl font-bold text-white">500</h4>
                  <p class="text-xs text-gray-300">Per month</p>
                </div>
              </div>
            </div>
            <hr class="text-gray-800 mt-5" />
            {/* <!-- START LIST SECTION--> */}
            <div class="mt-10">
              <ul role="list" class="space-y-4">
                <li class="flex items-center">
                  <div class="bg-white rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-indigo-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-white">
                    Deliver you lunch on time
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-white rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-indigo-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-white">
                    Return your lunch box to your home
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-white rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-indigo-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-white">
                    Custom help desk
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-gray-500 rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-indigo-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-gray-500">
                    Unlimited updates
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-gray-500 rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-indigo-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-gray-500">
                    Superpower and much more
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- END LIST SECTION--> */}
            <div class="mt-10">
              <button class="bg-[#ed2e35] text-lg text-white w-full py-3 rounded-lg">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Pricing three for professionals  */}
        <div class="flex-1 transition transform duration-300 hover:scale-110">
          <div class="bg-gray-300 p-10 rounded-lg">
            <div class="flex justify-between items-center">
              <div>
                <h4 class="text-2xl font-bold text-gray-900">
                  Professional (Basic)
                </h4>
                <p class="text-xs text-gray-500">For you</p>
              </div>
              <div>
                <div class="bg-gray-100 p-2 rounded-lg text-center">
                  <h4 class="text-2xl font-bold text-gray-900">350</h4>
                  <p class="text-xs text-gray-500">Per month</p>
                </div>
              </div>
            </div>
            <hr class="text-gray-100 mt-5" />
            {/* <!-- START LIST SECTION--> */}
            <div class="mt-10">
              <ul role="list" class="space-y-4">
                <li class="flex items-center">
                  <div class="bg-black rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-black">
                    Deliver you lunch on time
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-black rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-black">
                    Custom permissions
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-black rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-black">
                    Custom help desk
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-gray-700 rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-gray-700">
                    Return your lunch box to your home
                  </span>
                </li>
                <li class="flex items-center">
                  <div class="bg-gray-700 rounded-full p-1">
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <span class="ml-3 text-base text-gray-700">
                    Superpower and much more
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- END LIST SECTION--> */}
            <div class="mt-10">
              <button class="bg-[#ed2e35] text-lg text-white w-full py-3 rounded-lg">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
