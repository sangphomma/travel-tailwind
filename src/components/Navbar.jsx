import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1 className="">BEACHES</h1>
      </div>
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex gap-2">
        <div className="w-[50] h-[50] text-headingColor">
          <i className="ri-account-circle-line ri-xl"></i>
        </div>
        <div className="w-[50] h-[50] text-headingColor">
          <i className="ri-search-line ri-xl"></i>
        </div>
      </div>
      <div className="block md:hidden">
        <i className="ri-menu-line ri-xl"></i>
      </div>
    </div>
  );
};

export default Navbar;
