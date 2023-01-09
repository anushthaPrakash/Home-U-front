import React from 'react'
import { MdFoodBank } from "react-icons/md"
import { RiHandCoinFill } from "react-icons/ri"
import { IconContext } from "react-icons";

function Footer() {
  return (

    <div className='fixed  z-50 bg-[#C5F0A4] flex items-center p-2 lg:px-5 shadow-lg justify-center inset-x-0 bottom-0 mx-auto'>
      <div className='flex justify-center flex-grow  '>
        <IconContext.Provider value={{ color: "#3C6255", className: "global-class-name", size: '28px' }}>
          <div className='flex space-x-2 pr-10 pl-10 cursor-pointer hover:bg-slate-100 rounded-l-full'>
            <MdFoodBank />
            <p className='text-[#3C6255]'>Buy</p>
          </div>
          <div className='flex space-x-2 pr-10 pl-10 border-l-2 border-[#3C6255] cursor-pointer hover:bg-slate-100 rounded-r-full'>
            <RiHandCoinFill />
            <p className='text-[#3C6255] flex-inline '> Sell</p>
          </div>
        </IconContext.Provider>
      </div>


    </div>

  )
}

export default Footer