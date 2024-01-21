// "use client";

// import React from "react";
// import classNames from "classnames";
// import * as Accordion from "@radix-ui/react-accordion";
// import { Plus } from "@radix-ui/react-icons";
// import { Icons } from "../../components/icon";
// import localFont from "next/font/local";
// import { Typography } from "@/components/typograpy";
// import "./accordion.css";
// import { accordion } from "@/lib/info";
// // const FBlack = localFont({
// //   src: "../../public/fonts/Friends-BlackItalic.otf",
// // });
// // const FNormal = localFont({ src: "../../public/fonts/Friends-Normal.otf" });
// // const FsemiBold = localFont({
// //   src: "../../public/fonts/Friends-SemiBoldItalic.otf",
// // });

// import General from "@/section/accordion-content/general";
// import AI from "@/section/accordion-content/ai";
// import Privacy from "@/section/accordion-content/privacy";
// import Upcomming from "@/section/accordion-content/upcomming";

// function AccordionDemo() {
//   const menu = accordion();

//   return (
//     <div className=" ">
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
//                     <Typography className={``} variant="h3">
//                       General
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <General />
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
//                       Privacy
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <Privacy />
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
//                       Responsible AI
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <AI />
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
//                       Upcoming features
//                     </Typography>
//                   </div>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <Upcomming />
//               </AccordionContent>
//             </AccordionItem>
//           </div>
//           {/*  */}
//         </div>
//       </Accordion.Root>
//     </div>
//   );
// }

// const AccordionItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Item
//       className={classNames(
//         "",
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
//         "text-mauve11  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ",
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

function mobile() {
  return (
    <div>
      <div className="hs-accordion-group">
  <div className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent" id="hs-active-bordered-heading-one">
    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-one">
      Accordion #1
      <svg className="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
      <svg className="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
    </button>
    <div id="hs-basic-active-bordered-collapse-one" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one">
      <div className="pb-4 px-5">
        <p className="text-gray-800 dark:text-gray-200">
          <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>
  <div className="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent" id="hs-active-bordered-heading-two">
    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-two">
      Accordion #2
      <svg className="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
      <svg className="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
    </button>
    <div id="hs-basic-active-bordered-collapse-two" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-two">
      <div className="pb-4 px-5">
        <p className="text-gray-800 dark:text-gray-200">
          <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>
  <div className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent" id="hs-active-bordered-heading-three">
    <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-three">
      Accordion #3
      <svg className="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
      <svg className="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
    </button>
    <div id="hs-basic-active-bordered-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-three">
      <div className="pb-4 px-5">
        <p className="text-gray-800 dark:text-gray-200">
          <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default mobile