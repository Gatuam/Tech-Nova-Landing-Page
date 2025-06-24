import React from "react";
import contex from "../assets/graphics/SmartOrganization.webp";
import smartimg from "../assets/graphics/SmartOrganization.webp";

const Note = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#001111] to-[#001a1a] w-full  px-3 py-4 relative">
      <div className="w-100 h-100 bg-teal-400 absolute blur-3xl opacity-20"></div>
      <div className="w-169">
        <h1 className="text-white font-bold text-5xl text-center leading-16 ">
          All The AI Tools You Need to{" "}
          <span className="text-teal-300">Improve</span> your Work Flow
        </h1>
      </div>
      <div className="flex px-30 py-25 justify-evenly items-center">
        <img className="w-130 h-auto" src={contex} alt="" />
        <div className="w-[35%]">
          <h1 className="text-white font-bold text-4xl">Smart Organization</h1>
          <p className="text-neutral-300 mt-6 leading-10">
            Automatically categorize and tag your notes using AI-driven
            analysis. NoteFlow intelligently identifies key topics and organizes
            your content, making it easy to find and retrieve your notes when
            you need them most.
          </p>
        </div>
      </div>
      <div className="flex px-30 py-25 justify-evenly items-center relative">
        <div className="w-100 h-100 bg-teal-400 absolute blur-3xl opacity-20 left-20"></div>
        <div className="w-[35%]">
          <h1 className="text-white font-bold text-4xl">
            Contextual Reminders
          </h1>
          <p className="text-neutral-300 mt-6 leading-10">
            Stay on top of important tasks with AI-powered reminders that adapt
            to the context of your notes. NoteFlow recognizes deadlines,
            follow-ups, and key actions from your notes and sends timely alerts
            to ensure nothing slips through the cracks.
          </p>
        </div>
        <img className="w-130 h-auto" src={smartimg} alt="" />
      </div>
    </div>
  );
};

export default Note;
