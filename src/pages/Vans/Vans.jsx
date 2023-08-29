import React, { useEffect, useState } from "react";
import { styles } from "../../style";
import { Link } from "react-router-dom";
import { useVanData } from "./VanContext";

const Vans = () => {
  const vans = useVanData();

  const uniqueCategories = [...new Set(vans.map((van) => van.type))];

  const vanCategories = uniqueCategories.map((van, index) => (
    <article
      key={index}
      className="mr-2 last:mr-0 border rounded-[5px] px-2 py-1 md:px-3 md:py-2 bg-[#FFEAD0]"
    >
      <button type="button" className="text-[13px] md:text-[18px]">
        {van}
      </button>
    </article>
  ));

  const vanElements = vans.map((van) => (
    <article
      key={van.id}
      id="van-tile"
      className="flex flex-col items-start gap-2"
    >
      <Link to={`/vans/${van.id}`}>
        {/* Van Image */}
        <figure className="">
          <img
            src={van.imageUrl}
            alt="van images"
            className="rounded-[5px] aspect-[1/1]"
          />
        </figure>
        {/* Van Info */}
        <div
          id="van-info"
          className="flex flex-col items-start justify-start w-full md:justify-between md:flex-row"
        >
          <h3 className="text-[13px] font-semibold text-[#161616] md:text-[20px]">
            {van.name}
          </h3>
          <p className="font-semibold text-[13px] flex items-center justify-center md:flex-col md:text-[20px]">
            ${van.price}{" "}
            <span className="font-medium text-[13px] md:text-[16px]">/day</span>
          </p>
        </div>
        {/* Van Type */} {/* Vanilla CSS used */}
        <i className={`van-type ${van.type}`}>{van.type}</i>
      </Link>
    </article>
  ));
  return (
    <section className="h-full px-2 py-6 md:px-5">
      <h1 id="van-heading" className=" font-bold text-[22px] md:text-[32px]">
        Explore our van options
      </h1>

      <div
        id="van-categories"
        className={`mt-5 mb-8 flex items-center w-full justify-between`}
      >
        <div className="flex flex-wrap items-center justify-start gap-1 gap-y-3 md:gap-5">
          {vanCategories}
        </div>

        <button className="underline text-[13px] md:text-[18px]">
          Clear filters
        </button>
      </div>

      <div
        id="all-vans"
        className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6"
      >
        {vanElements}
      </div>
    </section>
  );
};

export default Vans;
