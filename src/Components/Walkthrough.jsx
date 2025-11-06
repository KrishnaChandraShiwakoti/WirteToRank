import React from "react";
import anyVideo from "../assets/any.mp4";
import { Element } from "react-scroll";

const Walkthrough = () => {
  return (
    <Element name="HowItWorks">
      <div className="w-10/12 mx-auto my-5 text-center h-max flex  flex-col items-center">
        <h1 className="text-2xl font-bold my-4">
          <span className="bg-indigo-500 bg-clip-text text-transparent">
            Watch -
          </span>{" "}
          Complete Platform Walkthrough
        </h1>
        <video
          src={anyVideo}
          width="750"
          height="500"
          autoPlay
          muted
          className="rounded-4xl"></video>
      </div>
    </Element>
  );
};

export default Walkthrough;
