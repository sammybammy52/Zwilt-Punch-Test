import React from "react";
import ZwiltIcon from "../general/ZwiltIcon";
import { footerData } from "../../utils/Constants";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center diagonal-separator2 bg-[#0C0C0C] max-lg:hidden z-40"></div>
      <div className="footer-gradient relative pt-20">
        {/* <img src="/assets/footer/shape.svg" className="absolute left-0 right-0 top-[-64px]" alt="" /> */}
        <div className="max-w-[1300px] mx-auto max-[1299px]:mx-[30px] max-lg:bg-[#525AA0]   h-[481px] flex flex-col justify-center items-center relative">
          <img
            src="/assets/footer/rectangle.svg"
            alt=""
            className="absolute max-w-[1300px] max-[1299px]:px-[30px] left-0 right-0 top-0 bottom-0 h-full w-full max-lg:h-[500px]"
          />
          <h1 className="z-10 text-center font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-white leading-[64px] max-[691px]:leading-[30px] max-w-[683px] mb-[35px]">
            Need a job done, and done well? Get started
          </h1>

          <div className="z-10 h-[73px] w-[73px] flex justify-center items-center rounded-[30px] bg-zwilt-black">
            <ZwiltIcon color={"#ffffff"} className={"rotate-90"} />
          </div>
        </div>

        <div className="flex max-lg:flex-col max-lg:gap-10 justify-between lg:gap-[91px] mt-[123px]  max-w-[1300px] mx-auto max-[1299px]:mx-[30px]">
          <div className="">
            <img src="/assets/navbar/nav-logo.svg" alt="" />

            <p className="mt-[28px] mb-[49px] text-[14px] max-md:text-[12px] leading-[22px] font-normal text-white opacity-80 max-w-[284px]">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
            <p className="uppercase mb-[16px] text-[14px] max-md:text-[12px] leading-[32px] font-semibold text-white opacity-40 max-w-[284px]">
              LINKS AND REDIRECTS
            </p>

            <div className="flex gap-2">
              <button className="bg-[#292B34] text-white font-medium text-[14px] rounded-[20px] w-[162px] h-[50px]">
                Hire Now
              </button>
              <button className="bg-[#292B34] text-white font-medium text-[14px] rounded-[20px] w-[162px] h-[50px]">
                Apply Now
              </button>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-white leading-[64px] max-[691px]:leading-[30px] max-w-[779px] mb-[64px]">
              Connecting the right people to the right businesses.
            </h1>

            <div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {footerData?.map((i) => (
                  <div className="flex flex-col " key={i?.id}>
                    <p className="uppercase mb-[16px] text-[14px] max-md:text-[12px] leading-[32px] font-semibold text-white opacity-40 max-w-[284px]">
                      {i?.name}
                    </p>
                    {i?.items?.map((j, index) => (
                      <p
                        key={index}
                        className="text-white mb-[23px] text-[18px] leading-[18px] font-normal group cursor-pointer"
                      >
                        {j}
                        <div className="w-[0px] opacity-0 group-hover:opacity-100 group-hover:w-[101.5px] h-[0px] transition-all duration-500 border border-gray-300 mt-1"></div>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 h-[80px] lg:h-[50px] flex max-lg:flex-col items-center justify-between lg:px-[70px]">
          <p className="font-medium leading-[31.25px] text-[16px] text-white">
            All rights reserved by Zwilt
          </p>
          <div className="flex gap-[34px]">
            <p className=" underline opacity-60 font-medium leading-[31.25px] text-[16px] text-white">
              Privacy Policy
            </p>
            <p className=" underline opacity-60 font-medium leading-[31.25px] text-[16px] text-white">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
