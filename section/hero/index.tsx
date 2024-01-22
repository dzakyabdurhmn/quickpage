"use client";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Text from "@/components/textanimation";
import Image from "next/image";
import { name, description, heroImage } from "../../lib/info";
import anm from "../../assets/animation/pc.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import AnimationText from "../../components/textanimationHeader";
import Geser from "../icon/index";
// import ghostAnimation from "../../assets/animation/ghost.json";
import { Button } from "@/components/button";

import Spline from "@splinetool/react-spline";

// const satosi = localFont({
//   src: "../../public/fonts/JetBrainsMono-Medium.woff2",
// });
// const jeti = localFont({
//   src: "../../public/fonts/JetBrainsMono-ExtraBoldItalic.woff2",
// });
const FBlack = localFont({ src: "../../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({ src: "../../public/fonts/Friends-SemiBold.otf" });

function hero({ Component, pageProps }: any) {
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  };

  const ballStyle = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "white",
    borderRadius: "5rem",
    marginRight: "auto",
    marginLeft: "auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <div
              className={`"block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl  -mt-10" ${FBlack.className}`}
            >
              <AnimationText
                className="block text-6xl font-bold text-gray-800 sm:text-4xl lg:text-6xl  -mt-10"
                text={name}
              />
            </div>
            <p
              className={`mt-3 text-lg text-gray-800 dark:text-gray-400 ${FBlack.className}`}
            >
              {description}
            </p>
            <div className="mt-7 grid gap-3 w-full md:inline-flex z-30">
              <Button
                variant={"purple"}
                className={`py-9 px-16 inline-flex justify-center hover:scale-95 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  shadow-sm hover:bg-[#003F30] disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] ${FsemiBold.className}`}
              >
                1000+ trust member
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Lottie
              className="w-full hidden md:flex"
              style={{ width: 450 }}
              animationData={anm}
              loop={true}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default hero;
