"use client";
import React from "react";
import Navbar from "@/section/navbar";
import Hero from "@/section/hero";
import Card from "@/section/card";
import Feature from "@/section/feature";
import Accordion from "@/section/accordion";
import Footer from "@/section/footer";
import PricingTables from "@/section/price";
import Stats from "@/section/stats";
import Docs from "./docs";
import Company from "../section/company/test";
import CardContent from "@/section/card-content";
import Comment from "../section/pepole-say";
import CardContentA from "../section/card-bulr/index";
import SeCC from "../section/second-header/page";
import Cookie from "@/components/cookie";
import { isProduction } from "@/lib/info";
import Feed from "@/section/feedback/index";
import AccordionNew from "@/section/accordion-final";

import Banners from "@/section/banners";
// import Cruve from "./cruve";
// import Anm from "./anm";
// gradient color
import GradientHero from "../section/with-gradient/hero";
import GradientCompany from "../section/with-gradient/company";
import GradientFeature from "../section/with-gradient/feature";
import GradientFeat from "../section/with-gradient/feat";
import TextScrollGradient from "../section/with-gradient/scrool-text";
import GradientFooter from "../section/with-gradient/footer";
import GradientExploreFeat from "../section/with-gradient/exlpore-feat";

// import Icon from "../section/icon/index";
import Cruve from "./cruve";
import SvgCruve from "../section/with-gradient/svg-bezier-curve";
import Mask from "../section/textmask";
export default function App() {
  if (isProduction) {
    return (
      <>
        {/* <Banners /> */}
        <div className="flex flex-col h-screen max-w-[2000px] mx-auto">
          <header className="p-4">
            <Navbar />{" "}
          </header>
          <main className="p-4">
            <GradientHero />
            <GradientCompany />
            <GradientFeat />
            {/* <SvgCruve /> */}
            {/* <Mask /> */}
            {/* <GradientExploreFeat /> */}
            {/* <PricingTables />
            {/* <CardContent /> */}
            {/* <TextScrollGradient /> */}
            {/* <div className=""></div> */}
            <Comment />
            <GradientFeature />
            {/* <Accordion /> */}
            {/* <SeCC /> */}
            {/* <CardContentA /> */}
            {/* <Stats /> */}
            <Card />
            <AccordionNew />
            {/* <Cookie /> */}
            {/* <Feed /> */}
          </main>
          <footer className="p-4">
            {" "}
            <Footer />{" "}
          </footer>
        </div>
        <></>
      </>
    );
  } else {
    return <Docs />;
  }
}

// import React from "react";
// import dynamic from "next/dynamic";

// const Tonggle = dynamic(() => import("../components/theme-button"), {
//   ssr: false,
// });

// function page() {
//   return (
//     <>
//       <div className="flex items-center justify-center h-screen flex-col">
//         <h1
//           className={` text-4xl sm:text-6xl md:text-9xl text-center dark:text-red-600 text-yellow-400`}
//         >
//           LIGHT MODE
//         </h1>
//         <h1
//           className={` text-4xl sm:text-6xl md:text-9xl text-center dark:text-green-600 text-blue-500 `}
//         >
//           DARK MODE
//         </h1>
//       </div>
//       <Tonggle />
//     </>
//   );
// }

// export default page;
