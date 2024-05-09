import React from "react";
import Image from "next/image";
import donnetRight from "@/public/donnetRight.svg";
import donnetLeft from "@/public/donnetLeft.svg";
import DropdownArrow from "./DropDownArrow";
export default function UseCase() {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <p className="text-primary font-bold text-xl">&quot;Use Case&quot;</p>
        <h4 className="relative font-bold text-2xl md:text-3xl lg:text-5xl tracking-normal">
          &nbsp;&nbsp; Solutions for everything.&nbsp;&nbsp;
          <Image
            src={donnetLeft}
            alt="Bottom Left SVG"
            className="absolute top-1 -left-10 md:-left-20 w-10 h-10 md:w-16 md:h-16 lg:w-[80px] lg:h-[80px]"
          />
          <Image
            src={donnetRight}
            alt="Top Right SVG"
            className="absolute bottom-2 -right-10 md:-right-20 w-10 h-10 md:w-16 md:h-16  lg:w-[85px] lg:h-[85px]"
          />
        </h4>

        <p className="w-full md:w-3/4 lg:w-2/5 text-sm md:text-lg tracking-wider">
          Customer support, front desk, outbound sales, lead generation,
          telehealth, food ordering, transportation logistics, employee
          training, roleplay, or whatever else you want to build.
        </p>
        <div className="border-2 border-[#4A4A4A] rounded-3xl px-5 gap-5 text-start p-5 md:p-2 bg-[#080808] mt-10">
          <div className="flex justify-evenly flex-wrap gap-7 md:gap-0">
            <div className="border-[#4A4A4A] border-0 md:border-r px-5">
              <div className="bg-[#191919] px-5 rounded-3xl p-2 md:px-5 md:p-1 w-64">
                <h5 className="text-primary font-semibold">Restaurant</h5>
                <p className="text-[#FFB2F7] font-light tracking-normal text-sm">
                  Reservation, menu inquiries
                </p>
              </div>
            </div>
            <div className="px-5">
              <div className="bg-[#191919] px-5 rounded-3xl p-2 md:px-5 md:p-1 w-64">
                <h5 className="text-primary font-semibold">
                  Recruitment Agent
                </h5>
                <p className="text-[#FFB2F7] font-light tracking-normal text-sm">
                  Hiring process{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DropdownArrow id="footer" />
    </div>
  );
}
