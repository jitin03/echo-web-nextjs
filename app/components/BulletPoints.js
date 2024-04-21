import React from "react";
import Image from "next/image";
import bulletpoint from "@/public/bulletpoint.svg";

export default function BulletPoints({ title, description, noTitle }) {
  return (
    <ul>
      <li className="flex gap-1">
        <Image
          src={bulletpoint}
          alt="bullet arrow"
          className="flex justify-start align-top min-w-9 h-5 pl-4 md:pl-0  md:min-h-8 md:pt-2 md:gap-2"
        />
        <p className="text-left">
          {noTitle ? null : (
            <span className="text-[#394F89] font-semibold">{title + " "} </span>
          )}

          {description}
        </p>
      </li>
    </ul>
  );
}
