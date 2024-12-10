import Navbar from "@/app/component/Navbar";
import Sidebar from "@/app/component/Sidebar";
import Post from "./component/Post";
import YouMightLike from "./component/YouMightLike";
import Chat from "./component/Chat";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f1f1f1] h-full grid grid-cols-12">
        <div className=" hidden sm:block sm:col-span-3 md:col-span-3   lg:col-span-2">
          <div className="fixed">
            <Sidebar />
          </div>
        </div>
        <div className=" col-span-12 sm:col-span-9 md:col-span-6 lg:col-span-5 ">
          <Post />
        </div>
        <div className="hidden lg:block  lg:col-span-2">
          <div className="fixed">
            <YouMightLike />
          </div>
        </div>
        <div className="hidden md:block md:col-span-3    lg:col-span-2  ">
          <div className="fixed">
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}
