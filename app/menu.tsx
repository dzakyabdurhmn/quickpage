"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./menu.module.scss";
import { CloudinaryVideoPlayer, CldVideoPlayer } from "next-cloudinary";
import Lottie from "lottie-react";
import emoji from "@/public/emoji.json";
// import "./menu.css";
import {
  FileTextIcon,
  UploadIcon,
  ChatBubbleIcon,
  LinkBreak2Icon,
} from "@radix-ui/react-icons";
function menu() {
  return (
    <div className="justify-center items-center flex mt-5  mb-9 p-16 ml-3 mr-3">
      <div className="bg-[#030122]  text-white rounded-xl">
        <div className="m-12">
          <div className="flex">
            <div className="flex flex-col  whitespace-nowrap">
              <h1 className="whitespace-nowrap mb-2 text-yellow-400">
                SAVIOR, YEAH TIME-SAVIOR
              </h1>
              <h1 className="text-3xl 2xl:text-sm font-semibold  whitespace-nowrap mb-3">
                Features that
                <br /> you'll ever need.
              </h1>
              <p className="mt-4 whitespace-normal ">
                Formcarry form API endpoint offers you the best features that{" "}
                <br />
                you'll ever need in your form. Keeping simplicity in mind, we've{" "}
                <br />
                crafted the best way to integrate powerful features into your{" "}
                form within minutes.
              </p>
            </div>
            {/* <img
              width={200}
              height={200}
              src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1702757994/jz1n8tar2diyuijxpky5.webp"
              alt=""
              className="ml-24 hidden sm:block md:block lg:block"
            /> */}
            <Lottie
              className="ml-24 hidden sm:block md:block lg:block"
              animationData={emoji}
              loop={true}
              style={{ height: 200 }}
            />
          </div>
          <div className="mt-20">
            {/* <div className="flex space-x-4 bg-slate-400 px-3 py-2 max-w-[420px] text-center rounded-full">
              <div className="px-3 py-2 bg-black rounded-full text-center flex flex-col justify-center">
                <h1>upload</h1>
              </div>
              <div>email notip</div>
              <div>field validisi</div>
              <div>auto respon ygy</div>
            </div> */}
            <Tabs.Root
              className="flex flex-col w-[600px] shadow-[0_2px_10px] shadow-blackA2"
              defaultValue="sendassignment"
            >
              <Tabs.List
                className="flex  rounded-xl bg-white  flex-col md:flex-row  m-3 px-3 py-2 ml-10 mr-10"
                aria-label="Manage your account"
              >
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="sendassignment"
                >
                  Send assignment
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="notation"
                >
                  Notation
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="discussion"
                >
                  Discussion
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-xl hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-yellow-300 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]  outline-none cursor-default whitespace-nowrap py-3"
                  value="connected"
                >
                  Connected
                </Tabs.Trigger>
              </Tabs.List>
              <div className="ml-10 mt-3">
                <Tabs.Content value="sendassignment">
                  <div className="text-white mt-8">
                    <div className="flex flex-col">
                      <div className="bg-yellow-400 px-3 py-3 max-w-14 rounded-full">
                        <UploadIcon width={30} height={30} />
                      </div>
                      <div className="mt-3 text-start">
                        <p className="text-yellow-400">Send assignment.</p>
                        <h1 className="mt-3 text-2xl font-semibold">
                          Lorem ipsum dolor sit amet consectetur <br />{" "}
                          adipisicing elit.
                        </h1>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, delectus laborum! Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Inventore,
                          delectus laborum!
                        </p>
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
                          <p className="text-yellow-400">Notation.</p>
                          <h1 className="mt-3 text-2xl font-semibold">
                            Lorem ipsum dolor sit amet consectetur <br />{" "}
                            adipisicing elit.
                          </h1>
                          <p className="mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore, delectus laborum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Inventore,
                            delectus laborum!
                          </p>
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
                          <p className="text-yellow-400">Discussion.</p>
                          <h1 className="mt-3 text-2xl font-semibold">
                            Lorem ipsum dolor sit amet consectetur <br />{" "}
                            adipisicing elit.
                          </h1>
                          <p className="mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore, delectus laborum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Inventore,
                            delectus laborum!
                          </p>
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
                          <p className="text-yellow-400">Connected.</p>
                          <h1 className="mt-3 text-2xl font-semibold">
                            Lorem ipsum dolor sit amet consectetur <br />{" "}
                            adipisicing elit.
                          </h1>
                          <p className="mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Inventore, delectus laborum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Inventore,
                            delectus laborum!
                          </p>
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
