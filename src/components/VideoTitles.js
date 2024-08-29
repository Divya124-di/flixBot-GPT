import React from 'react'
import { IoPlay } from "react-icons/io5";
const VideoTitles = ({title, overview}) => {
  return (
    <div className=" lg:px-24 px-6 absolute bg-gradient-to-r from-black w-screen aspect-video text-white">
      <h1 className="lg:w-12 font-bold lg:text-5xl text-xl pt-[25%] lg:pt-[15%] w-4">
        {title}
      </h1>
      <p className="hidden lg:block sm:text-sm lg:font-semibold lg:w-1/4 lg:pt-4">
        {overview}
      </p>
      <div className="flex mt-3 lg:gap-4 gap-2">
        <div className="flex items-center bg-white font-semibold rounded-md lg:text-xl sm:text-xs text-black hover:bg-opacity-70 lg:py-2 lg:px-8 py-1 px-2">
          <IoPlay className="m-1" />
          <button className=" ">Play</button>
        </div>
        <button className="bg-gray-700 rounded-md bg-opacity-50 lg:text-xl sm:text-xs text-white border-solid border-white  py-1 px-2 lg:py-2 lg:px-8 ">
          more Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitles