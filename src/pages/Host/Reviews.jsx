import React from "react";
import { hostComponentStyles } from "../../style";
import ratingGraph from "../../assets/reviews-graph.png";
import { reviewsData } from "../../data";
import { BsStarFill } from "react-icons/bs";
const Reviews = () => {
  return (
    <section id="reviews" className={`px-4`}>
      {/* Reviews Top Section */}
      <section id="reviews__top" className="flex flex-col gap-3">
        {/* Heading */}
        <div className="flex items-end gap-3 md:gap-8">
          <h1 className="font-bold text-[24px] md:-text[36px]">Your reviews</h1>
          <p className={`${hostComponentStyles.paragraph}`}>
            last <span className="font-bold underline">30 days</span>
          </p>
        </div>
        <figure className="w-full max-w-[500px]">
          <img src={ratingGraph} alt="rating-graph" />
        </figure>
      </section>

      {/* Reviews Bottom Section */}
      <section id="reviews__bottom" className={`my-6`}>
        {/* Heading */}
        <h2 className="font-bold text-[18px]">Reviews({reviewsData.length})</h2>

        {/* User Reviews */}
        <>
          {reviewsData.map((review) => (
            <div key={review.id} className="flex flex-col gap-2 my-6 border-b">
              <div className="flex gap-2">
                {[...Array(review.rating)].map((_, i) => (
                  <BsStarFill color="#FF8C38" key={i} className="" />
                ))}
              </div>
              <h3 className="text-[14px] md:text-[16px] font-semibold ">
                {review.name}{" "}
                <span className="text-[#8C8C8C] ml-1 font-medium">
                  {review.date}
                </span>
              </h3>
              <p className="mb-8">{review.text}</p>
            </div>
          ))}
        </>
      </section>
    </section>
  );
};

export default Reviews;
