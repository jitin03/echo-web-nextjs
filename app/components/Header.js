import React from "react";
import Image from "next/image";
import container from "@/public/Container.svg";

export default function Header() {
  return (
    <React.Fragment>
      <div className="flex justify-center align-middle text-center flex-col">
        <h2 className="text-4xl md:text-6xl font-medium bg-gradient-to-r from-[#FF2DF7] from-10% via-[#5200FF] via-50% to-[#00F0FF] to-75%  md:from-30% md:via-50% md:to-60% inline-block text-transparent bg-clip-text pb-1 sm:pb-2 mt-10 md:mt-20">
          Introducing
        </h2>
        <h2 className="text-4xl md:text-6xl font-medium">ECHO Sense.</h2>
      </div>
      <div className="flex justify-center align-middle text-center text-sm md:text-2xl my-10">
        <h1 className="w-[70%] md:w-1/2 lg:w-1/3">
          Your Partner in AI-Driven Business Transformation
        </h1>
      </div>
      <div className="text-center flex align-middle justify-center">
        <button className="bg-gradient-to-l from-[#00F0FF] via-[#5200FF] via-50% to-[#FF2DF7] to-80% rounded-full p-[0.9px]">
          <span className="flex w-full text-xs md:text-base bg-primary rounded-full p-[6px] px-4 gap-2 align-middle justify-center ">
            Get In Touch
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
      <div className="flex justify-center align-middle mt-14 w-[87%] m-auto">
        <Image src={container} alt="container" />
      </div>
    </React.Fragment>
  );
}
