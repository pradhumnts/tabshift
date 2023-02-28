import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import NavMobile from "./components/Nav/NavMobile";
import useResponsive from "./hooks/useResponsive";

function App() {
  const isDesktop = useResponsive("up", "lg");

  return (
    <div>
      <div>
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
