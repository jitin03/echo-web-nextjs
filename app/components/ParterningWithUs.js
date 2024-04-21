import React from "react";
import Image from "next/image";
import parterning from "@/public/parterning.svg";
import gradientline from "@/public/gradientline.svg";
import BulletPoints from "./BulletPoints";

export default function ParterningWithUs() {
  return (
    <div className="w-full lg:w-[87%] m-auto grid grid-cols-12 my-5">
      <div className="lg:col-span-6 col-span-12 w-1/2 md:w-full m-auto flex justify-center align-top">
        <Image src={parterning} alt="gradient-box" />
      </div>
      <div className="lg:col-span-6 col-span-12  md:m-auto text-center md:text-left flex flex-col align-middle justify-center">
        <div className="p-4 w-full md:w-11/12 md:m-auto">
          <h3 className="md:pl-9 bg-gradient-to-r from-[#FF2DF7] from-10% via-[#5200FF] via-50% to-[#00F0FF] to-95%  md:from-10% md:via-50% md:to-90% inline-block text-transparent bg-clip-text text-2xl md:text-4xl font-medium">
            Partnering with
          </h3>
          <h4 className=" text-2xl md:text-3xl font-medium md:py-1 pb-4 md:pb-8 md:pl-9">
            Echo Sense.
          </h4>
          <div className="text-[#171717] leading-relaxed md:leading-9 text-xs md:text-xl mb-8">
            <p className="md:pl-10 w-[87%] md:w-full m-auto">
              We invite forward-thinking hotel owners, operators, and investors
              to partner with us and be at the forefront of the AI revolution in
              the hospitality industry. By joining forces with Zestio Labs,
              you&apos;ll have the opportunity to:
            </p>
            <div className="text-[#171717] leading-relaxed md:leading-9 text-xs md:text-xl mb-8">
              <BulletPoints
                title={"24/7 Availability:"}
                description={
                  "Be among the first to implement HotelMate.AI and gain a competitive edge in the market."
                }
                noTitle={true}
              />
              <BulletPoints
                title={"Natural Language Processing:"}
                description={
                  "Collaborate with our expert team to customize HotelMate.AI to your hotel's unique requirements."
                }
                noTitle={true}
              />
              <BulletPoints
                title={"Seamless Integration:"}
                description={
                  "Benefit from our ongoing support, training, and maintenance services to ensure optimal performance."
                }
                noTitle={true}
              />
              <BulletPoints
                title={"Personalized Recommendations:"}
                description={
                  "Gain insights from valuable data analytics to make informed business decisions and drive continuous improvement."
                }
                noTitle={true}
              />
            </div>
          </div>
          {/* <p className="w-11/12 mx-auto md:mx-0 md:w-[94.333333%] md:py-5 leading-relaxed md:leading-9 text-xs md:text-xl mb-8">
            Echo Sense. is led by a team of visionary entrepreneurs, AI experts,
            and industry professionals who are passionate about pushing the
            boundaries of what&apos;s possible with{" "}
            <strong className="text-[#0075FF]">artificial intelligence</strong>.
            With our deep understanding of AI technologies and our keen business
            acumen, we are committed to delivering exceptional value to our
            clients.
          </p> */}
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
