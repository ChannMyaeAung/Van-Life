import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { hostLinks } from "../data";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section id="host-layout">
      <nav className="flex items-start justify-start gap-3 px-3 md:gap-6">
        {hostLinks.map((hostLink) => (
          <NavLink
            key={hostLink.id}
            to={hostLink.path}
            end
            className={`underline-offset-4 text-[14px] md:text-[18px]`}
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            {hostLink.title}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </section>
  );
};

export default HostLayout;
