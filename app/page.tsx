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
// import Cruve from "./cruve";
// import Anm from "./anm";
// gradient color
import GradientHero from "../section/with-gradient/hero";
import GradientCompany from "../section/with-gradient/company";
import GradientFeature from "../section/with-gradient/feature";
import GradientFeat from "../section/with-gradient/feat";
import TextScrollGradient from "../section/with-gradient/scrool-text";
import GradientFooter from "../section/with-gradient/footer";
import Icon from "../section/icon/index";
import Cruve from "./cruve";
import SvgCruve from "../section/with-gradient/svg-bezier-curve";
import Mask from "../section/textmask";
export default function App() {
  if (isProduction) {
    return (
      <>
        <div className="flex flex-col h-screen max-w-[1800px] mx-auto">
          <header className="p-4">
            <Navbar />
          </header>
          <main className="p-4 flex-grow">
            <GradientHero />
            <GradientCompany />
            <Mask />
            {/* <GradientFeat /> */}
            {/* <Card /> */}
            {/* <PricingTables /> */}
            {/* <CardContent /> */}
            <TextScrollGradient />
            <SvgCruve />
            <GradientFeature />
            {/* <div className=""></div> */}
            {/* <Comment /> */}
            {/* <Accordion /> */}
            {/* <SeCC /> */}
            {/* <Icon>
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
              >
                <path d="m20.72,22.16c2.77,0,5.55.02,8.32.03.4,0,.8.02,1.2.03.07.06.14.13.21.19-.28,1.58-.56,3.16-.83,4.75-.32,1.87-.64,3.74-.99,5.76-1.37.13-2.76-.07-4.14-.04-1.36.03-2.72,0-4.2,0-.13,8.38.12,16.72.11,25.11h-11.17v-24.91H0v-10.81h9.16c.04-.39.11-.71.11-1.02-.01-1.58-.05-3.17-.06-4.75-.01-1.62-.16-3.26.02-4.85.19-1.69.64-3.35,1.52-4.86,1.36-2.33,3.28-4.06,5.58-5.4,1.39-.81,2.94-1.25,4.52-1.3C24.28-.03,27.71.02,31.15,0c.07,0,.13.05.35.14.04,3.3-.29,6.66-.18,10.11-1.13,0-2.15.03-3.17,0-1.57-.07-3.15-.06-4.65.46-1.42.49-2.46,1.4-2.89,2.95-.3,1.08-.36,2.16-.34,3.25.04,1.69.13,3.38.2,5.07.08.06.16.13.24.19Z" />
              </svg>
            </Icon> */}
            {/* <CardContentA /> */}
            {/* <Stats /> */}
            {/* <Cookie /> */}
          </main>
          <footer className="p-4">{/* <Footer /> */}</footer>
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
