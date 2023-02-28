import "./App.css";
import React, { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, useScroll } from "framer-motion";
import Home from "./Home";
import logo from "./assets/logo.png";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import NavMobile from "./components/Nav/NavMobile";
import useResponsive from "./hooks/useResponsive";
import Template from "./Template";
import Pricing from "./Pricing";
import AboutUs from "./AboutUs";

function App() {
  const isDesktop = useResponsive("up", "lg");

  const carouselRef = useRef(null);
  const { scrollX, scrollYProgress } = useScroll({
    container: carouselRef,
    target: carouselRef,
    offset: ["end end", "start start"],
  });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
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
      height: 40,
      width: 40,
      fontSize: "20px",
      backgroundColor: "transparent",
      // backgroundImage: logo,
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },

    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },

    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 28,
  };

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  // document.addEventListener("mousemove", e => {
  //   console.log(e.target.tagName)
  // })

  return (
    <div ref={carouselRef}>
      <div ref={ref}>
        {isDesktop ? <Nav /> : <NavMobile />}
        {/* <Home /> */}
        {/* <Template /> */}
        {/* <Pricing /> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
