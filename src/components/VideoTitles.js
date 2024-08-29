import React from 'react'
import { IoPlay } from "react-icons/io5";
const VideoTitles = ({title, overview}) => {
  return (
    <div className="pt-[12%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video text-white">
      <h1 className="w-12 font-bold text-5xl">{title}</h1>
      <p className="font-semibold w-1/4 pt-4">{overview}</p>
      <div className="flex mt-3 gap-4">
        <div className="flex items-center bg-white font-semibold rounded-md text-xl text-black  px-8  py-2 hover:bg-opacity-70">
          <IoPlay className="m-1" />
          <button className=" ">Play</button>
        </div>
        <button className="bg-gray-700 rounded-md bg-opacity-50 text-xl text-white border-solid border-white  px-8 ">
          more Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitles