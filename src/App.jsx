import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import Footer from "./components/Footer";
import Technology from "./components/Technology";
import TechPage2 from "./components/TechPage2";
import About from "./components/About";
import AboutComp2 from "./components/AboutComp2";
import Career from "./components/Career";
import Careercomp2 from "./components/Careercomp2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <LandingPage />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
          <FifthPage />
          <SixthPage />
          <Footer />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
          <AboutComp2 />
          <Footer />
        </div>
      ),
    },
    {
      path: "/technology",
      element: (
        <div>
          <Navbar />
          <Technology />
          <TechPage2 />
          <Footer />
        </div>
      ),
    },
    {
      path: "/careers",
      element: (
        <div>
          <Navbar />
          <Career />
          <Careercomp2 />
          <Footer />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
