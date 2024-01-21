import React from "react";
import AccordionDesktop from "@/section/new-accordion";
import AccordionMobile from "@/section/new-accordion/mobile";

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
