import React from "react";
import { styles } from "../../style";
import {
  Await,
  NavLink,
  defer,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";

import { getVans } from "../../api";

/* Loader Function */
export function loader() {
  return defer({ vans: getVans() });
}

/* Main Van Component */
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* Getting the type of the van for filtering */
  const typeFilter = searchParams.get("type");

  /* Getting the promise Obj from loader function */
  const dataPromise = useLoaderData();

  /* Function for rendering the van filter buttons and all vans */
  function renderVanElements(vans) {
    /* Setting all unique type of the vans */
    const uniqueCategories = [...new Set(vans.map((van) => van.type))];

    /* Rendering the van type categories */
    const vanCategories = uniqueCategories.map((van, index) => (
      <article key={index} className="mr-2 last:mr-0 md:px-3 md:py-2 ">
        <button
          onClick={() => setSearchParams({ type: `${van}` })}
          className={`van-type ${van} ${van === typeFilter ? "selected" : ""}`}
        >
          {van}
        </button>
      </article>
    ));

    /* Filter the vans according to their types */
    const displayVanEls = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    /* Van Element */
    const vanElements = displayVanEls?.map((van) => (
      <article
        key={van.id}
        id="van-tile"
        className="flex flex-col items-start gap-2"
      >
        <NavLink
          to={van.id}
          /* state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }} */ //state for useLocation
        >
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
            className="flex flex-col items-start justify-start w-full gap-1 md:justify-between md:flex-row"
          >
            <h3 className="text-[13px] font-semibold text-[#161616] md:text-[20px]">
              {van.name}
            </h3>
            <p className="font-semibold text-[13px] flex mb-2 md:mb-0 items-center justify-center md:flex-col md:text-[20px]">
              ${van.price}{" "}
              <span className="font-medium text-[13px] md:text-[16px]">
                /day
              </span>
            </p>
          </div>
          {/* Van Type */} {/* Vanilla CSS used */}
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </NavLink>
      </article>
    ));

    /* Main Layout */
    return (
      <>
        <div
          id="van-categories"
          className={`mt-5 mb-8 flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center w-full justify-between`}
        >
          <div className="flex flex-wrap items-start justify-start gap-1 md:items-center gap-y-3 md:gap-5">
            {vanCategories}
          </div>

          {typeFilter ? (
            <button
              onClick={() => setSearchParams({})}
              className="underline text-[13px] md:text-[18px] duration-200 hover:text-red-600"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        <div
          id="all-vans"
          className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6"
        >
          {vanElements}
        </div>
      </>
    );
  }

  /* Main Component Render here */
  return (
    <section className="h-full px-2 py-6 md:px-5">
      <h1 id="van-heading" className=" font-bold text-[22px] md:text-[32px]">
        Explore our van options
      </h1>

      <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
    </section>
  );
};

export default Vans;
