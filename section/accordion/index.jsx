"use client";

import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "@radix-ui/react-icons";
import { Icons } from "../../components/icon";
import localFont from "next/font/local";
import { Typography } from "@/components/typograpy";
import "./accordion.css";
import { accordion } from "@/lib/info";
const FBlack = localFont({ src: "../../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({
  src: "../../public/fonts/Friends-SemiBoldItalic.otf",
});

function AccordionDemo() {
  const menu = accordion();

  return (
    <div className="flex justify-center mt-28 mb-10 ml-10 mr-10">
      <Accordion.Root
        className="accordionmobile min max accordiontab accordionmobilemini"
        type="single"
        // defaultValue="item-1"
        collapsible
      >
        <div className="mb-10">
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex items-center  justify-between text-center py-3 px-2">
                    <Typography
                      className={`text-[60px] mr-3 ${FBlack.className}`}
                      variant="h1"
                    >
                      {menu[0].id}
                    </Typography>
                    <Typography
                      className={`text-sm ml-7 text-start m-3${FsemiBold}`}
                      variant="h3"
                    >
                      {menu[0].label}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  className={`text-[30px] ml-7 text-start m-3${FsemiBold.className}`}
                  variant="body"
                >
                  {menu[0].content}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
        {/*  */}
        <div className="mb-10">
          <div>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex items-center  justify-between text-center py-3 px-2">
                    <Typography
                      className={`text-[60px] mr-3 ${FBlack.className}`}
                      variant="h1"
                    >
                      {menu[1].id}
                    </Typography>
                    <Typography
                      className={`text-sm ml-7 text-start m-3${FsemiBold}`}
                      variant="h3"
                    >
                      {menu[1].label}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  className={`text-[30px] ml-7 text-start m-3${FsemiBold.className}`}
                  variant="body"
                >
                  {menu[1].content}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
        {/*  */}
        <div className="mb-10">
          <div>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex items-center  justify-between text-center py-3 px-2">
                    <Typography
                      className={`text-[60px] mr-3 ${FBlack.className}`}
                      variant="h1"
                    >
                      {menu[2].id}
                    </Typography>
                    <Typography
                      className={`text-sm ml-7 text-start m-3${FsemiBold}`}
                      variant="h3"
                    >
                      {menu[2].label}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  className={`text-[30px] ml-7 text-start m-3${FsemiBold.className}`}
                  variant="body"
                >
                  {menu[2].content}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
        {/*  */}
        <div className="mb-10">
          <div>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex items-center  justify-between text-center py-3 px-2">
                    <Typography
                      className={`text-[60px] mr-3 ${FBlack.className}`}
                      variant="h1"
                    >
                      {menu[3].id}
                    </Typography>
                    <Typography
                      className={`text-sm ml-7 text-start m-3${FsemiBold}`}
                      variant="h3"
                    >
                      {menu[2].label}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  className={`text-[30px] ml-7 text-start m-3${FsemiBold.className}`}
                  variant="body"
                >
                  {menu[2].content}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
      </Accordion.Root>
    </div>
  );
}

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-violet11 max-w-[900px] maxmd hover:bg-mauve2 group flex h-[120px] flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none  outline-none data-[state=open]:bg-[#B9FF66] data-[state=closed]:bg-[#F3F3F3] data-[state=closed]:rounded-b-[40px]  rounded-t-[40px]",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div className="bg-[#F3F3F3] rounded-full px-3 py-3 panahX hidden md:block border-gray-400 border">
          <Icons.Plus
            className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 text-5xl"
            aria-hidden
          />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11 max-w-[900px] maxmd data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp h-[170px] overflow-hidden text-[15px] data-[state=open]:bg-[#B9FF66] data-[state=closed]:bg-[#B9FF66]  rounded-b-[40px] ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className={`py-[15px] px-5 ${FNormal.className}`}>{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
