import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./card";
import All from "./feature";
import Accordion from "./accordion";
import Footer from "./footer";
import Coment from "./counterNumber";
import PricingTables from "./price";
const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <All />
      <PricingTables />
      <Accordion />
      <Coment />
    </>
  );
};

export default page;
