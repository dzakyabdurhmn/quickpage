"use client";
import React from "react";
import Marquee from "../../components/marquee-element";
import { company } from "@/lib/info";

function Index() {
  return (
    <div className="flex">
      {company.map((companys, i) => {
        // const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          //   <Card
          //     key={`p_${i}`}
          //     i={i}
          //     {...project}
          //     progress={scrollYProgress}
          //     range={[i * 0.25, 1]}
          //     targetScale={targetScale}
          //   />
          <Marquee>{companys.logo}</Marquee>
        );
      })}
    </div>
  );
}

export default Index;
