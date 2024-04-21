import React from "react";
import Image from "next/image";
import gradientline from "@/public/gradientline.svg";
import pinkshade from "@/public/pinkshade.svg";
import blueshshade from "@/public/blueshshade.svg";

export default function GetEmailSection() {
  return (
    <div className="w-[87%] my-16 p-5 md:py-16 m-auto rounded-xl bg-black text-white text-center text-xs md:text-xl leading-relaxed md:leading-9">
      {/* <Image
        src={blueshshade}
        alt="blueshshade"
        className="md:w-60 h-full md:m-auto"
      /> */}
      <div className="flex justify-center align-middle text-center flex-col z-10 w-full mt-5">
        <h2 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-[#FF2DF7] from-10% via-[#5200FF] via-50% to-[#00F0FF] to-75%  md:from-30% md:via-50% md:to-60% inline-block text-transparent bg-clip-text pb-1 sm:pb-2 ">
          Introducing
        </h2>
        <h2 className="text-3xl md:text-5xl font-medium">ECHO Sense.</h2>
        <p className="text-sm md:text-2xl mt-3">
          Empowering Businesses with Intelligent AI Solutions.
        </p>
        <Image
          src={gradientline}
          alt="gradient underline"
          className=" py-5 md:py-8 m-auto w-full md:w-[35%]"
        />
        <div className="relative flex m-auto h-10 w-4/5 md:w-1/2 lg:w-[300px] mb-5">
          <button
            className="!absolute right-1 top-1 z-10 rounded py-1 px-4 text-white"
            type="button"
            data-ripple-light="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <input
            type="email"
            className=" h-full w-full rounded-xl px-5 bg-white bg-opacity-30 placeholder-white text-white"
            placeholder="Enter your work email"
            required
          />
        </div>
      </div>
      {/* <Image src={pinkshade} alt="pinkshade" className="md:w-60 md:m-auto" /> */}

      {/* <div className="flex absolute md:-mt-[50vh] z-0 -mt-44">
        <Image src={blueshshade} alt="blueshshade" className="w-3/6 h-80" />
        <Image src={pinkshade} alt="pinkshade" className="w-3/6 h-80" />
      </div> */}
    </div>
  );
}
