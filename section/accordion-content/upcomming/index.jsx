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
import TextAnm from "../../../components/textanimation";
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
      <div className="mb-4">
        <TextAnm
          className="text-2xl font-exra text-gray-700 "
          text="Upcoming features"
        />
      </div>
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
                    <Typography
                      className="text-xl w-72 md:w-0 lg:w-[600px] xl:w-[900px] xl:text-2xl"
                      variant="h3"
                    >
                      Bagaimana cara startup pendidikan Anda melindungi privasi
                      pengguna?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  className="text-xs font-normal w-72 md:w-0 lg:w-[600px] xl:w-[900px] xl:text-sm"
                  variant="h3"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  reiciendis provident animi reprehenderit. Mollitia consectetur
                  necessitatibus ipsum aperiam, possimus suscipit assumenda
                  commodi adipisci? Fuga error molestiae cum doloribus adipisci
                  a cumque provident minus velit rem laudantium at sapiente odit
                  et, doloremque pariatur ab aperiam est architecto porro
                  quisquam! Debitis maiores cupiditate similique velit eos iste
                  laborum modi veritatis obcaecati, alias praesentium sapiente
                  pariatur. Ratione blanditiis esse obcaecati, voluptatibus
                  corrupti, nesciunt porro debitis consectetur vero aliquam illo
                  repellat! Facilis sequi dolores eius a id molestiae recusandae
                  obcaecati at officia dignissimos? Sed, id earum iusto libero
                  est quisquam dignissimos nam nostrum quam?
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography
                      className="text-xl w-72 md:w-0 lg:w-[600px] xl:w-[900px] xl:text-2xl"
                      variant="h3"
                    >
                      Bagaimana cara startup pendidikan Anda melindungi privasi
                      pengguna?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  className="text-xs font-normal w-72 md:w-0 lg:w-[600px] xl:w-[900px] xl:text-sm"
                  variant="h3"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  reiciendis provident animi reprehenderit. Mollitia consectetur
                  necessitatibus ipsum aperiam, possimus suscipit assumenda
                  commodi adipisci? Fuga error molestiae cum doloribus adipisci
                  a cumque provident minus velit rem laudantium at sapiente odit
                  et, doloremque pariatur ab aperiam est architecto porro
                  quisquam! Debitis maiores cupiditate similique velit eos iste
                  laborum modi veritatis obcaecati, alias praesentium sapiente
                  pariatur. Ratione blanditiis esse obcaecati, voluptatibus
                  corrupti, nesciunt porro debitis consectetur vero aliquam illo
                  repellat! Facilis sequi dolores eius a id molestiae recusandae
                  obcaecati at officia dignissimos? Sed, id earum iusto libero
                  est quisquam dignissimos nam nostrum quam?
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography
                      className="text-xl w-72 md:w-0 lg:w-[600px] xl:w-[900px] xl:text-2xl"
                      variant="h3"
                    >
                      Bagaimana cara startup pendidikan Anda melindungi privasi
                      pengguna?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography
                  className="text-xs font-normal w-72 md:w-0 lg:w-[600px] xl:w-[900px] xl:text-sm"
                  variant="h3"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  reiciendis provident animi reprehenderit. Mollitia consectetur
                  necessitatibus ipsum aperiam, possimus suscipit assumenda
                  commodi adipisci? Fuga error molestiae cum doloribus adipisci
                  a cumque provident minus velit rem laudantium at sapiente odit
                  et, doloremque pariatur ab aperiam est architecto porro
                  quisquam! Debitis maiores cupiditate similique velit eos iste
                  laborum modi veritatis obcaecati, alias praesentium sapiente
                  pariatur. Ratione blanditiis esse obcaecati, voluptatibus
                  corrupti, nesciunt porro debitis consectetur vero aliquam illo
                  repellat! Facilis sequi dolores eius a id molestiae recusandae
                  obcaecati at officia dignissimos? Sed, id earum iusto libero
                  est quisquam dignissimos nam nostrum quam?
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
