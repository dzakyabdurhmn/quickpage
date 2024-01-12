import React from "react";

function index() {
  return (
    <div>
      {/* Features */}
      <div className="overflow-hidden">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
              Solo, agency or team? We’ve got you covered.
            </h2>
          </div>
          {/* End Title */}
          <div className="relative xl:w-10/12 xl:mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div>
                {/* Card */}
                <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Professional
                  </h3>
                  <div className="text-sm text-gray-500">
                    Everything a small team needs.
                  </div>
                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">
                      $18
                    </span>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      .00
                    </span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                  </div>
                  <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Up to 10 people
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Collect data
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Code extensibility
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Custom reports
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Product support
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="h-5 w-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500">Cancel anytime.</p>
                      <p className="text-sm text-gray-500">No card required.</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </div>
              <div>
                {/* Card */}
                <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Teams
                  </h3>
                  <div className="text-sm text-gray-500">
                    For growing businesses.
                  </div>
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-gray-800">
                    Most popular
                  </span>
                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">
                      $36
                    </span>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      .99
                    </span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                  </div>
                  <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Up to 10 people
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Collect data
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Code extensibility
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                    {/* List */}
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Custom reports
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Product support
                        </span>
                      </li>
                      <li className="flex space-x-3">
                        <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                          <svg
                            className="flex-shrink-0 h-3.5 w-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          Activity reporting
                        </span>
                      </li>
                    </ul>
                    {/* End List */}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500">Cancel anytime.</p>
                      <p className="text-sm text-gray-500">No card required.</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </div>
            </div>
            {/* End Grid */}
            {/* SVG Element */}
            <div className="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-16">
              <svg
                className="w-16 h-auto text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
            {/* SVG Element */}
            <div className="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
              <svg
                className="w-56 h-auto text-cyan-500"
                width={347}
                height={188}
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth={7}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
          <div className="mt-7 text-center">
            <p className="text-xs text-gray-400">
              Prices in USD. Taxes may apply.
            </p>
          </div>
        </div>
      </div>
      {/* End Features */}
      {/* Comparison Table */}
      <div className="relative">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Compare plans
            </h2>
          </div>
          {/* Header */}
          <div className="hidden lg:block sticky top-0 start-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
            {/* Grid */}
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-2">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Features
                </span>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <p className="mt-2 text-sm text-gray-500">Free forever</p>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  $39 per month billed annually
                </p>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  $89 per month billed annually
                </p>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  $149 per month billed annually
                </p>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Header */}
          {/* Section */}
          <div className="space-y-4 lg:space-y-0">
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  General
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Number of seats
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    1
                  </span>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    Up to 3
                  </span>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    Up to 10
                  </span>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    Unlimited
                  </span>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Storage
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    15 GB
                  </span>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    1 TB
                  </span>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    15 TB
                  </span>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    Unlimited
                  </span>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Email sharing
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Any time, anywhere access
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
          </div>
          {/* End Section */}
          {/* Section */}
          <div className="mt-6 space-y-4 lg:space-y-0">
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Financial data
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Open/High/Low/Close
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Price-volume difference indicator
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
          </div>
          {/* End Section */}
          {/* Section */}
          <div className="mt-6 space-y-4 lg:space-y-0">
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  On-chain data
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Network growth
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Average token age consumed
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Exchange flow
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Total ERC20 exchange funds flow
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Transaction volume
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Total circulation (beta)
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Velocity of tokens (beta)
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  ETH gas used
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
          </div>
          {/* End Section */}
          {/* Section */}
          <div className="mt-6 space-y-4 lg:space-y-0">
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 lg:py-3">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Social data
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
              {/* Item */}
              <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Dev activity
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Topic search
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
            {/* List */}
            <ul className="grid lg:grid-cols-6 lg:gap-6">
              {/* Item */}
              <li className="lg:col-span-2 pb-1.5 lg:py-3">
                <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                  Relative social dominance
                </span>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Free
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Startup
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Team
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
              {/* Item */}
              <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                  <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                    Enterprise
                  </span>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </li>
              {/* End Item */}
            </ul>
            {/* End List */}
          </div>
          {/* End Section */}
          {/* Header */}
          <div className="hidden lg:block mt-6">
            {/* Grid */}
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-2"></div>
              {/* End Col */}
              <div className="col-span-1">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Get started
                </a>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Get started
                </a>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Get started
                </a>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Get started
                </a>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Header */}
          {/* Button Group */}
          <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need a custom plan?
            </p>
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Contact us
            </button>
          </div>
          {/* End Button Group */}
        </div>
      </div>
      {/* End Comparison Table */}
    </div>
  );
}

export default index;
