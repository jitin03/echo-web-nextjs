import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#9DF6FC] mt-16 text=[#1A202C] leading-relaxed md:leading-10 text-xs md:text-sm font-medium">
      {/* <!-- Footer container --> */}
      <footer className="flex flex-col items-center text-center lg:text-left w-[87%] m-auto">
        <div className="container px-6 pt-6 ">
          <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Fourth links section --> */}
            <div className="mb-6 md:-mt-10 flex flex-col">
              <h1 className=" mb-2 flex flex-row items-center  flex-grow text-white font-bold">
                <Image src={"/logo.svg"} width={48} height={45} alt="Logo" />
                <span className=" text-2xl flex flex-row items-center">
                  <span className=" text-[#394F89] font-normal">Echo </span>
                  <span className=" text-[#4B5FC2] font-medium relative">
                    Sense
                    <span className=" font-medium text-[#4B5FC2] absolute top-0 text-xs">
                      Beta
                    </span>
                  </span>
                </span>
              </h1>

              <p className="leading-6">
                Our vision is to provide convenience and help increase your
                business.
              </p>
              <div className="flex gap-2 justify-center align-middle md:justify-start pt-2">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17"
                    cy="17"
                    r="16"
                    fill="white"
                    stroke="none"
                    strokeWidth="2"
                  />
                  <path
                    d="M20.7795 11.6095H18.2543C17.955 11.6095 17.6225 12.0033 17.6225 12.5265V14.35H20.7813L20.3035 16.9505H17.6225V24.7573H14.6423V16.9505H11.9385V14.35H14.6423V12.8205C14.6423 10.626 16.1648 8.84275 18.2543 8.84275H20.7795V11.6095Z"
                    fill="#1A202C"
                  />
                </svg>
                <svg
                  width="35"
                  height="34"
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.5"
                    cy="17"
                    r="16"
                    fill="white"
                    stroke="none"
                    strokeWidth="2"
                  />
                  <path
                    d="M24.2339 13.762C24.2409 13.9055 24.2426 14.049 24.2426 14.189C24.2426 18.564 20.9159 23.6058 14.8294 23.6058C13.0309 23.6087 11.2698 23.0922 9.75785 22.1183C10.0151 22.1498 10.2793 22.162 10.5471 22.162C12.0976 22.162 13.5239 21.6353 14.6561 20.7463C13.9661 20.7327 13.2975 20.5042 12.7435 20.0927C12.1896 19.6811 11.7778 19.107 11.5656 18.4503C12.0611 18.5445 12.5716 18.5247 13.0583 18.3925C12.3094 18.2411 11.6359 17.8353 11.1521 17.2439C10.6682 16.6526 10.4038 15.9121 10.4036 15.148V15.1078C10.8498 15.3545 11.3608 15.505 11.9033 15.5225C11.2012 15.0551 10.7042 14.3372 10.5139 13.5155C10.3236 12.6938 10.4544 11.8304 10.8796 11.102C11.7108 12.124 12.7473 12.9601 13.9221 13.556C15.0969 14.152 16.3837 14.4947 17.6994 14.5618C17.5321 13.8518 17.6041 13.1065 17.9041 12.4416C18.2042 11.7768 18.7154 11.2297 19.3585 10.8855C20.0015 10.5412 20.7403 10.419 21.4599 10.5379C22.1796 10.6568 22.8397 11.0102 23.3379 11.543C24.0784 11.3965 24.7886 11.1248 25.4379 10.7398C25.191 11.5065 24.6743 12.1576 23.9836 12.572C24.6396 12.493 25.2801 12.3166 25.8841 12.0488C25.4405 12.7136 24.8816 13.2938 24.2339 13.762Z"
                    fill="#1A202C"
                  />
                </svg>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17"
                    cy="17"
                    r="16"
                    fill="#1A202C"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M22.2502 16.8C22.2502 18.1924 21.6971 19.5277 20.7125 20.5123C19.7279 21.4969 18.3926 22.05 17.0002 22.05C15.6078 22.05 14.2725 21.4969 13.2879 20.5123C12.3033 19.5277 11.7502 18.1924 11.7502 16.8C11.7502 16.5008 11.7817 16.2085 11.8359 15.925H10.0002V22.9198C10.0002 23.4063 10.3939 23.8 10.8804 23.8H23.1217C23.3549 23.7995 23.5783 23.7066 23.743 23.5416C23.9077 23.3765 24.0002 23.1529 24.0002 22.9198V15.925H22.1644C22.2187 16.2085 22.2502 16.5008 22.2502 16.8ZM17.0002 20.3C17.4599 20.2999 17.9152 20.2092 18.3399 20.0332C18.7646 19.8571 19.1504 19.5992 19.4754 19.274C19.8004 18.9488 20.0582 18.5628 20.234 18.138C20.4099 17.7133 20.5003 17.258 20.5002 16.7983C20.5001 16.3385 20.4094 15.8833 20.2334 15.4586C20.0573 15.0339 19.7994 14.648 19.4742 14.323C19.149 13.998 18.763 13.7402 18.3382 13.5644C17.9135 13.3886 17.4582 13.2981 16.9984 13.2983C16.07 13.2985 15.1796 13.6675 14.5232 14.3243C13.8668 14.981 13.4982 15.8715 13.4984 16.8C13.4987 17.7285 13.8677 18.6189 14.5244 19.2752C15.1812 19.9316 16.0717 20.3002 17.0002 20.3ZM21.2002 13.125H23.2984C23.4378 13.125 23.5716 13.0697 23.6703 12.9713C23.769 12.8729 23.8247 12.7394 23.8252 12.6V10.5018C23.8252 10.362 23.7697 10.2281 23.6709 10.1293C23.5721 10.0305 23.4382 9.975 23.2984 9.975H21.2002C21.0605 9.975 20.9265 10.0305 20.8277 10.1293C20.7289 10.2281 20.6734 10.362 20.6734 10.5018V12.6C20.6752 12.8888 20.9114 13.125 21.2002 13.125ZM17.0002 0C12.5446 0 8.27141 1.76999 5.1208 4.92061C1.97019 8.07122 0.200195 12.3444 0.200195 16.8C0.200195 21.2556 1.97019 25.5288 5.1208 28.6794C8.27141 31.83 12.5446 33.6 17.0002 33.6C19.2064 33.6 21.391 33.1655 23.4293 32.3212C25.4676 31.4769 27.3196 30.2394 28.8796 28.6794C30.4396 27.1194 31.6771 25.2674 32.5214 23.2291C33.3657 21.1908 33.8002 19.0062 33.8002 16.8C33.8002 14.5938 33.3657 12.4092 32.5214 10.3709C31.6771 8.33265 30.4396 6.48063 28.8796 4.92061C27.3196 3.36058 25.4676 2.1231 23.4293 1.27882C21.391 0.434545 19.2064 0 17.0002 0ZM25.7502 23.6058C25.7502 24.675 24.8752 25.55 23.8059 25.55H10.1944C9.1252 25.55 8.2502 24.675 8.2502 23.6058V9.99425C8.2502 8.925 9.1252 8.05 10.1944 8.05H23.8059C24.8752 8.05 25.7502 8.925 25.7502 9.99425V23.6058Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {/* <!-- First links section --> */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">About</h5>

              <ul className="mb-0 list-none">
                <li>
                  <Link href="#!">How it works</Link>
                </li>
                <li>
                  <Link href="#!">Featured</Link>
                </li>
                <li>
                  <Link href="#!">Partnership</Link>
                </li>
                <li>
                  <Link href="#!">Bussiness Relation</Link>
                </li>
              </ul>
            </div>

            {/* <!-- Second links section --> */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Community</h5>

              <ul className="mb-0 list-none">
                <li>
                  <Link href="#!">Events</Link>
                </li>
                <li>
                  <Link href="#!">Blog</Link>
                </li>
                <li>
                  <Link href="#!">Podcast</Link>
                </li>
                <li>
                  <Link href="#!">Invite a friend</Link>
                </li>
              </ul>
            </div>

            {/* <!-- Third links section --> */}
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Socials</h5>

              <ul className="mb-0 list-none">
                <li>
                  <Link href="#!">Discord</Link>
                </li>
                <li>
                  <Link href="#!">Instagram</Link>
                </li>
                <li>
                  <Link href="#!">Twitter</Link>
                </li>
                <li>
                  <Link href="#!">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Copyright section --> */}
        <div className="w-full text-center flex flex-col md:flex-row justify-between gap-5 border-t border-[#486284] bg-opacity-10 pt-3">
          <div className="md:order-2 flex flex-col md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-4">
            <Link href="#" className="font-semibold">
              Privacy & Policy
            </Link>
            <Link href="#" className="font-semibold">
              Terms & Condition
            </Link>
          </div>
          <div className="md:order-1 my-2 md:mt-0 font-medium">
            ©2024 ECHO Sense. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
