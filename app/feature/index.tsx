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

const FBlack = localFont({ src: "../../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({ src: "../../public/fonts/Friends-SemiBold.otf" });

function menu() {
  const menu = featureContent();
  return (
    <div className="justify-center items-center flex mt-10">
      <div className="bg-[#030122]  text-white rounded-3xl ">
        <div className="m-12">
          <div className="flex">
            <div className="flex flex-col  whitespace-normal max-w-[400px]">
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
              style={{ height: 200 }}
            />
          </div>
          <div className="mt-20">
            <Tabs.Root
              className="flex flex-col max-w-[600px] shadow-[0_2px_10px] shadow-blackA2"
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
                        <UploadIcon width={30} height={30} />
                      </div>
                      <div className="mt-3 text-start">
                        <p className="text-yellow-400"> {menu[1].label}</p>
                        <h1 className="mt-3 text-2xl font-semibold">
                          {menu[1].title}{" "}
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
                          <FileTextIcon width={30} height={30} />
                        </div>
                        <div className="mt-3 text-start">
                          <p className="text-yellow-400">{menu[2].label}</p>
                          <h1 className="mt-3 text-2xl font-semibold">
                            {menu[2].title}
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
                          <ChatBubbleIcon width={30} height={30} />
                        </div>
                        <div className="mt-3 text-start">
                          <p className="text-yellow-400">{menu[3].label}</p>
                          <h1 className="mt-3 text-2xl font-semibold">
                            {menu[3].title}{" "}
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
                          <LinkBreak2Icon width={30} height={30} />
                        </div>
                        <div className="mt-3 text-start">
                          <p className="text-yellow-400">{menu[4].label}</p>
                          <h1 className="mt-3 text-2xl font-semibold">
                            {menu[4].title}
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
