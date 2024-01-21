// "use client";

// import React from "react";
// import classNames from "classnames";
// import * as Accordion from "@radix-ui/react-accordion";
// import { Plus } from "@radix-ui/react-icons";
// import { Icons } from "../../../components/icon";
// import localFont from "next/font/local";
// import { Typography } from "@/components/typograpy";
// import "./accordion.css";
// import { accordion } from "@/lib/info";
// const FBlack = localFont({
//   src: "../../../public/fonts/Friends-BlackItalic.otf",
// });
// const FNormal = localFont({ src: "../../../public/fonts/Friends-Normal.otf" });
// const FsemiBold = localFont({
//   src: "../../../public/fonts/Friends-SemiBoldItalic.otf",
// });

// function AccordionDemo() {
//   const menu = accordion();

//   return (
//     <div className="p-7">
//       <Accordion.Root
//         className=""
//         type="single"
//         // defaultValue="item-1"
//         collapsible
//       >
//         <div className="space-y-5">
//           <div>
//             <AccordionItem value="item-1">
//               <AccordionTrigger>
//                 <div className="py-3">
//                   <div class="flex gap-x-3 text-start">
//                     <Typography  className="text-xl w-72 md:w-0 lg:w-[600px] xl:w-[900px] xl:text-2xl" variant="h3">
//                       Bagaimana cara startup pendidikan Anda melindungi privasi
//                       pengguna?
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <Typography variant="body">
//                   Startup pendidikan kami berkomitmen untuk melindungi privasi
//                   pengguna. Kami menggunakan teknologi keamanan terbaik untuk
//                   melindungi data pengguna, termasuk enkripsi, otentikasi
//                   multifaktor, dan kontrol akses. Kami juga memiliki kebijakan
//                   privasi yang jelas yang menjelaskan bagaimana kami
//                   mengumpulkan, menggunakan, dan membagikan data pengguna.
//                 </Typography>
//               </AccordionContent>
//             </AccordionItem>
//           </div>
//           {/*  */}
//           <div>
//             <AccordionItem value="item-2">
//               <AccordionTrigger>
//                 <div className="py-3">
//                   <div class="flex gap-x-3 text-start">
//                     <Typography className={``} variant="h3">
//                       Apa data pribadi yang dikumpulkan oleh startup pendidikan
//                       Anda?
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <Typography variant="body">
//                   Startup pendidikan kami mengumpulkan data pribadi pengguna
//                   yang diperlukan untuk menyediakan layanan kami. Data ini dapat
//                   mencakup nama, alamat email, nomor telepon, tanggal lahir, dan
//                   informasi pendidikan. Kami juga dapat mengumpulkan data
//                   penggunaan, seperti data tentang situs web atau aplikasi yang
//                   dikunjungi pengguna dan konten yang mereka akses.
//                 </Typography>
//               </AccordionContent>
//             </AccordionItem>
//           </div>
//           {/*  */}
//           <div>
//             <AccordionItem value="item-3">
//               <AccordionTrigger>
//                 <div className="py-3">
//                   <div class="flex gap-x-3 text-start">
//                     <Typography className={``} variant="h3">
//                       Bagaimana cara pengguna dapat mengakses dan mengontrol
//                       data pribadi mereka?
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <Typography variant="body">
//                   Pengguna dapat mengakses dan mengontrol data pribadi mereka
//                   melalui akun mereka. Mereka dapat melihat data yang
//                   dikumpulkan oleh startup pendidikan, memperbarui data
//                   tersebut, atau menghapus data tersebut. Pengguna juga dapat
//                   memilih untuk menerima atau menolak komunikasi pemasaran dari
//                   startup pendidikan.
//                 </Typography>
//               </AccordionContent>
//             </AccordionItem>
//           </div>
//           {/*  */}
//           <div>
//             <AccordionItem value="item-4">
//               <AccordionTrigger>
//                 <div className="py-3">
//                   <div class="flex gap-x-3 text-start">
//                     <Typography className={``} variant="h3">
//                       Bagaimana cara pengguna dapat mengajukan keluhan tentang
//                       privasi?
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <Typography variant="body">
//                   Pengguna dapat mengajukan keluhan tentang privasi dengan
//                   menghubungi tim privasi startup pendidikan. Tim privasi akan
//                   menyelidiki keluhan tersebut dan mengambil tindakan yang
//                   sesuai.
//                 </Typography>
//               </AccordionContent>
//             </AccordionItem>
//           </div>
//           {/*  */}
//           <div>
//             <AccordionItem value="item-5">
//               <AccordionTrigger>
//                 <div className="py-3">
//                   <div class="flex gap-x-3 text-start">
//                     <Typography className={``} variant="h3">
//                       Bagaimana cara pengguna dapat mengetahui perubahan
//                       kebijakan privasi?
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <Typography variant="body">
//                   Startup pendidikan kami akan menginformasikan pengguna tentang
//                   perubahan kebijakan privasi melalui email atau melalui situs
//                   web kami.
//                 </Typography>
//               </AccordionContent>
//             </AccordionItem>
//           </div>
//         </div>
//       </Accordion.Root>
//     </div>
//   );
// }

