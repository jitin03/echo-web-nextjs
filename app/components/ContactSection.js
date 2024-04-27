"use client";

import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactWebcall from "./ContactWebcall";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("call");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <p className="text-primary font-bold text-xl">
          &#47;&#47; Feel the state-of-art Voice Interaction
        </p>
        <h3 className="w-full md:w-3/4 lg:w-1/2 font-bold text-2xl md:text-3xl lg:text-5xl tracking-normal">
          See A Live Demo With A Restaurant reservation
        </h3>
        <div className="flex justify-center items-center text-sm font-medium text-center text-white  w-full md:w-1/2 mt-8">
          {/* <button
            className={`p-4 tracking-wide ${
              activeTab === "call"
                ? "bg-transparent border-[#4A4A4A] border rounded-t-lg"
                : ""
            }`}
            onClick={() => handleTabChange("call")}
          >
            Receive A Call
          </button>
          <button
            className={`p-4 tracking-wide ${
              activeTab === "webcall"
                ? "bg-transparent border-[#4A4A4A] border rounded-t-lg"
                : ""
            }`}
            onClick={() => handleTabChange("webcall")}
          >
            Try on Webcall
          </button> */}
          <button className="bg-primary rounded-3xl p-3 px-20 flex flex-row items-center gap-2 shadow-lg">
            Give a try{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
        {/* <div className="mt-8">
          {activeTab === "call" && <ContactForm />}
          {activeTab === "webcall" && <ContactWebcall />}
        </div> */}
      </div>
    </div>
  );
}
