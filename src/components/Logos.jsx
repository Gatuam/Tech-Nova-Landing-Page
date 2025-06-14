import React from "react";
import { logos } from "../utils/const";

const Logos = () => {
  return (
    <div className="flex flex-col bg-gradient-to-t from-[#001111] to-[#001a1a] w-full h-[70vh] justify-center items-center px-3 py-4 relative ">
      <div className="h-50 w-50 bg-teal-400 rounded-full absolute blur-3xl opacity-30 left-90"></div>
      <h5 className="text-white mb-15 ">
        Organization powered by{" "}
        <span className="text-teal-500 font-bold">TECHNOVA</span>
      </h5>
      <div className=" flex justify-evenly items-center gap-x-70 gap-y-30 flex-wrap px-10 py-6">
        {logos.map((logo, i) => {
          return (
            <ul className="" key={i}>
              <img className="w-50 h-auto" src={logo.src} alt="" />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Logos;
