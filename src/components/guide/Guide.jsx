import React from "react";
import { guideData } from "../../utils/Constants";
import { AiFillPlaySquare } from "react-icons/ai";

const Guide = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1300px] mx-auto max-[1299px]:px-[30px] pt-[148px] pb-[92px]">
        <div className="max-w-[646px] max-lg:mx-auto">
          <h1 className=" font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[30px] max-w-[977px] mb-[30px] flex items-center">
            How we ensure you’re in good hands.
          </h1>
          <p className="text-[22px] leading-[32px] text-zwilt-black font-normal max-w-[570px] mb-[30px] max-[691px]:text-sm">
            With our rigorous pre-vetting process, you'll never have to worry
            about finding the ideal candidate ever again.
          </p>

          {guideData?.map((i) => (
            <div className="px-[20px] guide-shadow py-[11px] min-[1440px]:w-[635px] w-full border rounded-[7px] h-[80px] mb-[5px] transition-all duration-500 overflow-hidden hover:h-[163px] max-lg:hover:h-[200px] group">
              <div className="flex gap-[20px] items-center mb-[16px]">
                <div className="h-[57px] w-[57px] flex justify-center items-center bg-[#ECECEC] rounded-full group-hover:bg-[#8BA4FD]">
                  <AiFillPlaySquare size={15} className="group-hover:text-white"/>
                </div>
                <p>
                  <span>Step{i?.step}:</span> {i?.title}
                </p>
              </div>

              <p>{i?.details}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guide;
