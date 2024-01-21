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
                      Data pribadi apa yang Anda kumpulkan tentang pengguna?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Kami mengumpulkan data pribadi yang diperlukan untuk
                  menyediakan layanan pendidikan kami, seperti nama, email,
                  nomor telepon, demografi dasar, dan riwayat pendidikan. Kami
                  mungkin juga mengumpulkan data penggunaan seperti kursus yang
                  diambil, kemajuan belajar, dan aktivitas di platform kami.
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
                      Bagaimana Anda menggunakan data pribadi pengguna?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Kami menggunakan data pengguna untuk menyediakan dan
                  mempersonalisasi pengalaman belajar, menganalisis penggunaan
                  platform untuk peningkatan layanan, dan mengirimkan komunikasi
                  seperti pengingat kursus dan informasi penting lainnya. Kami
                  tidak akan pernah menjual data pribadi pengguna atau
                  membagikannya kepada pihak ketiga tanpa izin eksplisit.
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
                      Apakah data pengguna dienkripsi?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Ya, kami menggunakan enkripsi standar industri untuk
                  melindungi data pengguna saat transit dan saat istirahat. Kami
                  juga menerapkan kontrol akses ketat untuk membatasi akses ke
                  data hanya kepada personel yang membutuhkannya.
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
                      Bisakah pengguna mengakses dan mengontrol data mereka?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Ya, pengguna dapat mengakses dan mengedit data pribadi mereka
                  melalui pengaturan akun mereka. Mereka juga dapat memilih
                  untuk menghapus data mereka atau menolak komunikasi tertentu
                  dari kami.
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
                      Apa kebijakan Anda tentang penyimpanan data?
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="body">
                  Kami menyimpan data pengguna selama akun mereka aktif dan
                  untuk jangka waktu tertentu setelahnya untuk mematuhi
                  kewajiban hukum atau regulasi. Kami memiliki proses
                  penghapusan data yang aman untuk memastikan pembuangan data
                  yang tidak lagi diperlukan.
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
