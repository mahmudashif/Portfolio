import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary font-imbue">
      <div className="container text-white mx-auto pb-2 flex justify-between pt-3 items-center">
        <div className="text-[25px] font-bold">AsHiF</div>
        <div>
          <ul className="flex gap-[100px] text-[20px] font-bold">
            <li className="hover:text-teal-900">Home</li>
            <li className="hover:text-teal-900">About</li>
            <li className="hover:text-teal-900">Projects</li>
            <li className="hover:text-teal-900">Skills</li>
            <li className="hover:text-teal-900">Resume</li>
            <li className="hover:text-teal-900">Contact</li>
            <li className="hover:text-teal-900">Client Review</li>
          </ul>
        </div>
      </div>
        <div className="bg-teal-500 h-[3px]"></div>
    </div>
  );
};

export default Navbar;
