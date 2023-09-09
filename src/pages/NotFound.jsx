import React from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../style";

const NotFound = () => {
  return (
    <section
      id="error-page"
      className={`${styles.flexCenter} px-[26px] h-[50vh] flex-col gap-3`}
    >
      <h1 className="text-[32px]  w-full font-bold leading-[42px]">
        Sorry, the page you were <br className="block md:hidden" />
        looking for was not found.
      </h1>

      <NavLink
        to={`/`}
        className="w-full rounded-[5px] text-[24px] text-center py-3 font-semibold text-white bg-primaryBlack"
      >
        Return to home
      </NavLink>
    </section>
  );
};

export default NotFound;
