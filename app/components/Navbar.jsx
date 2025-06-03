"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Install lucide-react or use SVG icons
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact us", path: "/contact" },
    
  ];

  return (
    <>
      <nav className="bg-black text-white px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src="https://cdn.pixabay.com/photo/2022/07/17/19/22/movie-7328179_1280.png"
            width={50}
            height={50}
            alt="logo"
            className="rounded-full"
          />
          <span className="text-xl font-bold hidden sm:inline">MovieFlix</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {navItems.map(({ name, path }) => (
            <li
              key={name}
              className="px-3 py-2 hover:bg-fuchsia-300 rounded-xl cursor-pointer font-semibold"
            >
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X className="w-6 h-6 cursor-pointer" onClick={toggleDrawer} />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" onClick={toggleDrawer} />
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-3 space-y-3">
          {navItems.map(({ name, path }) => (
            <Link key={name} href={path} onClick={toggleDrawer}>
              <div className="block px-4 py-2 hover:bg-fuchsia-300 rounded-xl font-semibold cursor-pointer">
                {name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
