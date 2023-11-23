import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Scrolling effect
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close navbar
  const closeNavbar = () => {
    setToggle(false);
  };

  // Toggle navbar
  const toggleNavbar = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header
      className={`grid p-4 md:p-8 fixed w-full z-50 ${
        isScrolled ? "navTransition" : ""
      }`}
    >
      <div className="flex justify-between md:justify-center">
        <h1 className="text-4xl font-bold">
          <a href="/restaurant/">SITE NAME</a>
        </h1>
        <button title="toggle" className="md:hidden" onClick={toggleNavbar}>
          <i
            className={`${toggle ? "fa-solid fa-x" : "fa-solid fa-bars"} px-4`}
          ></i>
        </button>
      </div>
      <nav
        className={`w-100 px-6 pt-4 md:pt-8 ${
          toggle ? "block" : "hidden"
        } md:block`}
      >
        <ul className="grid text-center font-medium gap-6 py-2 md:justify-center md:flex h-fit">
          <li>
            <NavLink to={"/restaurant/"} onClick={closeNavbar}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/restaurant/menu"} onClick={closeNavbar}>
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to={"/restaurant/gallery"} onClick={closeNavbar}>
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink to={"/restaurant/reservation"} onClick={closeNavbar}>
              RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to={"/restaurant/about"} onClick={closeNavbar}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to={"/restaurant/contact"} onClick={closeNavbar}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
