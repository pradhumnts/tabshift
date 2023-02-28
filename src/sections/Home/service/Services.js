import React from "react";
import "./services.css";
import { Box } from "@mui/material";
import SVGHeader from "./../../../components/SVGHeader/SVGHeader";
import mobileSVG from "./../../../assets/services-icon/mobile-app-development.svg";
import ServiceItem from "../../../components/ServiceItem/ServiceItem";
import personVector from "./../../../assets/person-researching-stem-concepts-4.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Box
      className="services"
      sx={{
        backgroundColor: "#FFF6F5",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      py={10}
    >
      <SVGHeader
        heading="We Have Something For You."
        text="Let’s find a point where we can fit together."
      />
      <Box pb={10}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
          mt={10}
        >
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0, x: -100, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className="service-item mobile-app"
          >
            <ServiceItem
              svg={mobileSVG}
              className="service-item"
              title="Mobile App Development"
              caption="Get a mobile app that meets your thoughts"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0, x: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="service-item web-development"
          >
            <ServiceItem
              svg={mobileSVG}
              className="service-item"
              title="Web Development"
              caption="Scale your business with a website"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0, x: -200, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="service-item ui-design"
          >
            <ServiceItem
              svg={mobileSVG}
              className="service-item"
              title="UI / UX Design"
              caption="Get a beautiful brand design ready"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="service-item e-commerce"
          >
            <ServiceItem
              svg={mobileSVG}
              className="service-item"
              title="Ecommerce Development"
              caption="Get a business website ready in no time."
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0, x: 300, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="service-item templates"
          >
            <ServiceItem
              svg={mobileSVG}
              className="service-item"
              title="Templates"
              caption="Coding templates in multiple languages."
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0, x: 300 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="service-item wordpress"
          >
            <ServiceItem
              svg={mobileSVG}
              className="service-item"
              title="Wordpress Design"
              caption="Coding templates in multiple languages."
            />
          </motion.div>
          <img className="service-img" src={personVector} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
