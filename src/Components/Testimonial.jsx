import React from "react";
import ReviewCard from "../ui/ReviewCard";
import Bg from "../assets/img/testimonialBg.jpg";
import testimonials from "../Utlis/Data/Testimonials";
const Testimonial = () => {
  return (
    <div
      className="flex p-10 lg:w-full rounded-bl-[140px] rounded-tr-[140px] lg:rounded-bl-[160px] lg:rounded-tr-[160px] text-white mx-auto flex-col items-center mb-10 overflow-hidden"
      style={{
        background: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <h1 className="text-2xl lg:text-3xl font-bold">
        Trusted by{" "}
        <span className="bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-transparent">
          Business Owners
        </span>
      </h1>
      <p className="my-5 mx-10 text-center font-normal w-10/12">
        See how business are dominating local search results with WritetoRank
      </p>
      <div className="lg:flex lg:gap-8 lg:flex-col">
        <div className="flex gap-8 -ml-[385px] lg:-ml-[200px] lg:gap-10">
          {testimonials.slice(0, 4).map((t) => (
            <ReviewCard
              key={t.id}
              profile={t.profile}
              name={t.name}
              role={t.role}
              company={t.company}
              rating={t.rating}
              review={t.review}
            />
          ))}
        </div>
        <div className="gap-8 hidden lg:flex">
          {testimonials.slice(4, 9).map((t) => (
            <ReviewCard
              key={t.id}
              profile={t.profile}
              name={t.name}
              role={t.role}
              company={t.company}
              rating={t.rating}
              review={t.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
