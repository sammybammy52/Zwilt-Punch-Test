import React from "react";
import { servicesData } from "../../utils/Constants";
import CareersSection from "./CareersSection";
import ZwiltIcon from "../general/ZwiltIcon";
import ZwiltFancyButton from "../general/ZwiltFancyButton";

const Services = () => {
  return (
    <>
      <div className="bg-[#EDEFFF] diagonal-separator">
        <div className="max-w-[1300px] mx-auto w-full max-[1299px]:px-[30px] min-[1440px]:pt-[219px] pt-[150px]">
          <div className="flex justify-center mb-[90px]">
            <h1 className="text-center font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[30px] max-w-[977px] mb-[20px] flex items-center">
              Your one-stop marketplace for finding the talent your business
              needs.
            </h1>
          </div>

          <div className="flex flex-col gap-[30px] mb-[14px]">
            {servicesData?.map((i) => (
              <CareersSection key={i?.id} data={i} />
            ))}
          </div>

          <div className="flex items-center max-[1104px]:flex-col max-[1104px]:gap-4 min-[1299px]:justify-between relative z-10 pb-[77px]">
          <ZwiltFancyButton text={"Explore More"}/>
            <p className=" font-medium text-zwilt-black max-w-[730px] max-[1299px]:ps-10 max-[1104px]:text-center max-[1104px]:ps-0  min-[1011px]:min-w-[730px]"><span className=" font-bold">30 more</span> to explore</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
