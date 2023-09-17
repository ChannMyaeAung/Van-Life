import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return getHostVans();
}

const HostVans = () => {
  const hostVans = useLoaderData();

  return (
    <section id="host-vans" className="px-3 ">
      <h2 className="text-[24px] font-bold md:text-[32px] mb-5">
        Your listed vans
      </h2>

      <ul className="flex flex-col gap-3 mb-10">
        {hostVans?.map((hostVan) => (
          <NavLink
            to={hostVan.id}
            key={hostVan.id}
            className={`flex gap-4 px-3 py-4 md:p-6 items-center bg-white border rounded-[6px]`}
          >
            {/* Van Image */}
            <img
              src={hostVan.imageUrl}
              alt={hostVan.name}
              className="w-[66px] h-[66px] rounded-[5px]"
            />

            {/* Vans' name and price per day */}
            <div id="vans-info">
              <h3 className="font-semibold md:text-[20px] leading-[31.66px]">
                {hostVan.name}
              </h3>
              <p className="text-[14px] md:text-[16px]">
                ${hostVan.price}
                <span>/day</span>
              </p>
            </div>
          </NavLink>
        ))}
      </ul>
    </section>
  );
};

export default HostVans;
