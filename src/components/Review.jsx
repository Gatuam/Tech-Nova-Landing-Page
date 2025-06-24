import React from "react";
import { reviews } from "../utils/const";

const Review = () => {
  return (
    <div className=" w-full flex px-15 py-2 bg-gradient-to-b items-center">
      {reviews.map((review) => {
        return (
          <li className="flex -mr-5 last::mr-0" key={review.id}>
            <img
              className="w-14 rounded-full border-2 border-[#ffffff] ml-1 "
              src={review.src}
              alt={review.alt}
            />
          </li>
        );
      })}
      <h2 className="text-neutral-300 text-lg ml-10">
        Trusted by <span className="text-teal-400 font-bold">12550+ </span>
        tech leader and designer
      </h2>
    </div>
  );
};

export default Review;
