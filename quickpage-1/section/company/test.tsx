"use client";
import React from "react";
import Marquee from "../../components/marquee-element";
import Image from "next/image";
import { company } from "@/lib/info";
import { companyRight } from "@/lib/info";
import Icon from "../icon/index";

function Index() {
  return (
    <div className="mt-16 max-w-[2000px] mx-auto">
      <div className=" flex-col -space-y-3">
        <Marquee direction="left" className="space-x-5 flex">
          {company.map((companys, i) => {
            return (
              <div className="space-x-8 justify-center flex">
                <img className="p-8" src={companys.logo} alt="" />
              </div>
            );
          })}
        </Marquee>

        <Marquee direction="right" className="space-x-5 flex">
          {companyRight.map((companys, i) => {
            return (
              <div className="space-x-8 justify-center flex">
                <img className="p-8" src={companys.logo} alt="" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Index;
