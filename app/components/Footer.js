import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-white p-5 pt-10">
      <div className="flex justify-center items-center flex-wrap gap-3 md:gap-7 w-full mx-auto max-w-screen-xl border-b border-gray-500 pb-8">
        <div className="flex flex-col gap-5">
          <Image
            src={logo}
            alt="logo"
            className="m-auto md:m-0 w-[40%] md:w-1/3"
          />
          <p className=" md:text-lg w-full md:w-9/12 text-left px-4">
            Our vision is to provide convenience and help increase your
            business.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full px-3 md:w-3/4 lg:w-1/3">
          <p className="p-1 text-xl">Contact Us</p>
          <div className="flex justify-between items-center gap-3 w-full">
            <input
              required
              type="email"
              placeholder="Enter your work email"
              className="rounded-3xl w-full p-1 px-3 md:px-5 bg-white bg-opacity-30 placeholder-white text-white"
            />
            <div className="text-center flex align-middle justify-center">
              <button className="bg-gradient-to-l from-[#00F0FF] via-[#5200FF] via-50% to-[#FF2DF7] to-80% rounded-full p-[0.9px]">
                <span className="flex w-full text-xs md:text-base bg-white text-black rounded-full p-[6px] px-4 gap-2 align-middle justify-center ">
                  Get&nbsp;in&nbsp;touch
                  <svg
                    className="w-[10px] md:w-3 h-4 md:h-6"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.29785 6.29799H13.7234M8.28721 0.861816L13.7234 6.29799L8.28721 11.7342"
                      stroke="url(#paint0_linear_44_26407)"
                      strokeWidth="1.55319"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_44_26407"
                        x1="13.0425"
                        y1="-1.7739"
                        x2="-1.40956"
                        y2="-0.916673"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00F0FF" />
                        <stop offset="0.482483" stopColor="#5200FF" />
                        <stop offset="1" stopColor="#FF2DF7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-around md:pt-8">
        <span className="text-sm sm:text-center">
          © 2024{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            ECHO Sense
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap md:gap-5 items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Enterprise
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Privacy & Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              Terms & Condition
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
