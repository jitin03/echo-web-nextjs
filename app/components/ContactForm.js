import React from "react";
import Image from "next/image";
import indIcon from "@/public/indIcon.svg";

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 border-r border-[#4a4a4a] pr-[10px]">
          <Image src={indIcon} alt="india icon" />
        </span>
        <input
          className="bg-[#0e0e0e] p-[19px] rounded-lg border border-[#4a4a4a] pl-12"
          placeholder="Enter Your Phone Number"
        />
      </div>
      <input
        className="bg-[#0e0e0e] p-5 rounded-lg border border-[#4a4a4a]"
        type="text"
        placeholder="Please Enter Your Name"
      />
      <input
        className="bg-[#0e0e0e] p-5 rounded-lg border border-[#4a4a4a]"
        type="email"
        placeholder="Please Enter Your Email ID"
      />
    </div>
  );
}
