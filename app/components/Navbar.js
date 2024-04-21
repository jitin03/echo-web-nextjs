"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="border-b border-gray-200 sticky top-0 z-50 bg-[#E0FCFD] flex flex-wrap items-center justify-between p-4 md:p-0 md:px-10 lg:px-20 h-[100px]">
      <div className="flex flex-row items-center  flex-grow text-white font-bold">
        <Image src={"/logo.svg"} width={48} height={45} alt="Logo" />
        <span className=" text-2xl flex flex-row items-center">
          <span className=" text-[#394F89] font-normal">Echo </span>
          <span className=" text-[#4B5FC2] font-medium relative">
            Sense
            <span className=" font-medium text-[#4B5FC2] absolute top-0 text-xs">
              Beta
            </span>
          </span>
        </span>
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
        className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-xs md:text-base md:flex-grow text-center md:flex md:gap-3 lg:gap-10 text-navlinks">
          <Link
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white-200 hover:text-[#1A202C] hover:font-semibold hover:delay-150"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white-200  hover:text-[#1A202C] hover:font-semibold hover:delay-150"
          >
            How it Work
          </Link>
          <Link
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white-200  hover:text-[#1A202C] hover:font-semibold hover:delay-150"
          >
            Why Choose Us
          </Link>
          <Link
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white-200 hover:text-[#1A202C] hover:font-semibold hover:delay-150"
          >
            Testimonial
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 mt-2 text-xs md:text-base ">
          <button className="w-16 inline-flex justify-center p-1 px-2 md:px-3 text-[#486284] underline underline-offset-2">
            Signup
          </button>
          <button className="w-16 md:w-20 bg-[#394F89] text-white p-1 px-2 md:px-3 rounded-sm flex justify-center">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}
