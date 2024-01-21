"use client";
import React from "react";
import Paragraph from "./paragraph";
import Word from "./word";
import Character from "./character";

const paragraph1 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

const paragraph2 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

const paragraph3 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
export default function Home() {
  const words = paragraph1.split(" ");
  return (
    <main>
      <div style={{ height: "100vh" }}></div>
      <Paragraph paragraph={paragraph1} />
      <div style={{ height: "100vh" }}></div>
      {/* <Word paragraph={paragraph2} />
      <div style={{ height: "100vh" }}></div>
      <Character paragraph={paragraph3} />
      <div style={{ height: "100vh" }}></div> */}
    </main>
  );
}
