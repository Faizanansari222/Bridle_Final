import Head from "next/head";
import Navbar from "@/app/component/Navbar";
import Sidebar from "@/app/component/Sidebar";
import Post from "./component/Post";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f1f1f1] h-full grid grid-cols-12">
        <div className=" col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-5">
          <Post />
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}
