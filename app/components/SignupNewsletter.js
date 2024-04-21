import React from "react";
import Image from "next/image";
import newsletter from "@/public/newsletter.svg";

export default function SignupNewsletter() {
  return (
    <div className="w-[87%] my-16 p-5 m-auto rounded-md bg-gradient-to-l from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] text-white text-center text-xs md:text-xl leading-relaxed md:leading-9">
      <div className="w-full lg:w-[87%] m-auto grid grid-cols-12 mb-5">
        <div className="lg:col-span-5 col-span-12 w-1/2 md:w-full m-auto flex justify-center align-top">
          <Image src={newsletter} alt="gradient-box" />
        </div>
        <div className="lg:col-span-7 col-span-12  md:m-auto text-center md:text-left flex flex-col align-middle justify-center">
          <div className="p-4 w-full md:w-11/12 md:m-auto">
            <h3 className="text-2xl md:text-4xl md:w-3/4  pb-4">
              Get exponential reach via <strong>Stay Informed</strong>
            </h3>
            <p className="w-11/12 mx-auto md:mx-0 md:w-full md:pt-5 mb-8">
              Sign up for our newsletter to stay updated on the latest
              developments at Echo Sense., including the upcoming demo of
              HotelMate.AI. Be the first to know about our product launches,
              success stories, and industry insights.
            </p>
            <form className="flex gap-1 justify-between">
              <input
                required
                type="email"
                placeholder="Enter your work email"
                className="rounded-3xl w-[60%] p-1 px-3 md:px-5 bg-white bg-opacity-30 placeholder-white text-white"
              />

              <button className="flex align-middle justify-center gap-0 md:gap-2 bg-black rounded-3xl p-1 px-2 md:px-5">
                Get&nbsp;in&nbsp;touch
                <svg
                  className="w-[10px] md:w-4 h-4 md:h-9"
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
