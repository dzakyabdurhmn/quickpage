"use client";
import React from "react";
import Navbar from "@/section/navbar";

export default function App() {
  if (true) {
    return (
      <>
        <div className="flex flex-col h-screen max-w-[2000px] mx-auto">
          <header className="p-4">
            <Navbar />
          </header>
          <main className="p-4"></main>
          <footer className="p-4">{/* <Footer /> */}</footer>
        </div>
        <></>
      </>
    );
  } else {
    return <Docs />;
  }
}
