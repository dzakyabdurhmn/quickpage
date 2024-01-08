"use client";
import React from "react";
import { useState } from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import "./style.css";
import { Icons } from "@/components/icon";
import { Button } from "../../components/button";
import MobileNav from "./mobileNav";
function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedItem] = useState<string>();

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement;
    setSelectedItem(target.textContent ?? "unknown");
  }
  return (
    <div>
      <header className="text-white py-4  sticky top-0 z-50 ">
        <div className="container items-center mx-auto ">
          <div className="flex items-center justify-around mx-auto ">
            <div className="flex items-center justify-between mx-auto mb-[100px] bg-white w-screen px-5 py-3 rounded-full shadow-2xl shadow-zinc-400">
              {/* image logo */}
              <div className="img hidden sm:block lg:block">
                <Icons.icong />
              </div>
              {/* //nav Items Cross */}
              <div className="hidden md:flex items-center space-x-4 justify-center text-base font-semibold px-3 py-2 rounded-full text-center text-[#000]">
                <a href="#" className="hover:text-gray-400">
                  Beranda
                </a>
                <a href="#" className="hover:text-gray-400">
                  Tentangkami
                </a>
                <a href="#" className="hover:text-gray-400">
                  Tentangkamu
                </a>
              </div>
              <div className="btn flex space-x-2 ml-10">
                <Button.whitesmt />
                <Button.blacksm />
              </div>
            </div>

            {/* //button Log In */}

            {/* Tombol Hamburger (untuk tampilan mobile) */}
            {/* Tombol Hamburger (untuk tampilan mobile) */}
            {/* Tombol Hamburger (untuk tampilan mobile) */}
            <div className="menu-burger w-screen">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default page;
