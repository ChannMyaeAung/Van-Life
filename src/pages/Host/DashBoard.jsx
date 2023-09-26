import React, { Suspense } from "react";
import { requireAuth } from "../../utils";
import { Await, NavLink, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { BsStarFill } from "react-icons/bs";
import { hostComponentStyles, styles } from "../../style";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

const DashBoard = () => {
  const loaderData = useLoaderData();

  /* Function for rendering listed vans to wrap inside Await */
  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div
        key={van.id}
        className="flex flex-col items-start justify-between p-2 mt-3 bg-white md:mt-5 md:items-center md:flex-row"
      >
        <div className="flex items-start gap-3 md:items-center">
          <figure className="w-[66px] h-[66px]">
            <img src={van.imageUrl} alt={van.name} className="rounded-[5px]" />
          </figure>
          <div>
            <h3 className="font-semibold text-[18px] md:text-[20px]">
              {van.name}
            </h3>
            <p className={`${hostComponentStyles.paragraph}`}>
              ${van.price}/day
            </p>
          </div>
        </div>
        <NavLink
          to={`vans/${van.id}`}
          className={`self-end md:self-center ${hostComponentStyles.paragraph}`}
        >
          View
        </NavLink>
      </div>
    ));
    return <>{hostVansEls}</>;
  }

  return (
    <section id="dashboard">
      {/* DashBoard Welcome Section */}
      <section
        id="dashboard__welcome"
        className={`bg-[#FFEAD0] flex ${styles.section}`}
      >
        <div
          className="flex flex-col justify-center w-full gap-3"
          id="dashboard__welcome_info"
        >
          <h1 className="font-bold md:text-[36px] text-[30px] ">Welcome!</h1>
          <div
            className={`text-[#4D4D4D] ${hostComponentStyles.paragraph} flex justify-between items-center`}
          >
            <p>
              Income last <span className="font-bold underline">30 days</span>
            </p>
            {/* NavLink to income section */}
            <NavLink to={`income`}>Details</NavLink>
          </div>
          <h2
            className="font-extrabold text-[32px] md:text-[40px]"
            id="dashboard__income"
          >
            $2,260
          </h2>
        </div>
      </section>

      {/* DashBoard Review Section */}
      <section
        id="dashboard__review"
        className={`bg-[#FFDDB2] flex items-center justify-between ${styles.section}`}
      >
        <div className="flex flex-col items-start md:flex-row md:items-center">
          <h2 className="font-bold text-[18px]">Review score</h2>

          {/* Star Icon & Rating */}
          <div id="review__rating" className="flex items-center gap-1">
            <BsStarFill color="#FF8C38" id="star-icon" />
            <p className="font-bold text-[16px] md:text-[20px]">
              5.0<span className="font-medium text-[#4D4D4D]">/5</span>
            </p>
          </div>
        </div>
        {/* NavLink to review section */}
        <NavLink to={`reviews`} className={`${hostComponentStyles.paragraph}`}>
          Details
        </NavLink>
      </section>

      {/* User Listed Vans section */}

      <section className={`${hostComponentStyles.margin}`}>
        <header className="flex items-center justify-between">
          <h1 className="font-bold text-[18px] md:text-[24px]">
            Your listed vans
          </h1>
          <NavLink to={`vans`} className={`${hostComponentStyles.paragraph}`}>
            View all
          </NavLink>
        </header>
        {/* All Listed Vans */}
        <Suspense
          fallback={<h2 className={`${styles.loading}`}>Loading vans...</h2>}
        >
          <Await resolve={loaderData.vans}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </section>
  );
};

export default DashBoard;
