import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const handlerNav = () => {
    setShowNav(!showNav);
    setShowLogo(!showLogo);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 text-white absolute z-10">
      <div>
        <h1 className={showLogo ? "block" : "hidden"}>BEACHES</h1>
      </div>

      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      {/**  -- profile menu icon */}
      <div className="hidden md:flex gap-2">
        <div className="w-[50] h-[50] text-headingColor">
          <i
            className="ri-account-circle-line ri-xl"
            style={{ color: "white" }}
          ></i>
        </div>
        <div className="w-[50] h-[50] text-headingColor">
          <i className="ri-search-line ri-xl" style={{ color: "white" }}></i>
        </div>
      </div>
      {/** ----- end profile icon  */}
      {/**  hamberger menu */}
      <div onClick={handlerNav} className="block md:hidden z-10">
        {showNav ? (
          <i className="ri-close-circle-fill ri-3x"></i>
        ) : (
          <i className="ri-menu-line ri-xl" style={{ color: "white" }}></i>
        )}
      </div>
      {/**  end hamberger menu  */}

      {/** ----- modal menu ----- */}
      <div
        onClick={handlerNav}
        className={
          showNav
            ? "absolute w-full flex flex-col left-[0] px-4 py-7  top-0 left-0 bg-gray-100/90"
            : "absolute left-[-100%]"
        }
      >
        <ul className="relative text-black">
          <h1>BEACHES</h1>
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          <div className="flex flex-col gap-y-2">
            <button className="">Search</button>
            <button className="">Account</button>
          </div>
          {/** -- icons socials */}
          <div className="flex justify-between my-5 gap-2 ">
            <span className="text-headingColor bg-slate-300 rounded-sm">
              <i className="ri-youtube-fill ri-xl"></i>
            </span>
            <span className="text-headingColor bg-slate-300 rounded-sm">
              <i className="ri-facebook-fill ri-xl"></i>
            </span>
            <span className="text-headingColor bg-slate-300 rounded-sm">
              <i className="ri-instagram-fill ri-xl"></i>
            </span>
            <span className="text-headingColor bg-slate-300 rounded-sm">
              <i className="ri-google-fill ri-xl"></i>
            </span>
            <span className="text-headingColor bg-slate-300 rounded-sm">
              <i className="ri-twitter-line ri-xl"></i>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
