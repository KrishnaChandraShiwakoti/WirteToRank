import React from "react";
import WatchVideo from "./Buttons/WatchVideo";
import CTA from "./Buttons/CTA";
import { featuredCards } from "../Utlis/Data/featuredCard.js";

const FeatureCard = ({ Selected }) => {
  const selectedCard = featuredCards[Selected];
  return (
    <div className="bg-white text-black p-4 py-8 rounded-xl lg:w-7/12">
      <h1 className="font-bold text-2xl">{selectedCard?.title}</h1>
      <p>{selectedCard?.description}</p>
      <div className="flex flex-col lg:flex-row  justify-between mx-5 my-2 gap-8">
        {selectedCard?.sections.map(({ heading, items }, idx) => {
          console.log(heading);
          return (
            <div key={idx}>
              <h1 className="bg-gradient-to-r from-pink-300 via-primary-400 to-pink-300 bg-clip-text text-transparent font-bold">
                {heading}
              </h1>
              <ul className={`list-disc`}>
                {items.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div class="flex mt-4 justify-Start items-center">
        <CTA title={"Get Started Now"} />
        <WatchVideo title={"Watch Video"} />
      </div>
    </div>
  );
};

export default FeatureCard;
