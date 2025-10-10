import React from "react";
import PlayButton from "../../assets/svg/PlayButton.svg";
import { LuPlay } from "react-icons/lu";

const WatchVideo = ({ title }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => console.log("ok")}
        className="group relative m-3 p-[1.5px] rounded-[20px] bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 transition duration-300 hover:cursor-pointer">
        <div
          className="rounded-[18px] bg-white px-5 py-2 transition duration-300 
                     group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:via-primary-500 group-hover:to-primary-400 flex justify-center items-center gap-2">
          {/* Gradient icon */}
          <img src={PlayButton} />

          {/* Gradient text */}
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text group-hover:text-white">
            {title}
          </h1>
        </div>
      </button>
    </div>
  );
};

export default WatchVideo;
