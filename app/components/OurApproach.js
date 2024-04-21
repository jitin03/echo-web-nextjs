import React from "react";
import Image from "next/image";
import ourapproach from "@/public/ourapproach.svg";
import gradientline from "@/public/gradientline.svg";

export default function OurApproach() {
  return (
    <div className="w-full lg:w-[87%] m-auto grid grid-cols-12 mb-5">
      <div className="lg:col-span-6 col-span-12 w-1/2 md:w-full m-auto flex justify-center align-top">
        <Image src={ourapproach} alt="gradient-box" />
      </div>
      <div className="lg:col-span-6 col-span-12  md:m-auto text-center md:text-left flex flex-col align-middle justify-center">
        <div className="p-4 w-full md:w-11/12 md:m-auto">
          <h3 className="bg-gradient-to-r from-[#FF2DF7] from-10% via-[#5200FF] via-50% to-[#00F0FF] to-95%  md:from-10% md:via-50% md:to-90% inline-block text-transparent bg-clip-text text-2xl md:text-4xl font-medium">
            At Echo Sense.
          </h3>
          <h4 className=" text-2xl md:text-3xl font-medium md:py-1 pb-4">
            Our Approach
          </h4>
          <p className=" text-[#171717] w-11/12 mx-auto md:mx-0 md:w-[94.333333%] md:py-5 leading-relaxed md:leading-9 text-xs md:text-xl mb-8">
            We believe that every business is unique, and therefore, requires a
            <strong className="text-[#0075FF]"> customized AI solution</strong>{" "}
            to address its specific challenges and goals. Our development
            process begins with a deep dive into your business, understanding
            your pain points, and identifying areas where AI can make a
            significant impact. We then collaborate closely with your team to
            <strong className="text-[#0075FF]">
              design, develop, and implement
            </strong>{" "}
            bespoke AI agents that seamlessly integrate with your existing
            systems and processes.
          </p>
          <Image
            src={gradientline}
            alt="gradient underline"
            className="w-11/12 mx-auto md:mx-0 md:w-5/6"
          />
        </div>
      </div>
    </div>
  );
}
