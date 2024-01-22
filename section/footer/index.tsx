import React from "react";
import Button from "../../components/button-say";
function index() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Bergabunglah sekarang
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Menjadi salah satu penerus bangsa yang paham akan agama
            </p>

            <div className="mt-10">
              <a
                href="https://discord.gg/kmbAVrR34N"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                  Selamat datang
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Button Text
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>

            <div className="mt-6"></div>
          </div>
        </div>
      </footer>
      <p className="text-center mb-10">Copyright © by dzaky abdurrahman</p>
    </div>
  );
}

export default index;
