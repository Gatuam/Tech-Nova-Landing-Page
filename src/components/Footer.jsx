import React, { useState } from 'react'
import { footerCols } from '../utils/const'

const Footer = () => {
     
  return (
    
       <div className='bg-gradient-to-b from-[#001919] to-[#001a1a] w-full flex justify-around text-white h-80 border-t-1 border-[#2cffc01b] px-10 py-20'>
        <div className="text-3xl text-white font-bold w-50 ">
        TECH <span className=" text-teal-200 ml-2">NOVA</span>
      </div>
        {footerCols.map((ele, i)=>{
          return (
            <div className='' key={i}>
              <ul className='text-lg font-bold text-teal-300'>{ele.category}</ul>
              
              {ele.links.map((link,i)=>{
                return(
                  <div className='mt-2'>
                    {link}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
  )
}

export default Footer