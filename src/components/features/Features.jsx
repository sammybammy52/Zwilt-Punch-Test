import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { featuresData } from "../../utils/Constants";
import ZwiltFancyButton from "../general/ZwiltFancyButton";

const Features = () => {
    const ref = useRef();
    const { events } = useDraggable(ref);
  return (
   <>
    <div className="pt-[50px] lg:pt-[187px] pb-[155px] w-full features-gradient">
      <div
        {...events}
        ref={ref}
        className="flex max-lg:flex-col items-center max-lg:justify-center  overflow-x-scroll hide-scrollbar"
      >
        <div className="flex-none min-[1024px]:w-[380px] lg:mr-[95px] lg:ms-10 max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center">
          <h1 className=" max-[1299px]:px-[30px] relative mb-[37px] z-50 font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[30px]">
            Why choose Zwilt?
          </h1>

          <p className="text-[22px] max-lg:text-center leading-[32px] text-zwilt-black font-normal max-w-[570px] mb-[30px] max-[691px]:text-sm">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>

        {featuresData?.map((i) => (
          <div className="flex items-center max-lg:flex-col max-lg:justify-center py-[41px] ps-[58px] max-lg:ps-[30px] max-lg:pe-[30px] pe-[39px] w-full flex-none features-shadow bg-white rounded-[20px] max-lg:rounded-none mr-[20px] max-lg:mr-0 max-w-[1300px] min-[1024px]:h-[652px]">
            <div>
              <h1 className=" max-[1299px]:px-[30px] relative mb-[37px] z-50 font-bold text-[54px] max-[691px]:text-[38px] max-[532px]:text-[25px] max-[389px]:text-[20px] text-zwilt-black leading-[64px] max-[691px]:leading-[30px] max-[691px]:text-center">
                {i?.text}
              </h1>

              {i?.points?.map((j) => (
                <div className="flex items-center gap-[16px]">
                  <div className="h-[7px] w-[18px] bg-[#50589F] rounded-[15px] mb-7"></div>
                  <p className=" text-[22px] leading-[32px] text-zwilt-black font-normal max-w-[570px] mb-[30px] max-[691px]:text-sm">
                    {j}
                  </p>
                </div>
              ))}

              <div className=" max-[1104px]:-translate-x-[30px] mt-[44px]">
                <ZwiltFancyButton text={"Join Now"} />
              </div>
            </div> 

            <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0"></div>
            <img src={i?.img} className=" cursor-not-allowed max-lg:w-full" alt="" />
            </div>

          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center diagonal-separator2 bg-[#F3F3F3] z-40"></div>
   </>
  );
};

export default Features;
