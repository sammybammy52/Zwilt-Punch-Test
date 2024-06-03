import React from "react";

const JobBox = ({ data, name, id }) => {
  return (
    <>
      <div className="pt-[18px] ps-[28px] pe-[26px] pb-[23px] bg-white max-w-[730px] rounded-[7px]">
        <p className="mb-[15px] text-zwilt-black">{name}</p>

        <div className=" grid grid-cols-6 gap-[20px] max-md:grid-cols-3">
          {id === 2 && (
            <div className="flex flex-col gap-[12px] justify-center items-center">
              <div className="w-[96px] h-[96px] max-[1181px]:w-[80px] max-[1181px]:h-[80px] flex justify-center items-center bg-[#F6F6F6] rounded-full">
                <img src="/assets/services/zwilt-black-left.svg" alt="" />
              </div>
              <p className="text-[14px] text-center leading-[18px] font-semibold text-zwilt-black max-w-[81px] h-[36px]"></p>
            </div>
          )}

          {data?.map((i) => (
            <div
              key={i?.id}
              className="flex flex-col gap-[12px] justify-center items-center"
            >
              <div className="w-[96px] h-[96px] max-[1181px]:w-[80px] max-[1181px]:h-[80px] flex justify-center items-center bg-[#F6F6F6] rounded-full">
                <img src={i?.img} alt="" />
              </div>
              <p className="text-[14px] max-md:text-[12px] text-center leading-[18px] font-semibold text-zwilt-black max-w-[81px] h-[36px]">
                {i?.name}
              </p>
            </div>
          ))}

          {id === 1 && (
            <div className="flex flex-col gap-[12px] justify-center items-center">
              <div className="w-[96px] h-[96px] max-[1181px]:w-[80px] max-[1181px]:h-[80px]  flex justify-center items-center bg-[#F6F6F6] rounded-full">
                <img src="/assets/services/zwilt-black-right.svg" alt="" />
              </div>
              <p className="text-[14px] text-center leading-[18px] font-semibold text-zwilt-black max-w-[81px] h-[36px]"></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobBox;
