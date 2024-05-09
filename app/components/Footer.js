import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <div className=" bg-[#1A1A1A] h-[250px]" id="footer">
      <div className=" h-full w-full flex flex-col">
        <div className=" flex flex-row justify-center h-[70%] w-full">
          <div className=" flex flex-col gap-4 ">
            <h1 className=" text-primary font-bold flex flex-row items-center">
              <Image
                src={logo}
                className="w-20 h-10 md:w-32 md:h-24 lg:w-40 lg:h-20"
                alt="Logo"
              />
            </h1>
            <h2 className=" w-[60%] text-sm font-semibold">
              Our vision is to provide convenience and help increase your
              business.
            </h2>
          </div>
          <div className=" h-full ">
            <form className=" h-full w-full flex flex-col gap-2 pt-8">
              <h1 className=" text-xl font-semibold">Contact Us</h1>
              <div className=" flex flex-row gap-1">
                {/* <input
                  type={"email"}
                  placeholder="Enter your work email"
                  className=" bg-white bg-opacity-20 rounded-2xl px-4 w-[250px]  py-2 border-1 border-purple-400 outline-none text-black text-xs"
                /> */}
                <Link href={"https://forms.gle/4s9uvnpQ7D2E7cjG9"}>
                  <button className=" flex flex-row items-center bg-white border border-none rounded-2xl py-2 px-4 text-black text-xs font-semibold shadow border-gradient">
                    Get in touch{" "}
                    <span>
                      <FaArrowRightLong className=" ml-1 text-purple-500" />
                    </span>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className=" h-[30%] w-full border-t-[0.1px] border-t-gray-200 border-opacity-20 flex flex-row  justify-around items-center">
          <div>
            <h3 className=" text-sm font-semibold">
              &copy;2024 ECHO Sense . All rights reserved
            </h3>
          </div>
          <div className=" w-[45%]">
            <ul className=" text-sm flex flex-row justify-between  w-full font-semibold">
              <li className=" cursor-pointer">Enterprise</li>
              <li className=" cursor-pointer">Privacy & Policy</li>
              <li className=" cursor-pointer">Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