// const AccordionItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Item
//       className={classNames(
//         "justify-start min-w-[900px] max-w-[900px]",
//         className
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       {children}
//     </Accordion.Item>
//   )
// );

// const AccordionTrigger = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Header className="">
//       <Accordion.Trigger
//         className={classNames(
//           "flex justify-center items-center gap-x-2",
//           className
//         )}
//         {...props}
//         ref={forwardedRef}
//       >
//         {children}
//         <Icons.Plus aria-hidden />
//       </Accordion.Trigger>
//     </Accordion.Header>
//   )
// );

// const AccordionContent = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Content
//       className={classNames(
//         "text-mauve11  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
//         className
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       <div>{children}</div>
//     </Accordion.Content>
//   )
// );

// export default AccordionDemo;


import React from 'react'

function index() {
  return (
    <div>
      <div className="hs-accordion-group">
  <div
    className="hs-accordion active"
    id="hs-basic-with-arrow-heading-one"
  >
    <button
      aria-controls="hs-basic-with-arrow-collapse-one"
      className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
    >
      <svg
        className="hs-accordion-active:hidden block w-4 h-4"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <svg
        className="hs-accordion-active:block hidden w-4 h-4"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      Accordion #1
    </button>
    <div
      aria-labelledby="hs-basic-with-arrow-heading-one"
      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
      id="hs-basic-with-arrow-collapse-one"
    >
      <p className="text-gray-800 dark:text-gray-200">
        <em>
          This is the third item's accordion body.
        </em>
        {' '}It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>
  <div
    className="hs-accordion"
    id="hs-basic-with-arrow-heading-two"
  >
    <button
      aria-controls="hs-basic-with-arrow-collapse-two"
      className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
    >
      <svg
        className="hs-accordion-active:hidden block w-4 h-4"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <svg
        className="hs-accordion-active:block hidden w-4 h-4"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      Accordion #2
    </button>
    <div
      aria-labelledby="hs-basic-with-arrow-heading-two"
      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
      id="hs-basic-with-arrow-collapse-two"
    >
      <p className="text-gray-800 dark:text-gray-200">
        <em>
          This is the third item's accordion body.
        </em>
        {' '}It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>
  <div
    className="hs-accordion"
    id="hs-basic-with-arrow-heading-three"
  >
    <button
      aria-controls="hs-basic-with-arrow-collapse-three"
      className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
    >
      <svg
        className="hs-accordion-active:hidden block w-4 h-4"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <svg
        className="hs-accordion-active:block hidden w-4 h-4"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      Accordion #3
    </button>
    <div
      aria-labelledby="hs-basic-with-arrow-heading-three"
      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
      id="hs-basic-with-arrow-collapse-three"
    >
      <p className="text-gray-800 dark:text-gray-200">
        <em>
          This is the third item's accordion body.
        </em>
        {' '}It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default index

