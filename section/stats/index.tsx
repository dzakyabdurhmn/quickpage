import React from "react";

function index() {
  return (
    <div>
      <section className="py-6 text-blue-900 sm:py-16">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row">
            <div className="pointer-events-none absolute -bottom-10 left-12 hidden h-24 w-24 rounded-full opacity-60 lg:block">
              {/* prettier-ignore */}
              <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="b" patternUnits="userSpaceOnUse" width={40} height={40} patternTransform="scale(0.5) rotate(0)"><rect x={0} y={0} width="100%" height="100%" fill="none" /><path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" strokeWidth={1} stroke="none" fill="currentColor" /></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" /></svg>
            </div>
            <div className="my-10 text-center sm:mt-20 lg:text-left">
              <p className="text-lg font-medium text-blue-600" />
              <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
                This Year's Growth
              </h2>
              <div className="mt-8">
                <button className="rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:mr-0">
              <div className="px-6 py-10">
                <div className="flex items-center">
                  <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                    <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200" />
                    <span className="relative">328</span>
                  </h3>
                  <span className="ml-3 text-base font-medium capitalize">
                    Great Achievements
                  </span>
                </div>
              </div>
              <div className="px-6 py-10">
                <div className="flex items-center">
                  <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                    <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200" />
                    <span className="relative">16</span>
                  </h3>
                  <span className="ml-3 text-base font-medium capitalize">
                    Graduations sponsored
                  </span>
                </div>
              </div>
              <div className="px-6 py-10">
                <div className="flex items-center">
                  <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                    <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200" />
                    <span className="relative">41+</span>
                  </h3>
                  <span className="ml-3 text-base font-medium capitalize">
                    jobs created
                  </span>
                </div>
              </div>
              <div className="px-6 py-10">
                <div className="flex items-center">
                  <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                    <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200" />
                    <span className="relative">99%</span>
                  </h3>
                  <span className="ml-3 text-base font-medium capitalize">
                    Happy Customers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
