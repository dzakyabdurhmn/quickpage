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
                      Bagaimana startup pendidikan Anda menggunakan kecerdasan
                      buatan (AI)?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami menggunakan AI untuk meningkatkan
                  pengalaman pengguna. Misalnya, kami menggunakan AI untuk
                  memberikan rekomendasi kursus, menyesuaikan konten
                  pembelajaran, dan mendeteksi penipuan.
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
                      Bagaimana startup pendidikan Anda memastikan bahwa AI
                      digunakan secara bertanggung jawab?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami memiliki pedoman AI yang jelas yang
                  menjelaskan bagaimana kami menggunakan AI. Pedoman ini
                  mencakup prinsip-prinsip seperti keadilan, transparansi, dan
                  akuntabilitas.
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
                      Bagaimana startup pendidikan Anda menangani potensi bias
                      dalam AI?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami menggunakan berbagai teknik untuk
                  menangani potensi bias dalam AI. Teknik ini termasuk pelatihan
                  data yang beragam, menggunakan algoritma yang tidak bias, dan
                  melakukan audit bias.
                </Typography>
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
                      Bagaimana startup pendidikan Anda mendidik pengguna
                      tentang AI?{" "}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami menyediakan informasi tentang AI
                  kepada pengguna melalui situs web kami, blog kami, dan materi
                  pelatihan kami. Kami juga bekerja dengan organisasi lain untuk
                  meningkatkan kesadaran tentang AI yang bertanggung jawab.
                </Typography>
              </AccordionContent>
            </AccordionItem>
          </div>
          {/*  */}
          <div>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="py-3">
                  <div class="flex gap-x-3 text-start">
                    <Typography className={``} variant="h3">
                      Bagaimana startup pendidikan Anda berkontribusi pada
                      penelitian AI yang bertanggung jawab?{" "}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Startup pendidikan kami berkontribusi pada penelitian AI yang
                  bertanggung jawab dengan berpartisipasi dalam proyek-proyek
                  penelitian dan berbagi informasi tentang praktik kami.
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
