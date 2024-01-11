import React from "react";

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x?.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function cookie() {
  return (
    <div id="myDIV">
      <div
        id="cookies-with-stacked-buttons"
        className="fixed bottom-0 end-0 z-[60] sm:max-w-sm w-full mx-auto p-6"
      >
        {/* Card */}
        <div className="p-4 bg-white/[.6] backdrop-blur-lg rounded-xl shadow-2xl dark:bg-slate-900/[.6] dark:shadow-black/[.7]">
          <div className="flex justify-between items-center gap-x-5 sm:gap-x-10">
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Cookie Settings
            </h2>
            <button
              type="button"
              className="inline-flex rounded-full p-2 text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600 dark:hover:bg-gray-800 dark:text-gray-300"
              data-hs-remove-element="#cookies-with-stacked-buttons"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="flex-shrink-0 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
            We use cookies to improve your experience and for marketing. Visit
            our{" "}
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              Cookies Policy
            </a>{" "}
            to learn more.
          </p>
          <div className="mt-5 mb-2 w-full flex gap-x-2">
            <div className="grid w-full">
              <button
                onClick={myFunction}
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Allow all
              </button>
            </div>
            <div className="grid w-full">
              <button
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Reject all
              </button>
            </div>
          </div>
          <div className="grid w-full">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Manage cookies
            </button>
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
}

export default cookie;
