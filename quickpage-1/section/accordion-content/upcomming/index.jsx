"use client";

import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "@radix-ui/react-icons";
import { Icons } from "../../../components/icon";
import localFont from "next/font/local";
import { Typography } from "@/components/typograpy";
import "./accordion.css";
import { accordion } from "@/lib/info";
const FBlack = localFont({
  src: "../../../public/fonts/Friends-BlackItalic.otf",
});
const FNormal = localFont({ src: "../../../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({
  src: "../../../public/fonts/Friends-SemiBoldItalic.otf",
});

function AccordionDemo() {
  const menu = accordion();

  return (
    <div className="p-7">
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
                      Apa fitur baru yang akan segera dirilis oleh startup
                      pendidikan Anda?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  <b>
                    Startup pendidikan kami akan segera merilis fitur-fitur baru
                    berikut:
                  </b>
                  <ol>
                    <li>
                      Kursus baru di bidang-bidang seperti STEM, teknologi, dan
                      bisnis.
                    </li>
                    <li>
                      Fitur pembelajaran sosial yang memungkinkan pengguna untuk
                      berkolaborasi dengan satu sama lain.
                    </li>
                    <li>Fitur penilaian yang lebih akurat dan adil.</li>
                    <li>
                      Fitur keamanan yang ditingkatkan untuk melindungi data
                      pengguna
                    </li>
                  </ol>
                </Typography>
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
                      Bagaimana cara pengguna dapat mengetahui tentang fitur
                      baru yang akan dirilis?{" "}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Pengguna dapat mengetahui tentang fitur baru yang akan dirilis
                  melalui situs web startup pendidikan, blog startup pendidikan,
                  dan media sosial.
                </Typography>
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
                      Bagaimana cara pengguna dapat memberikan umpan balik
                      tentang fitur baru yang akan dirilis?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Pengguna dapat memberikan umpan balik tentang fitur baru yang
                  akan dirilis melalui situs web startup pendidikan, blog
                  startup pendidikan, atau media sosial.
                </Typography>
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
      className={classNames(
        "justify-start min-w-[900px] max-w-[900px]",
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
        "text-mauve11  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
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
