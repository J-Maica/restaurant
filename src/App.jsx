import React, { useState, useEffect } from "react";
import "../src/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cover from "../src/components/Cover";
import Loading from "../src/components/Loading";
import "react-lazy-load-image-component/src/effects/blur.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timeout on component unmount (cleanup)
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Cover />

          <Routes>
            <Route path="/restaurant/" element={<Home />} />
            <Route path="/restaurant/menu" element={<Menu />} />
            <Route path="/restaurant/gallery" element={<Gallery />} />
            <Route path="/restaurant/reservation" element={<Reservation />} />
            <Route path="/restaurant/about" element={<About />} />
            <Route path="/restaurant/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
