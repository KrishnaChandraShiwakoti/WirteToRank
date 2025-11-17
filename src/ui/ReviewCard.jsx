import React from "react";
import { IoPerson } from "react-icons/io5";
import avatar from "../assets/img/avatar.png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, maxStars = 5 }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} className="text-gray-300 text-sm" />
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

const ReviewCard = ({ profile, name, role, company, rating = 5, review }) => {
  return (
    <div className="w-sm lg:w-lg bg-white shadow-xl rounded-xl px-2 py-6 text-black">
      <div className="flex p-2 justify-between items-center mx-5">
        <div className="flex items-center lg:gap-4">
          {/* Profile pic */}
          <div className="bg-neutral-500 rounded-3xl h-10 w-10 flex items-center justify-center">
            {profile ? (
              <img src={profile} alt="" />
            ) : (
              <img src={avatar} className="rounded-2xl w-[100%] h-[100%]" />
            )}
          </div>
          {/* Info */}
          <div>
            <h1 className="font-bold text-lg">{name || "Customer"}</h1>
            <div className="flex gap-1 items-center">
              <p className="text-neutral-500">{role || "Role"}</p>
              <span className="border-l-2 border-neutral-500 h-3"></span>
              <p className="text-primary-500">{company || "Company"}</p>
            </div>
          </div>
        </div>
        {/* Ratings */}
        <div className="lg:flex hidden items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-600">({rating})</span>
        </div>
      </div>
      <hr className="w-8/12 ml-5" />
      <span className="border-b-2 border-neutral-500 h-3 w-11/12"></span>
      {/* Review */}
      <h2 className="mt-5">{review || "No review provided."}</h2>
      <div className="flex lg:hidden items-center gap-2">
        <StarRating rating={rating} />
        <span className="text-sm text-gray-600">({rating})</span>
      </div>
    </div>
  );
};

export default ReviewCard;
