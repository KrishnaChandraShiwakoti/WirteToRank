import React from "react";
import LearnBg from "../assets/svg/Learn.svg";
import FeatureCard from "./FeatureCard";

const Learn = () => {
  return (
    <div className="bg-primary-900 md:w-10/12 lg:w-[100%] mx-auto">
      <div
        className="rounded-tl-2xl p-4 w-auto bg-cover bg-center text-white flex flex-col items-center"
        style={{ backgroundImage: `url(${LearnBg})` }}>
        <div className="w-auto flex justify-center items-center flex-col">
          <h1 className="text-center text-3xl font-bold  text-white">
            Understand Our{" "}
            <span className="bg-gradient-to-r from-pink-300 via-primary-400 to-pink-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-center w-2/3">
            Master the art of local SEO with our comprehensive guides on
            WordPress integration,city Page Creation, and competitive content
            analysis.
          </p>
        </div>
        {/* Categories bar */}
        <div className="bg-gradient-to-r from-pink-500 via-primary-400 to bg-pink-500 p-px rounded-3xl  mx-auto my-3">
          <div className="bg-white text-primary-600 rounded-3xl flex justify-center items-center gap-5 px-3 py-2">
            <a className="bg-primary-500 cursor-pointer text-white rounded-2xl px-2 py-1 ">
              City Page
            </a>
            <a className="bg-neutral-200 cursor-pointer rounded-2xl px-2 py-1 ">
              SEO Heist
            </a>
            <a className="bg-neutral-200 cursor-pointer rounded-2xl px-2 py-1 ">
              Cluster
            </a>
            <a className="bg-neutral-200 cursor-pointer rounded-2xl px-2 py-1 ">
              WordPress
            </a>
          </div>
        </div>
        <FeatureCard Selected={0} />
      </div>
    </div>
  );
};

export default Learn;
