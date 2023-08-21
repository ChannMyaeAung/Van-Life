import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section id="van-detail" className="px-3">
      <Link to={`/vans`}>
        <button
          id="back-to-all-vans"
          className="py-5 underline underline-offset-4 text-[14px] md:text-[16px] flex items-center justify-center gap-1"
        >
          <FaArrowLeftLong />
          Back to all vans
        </button>
      </Link>
      {van ? (
        <article className="flex flex-col items-start gap-3 py-6">
          {/* Van Image */}
          <figure>
            <img src={van.imageUrl} alt="" />
          </figure>
          <i className={`van-type ${van.type}`} id="van-type">
            {van.type}
          </i>
          {/* Van Name */}
          <h2 id="van-name" className="font-bold text-[20px] md:text-[32px]">
            {van.name}
          </h2>
          {/* Van Price Per Day */}
          <p
            className="font-semibold text-[16px] md:text-[24px]"
            id="van-price"
          >
            ${van.price}{" "}
            <span className="font-medium text-[14px] md:text-[18px]">/day</span>
          </p>
          {/* Van Description */}
          <p id="van-desc" className="text-[14px] md:text-[16px]">
            {van.description}
          </p>

          {/* Rent Button */}
          <button id="rent-btn" type="button" className="primary__cta-btn">
            Rent this van
          </button>
        </article>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default VanDetail;
