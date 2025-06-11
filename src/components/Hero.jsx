import React from "react";
import hero from "../assets/graphics/HeroGraphic.webp";
import ArrowRight from "./icons/ArrowRight";

const Hero = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center px-15 py-5 bg-gradient-to-b from-[#001111] to-[#001a1a]">
      <div className="w-220  text-white">
        <h1 className="text-[5vw] font-bold">
          Built for Speed. Powered by AI.{" "}
          <span className=" text-teal-200">TECH NOVA</span>
        </h1>
        <p className="font-normal text-neutral-400 mt-4 font-sans leading-9 mb-6">
          From satellite data to meeting notes, our summarizer intelligently
          processes vast streams of real-time information, delivering clear,
          concise insights that help you stay focused, informed, and ahead of
          the curve—no matter how complex the source material.
        </p>
        <button className=" flex bg-gradient-to-b from-teal-700 to-teal-950  px-8 py-3 cursor-pointer rounded-3xl border-1 border-teal-700  ">
          Get Start
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          }
        </button>
      </div>
      <div className="px-4 py-4 w-[50%] flex justify-center items-center">
        <img className="w-[75%]" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
