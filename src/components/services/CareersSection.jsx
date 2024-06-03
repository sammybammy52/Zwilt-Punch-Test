import React from 'react'
import { RiDashboardFill, RiMedalFill, RiUserStarFill } from 'react-icons/ri'
import JobBox from './JobBox'

const CareersSection = ({ data }) => {
  return (
    <>
    <div className='flex max-[1104px]:flex-col max-[1104px]:gap-10 justify-between items-center'>
      <div>
        <h4 className=' leading-[34px] font-medium text-[24px] max-md:text-[16px] mb-[20px] text-zwilt-black'>{data?.description}</h4>

        <div className="grid grid-cols-2 gap-y-[8px]">
          <p className=' font-normal text-[16px] max-md:text-[14px] flex items-center gap-2 text-[#202229CC]'> <RiMedalFill className='text-[#A285D0]'/>{data?.skills} Skills</p>
          <p className=' font-normal text-[16px] max-md:text-[14px] flex items-center gap-2 text-[#202229CC]'> <RiDashboardFill className='text-[#A285D0]'/>{data?.subCats} Sub-Categories</p>
          <p className=' font-normal text-[16px] max-md:text-[14px] flex items-center gap-2 text-[#202229CC]'> <RiUserStarFill className='text-[#A285D0]'/>{data?.profiles} Profiles</p>
        </div>
      </div>

      <JobBox id={data?.id} name={data?.title} data={data?.jobs}/>
    </div>
    </>
  )
}

export default CareersSection