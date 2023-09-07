import React from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../style";
const Home = () => {
  return (
    <section>
      <article className={`relative h-screen ${styles.flexCenter}`}>
        {/* Background image & transparent overlay */}
        <div className="absolute h-full">
          <figure className="h-full">
            <img
              src="homebg.png"
              alt="background image for home page"
              className="object-cover h-full"
            />
          </figure>
        </div>
        {/* transparent overlay */}
        <div className="absolute z-10 w-full h-full bg-Transparent" />
        {/* Main Content */}
        <div className={`${styles.flexCenter} z-50 px-10 gap-5 md:gap-10`}>
          <h1 className="text-white text-[32px] md:text-[42px] lg:text-[65px] font-bold">
            You got the travel plans, we got the travel vans.
          </h1>

          <p className="mb-16 text-white md:max-w-[80%] opacity-90 md:text-[24px] lg:text-[30px]">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>

          <NavLink
            to={`vans`}
            className={`${styles.flexCenter} flex-col primary__cta-btn`}
          >
            Find your van
          </NavLink>
        </div>
      </article>
    </section>
  );
};

export default Home;
