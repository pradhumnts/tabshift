import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./theme/theme";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Pricing from "./Pricing";
import ScrollToTop from "./utils/ScrollToTop";
import ErrorPage from "./ErrorPage";
import Templates from "./Templates";
import Template from "./Template";
import useResponsive from "./hooks/useResponsive";
import NavMobile from "./components/Nav/NavMobile";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

const HeaderLayout = () => {
  const isDesktop = useResponsive("up", "lg");

  const carouselRef = useRef(null);

  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 30,
      width: 30,
      backgroundColor: "#A74B56", 
      x: mouseXPosition - 20,
      y: mouseYPosition - 20,
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: .01,
      },
    }
  };

  const spring = {
    type: "spring",
    stiffness: 100,
  };

  document.addEventListener("mouseover", (e) => {
    return console.log(e.target.tagName)
  })

  return (
    <div ref={carouselRef} >
      <div ref={ref}>
        {isDesktop ? <Nav /> : <NavMobile />}
        <Outlet />
        <div>
          <motion.div
            variants={variants}
            className="circle"
            animate={cursorVariant}
            transition={spring}
          >
            <span className="cursorText">
              <span className="cursor-circle"></span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 613.554 613.557"
              >
                <path
                  id="Icon_awesome-location-arrow"
                  data-name="Icon awesome-location-arrow"
                  d="M80.871,4.217,579.122,234.178c57.485,26.831,38.323,111.146-23,111.146h-210.8v210.8c0,61.319-84.316,80.492-111.147,23L4.212,80.874c-19.162-46,30.666-95.831,76.659-76.658Z"
                  transform="translate(0 0)"
                  fill="#c66b75"
                />
              </svg> */}
            </span>
          </motion.div>
        </div>
      <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <HeaderLayout />
      </ScrollToTop>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Pricing />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/templates/1",
        element: <Template />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
