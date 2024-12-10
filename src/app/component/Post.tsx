import React from "react";
import myImg from "@/app/assits/faizan.jpg";

function Post() {
  const data = {
    post: [
      {
        name: "Faizan Raza",
        city: "Karachi",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/008870210629631.Y3JvcCwxMjMxLDk2MywzNDQsNzA.png",
        comment: 4,
        likes: 4,
      },
      {
        name: "Faizan Raza",
        city: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbY44bp0mZXsdeeaXb0W_zeTQ5m7aijcoT-A&s",
        comment: 4,
        likes: 4,
      },
    ],
  };
  return (
    <div className="mt-16 m-4 space-y-3">
      <div className="p-5 space-y-3 rounded-lg shadow-sm bg-white  ">
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-8"
            src="https://pics.craiyon.com/2023-05-31/220e4c73f6674d46a84840ebde9f9bc8.webp"
            alt=""
          />
          <span className="p-2 rounded-md bg-[#f1f1f1] w-full ">
            <input
              type="text "
              className="w-full  outline-none text-[#686868] bg-[#f1f1f1]"
              placeholder="Whats happening"
            />
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-[#858585]">
            {" "}
            <svg
              className="text-2xl text-[#858585]"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 15.75v-7.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m17.168-8.759l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374"
              />
            </svg>
            Live Video
          </button>
          <button className="flex items-center gap-2 text-[#858585]">
            <svg
              className="text-2xl text-[#858585]"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.33 17.657c.11-.366.17-.755.17-1.157v-9a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v9.07m16.83 1.087l-.088-.104l-2.466-2.976a2 2 0 0 0-3.073-.008l-1.312 1.566l-.214.261m7.153 1.26a4 4 0 0 1-3.713 2.842m0 0l-.117.002h-9a4 4 0 0 1-4-3.93m13.117 3.928l-.093-.106l-3.347-3.996m-9.676.175l.177-.201l3.206-3.827a2 2 0 0 1 3.066 0l3.227 3.853"
                />
                <circle cx="15.091" cy="8.909" r="1.5" fill="currentColor" />
              </g>
            </svg>
            Photo
          </button>
          <button className="flex items-center gap-2 text-[#858585]">
            <svg
              className="text-2xl text-[#858585]"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9.553 19.106a1 1 0 0 1 1.338.44l.003.006l.034.058c.035.057.093.146.177.259c.169.225.44.536.832.85C12.71 21.337 13.993 22 16 22s3.29-.663 4.063-1.28c.393-.315.664-.626.832-.851a3 3 0 0 0 .211-.317l.004-.007a1 1 0 0 1 1.785.902v.001l-.002.002v.002l-.004.006l-.008.015a3 3 0 0 1-.1.175a5 5 0 0 1-.285.42a6.8 6.8 0 0 1-1.184 1.213C20.21 23.163 18.493 24 16 24s-4.21-.837-5.312-1.72a6.8 6.8 0 0 1-1.183-1.211a5 5 0 0 1-.386-.596l-.008-.015l-.003-.006l-.001-.003l-.001-.002a1 1 0 0 1 .447-1.341M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16"
              />
            </svg>
            Feeling
          </button>
          <button className="bg-[#ff4f9b] text-white px-4 py-1 rounded-md">
            Post
          </button>
        </div>
      </div>
      <div className=" space-y-4">
        {data.post.map((post, index) => {
          return (
            <>
              <div key={index} className="shadow space-y-5 bg-white rounded-lg">
                <div className="flex items-center gap-2 p-4">
                  <img
                    className=" w-9 flex items-center rounded-full"
                    src="https://pics.craiyon.com/2023-05-31/220e4c73f6674d46a84840ebde9f9bc8.webp"
                    alt=""
                  />
                  <div className="text-[#333333] ">
                    {post.name}
                    <div className="text-xs text-[#858585]">{post.city}</div>
                  </div>
                </div>
                <div className=" flex items-center  justify-center">
                  <img
                    className="w-full h-full rounded-lg"
                    src={post.image}
                    alt=""
                  />
                </div>
                <div className=" border-t   w-[95%] flex items-center justify-between h-9 mx-auto my-auto">
                  <button className="flex p-2 text-[#858585] items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
                        clipRule="evenodd"
                      />
                    </svg>
                    like
                  </button>
                  <button className="flex p-2 text-[#858585] items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12"
                      />
                    </svg>
                    Comments
                  </button>
                  <button className="flex p-2 text-[#858585] items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.2 196.2 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z"/></svg>
                    Share
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
