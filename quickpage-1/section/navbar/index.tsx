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
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { NavigationMenuDemo } from "./dropdown";
import Link from "next/link";
function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedItem] = useState<string>();

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement;
    setSelectedItem(target.textContent ?? "unknown");
  }
  return (
    <div className="sticky top-0 z-50">
      <header className="text-white py-4  sticky top-0 z-50 ">
        <div className="container items-center mx-auto ">
          <div className="flex items-center justify-around mx-auto ">
            <div className="flex items-center justify-between mx-auto mb-[100px] border  border-gray-800 bg-white w-screen px-5 py-3 rounded-2xl shadow-2xl shadow-zinc-400 hidden md:flex">
              {/* image logo */}
              <div className="img hidden sm:block lg:block ml-2">
                <Icons.icong />
              </div>
              {/* //nav Items Cross */}
              <div className="hidden md:flex items-center space-x-4 justify-center text-base font-semibold px-3 py-2 rounded-2xl text-center text-[#000]">
                <Link href="./" className="hover:text-gray-400">
                  Beranda
                </Link>
                <Link href="./about" className="hover:text-gray-400">
                  Tentangkami
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  Tentangkamu
                </Link>
              </div>
              <div className="btn flex space-x-2 ml-10">
                <Button
                  className="space-x-2 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
                  variant="purple"
                >
                  <>
                    <span>Helowww</span>
                    <ArrowRightIcon className="text-[#003F30]" />
                  </>
                </Button>
                {/* <button className="p-3 bg-green-400 rounded-2xl hover:shadow hover:scale-150 duration-100 hover:shadow-black">
                  <a href="">Button</a>
                </button> */}
              </div>
            </div>
            <div className="menu-burger">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default page;
