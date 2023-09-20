import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { navLinks } from "../data";
import logo from "../assets/logo.png";
import avatarIcon from "../assets/avatar-icon.png";

const variants = {
  open: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.25 } },
  closed: { opacity: 0, x: "100%", transition: { duration: 0.25 } },
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      {/* Mobile Sidebar */}
      <nav className="block md:hidden">
        {/* Logo */}

        <div className="flex items-center justify-between">
          <div className=" logo-container">
            <NavLink to="/">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </div>
          {/* Nav Toggle Button */}
          <button
            className=""
            id="nav-toggle-btn"
            onClick={() => setIsNavOpen(true)}
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>

        {/* Transparent Overlay when the sidebar is open */}
        {isNavOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-[100]" />
        )}

        <motion.aside
          animate={isNavOpen ? "open" : "closed"}
          variants={variants}
          className={`fixed bg-[#fdfdfd] z-[999] top-0 right-0 w-1/2 h-full transform`}
        >
          <ul className="relative top-0 flex-col items-start justify-center px-8 h-1/2 nav-links">
            <button
              className="absolute right-0 top-2"
              id="nav-toggle-btn"
              onClick={() => setIsNavOpen(false)}
            >
              <AiOutlineClose size={22} color="red" />
            </button>

            {/* All NavLinks except Login/SignIn */}
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.id}
                to={navLink.path}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
                onClick={() => setIsNavOpen(false)}
              >
                {navLink.title}
              </NavLink>
            ))}

            {/* Login/SignIn */}
            <NavLink
              onClick={() => setIsNavOpen(false)}
              to={`/login`}
              className={`w-[25px] h-[25px] duration-200 hover:scale-105`}
            >
              Login
            </NavLink>
          </ul>
        </motion.aside>
      </nav>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex">
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <ul className="nav-links">
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.id}
              to={navLink.path}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-link" : "")
              }
            >
              {navLink.title}
            </NavLink>
          ))}

          {/* Login/SignIn */}

          <NavLink
            onClick={() => setIsNavOpen(false)}
            to={`/login`}
            className={`w-[25px] h-[25px] duration-200 hover:scale-105`}
          >
            <img src={avatarIcon} alt="avatar icon" className="object-cover" />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
