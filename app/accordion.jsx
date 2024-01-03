// "use client";
// import React from "react";
// import classNames from "classnames";
// import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
// import { Icons } from "@/components/icon";
// const AccordionDemo = () => (
//   <div className="justify-center items-center  flex mb-24">
//     <div className="justify-center items-center flex  max-w-[400px]  rounded-2xl">
//       <Accordion.Root
//         className="text-center justify-center items-center px-56 py-6 whitespace-nowrap space-y-6"
//         type="single"
//         // defaultValue="item-1"
//         collapsible
//       >
//         <Accordion.Item value="item-1">
//           <Accordion.Trigger className="w-96  bg-slate-100 shadow-md  rounded-xl  py-3 flex text-center items-center">
//             <div className="ml-6">
//               <Icons.academic className="w-5 text-[#712185] font-semibold" />
//             </div>
//             <div className="ml-3">Lorem ipsum dolor sit.</div>
//           </Accordion.Trigger>
//           <AccordionContent className="w-96  bg-slate-100 shadow-lg  rounded-xl mt-5">
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </Accordion.Item>

//         <Accordion.Item value="item-2">
//           <Accordion.Trigger className="w-96  bg-slate-100 shadow-lg  rounded-xl  py-3 flex text-center items-center">
//             <div className="ml-6">
//               <Icons.cube className="w-5 text-[#7F7F7F] font-semibold" />
//             </div>
//             <div className="ml-3">Lorem ipsum dolor sit.</div>
//           </Accordion.Trigger>
//           <AccordionContent className="w-96  bg-slate-100 shadow-lg  rounded-xl mt-5">
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </Accordion.Item>

//         <Accordion.Item value="item-3">
//           <Accordion.Trigger className="w-96  bg-slate-100 shadow-lg  rounded-xl  py-3 flex text-center items-center">
//             <div className="ml-6">
//               <Icons.chat className="w-5 text-[#28907D] font-semibold" />
//             </div>
//             <div className="ml-3">Lorem ipsum dolor sit.</div>
//           </Accordion.Trigger>
//           <AccordionContent className="w-96  bg-slate-100 shadow-lg  rounded-xl mt-5">
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </Accordion.Item>

//         <Accordion.Item value="item-4">
//           <Accordion.Trigger className="w-96  bg-slate-100 shadow-lg  rounded-xl  py-3 flex text-center items-center">
//             <div className="ml-6">
//               <Icons.copyDoc className="w-5 text-[#4959BA] font-semibold" />
//             </div>
//             <div className="ml-3">Lorem ipsum dolor sit.</div>
//           </Accordion.Trigger>
//           <AccordionContent className="w-96  bg-slate-100 shadow-lg  rounded-xl mt-5">
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </Accordion.Item>

//         <Accordion.Item value="item-5">
//           <Accordion.Trigger className="w-96  bg-slate-100 shadow-lg  rounded-xl  py-3 flex text-center items-center">
//             <div className="ml-6">
//               <Icons.rocket className="w-5 text-[#BE9349] font-semibold" />
//             </div>
//             <div className="ml-3">Lorem ipsum dolor sit.</div>
//           </Accordion.Trigger>
//           <AccordionContent className="w-96  bg-slate-100 shadow-lg  rounded-xl mt-5">
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </Accordion.Item>

//         <Accordion.Item value="item-6">
//           <Accordion.Trigger className="w-96  bg-slate-100 shadow-lg  rounded-xl  py-3 flex text-center items-center">
//             <div className="ml-6">
//               <Icons.fire className="w-5 text-[#E23A29] font-semibold" />
//             </div>
//             <div className="ml-3">Lorem ipsum dolor sit.</div>
//           </Accordion.Trigger>
//           <AccordionContent className="w-96  bg-slate-100 shadow-lg  rounded-xl mt-5">
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </Accordion.Item>
//       </Accordion.Root>
//     </div>
//   </div>
// );

// const AccordionItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Item
//       className={classNames(
//         "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
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
//     <Accordion.Header className="flex">
//       <Accordion.Trigger
//         className={classNames(
//           "text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
//           className
//         )}
//         {...props}
//         ref={forwardedRef}
//       >
//         {children}
//         <ChevronDownIcon
//           className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
//           aria-hidden
//         />
//       </Accordion.Trigger>
//     </Accordion.Header>
//   )
// );

// const AccordionContent = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => (
//     <Accordion.Content
//       className={classNames(
//         "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
//         className
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       <div className="py-[15px] px-5">{children}</div>
//     </Accordion.Content>
//   )
// );

// export default AccordionDemo;

"use client";

import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "@radix-ui/react-icons";
import { Icons } from "../components/icon";
import localFont from "next/font/local";
import { Typography } from "@/components/typograpy";
import "./accordion.css";
const FBlack = localFont({ src: "../public/fonts/Friends-BlackItalic.otf" });
const FNormal = localFont({ src: "../public/fonts/Friends-Normal.otf" });
const FsemiBold = localFont({ src: "../public/fonts/Friends-SemiBold.otf" });

const AccordionDemo = () => (
  <div className="flex justify-center mt-28 ml-10 mr-10">
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
                <div class="flex items-center justify-between text-center py-3 px-2">
                  <Typography
                    className={`text-[60px] mr-3 ${FBlack.className}`}
                    variant="h1"
                  >
                    01
                  </Typography>
                  <Typography
                    className={`text-[30px] ml-7${FsemiBold.className}`}
                    variant="body"
                  >
                    Is it accessible?s
                  </Typography>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>

      <div className="mb-10">
        <div>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="py-3">
                <div class="flex items-center justify-between text-center py-3 px-2">
                  <Typography
                    className={`text-[60px] ${FBlack.className}`}
                    variant="h1"
                  >
                    02
                  </Typography>
                  <Typography
                    className={`text-[30px] ml-7${FsemiBold.className}`}
                    variant="small"
                  >
                    Is it accessible?s
                  </Typography>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>

      <div className="mb-10">
        <div>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="py-3">
                <div class="flex items-center justify-between text-center py-3 px-2">
                  <Typography
                    className={`text-[60px] ${FBlack.className}`}
                    variant="h1"
                  >
                    03
                  </Typography>
                  <Typography
                    className={`text-[30px] ml-7${FsemiBold.className}`}
                    variant="small"
                  >
                    Is it accessible?s
                  </Typography>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>

      <div className="mb-10">
        <div>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="py-3">
                <div class="flex items-center justify-between text-center py-3 px-2">
                  <Typography
                    className={`text-[60px] ${FBlack.className}`}
                    variant="h1"
                  >
                    04
                  </Typography>
                  <Typography
                    className={`text-[30px] ml-7${FsemiBold.className}`}
                    variant="small"
                  >
                    Is it accessible?s
                  </Typography>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>
    </Accordion.Root>
  </div>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none",
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
          "text-violet11  hover:bg-mauve2 group flex h-[90px] flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none  outline-none data-[state=open]:bg-[#B9FF66] data-[state=closed]:bg-[#F3F3F3] data-[state=closed]:rounded-b-[40px]  rounded-t-[40px]",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div className="bg-[#F3F3F3] rounded-full px-3 py-3 border-gray-400 border">
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
        "text-mauve11 bg-[#F3F3F3] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp h-[90px] overflow-hidden text-[15px] data-[state=open]:bg-[#B9FF66] data-[state=closed]:bg-[#B9FF66]  rounded-b-[40px]",
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
