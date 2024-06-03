import React, { useState } from "react";
import { testimonials } from "../../utils/Constants";
import ZwiltIcon from "../general/ZwiltIcon";

const Testimonials = () => {
  const [showImg, setShowImg] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handleNext = () => {
    if (activeTab < testimonials?.length - 1) {
      setActiveTab((prev) => prev + 1);
    } else {
      setActiveTab(0);
    }
  };
  const handlePrev = () => {
    if (activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    } else {
      setActiveTab(testimonials.length - 1);
    }
  };
  return (
    <div className="bg-zwilt-black diagonal-separator">
      <div className="max-w-[1300px] mx-auto pt-[197px] relative h-[840px]">
        <img
          src="/assets/testimonials/quote.svg"
          alt=""
          className="absolute top-2 right-0"
        />

        <div className="lg:hidden flex items-center gap-[16px] absolute z-10 top-16 left-5">
          <button
            onClick={handlePrev}
            className="w-[50px] h-[50px] rounded-[20.19px] flex justify-center items-center bg-white"
          >
            <ZwiltIcon color={"#50589F"} className={"rotate-180"} />
          </button>
          <button
            onClick={handleNext}
            className="w-[50px] h-[50px] rounded-[20.19px] flex justify-center items-center bg-white"
          >
            <ZwiltIcon color={"#50589F"} />
          </button>
        </div>

        {testimonials?.map((i, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 absolute max-[1299px]:px-[30px] bg-inherit w-full h-full top-0 left-0 right-0 bottom-0 transition-all duration-500 ${
              index === activeTab ? " delay-500 opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col justify-end lg:justify-center">
              <div className="mb-[44px]">
                <h1 className="text-[54px] text-white font-bold leading-[64px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px]">
                  How it worked
                </h1>
                <h1 className="text-[54px] text-white font-bold leading-[64px] max-[691px]:leading-[10px] flex items-center mb-[17px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px]">
                  for {i?.firstName}{" "}
                  <img
                    src={i?.img}
                    className="w-[56px] h-[56px] max-[691px]:w-[38px] max-[691px]:h-[38px]  rounded-full mx-4"
                    onMouseOver={() => setShowImg(true)}
                    onMouseOut={() => setShowImg(false)}
                    alt=""
                  />{" "}
                  at{" "}
                </h1>
                <img
                  src={i?.company_img_alt}
                  className="max-[691px]:w-[170px]"
                  alt=""
                />
              </div>

              <div className="lg:mb-[44px] max-w-[461px]">
                <p className="text-[22px] font-normal leading-[32px] max-[691px]:text-base text-white opacity-80">
                  {i?.shortText}
                </p>
              </div>

              <div className="lg:flex items-center gap-[16px] hidden">
                <button
                  onClick={handlePrev}
                  className="w-[50px] h-[50px] rounded-[20.19px] flex justify-center items-center bg-white"
                >
                  <ZwiltIcon color={"#50589F"} className={"rotate-180"} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-[50px] h-[50px] rounded-[20.19px] flex justify-center items-center bg-white"
                >
                  <ZwiltIcon color={"#50589F"} />
                </button>
              </div>
            </div>

            <div className="lg:pt-[81px] flex flex-col justify-center">
              <div className=" flex items-center gap-[16.21px] max-[691px]:gap-[0px] mb-4 lg:mb-[56px]">
                <div className="relative w-[98.79px] h-[98.79px]">
                  <img
                    src={i?.company_img}
                    className={`w-[98.79px] h-[98.79px] max-[691px]:w-[90px] max-[691px]:object-cover  rounded-[40px] absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-700 ${
                      showImg ? "opacity-0" : "opacity-100"
                    }`}
                    alt=""
                  />
                  <img
                    src={i?.img}
                    className={`w-[98.79px] h-[98.79px] max-[691px]:w-[90px] max-[691px]:object-cover  rounded-[40px] absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-700 ${
                      showImg ? "opacity-100" : "opacity-0"
                    }`}
                    alt=""
                  />
                </div>

                <div>
                  <h3 className=" font-semibold text-[34px] leading-[44px] max-[691px]:text-[24px] text-white">
                    {i?.firstName} {i?.lastName}
                  </h3>
                  <p className=" font-medium text-[16px] max-[691px]:text-[14px] leading-[18px] text-white opacity-40 mb-[10px]">
                    {i?.position} at {i?.company}
                  </p>
                  <p className=" font-medium text-[16px] max-[691px]:text-[14px] leading-[18px] text-white opacity-40">
                    {i?.location}
                  </p>
                </div>
              </div>

              <p className="text-[22px] font-normal leading-[32px] max-[691px]:text-base text-white opacity-80">
                {i?.longText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
