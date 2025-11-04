import { useState } from "react";
import { Element } from "react-scroll";
import LearnBg from "../assets/svg/Learn.svg";
import FeatureCard from "./FeatureCard";

const Learn = () => {
  const [selected, setSelected] = useState(0);
  const categories = ["City Page", "SEO Heist", "Cluster", "WordPress"];

  return (
    <Element name="Learn">
      <div className="bg-[#101123] md:w-10/12 lg:w-[100%] mx-auto " id="Learn">
        <div
          className="rounded-tl-2xl p-4 py-10 w-auto bg-cover bg-center text-white flex flex-col items-center"
          style={{ backgroundImage: `url(${LearnBg})` }}>
          <div className="w-auto flex justify-center items-center flex-col">
            <h1 className="text-center text-3xl font-bold  text-white">
              Understand Our{" "}
              <span className="bg-gradient-to-r from-pink-300 via-primary-400 to-pink-300 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h1>
            <p className="text-center w-full max-w-xl md:max-w-2xl px-4">
              Master the art of local SEO with our comprehensive guides on
              WordPress integration,city Page Creation, and competitive content
              analysis.
            </p>
          </div>
          {/* Categories bar */}
          <div className="bg-gradient-to-r from-pink-500 via-primary-400 to bg-pink-500 p-px rounded-3xl mx-auto my-3 max-w-3xl">
            <div className="bg-white text-primary-600 rounded-3xl flex items-center gap-1 px-2 lg:gap-3 lg:px-3 py-2 overflow-x-auto no-scrollbar">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setSelected(idx)}
                  aria-pressed={selected === idx}
                  className={`flex-shrink-0 cursor-pointer rounded-2xl px-2 lg:px-4 py-2 text-sm font-medium transition ${
                    selected === idx
                      ? "bg-primary-500 text-white"
                      : "bg-neutral-200 text-gray-700"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <FeatureCard selected={selected} />
        </div>
      </div>
    </Element>
  );
};

export default Learn;
