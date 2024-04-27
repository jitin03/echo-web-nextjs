import React from "react";

export default function Hero() {
  return (
    <div className="container mx-auto px-5">
      <div className="text-center flex flex-col gap-10 justify-center items-center">
        <h1 className="w-full md:w-3/4 lg:w-[55%] font-bold text-2xl md:text-3xl lg:text-4xl">
          Elevate Your Communication Strategy with Gen AI-Enhanced Voice Agents
        </h1>
        <h2 className="w-full md:w-3/4 lg:w-1/2 text-sm md:text-lg tracking-wider">
          Harness the Power of LLM-Based Conversational Voice AI for Phone
          Calling Applications with EchoSense AI Platform
        </h2>
        {/* <button className="bg-primary rounded-3xl p-3 px-20">Try now</button> */}
      </div>
    </div>
  );
}
