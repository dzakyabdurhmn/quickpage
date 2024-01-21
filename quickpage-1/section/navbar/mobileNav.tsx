"use client";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Icons } from "@/components/icon";
import dynamic from "next/dynamic";
import { Button } from "@/components/button";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
const NoSSR = dynamic(() => import("./hamburger"), { ssr: false });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div className="-mb-60 -z-0 ">
      <div className="flex justify-between bg-white w-screen  -mt-4 ">
        <div className="text-red-500 mt-5 ml-3">
          <Icons.icong />
        </div>
        <div className="mr-12">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <NoSSR />
          </motion.button>
        </div>
      </div>
      <nav ref={scope}>
        <ul
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
          className="bg-white  text-center   space-y-2"
        >
          {/* <div className="justify-between flex flex-col  w-screen">
            <div className="space-y-5 mt-4">
              <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600 ">
                Beranda
              </li>
              <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600">
                Tentang Kami
              </li>
              <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600">
                Layanan
              </li>
              <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600">
                Kontak
              </li>
              <li>
                <Button className="px-28 py-10 mb-[20px]" variant={"purple"}>
                  Get Started
                </Button>
              </li>
            </div>
          </div> */}
          <div className="text-black flex flex-col space-y-4 -z-0">
            <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600 ">
              Beranda
            </li>
            <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600">
              Tentang Kami
            </li>
            <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600">
              Layanan
            </li>
            <li className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600">
              Kontak
            </li>
            <li>
              <Button
                className="px-28 py-10 mb-[20px] min-w-[80%]"
                variant={"purple"}
              >
                Get Started
              </Button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
