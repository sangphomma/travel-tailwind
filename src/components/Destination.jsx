import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";

const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1 className="">All - exclusive resorts</h1>
      <p className="">On the calibbean 's best beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <figure className="md:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover " src={borabora} />
        </figure>
        <figure>
          <img className="w-full h-full object-cover " src={borabora2} />
        </figure>
        <figure>
          <img className="w-full h-full object-cover " src={keywest} />
        </figure>
        <figure>
          <img className="w-full h-full object-cover " src={maldives} />
        </figure>
        <figure>
          <img className="w-full h-full object-cover " src={maldives2} />
        </figure>
      </div>
    </div>
  );
};

export default Destination;
