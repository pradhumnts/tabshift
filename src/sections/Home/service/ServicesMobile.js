import React from "react";
import { Grid, Box } from "@mui/material";
import mobileSVG from "./../../../assets/services-icon/mobile-app-development.svg";
import ServiceItem from "../../../components/ServiceItem/ServiceItem";
import personVector from "./../../../assets/person-researching-stem-concepts-4.png";
import { motion } from "framer-motion";
import "./services.css";

const ServicesMobile = () => {
  return (
    <Grid container>
      <Grid>
        <img className="service-img" src={personVector} alt="" />
      </Grid>
      <Grid>
        <Box
          style={{
            justifyContent: "center",
            position: "relative",
          }}
          ml={5}
        >
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="service-item-mobile"
          >
            <ServiceItem
              svg={mobileSVG}
              title="Mobile App Development"
              caption="Get a mobile app that meets your thoughts"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="service-item-mobile"
          >
            <ServiceItem
              svg={mobileSVG}
              title="Web Development"
              caption="Scale your business with a website"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="service-item-mobile"
          >
            <ServiceItem
              svg={mobileSVG}
              title="UI / UX Design"
              caption="Get a beautiful brand design ready"
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="service-item-mobile"
          >
            <ServiceItem
              svg={mobileSVG}
              title="Ecommerce Development"
              caption="Get a business website ready in no time."
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="service-item-mobile"
          >
            <ServiceItem
              svg={mobileSVG}
              title="Templates"
              caption="Coding templates in multiple languages."
            />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="service-item-mobile"
          >
            <ServiceItem
              svg={mobileSVG}
              title="Wordpress Design"
              caption="Coding templates in multiple languages."
            />
          </motion.div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ServicesMobile;
