"use client";
import { useState } from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "@/components/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedItem] = useState<string>();

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement;
    setSelectedItem(target.textContent ?? "unknown");
  }
  return (
    <div>
      <header className="text-black py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://img.logoipsum.com/331.svg"
              alt="Logo"
              className="h-8 w-8  ml-2"
              height={1000}
              width={1000}
            />
            <nav className="hidden md:flex items-center space-x-4 text-center justify-center">
              <a href="#" className="hover:text-gray-400">
                Beranda
              </a>
              <a href="#" className="hover:text-gray-400">
                Tentang Kami
              </a>
              <a href="#" className="hover:text-gray-400">
                Layanan
              </a>
              <a href="#" className="hover:text-gray-400">
                Kontak
              </a>
            </nav>{" "}
          </div>
          {/* Navigasi Teks */}
          <div className="xl:hidden focus:outline-none ">Byutrton</div>
          {/* Tombol Hamburger (untuk tampilan mobile) */}
          <div className="md:hidden focus:outline-none ">
            <Dropdown.DropdownMenu onOpenChange={setIsOpen}>
              <Dropdown.DropdownMenuTrigger className="mr-2 text-black">
                {selectedValue}{" "}
                {isOpen ? (
                  <Cross1Icon />
                ) : (
                  <>
                    <HamburgerMenuIcon />
                  </>
                )}
              </Dropdown.DropdownMenuTrigger>
              <Dropdown.DropdownMenuContent className="bg-green-600 mt-5 w-screen h-screen space-y-2">
                <div className="justify-between flex flex-col">
                  <div className="mt-4 ml-3 space-y-2">
                    <Dropdown.DropdownMenuItem onSelect={setItem}>
                      <Button text="Menu 111" />
                    </Dropdown.DropdownMenuItem>
                    <Dropdown.DropdownMenuItem onSelect={setItem}>
                      <Button text="Menu 20" />
                    </Dropdown.DropdownMenuItem>
                    <Dropdown.DropdownMenuItem onSelect={setItem}>
                      <Button text="Menu 1" />
                    </Dropdown.DropdownMenuItem>
                  </div>
                </div>
                <div className="sticky top-0 z-50">Take a food</div>
              </Dropdown.DropdownMenuContent>
            </Dropdown.DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
}

export default page;
