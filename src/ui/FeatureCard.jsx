import React from "react";
import WatchVideo from "./Buttons/WatchVideo";
import Button from "./Buttons/Button";
import { featuredCards } from "../Utlis/Data/featuredCard.js";

const FeatureCard = ({ selected = 0 }) => {
  const selectedCard = featuredCards[selected] || featuredCards[0];
  return (
    <div className="bg-white w-full sm:w-11/12 lg:w-7/12 text-black px-6 sm:px-12 py-6 sm:py-8 rounded-xl">
      <h1 className="font-bold text-2xl">{selectedCard?.title}</h1>
      <p className="text-sm text-gray-700 mt-2 mb-4">
        {selectedCard?.description}
      </p>
      <div className="flex flex-col lg:flex-row justify-between mx-0 my-2 gap-6">
        {selectedCard?.sections.map(({ heading, items }, idx) => {
          return (
            <div key={idx} className="min-w-[160px]">
              <h1 className="bg-gradient-to-r from-pink-300 via-primary-400 to-pink-300 bg-clip-text text-transparent font-bold mb-3 text-lg">
                {heading}
              </h1>
              <ul className={`list-disc flex flex-col gap-2 pl-5`}>
                {items.map((item, idx) => {
                  return (
                    <li key={idx} className="text-sm text-gray-700">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex  sm:items-center gap-3 mt-4">
        <Button title={"Get Started Now"} />
        <WatchVideo title={"Watch Video"} />
      </div>
    </div>
  );
};

export default FeatureCard;
