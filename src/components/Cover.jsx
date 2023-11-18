import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CoverBg from "../assets/cover.webp";

export default function Cover() {
  const location = useLocation();
  const { pathname } = location;

  const getTitle = () => {
    switch (pathname) {
      case "/menu":
        return "Explore Our Menu";
      case "/gallery":
        return "View Our Gallery";
      case "/reservation":
        return "Book a Table Easily";
      case "/about":
        return "About Our Restaurant";
      case "/contact":
        return "Get in Touch";
      case "/":
      default:
        return "Welcome to our Restaurant";
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [coverText, setCoverText] = useState(getTitle());

  useEffect(() => {
    // Set coverText when the path changes
    setCoverText(getTitle());
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <section className="mainCover flex justify-center items-center text-center">
      <img
        alt="restaurant cover"
        src={CoverBg}
        className="absolute w-full h-full object-cover brightness-75"
      />
      <h1
        className={`text-4xl md:text-7xl font-semibold z-10  ${
          isVisible ? "fadeIn" : ""
        }`}
      >
        {coverText}
      </h1>
    </section>
  );
}
