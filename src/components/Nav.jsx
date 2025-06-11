import React from "react";
import { navElements } from "../utils/const";

const Nav = () => {
  return (
    <div className="flex justify-between w-full px-40 py-10 items-center gap-10">
      <div className="text-3xl text-white font-bold  ">
        TECH <span className=" text-teal-200 ml-2">NOVA</span>
      </div>
      <div className="flex gap-10 ml-10 h-full justify-center items-center">
        {navElements.map((ele, i) => {
          return (
            <ul
              key={ele.id}
              className={`${i === 2 ? "mr-40" : ""} ${
                i === 3 && " border-1 border-teal-300 px-8 py-2 rounded-3xl  "
              } 
              ${
                i === 4 &&
                "border-1 border-teal-300 px-8 py-2 rounded-3xl text-black bg-gradient-to-b from-teal-800 to-teal-950 hover:bg-gradient-to-t from-teal-700 to-teal-800  transition duration-300  "
              }
               text-white font-normal hover:text-teal-300 `}
            >
              <a href={ele.href}>{ele.name} </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
