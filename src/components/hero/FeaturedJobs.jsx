import { useState } from "react";
import { DC, ITD, categories } from "../../utils/Constants";



const FeaturedJobs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-[#D2D2D2] bg-opacity-15 rounded-[15px] pt-[15px] max-w-[920px] min-[1440px]:min-w-[920px] w-full">
      <div className="flex flex-col items-center justify-center ">
        <ul className="flex bg-[#D2D2D2] bg-opacity-15 rounded-[15px] mb-[23px] max-w-[391px] w-full">
          {categories?.map((i) => (
            <li
              className={`py-[10px]  w-full flex justify-center rounded-[15px] cursor-pointer text-[16px] max-md:text-[12px]  font-semibold leading-[23.78px] transition-all duration-500 ${
                activeTab === i?.id ? "bg-[#C7F4C2]" : "bg-[#D2D2D2] bg-opacity-15"
              }`}
              key={i?.id}
              onClick={() => setActiveTab(i?.id)}
            >
              {i?.name}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-y-[18px] lg:grid-cols-3 w-full lg:ps-[65px] pb-[30px]">
          {activeTab === 1 && (
            <>
              {ITD?.map((i) => (
                <p
                  className="text-[#959595] font-normal text-[16px] max-md:text-[14px] max-md:text-center  transition-all duration-500 hover:text-zwilt-black hover:font-medium hover:scale-105"
                  key={i?.id}
                >
                  {i?.name}
                </p>
              ))}
              <p className=" text-[16px]  transition-all duration-500 text-zwilt-black font-medium cursor-pointer max-md:text-center">
                Explore More
              </p>
            </>
          )}
          {activeTab === 2 && (
            <>
              {DC?.map((i) => (
                <p
                  className="text-[#959595] font-normal text-[16px] max-md:text-[14px] max-md:text-center transition-all duration-500 hover:text-zwilt-black hover:font-medium hover:scale-105"
                  key={i?.id}
                >
                  {i?.name}
                </p>
              ))}
              <p className=" text-[16px]  transition-all duration-500 text-zwilt-black font-medium cursor-pointer max-md:text-center">
                Explore More
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
