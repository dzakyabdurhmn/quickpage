"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./menu.module.scss";
import "./responsive.css";
import Lottie from "lottie-react";
import localFont from "next/font/local";
import { featureContent, lottie } from "@/lib/info";
import {
  FileTextIcon,
  UploadIcon,
  ChatBubbleIcon,
  LinkBreak2Icon,
} from "@radix-ui/react-icons";
import Text from "../../components/textanimation";
import { motion } from "framer-motion";
import IconAnimation from "./scale-icon";
const FBlack = localFont({ src: "../../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({ src: "../../public/fonts/Friends-SemiBold.otf" });

function menu() {
  const menu = featureContent();
  return (
    <div className="justify-center items-center flex mt-10">
      <div className="bg-[#B9A0FF]  text-[#fff] rounded-3xl roundedNone">
        <div className="m-12">
          <div className="flex">
            <div className="flex flex-col  whitespace-normal max-w-[1200px]">
              <h1
                className={`whitespace-normal mb-2 text-yellow-400 max-w-[400px] ${FsemiBold.className}`}
              >
                {menu[0].header}
              </h1>
              <h1
                className={`text-3xl 2xl:text-sm font-semibold  whitespace-normal mb-3 max-w-[400px] ${FBlack.className}`}
              >
                {menu[0].heading}
              </h1>
              <p
                className={`mt-4 whitespace-normal max-w-[400px] ${FNormal.className}`}
              >
                {menu[0].description}
              </p>
            </div>

            <Lottie
              className="ml-24 hidden sm:block md:block lg:block"
              animationData={lottie}
              loop={true}
              style={{ height: 300 }}
            />
          </div>
          <div className="mt-20">
            <Tabs.Root
              className="flex flex-col max-w-[600px]"
              defaultValue="sendassignment"
            >
              <Tabs.List
                className={`flex  rounded-xl bg-white  flex-col md:flex-row  m-3 px-3 py-2 -ml-2 mr-2 ${FsemiBold.className} `}
                aria-label="Manage your account"
              >
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="sendassignment"
                >
                  {menu[1].label}
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="notation"
                >
                  {menu[2].label}
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="discussion"
                >
                  {menu[3].label}
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="connected"
                >
                  {menu[4].label}
                </Tabs.Trigger>
              </Tabs.List>
              <div className="mt-3">
                <Tabs.Content value="sendassignment">
                  <div className="text-white mt-8">
                    <div className="flex flex-col">
                      <div className="bg-yellow-400 px-3 py-3 max-w-14 rounded-full">
                        {/* <motion.div
                          // className="box"
                          animate={{
                            scale: [0.1, 0.5, 0.7, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                          }}
                        >
                          <UploadIcon width={30} height={30} />
                        </motion.div> */}
                        <IconAnimation>
                          <UploadIcon width={30} height={30} />
                        </IconAnimation>
                      </div>
                      <div className="mt-3 text-start">
                        <p className="text-yellow-400"> {menu[1].label}</p>
                        <h1 className="mt-3 -mb-2 font-semibold">
                          <Text text={menu[3].title} />
                        </h1>
                        <p className="mt-3">{menu[1].content}</p>
                      </div>
                    </div>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="notation">
                  <div className="text-white">
                    <div className="text-white mt-8">
                      <div className="flex flex-col">
                        <div className="bg-yellow-400 px-3 py-3 max-w-14 rounded-full">
                          <IconAnimation>
                            <FileTextIcon width={30} height={30} />
                          </IconAnimation>
                        </div>
                        <div className="mt-3 text-start">
                          <p className="text-yellow-400">{menu[2].label}</p>
                          <h1 className="mt-3 -mb-2 font-semibold">
                            <Text text={menu[2].title} />
                          </h1>
                          <p className="mt-3">{menu[2].content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="discussion">
                  <div className="text-white">
                    <div className="text-white mt-8">
                      <div className="flex flex-col">
                        <div className="bg-yellow-400 px-3 py-3 max-w-14 rounded-full">
                          <IconAnimation>
                            <ChatBubbleIcon width={30} height={30} />
                          </IconAnimation>
                        </div>
                        <div className="mt-3 text-start">
                          <p className="text-yellow-400">{menu[3].label}</p>
                          <h1 className="mt-3 -mb-2 font-semibold">
                            <Text text={menu[1].title} />
                          </h1>
                          <p className="mt-3">{menu[3].content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="connected">
                  <div className="text-white">
                    <div className="text-white mt-8">
                      <div className="flex flex-col">
                        <div className="bg-yellow-400 px-3 py-3 max-w-14 rounded-full">
                          <IconAnimation>
                            <LinkBreak2Icon width={30} height={30} />
                          </IconAnimation>
                        </div>
                        <div className="mt-3 text-start">
                          <p className="text-yellow-400">{menu[4].label}</p>
                          <h1 className="mt-3 -mb-2 font-semibold">
                            <Text text={menu[4].title} />
                          </h1>
                          <p className="mt-3">{menu[4].content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

export default menu;
