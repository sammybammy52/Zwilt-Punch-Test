import React from "react";
import { ctaData } from "../../utils/Constants";
import Section from "./sections/Section";

const CtaIndex = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-[1300px] mx-auto  pt-[144px]">
        <div className="flex justify-center diagonal-separator bg-white z-40">
          <h1 className=" max-[1299px]:px-[30px] relative mb-[40px] z-50 text-center font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[30px] max-w-[977px] flex items-center">
            How we ensure you’re in good hands.
          </h1>
        </div>

        {
            ctaData?.map((i) => (
                <Section key={i?.id} data={i}/>
            ))
        }
        <div className="flex justify-center diagonal-separator2 bg-white z-40"></div>
      </div>
    </div>
  );
};

export default CtaIndex;
