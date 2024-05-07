import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

export default function Ratings(ratingVal) {
  console.log(ratingVal)
  const ratingValue = ratingVal.ratingVal;
  const fullRating = Math.floor(ratingValue);

  let partialRating = 0;
  let partialRatingPercentage = Math.floor((ratingValue - fullRating) * 100);
  if (partialRatingPercentage > 0) {
    partialRating = 1;
  }
  const emptyRatings = 5 - fullRating - partialRating;

  console.log(ratingValue, fullRating, partialRating, partialRatingPercentage,emptyRatings)

  return (
    <div className="flex">
      {[...Array(fullRating)].map((_, index) => (
        <FaStar key={index} className="text-[#FFC416]" />
      ))}
      {partialRating ? (
        <div className="relative inline-block">
          <FaRegStar className="text-[#FFC416] " />
          <div
            className={`absolute left-0 top-0 w-[${partialRatingPercentage}%] overflow-hidden  text-[#FFC416]`}
          >
            <FaStar />
          </div>
        </div>
      ) : null}

      {[...Array(emptyRatings)].map((_, index) => (
        <FaRegStar key={fullRating + index} className="text-[#FFC416]" />
      ))}
      {}
    </div>
  );
}
