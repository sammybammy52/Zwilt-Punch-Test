import React from 'react'
import ZwiltIcon from './ZwiltIcon'

const ZwiltFancyButton = ({ size, text }) => {
    const sizes = {
        sm: "scale-50",
        md: "scale-75",
        base: "scale-100"
    }
  return (
    <div className={`h-[74px] w-[220px] relative group max-[1104px]:scale-75 ${sizes[size] || sizes["base"]}`}>
            <button className="bg-zwilt-black text-white h-full rounded-[30px] flex justify-center group-hover:justify-end items-center gap-4 py-[29px] w-[74px] group-hover:w-[220px] transition-all duration-500">
              <div className="group-hover:-translate-x-5">
                <ZwiltIcon color={"#fff"} />
              </div>
            </button>

            <div className="absolute h-full flex items-center   right-0 top-0">
              <p className="text-zwilt-black text-[22px] min-w-[134px] font-semibold group-hover:text-white group-hover:-translate-x-16 transition-all duration-500">
                {text}
              </p>
            </div>
          </div>
  )
}

export default ZwiltFancyButton