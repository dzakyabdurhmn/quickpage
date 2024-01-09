"use client";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Text from "@/components/textanimation";
import Image from "next/image";
import { name, description, heroImage } from "../../lib/info";
import Lottie from "lottie-react";
// import ghostAnimation from "../../assets/animation/ghost.json";
import { Button } from "@/components/button";
const FBlack = localFont({ src: "../../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({ src: "../../public/fonts/Friends-SemiBold.otf" });

function hero({ Component, pageProps }: any) {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          {/* <div className="relative ms-4">
            <Image
              className="w-full rounded-md hidden md:flex"
              src={heroImage}
              alt="wswsw"
            />
          </div> */}
          <div>
            <h1
              className={`"block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight -mt-10" ${FBlack.className}`}
            >
              {name}
            </h1>
            <p
              className={`mt-3 text-lg text-gray-800 dark:text-gray-400 ${FNormal.className}`}
            >
              {description}
            </p>
            <div className="mt-7 grid gap-3 w-full md:inline-flex">
              {/* <Link
                className={`py-3 px-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${FsemiBold.className}`}
                href="#"
              >
                Register sekarang
              </Link> */}
              <Button
                variant={"purple"}
                className={`py-5 px-16 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${FsemiBold.className}`}
              >
                Get ssss
              </Button>
            </div>
          </div>
          <div className="relative ms-4">
            <Image
              className="w-full rounded-md hidden md:flex"
              width={100}
              height={50}
              src={heroImage}
              alt="wswsw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
