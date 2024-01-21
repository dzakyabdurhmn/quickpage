"use client";
import React from "react";
import Navbar from "@/section/navbar";
import Marquee from "@/components/marquee-element";

export default function App() {
  if (true) {
    return (
      <>
        <div className="flex flex-col h-screen max-w-[2000px] mx-auto">
          <header className="p-4">
            <Navbar />
          </header>
          <main className="p-4">
            <div className="px-3 py-2 bg-black text-white text-7xl font-bold -ml-7 -mr-7 transform -rotate-6	rounded-xl">
              <Marquee>
                <span className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti.
                </span>
              </Marquee>
            </div>
          </main>
          <footer className="p-4">{/* <Footer /> */}</footer>
        </div>
        <></>
      </>
    );
  } else {
    return <>swsws</>;
  }
}
