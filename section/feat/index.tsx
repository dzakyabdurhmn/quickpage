import React from "react";

function index() {
  return (
    <div>
      <>
        <section className="ClassName mt-20">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
              explore our awesome{" "}
              <span className="underline decoration-blue-500">Components</span>
            </h1>
            <p className="mt-4 text-gray-500 xl:mt-6 xl:w-1/3 leading-8 xl:text-lg xl:leading-9 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              quam voluptatibus
            </p>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-20 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-6    hover:dark:border-sky-400 rounded-3xl hover:scale-105 duration-100">
                <span className="inline-block text-blue-500 dark:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  elegant Dark Mode
                </h1>
                <p className="text-gray-500 text-sm leading-7 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
              <div className="p-8 space-y-6   hover:dark:border-sky-400 rounded-3xl hover:scale-105 duration-100">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </span>
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Easy to customiztions
                </h1>
                <p className="text-gray-500 text-sm leading-7 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
              <div className="p-8 space-y-6   hover:dark:border-sky-400 rounded-3xl hover:scale-105 duration-100">
                <span className="inline-block text-blue-500 dark:text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Simple &amp; clean designs
                </h1>
                <p className="text-gray-500 text-sm leading-7 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default index;
