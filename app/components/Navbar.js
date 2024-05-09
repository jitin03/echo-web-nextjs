"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#252525] flex flex-wrap items-center justify-between p-3 md:p-0 md:px-10 lg:px-40 sticky top-0 z-10">
      <div className="flex items-center flex-shrink-0 flex-grow text-white">
        <Image
          src={logo}
          className="w-20 h-10 md:w-32 md:h-24 lg:w-40 lg:h-20"
          alt="Logo"
        />
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full  md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-xs md:text-base md:flex-grow text-center md:flex md:gap-10 text-navlinks  items-center">
          <Link
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white-200 hover:font-semibold hover:delay-150 hover:text-[#FF00E5]"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white-200  hover:font-semibold hover:delay-150 hover:text-[#FF00E5]"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white-200   hover:font-semibold hover:delay-150 hover:text-[#FF00E5]"
          >
            Dashboard
          </Link>
          {/* <div className="flex flex-col md:flex-row justify-center items-center pt-3 md:pt-0">
            <button className="w-16 md:w-28 bg-[#333333] text-primary px-10 rounded-3xl font-bold p-1 md:px-10 flex justify-center">
              Log&nbsp;In
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
