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
import { isProduction } from "@/lib/info";

export default function App() {
  if (isProduction) {
    return (
      <>
        <div className="flex flex-col h-screen">
          <header className="p-4">
            <Navbar />
          </header>
          <main className="p-4 flex-grow ">
            <Hero />
            <Company />
            {/* <Card /> */}
            {/* <PricingTables /> */}
            {/* <CardContent /> */}
            <Feature />
            <Comment />
            <Accordion />
            {/* <Stats /> */}
          </main>
          <footer className="p-4">
            <Footer />;
          </footer>
        </div>
        <></>
      </>
    );
  } else {
    return <Docs />;
  }
}
