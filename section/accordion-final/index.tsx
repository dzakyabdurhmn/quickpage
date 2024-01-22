import React from "react";
import AccordionDesktop from "@/section/new-accordion";
import AccordionMobile from "@/section/new-accordion/mobile";
import localFont from "next/font/local";
// const myFont = localFont({
//   src: "../../public/fonts/JetBrainsMono-Medium.woff2",
// });

function index() {
  return (
    <div>
      <>
        <div className="lg:hidden mt-24 ">
          <AccordionMobile />
        </div>
        <div className="hidden flex-col lg:flex">
          <AccordionDesktop />
        </div>
      </>
    </div>
  );
}

export default index;
