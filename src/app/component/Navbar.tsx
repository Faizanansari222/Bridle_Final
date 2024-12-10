import React from "react";

function Navbar() {
  return (
    <div className="">
      <div className=" fixed bg-white  flex items-center justify-between p-2 px-5 w-full">
        <div className="">Scrolllink</div>
        <div className="flex items-center gap-2 text-sm text-gray-400 border-2 p-1 w-[40%] rounded-md">
          <svg
            className="text-xl "
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill="currentColor"
                fillOpacity="0.16"
                d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
              />
            </g>
          </svg>
          <input type="text" className="w-full outline-none" placeholder="Search something " />
        </div>
        <div></div>
        <div className="">
          <button>login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
