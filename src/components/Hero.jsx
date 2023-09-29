import React from "react";
import beachVid from "../assets/beachVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        autoPlay
        loop
        muted
        src={beachVid}
        className="w-full h-full object-cover"
        alt=""
      />
      {/** -------- Overlay on page */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900/30"></div>
      {/**  --------end overlay ----- */}
      <div className="absolute top-0 flex flex-col w-full h-full justify-center items-center gap-y-3 text-white">
        <h1 className="">First Class Travel</h1>
        <h2 className="">Top 1% location worldwide</h2>
        <form
          className="flex justify-between items-center 
        max-w-[80%] w-full bg-white mx-auto border py-1 px-1 rounded-md"
        >
          <div className="w-full">
            <input
              type="text"
              className="bg-transparent w-full focus:outline-none text-black font-[Sarabun]"
              placeholder="Search location"
            />
          </div>
          <div>
            <button>
              <i
                className="ri-search-line ri-xl"
                style={{ color: "white" }}
              ></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
