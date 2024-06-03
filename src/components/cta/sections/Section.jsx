import React from "react";
import ZwiltFancyButton from "../../general/ZwiltFancyButton";

const Section = ({ data }) => {
  return (
    <>
      <div className="flex justify-center diagonal-separator2 bg-white z-40"></div>
      <div className="bg-white ">
        <div style={{ backgroundColor: data?.bg_color}} className={`ps-[24px] pe-[36px] pt-[90px] overflow-hidden max-h-[750px] min-[1024px]:max-h-[387px]`}>
          <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-32 relative ">
            <div className="flex items-start gap-[15px]">
              <img src={data?.number_img} className="w-[51.23px] pt-4" alt="" />

              <div>
                <h3 className=" font-semibold text-[34px] leading-[44px] max-[691px]:text-[24px] text-zwilt-black mb-[20px]">
                  {data?.text}
                </h3>
                <p className=" font-medium text-[16px] max-[691px]:text-[14px] leading-[18px] max-w-[407px]  opacity-80 mb-[24px]">
                  {data?.subText}
                </p>

                <div className=" max-[1104px]:-translate-x-[30px]">
                  <ZwiltFancyButton text={"Join Now"} />
                </div>
              </div>
            </div>

            <img
              src={data?.img}
              className="max-w-[466px] -translate-y-[85px] "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
