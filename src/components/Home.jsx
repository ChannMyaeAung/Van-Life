import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
const Home = () => {
  return (
    <section>
      <article className={`relative home-content ${styles.flexCenter}`}>
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
        <div className="absolute z-10 w-full h-full bg-Transparent"></div>

        {/* Main Content */}
        <div className={`${styles.flexCenter} z-50 px-10 gap-5`}>
          <h1 className="text-white text-[48px] font-bold">
            You got the travel plans, we got the travel vans.
          </h1>

          <p className="mb-16 text-white opacity-90">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>

          <button className="bg-orangePrimary w-full h-[50px] text-white rounded-[5px] font-semibold">
            Find your van
          </button>
        </div>
      </article>
    </section>
  );
};

export default Home;
