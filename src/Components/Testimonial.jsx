import React from "react";
import ReviewCard from "../ui/ReviewCard";
const Testimonial = () => {
  return (
    <div className="flex lg:w-full bg-amber-700 rounded-bl-[160px] rounded-tr-[160px] text-white mx-auto flex-col items-center mb-10 overflow-hidden">
      <h1 className="text-2xl lg:text-3xl font-bold">
        Trusted by{" "}
        <span className="bg-gradient-to-r from-pink-300 via-primary-400 to-primary-800 bg-clip-text text-transparent">
          Business Owners
        </span>
      </h1>
      <p className="my-5 mx-10 text-center">
        see how business are dominating local search results with WritetoRank
      </p>
      <div className="lg:flex lg:gap-8 lg:flex-col">
        <div className="flex gap-3 -ml-[385px] lg:-ml-[0px] lg:gap-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="gap-8 hidden lg:flex">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          {/* <ReviewCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
