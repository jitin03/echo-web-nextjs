import React from "react";
import Image from "next/image";
import ourteam from "@/public/ourteam.svg";
import gradientline from "@/public/gradientline.svg";

export default function OurTeam() {
  return (
    <div className="w-full lg:w-[87%] m-auto grid grid-cols-12">
      <div className="lg:col-span-6 col-span-12 order-1 w-1/2 md:w-full m-auto md:order-2 flex justify-center align-middle">
        <Image src={ourteam} alt="gradient-box" />
      </div>
      <div className="lg:col-span-6 col-span-12 order-2 lg:order-1 text-center md:text-left flex flex-col align-middle justify-center my-auto">
        <div className="p-4 w-full md:w-11/12 md:m-auto">
          <h3 className="bg-gradient-to-r from-[#FF2DF7] from-10% via-[#5200FF] via-50% to-[#00F0FF] to-95%  md:from-10% md:via-50% md:to-90% inline-block text-transparent bg-clip-text text-2xl md:text-4xl font-medium">
            At Echo Sense.
          </h3>
          <h4 className=" text-2xl md:text-3xl font-medium md:py-1 pb-4">
            Our Team
          </h4>
          <p className=" text-[#171717] w-11/12 mx-auto md:mx-0 md:w-[94.333333%] md:py-5 leading-relaxed md:leading-9 text-xs md:text-xl mb-8">
            Echo Sense. is led by a team of visionary entrepreneurs, AI experts,
            and industry professionals who are passionate about pushing the
            boundaries of what&apos;s possible with{" "}
            <strong className="text-[#0075FF]">artificial intelligence</strong>.
            With our deep understanding of AI technologies and our keen business
            acumen, we are committed to delivering exceptional value to our
            clients.
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
