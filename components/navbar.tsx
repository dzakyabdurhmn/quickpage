"use client";
import React from "react";
import { useState } from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import "./style.css";
import { Icons } from "@/components/icon";
import { Button } from "./button";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedItem] = useState<string>();

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement;
    setSelectedItem(target.textContent ?? "unknown");
  }
  return (
    <div>
      <header className="text-white py-4 bg-[#ff]">
        <div className="container items-center mx-auto">
          <div className="flex items-center justify-around mx-auto">
            {/* image logo */}
            <div className="img">
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
            {/* //button Log In */}
            <div className="btn flex space-x-2">
              <Button.whitesmt />
              <Button.blacksm />
            </div>
            {/* Tombol Hamburger (untuk tampilan mobile) */}
            {/* Tombol Hamburger (untuk tampilan mobile) */}
            {/* Tombol Hamburger (untuk tampilan mobile) */}
            <div className="focus:outline-none menu-burger ">
              <Dropdown.DropdownMenu onOpenChange={setIsOpen}>
                <Dropdown.DropdownMenuTrigger className="mr-2 text-black">
                  {selectedValue}{" "}
                  {isOpen ? (
                    <Cross1Icon className="text-black text-xl" />
                  ) : (
                    <>
                      <HamburgerMenuIcon className="text-black text-5xl" />
                    </>
                  )}
                </Dropdown.DropdownMenuTrigger>

                {/* //result to click n=menu */}
                <Dropdown.DropdownMenuContent className="bg-white z-10 text-center mt-5 w-screen rounded-xl space-y-2  ">
                  <div className="justify-between flex flex-col">
                    <div className="ml-3 space-y-5 mt-8">
                      <Dropdown.DropdownMenuItem
                        className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600 "
                        onSelect={setItem}
                      >
                        Beranda
                      </Dropdown.DropdownMenuItem>
                      <Dropdown.DropdownMenuItem
                        className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600"
                        onSelect={setItem}
                      >
                        Tentang Kami
                      </Dropdown.DropdownMenuItem>
                      <Dropdown.DropdownMenuItem
                        className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600"
                        onSelect={setItem}
                      >
                        Layanan
                      </Dropdown.DropdownMenuItem>
                      <Dropdown.DropdownMenuItem
                        className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600"
                        onSelect={setItem}
                      >
                        Kontak
                      </Dropdown.DropdownMenuItem>
                      <div className="justify-between flex flex-col pb-8">
                        <div className="mt-4 ml-3 space-y-2"></div>
                        <div className="mt-11">
                          <Dropdown.DropdownMenuItem className="hover:border-none hover:outline-none text-gray-800 hover:text-blue-600 absolute bottom-0 left-0 right-0 mb-6 mt-10">
                            <button className="inline-flex items-center justify-center h-9 px-16 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none mt-9">
                              Register sekarang
                            </button>
                          </Dropdown.DropdownMenuItem>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown.DropdownMenuContent>
              </Dropdown.DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default page;
