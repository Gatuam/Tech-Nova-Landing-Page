import React from "react";
import { testimonials } from "../utils/const";
import Star from "../components/icons/Star";

const TexReview = () => {
  return (
    <div className="bg-gradient-to-b from-[#001919] to-[#001a1a] flex items-center flex-col justify-center w-full px-10 py-30">
  <h1 className="text-teal-500 text-2xl">testimonials</h1>
  <p className="text-white m-3">Check Out What people Think About Us.</p>
  <div className="gap-5 px-10 py-5 w-[85%] flex flex-wrap justify-center items-center">
    {testimonials.map((ele, i) => (
      <ul
        key={i}
        className="bg-gradient-to-b from-[#02ffe104] border rounded-xl px-5 py-5 border-[#02fff214] text-white w-150   "
      >
        {/* Optional: <Star className={ele.rating} /> */}
        <p className="text-neutral-400 leading-7">{ele.description}</p>
        <div className="head flex px-3 py-5 mt-4">
          <img
            className="w-14 mr-8 h-auto rounded-full"
            src={ele.src}
            alt=""
          />
          <div>
            <h2 className="text-lg font-bold">{ele.name}</h2>
            <p className="text-sm font-normal text-neutral-400">
              {ele.title}
            </p>
          </div>
        </div>
      </ul>
    ))}
  </div>
</div>

  );
};

export default TexReview;
