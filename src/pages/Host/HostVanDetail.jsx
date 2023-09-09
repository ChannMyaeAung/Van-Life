import React, { Fragment, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { hostVansData } from "../../data";
import { getHostVans } from "../../api";

export function loader({ params }) {
  return getHostVans(params.id);
}

const HostVanDetail = () => {
  /* active styles for link tabs */
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const hostVan = useLoaderData();

  return (
    <section id="hostvan-detail" className="px-3 border">
      {/* A button to navigate back to host/vans */}
      <Link to={`..`} relative="path">
        <button
          id="back-to-all-vans"
          className="pt-2 pb-5 underline underline-offset-4 text-[14px] md:text-[18px] flex items-center justify-center gap-1"
        >
          <FaArrowLeftLong />
          Back to all vans
        </button>
      </Link>

      {/* Single Host Info */}
      {hostVan ? (
        <div id="hostvan-info" className="bg-white rounded-[6px] p-3">
          {/* Shared Top Section */}
          <div className={`flex items-center gap-2 md:gap-4 w-full`}>
            <figure className="mr-[10px]">
              <img
                src={hostVan.imageUrl}
                alt={hostVan.name}
                className="w-[120px] h-[120px] md:h-[157px] rounded-[5px]"
              />
            </figure>

            <div>
              <span
                className={`van-type ${hostVan.type} cursor-pointer`}
                id="van-type"
              >
                {hostVan.type}
              </span>
              <h2 className="font-bold md:text-[26px] text-[15px]">
                {hostVan.name}
              </h2>
              <p className="font-bold md:text-[20px] text-[14px]">
                ${hostVan.price}
                <span className="font-medium">/day</span>
              </p>
            </div>
          </div>

          {/* Host Van Tabs */}
          <ul className="flex items-center gap-6 py-5">
            {hostVansData.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.path}
                end
                className={`underline-offset-4 text-[14px] md:text-[20px]`}
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                {tab.title}
              </NavLink>
            ))}
          </ul>

          <Outlet context={hostVan} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default HostVanDetail;
