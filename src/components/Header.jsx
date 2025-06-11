import React from 'react'

const Header = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-[#002827] to-[#001111] h-30 w-full px-1 py-1 flex justify-center items-center border-b-1 border-b-[#0c2020c2] ">
      {children}
    </div>
  )
}

export default Header