import Image from "next/image";
import React from "react";

function YouMightLike() {
  const data = {
    suggestions: [
      {
        image:
          "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        name: "Mohammad Rafil",
        mutualsImg: "",
        mutuals: "2 mutuals",
      },
    ],
  };
  return (
    <div className="fixed  col-span-2 w-[22%]">
      <div className=" mt-16 bg-white w-full  p-5 rounded-lg shadow-sm ">
        <div className="flex justify-between items-center   border-b pb-3">
          <h1 className="text-sm font-medium text-[#5c5c5c]">You might like</h1>
          <button className="text-blue-500 text-xs font-medium">
            see more
          </button>
        </div>
        <div className="">
          {data.suggestions.map((user, index) => (
            <div key={index} className="space-y-4 mt-4">
              <div className="rounded-full flex gap-3 items-center ">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={user.image || "/default-avatar.jpg"}
                  alt={user.name}
                />
                <div className="text-[#4e4e4e]">{user.name}</div>
              </div>
              <div className="flex items-center justify-around">
                <button className="bg-[#ff4f9b] p-1 px-3 w-[40%] text-white rounded-md">
                  Accept
                </button>
                <button className="bg-transparent border p-1 px-3 w-[40%] border-[#ff4f9b] text-[#ff4f9b] rounded-md">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Upcomming /> */}
    </div>
  );
}

export default YouMightLike;
