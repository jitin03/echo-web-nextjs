import React from "react";

export default function Investors() {
  return (
    <div className="border-2 border-[#00F0FF] rounded-xl shadow-[rgba(0,0,0,0.1)_10px_10px_4px_0px] my-16 md:my-20 flex flex-col justify-center align-middle w-[87%] m-auto py-5 px-11 text-[#171717] text-center text-xs md:text-xl leading-relaxed md:leading-9">
      <h4 className="text-2xl md:text-4xl font-medium">Investors</h4>
      <p className="text-[#171717] md:w-3/4 md:py-5 m-auto my-5 md:my-0">
        We are actively seeking visionary investors who share our passion for
        AI-driven innovation. If you&apos;re interested in being a part of our
        growth journey and shaping the future of AI in business, please get in
        touch with our team to explore investment opportunities.
      </p>
      <p className="text-[#171717] md:w-3/4 md:py-5 m-auto">
        Partner with Echo Sense. today and unlock the full potential of AI for
        your business. Contact us to learn more about how our custom AI agents
        can help you achieve your goals and stay ahead of the curve
      </p>
      <div className="text-center flex align-middle justify-center mt-5">
        <button className="bg-gradient-to-l from-[#00F0FF] via-[#5200FF] via-50% to-[#FF2DF7] to-80% rounded-full p-[0.9px]">
          <span className="flex w-full text-xs md:text-base bg-[#F6F6F6] rounded-full p-[6px] px-4 gap-2 align-middle justify-center ">
            Contact&nbsp;Us
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
  );
}
