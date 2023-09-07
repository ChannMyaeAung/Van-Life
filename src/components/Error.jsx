import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { styles } from "../style";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <div>Error: {error.message}</div>
      <pre>
        {error.status} - {error.statusText}
      </pre>

      <NavLink
        to={`/`}
        className={`my-6 ${styles.flexCenter} primary__cta-btn rounded-[5px] w-1/2 mx-auto`}
      >
        Back to home
      </NavLink>
    </>
  );
};

export default Error;
