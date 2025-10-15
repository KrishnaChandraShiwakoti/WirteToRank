import React from "react";
import { IoPerson } from "react-icons/io5";
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

const ReviewCard = ({ profile }) => {
  return (
    <div className="w-sm lg:w-lg bg-white shadow-xl rounded-xl p-4 text-black">
      <div className="flex p-2 justify-between items-center mx-5">
        <div className="flex items-center gap-4">
          {/* Profile pic */}
          <div className="bg-neutral-500 rounded-3xl h-10 w-10 flex items-center justify-center">
            {profile ? (
              <img src={profile} alt="" />
            ) : (
              <IoPerson className="h-8 w-8" />
            )}
          </div>
          {/* Info */}
          <div>
            <h1 className="font-bold text-lg">Crystal Maiden</h1>
            <p className="text-neutral-500">Growth Manager</p>
          </div>
        </div>
        {/* Ratings */}
        <div className="lg:flex hidden items-center gap-2">
          <StarRating rating={5} />
          <span className="text-sm text-gray-600">({5})</span>
        </div>
      </div>
      <hr />
      {/* Review */}
      <h2 className="mt-5">
        "Moving from Ireland to Australia seemed daunting, but Talent Way guided
        me through every step. I landed my dream job with visa sponsorship
        within 6 weeks."
      </h2>
      Ratings
      <div className="flex lg:hidden items-center gap-2">
        <StarRating rating={5} />
        <span className="text-sm text-gray-600">({5})</span>
      </div>
    </div>
  );
};

export default ReviewCard;
