import React, { useEffect } from "react";
import vector_1 from "./assets/person-stressed-out-by-technology.png";
import "./assets/css/home.css";
import triangleImage from "./assets/triangle.png";
import { motion } from "framer-motion";
import SVGHeader from "./components/SVGHeader/SVGHeader";
import LandingCard from "./sections/Home/LandingCard";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import serviceImage1 from "./assets/service-1.png";
import serviceImage2 from "./assets/service-2.png";
import serviceImage3 from "./assets/service-3.png";
import Services from "./sections/Home/service/Services";
import Testimonials from "./sections/Home/testimonials/Testimonials";
import templateSVG from "./assets/templates-svg.png";
import ServicesMobile from "./sections/Home/service/ServicesMobile";
import useResponsive from "./hooks/useResponsive";
import templateSVGMobile from "./assets/template-mobile.png";
import Contact from "./sections/Home/Contact";
import { Link } from "react-router-dom";
import Customers from "./sections/Home/customers/Customers";

const Home = () => {
 
  const isDesktop = useResponsive("up", "lg");

  return (
    <div>
      <Grid
        container
        sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}
        mb={5}
        mt={isDesktop ? 10 : 5}
        className="hero-section"
      >
        <Grid
        item
          lg={7}
          xs={12}
          style={{ textAlign: isDesktop ? "left" : "center" }}
          className="hero-content-wrapper"
        >
          <div className="hero-content">
            <img
              className="hero-background-vector"
              src={triangleImage}
              alt=""
              style={{ transform: `scale(${isDesktop ? 2 : 1})` }}
            />
            <Typography variant="h2" mb={2} fontWeight={600}>
              We’re here for you.
            </Typography>
            <Typography variant="p" className="secondary-text-lg">
              Vercel is the platform for frontend developers, providing the
              speed and reliability innovators need to create at the moment of
              inspiration.
            </Typography>
          </div>
        </Grid>
        <Grid item lg={5} xs={12} sx={{ p: 5, pr: { lg: 10, xs: 5 } }}>
          <div className="hero-vector">
            <motion.div
              // animate={{ y: 50 }}
              // transition={{
              //   repeat: 2,
              //   repeatType: "reverse",
              //   duration: .6,
              //   ease: "easeInOut"
              // }}
              className="vector-wrapper"
            >

              <img src={vector_1} alt="" />
            </motion.div>
          </div>
        </Grid>
      </Grid>
      <Customers />
      <div>
        <SVGHeader
          heading="Make a Difference"
          text="A website or app can make a huge difference"
        />
        <Box style={{ margin: isDesktop ? "0 10%" : "0 5%" }}>
          <LandingCard
            serviceImage={serviceImage1}
            heading="Start saving thousands of hours of marketing."
            text="Tired of wasting thousands of hours starting from scratch on every project and rebuilding the same components?"
          />
          <LandingCard
            serviceImage={serviceImage2}
            heading="Have a websites ready to use in minutes."
            text="A online spiritual book reading website where people can grow their knowledge about life."
            reverse={true}
          />
          <LandingCard
            serviceImage={serviceImage3}
            heading="Take your dream business to new heights."
            text="Create and join a private membership as affiliate or members to enjoy unique offers."
          />
        </Box>
      </div>

      {!isDesktop ? <ServicesMobile /> : <Services />}

      <Testimonials />

      <Grid
        container
        sx={{
          backgroundColor: "#F8AFA6",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 5,
        }}
      >
        <Grid xs={12} item lg={6} px={12}>
          <Typography variant="h3" mb={2} fontWeight={600}>
            Web Templates and Components.
          </Typography>
          <Typography mb={4}>
            Begin your web app development process with our pre-built website
            templates and components for any project.
          </Typography>
          <Link to="templates"><Button variant="elementory-light">See Templates</Button></Link>
        </Grid>
        <Grid xs={12} item lg={6}>
          {isDesktop ? (
            <img src={templateSVG} alt="" />
          ) : (
            <img
              style={{ width: "140%", marginLeft: -100, marginBottom: -100 }}
              src={templateSVGMobile}
              alt=""
            />
          )}
        </Grid>
      </Grid>
      <Container>
        <Box my={10}>
        <Contact />
        </Box>
      </Container>
    </div>
  )
}

export default Home;
