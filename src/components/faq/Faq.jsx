import React from "react";
import { faqData } from "../../utils/Constants";
import ZwiltIcon from "../general/ZwiltIcon";

const Faq = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] pt-[63px] pb-[108px]">
        <h1 className="text-center font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[30px]  mb-[88px]">
          Frequently asked questions
        </h1>

        <div className="">
          {faqData?.map((i, index) => (
            <div
              className=" max-lg:px-[30px] h-[112px] grid grid-cols-10 items-center border-y border-gray-200 group hover:bg-[#E8E8E8] transition-all duration-500 relative"
              key={index}
            >
                <div className="absolute right-[89px] max-lg:right-[45px] top-[48px] opacity-0 group-hover:opacity-100">
                    <ZwiltIcon color={"#FFBE2E"}/>
                </div>
              <div className="col-span-4 max-lg:hidden">
                {index === 0 && (
                  <div className="border-r border-gray-200 flex justify-center items-center max-w-[230px] h-[112px]">
                    <p className="text-[22px] max-lg:text-center leading-[32px] text-zwilt-black font-normal max-[691px]:text-sm">
                      General
                    </p>
                  </div>
                )}
                {index === 4 && (
                  <div className="flex">
                    <div className="border-r bg-[#E8E8E8] border-gray-200 flex justify-center items-center lg:w-[230px] max-w-[230px] h-[112px]">
                      <p className="text-[22px] max-lg:text-center leading-[32px] text-zwilt-black font-normal max-[691px]:text-sm">
                        General
                      </p>
                    </div>

                    <div className="border-r  border-gray-200 flex justify-center items-center lg:w-[260px] max-w-[260px] h-[112px]">
                      <p className="text-[22px] max-lg:text-center leading-[32px] text-zwilt-black font-normal max-[691px]:text-sm">
                        Joining Process
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <p className="col-span-6 lg:ps-[111px] text-[22px] leading-[32px] text-zwilt-black font-normal max-w-[570px] max-[691px]:text-sm">
                {i}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
