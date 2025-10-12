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

const ReviewCard = ({ profile, name, rating, post, review }) => {
  return (
    <div className="w-xl bg-white shadow-xl rounded-xl p-4">
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
            <h1 className="font-bold text-lg">{name}</h1>
            <p className="text-neutral-500">{post}</p>
          </div>
        </div>
        {/* Ratings */}
        <div className="flex items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-600">({rating})</span>
        </div>
      </div>
      <hr />
      {/* Review */}
      <h2 className="mt-5">{review}</h2>
    </div>
  );
};

export default ReviewCard;
