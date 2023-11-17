import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import Image from "../src/assets/image.jpg";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";

function App() {
  return (
    <div className="bg-gray-800 text-white h-screen min-w-screen overflow-auto flex items-center justify-center ">
      <div className="container p-4 absolute top-0 left-1/2 transform -translate-x-1/2">
        <ArrowLeftOutlined />
        <h1 className="text-3xl font-bold mb-4">City News</h1>

        <div className="max-w-sm rounded-lg relative mt-4">
          <div className="z-0">
            <img
              className="-mb-16 overflow-hidden w-full rounded-2xl"
              src={Image}
            />
          </div>
        </div>

        <div className="max-w-xs bg-white rounded-lg relative -mt-2 m-8">
          <div className="z-100 flex items-center rounded-xl  w-content mx-3">
            <div className="bg-white flex flex-col w-full rounded-lg">
              <div className=" flex items-center">
                <div className="m-3">
                  <Avatar src={Image} />
                </div>
                <div>
                  <h1 className="text-black"> Travis Howard </h1>
                  <p className="text-xs text-slate-600"> 18 Nov 2019 </p>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm text-slate-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy{" "}
                </p>
              </div>
              <div className="px-5 my-2 flex justify-between">
                <div>
                  <ShareIcon />
                </div>
                <div className="flex">
                  <div className="flex">
                    <p className="px-3">25</p>
                    <MessageIcon />
                  </div>
                  <div className="flex">
                    <p className="px-3">25</p>
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LeftCard />
        <RightCard />
        <LeftCard />
      </div>
    </div>
  );
}

export default App;
