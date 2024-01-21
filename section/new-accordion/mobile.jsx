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
// const FBlack = localFont({
//   src: "../../public/fonts/Friends-BlackItalic.otf",
// });
// const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
// const FsemiBold = localFont({
//   src: "../../public/fonts/Friends-SemiBoldItalic.otf",
// });

import General from "@/section/accordion-content/general";
import AI from "@/section/accordion-content/ai";
import Privacy from "@/section/accordion-content/privacy";
import Upcomming from "@/section/accordion-content/upcomming";

function AccordionDemo() {
  const menu = accordion();

  return (
    <div className=" ">
      <Accordion.Root
        className=""
        type="single"
        // defaultValue="item-1"
        collapsible
      >
        <div className="space-y-5">
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      General
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <General />
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Privacy
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Privacy />
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Responsible AI
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <AI />
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Upcoming features
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Upcomming />
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
        </div>
      </Accordion.Root>
    </div>
  );
}

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames("", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="">
      <Accordion.Trigger
        className={classNames(
          "flex justify-center items-center gap-x-2",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Icons.Plus aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div>{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
