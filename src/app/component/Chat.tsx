import React from "react";

function Chat() {
  return (
    <div className="m-auto w-[20%] md:w-[22%]  lg:w-[22%] h-screen bg-white mt-11 fixed   right-0 ">
      <div className="  p-5  px-2">
        <div className="flex items-center  rounded-sm px-2 bg-[#f1f1f1]">
          <svg
           className="text-[#858585]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
            />
          </svg>
          <input
            className="p-1 text-sm px-2 outline-none rounded-md bg-[#f1f1f1] text-[#5c5c5c]"
            type="text"
            placeholder="Search Stories"
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
