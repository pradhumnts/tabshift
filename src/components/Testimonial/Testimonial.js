import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import "./testimonial.css";
import { motion } from "framer-motion";
import logo from "../../assets/logo-icon.png";
import useResponsive from "../../hooks/useResponsive";

const Testimonial = (props) => {
  const theme = useTheme();
  const isDesktop = useResponsive("up", "lg")

  return (
    <motion.div
      initial={{
        scale: 0.75,
      }}
      animate={{
        scale: (isDesktop ? props.activeIndex + 1 : props.activeIndex) === props.index ? isDesktop ? 1.2 : .95 : isDesktop ? 0.85 : 0.75,
        transition: { duration: 0.6 },
      }}
    >
      <Box
        className={`testimonial-card ${props.className}`}
        style={{
          backgroundColor: "#FFE9E6",
          borderRadius: 25,
          boxShadow: "#FFE9E6 0px 0px 2px 0px, #FFE9E6 0px 2px 24px -4px",
        }}
        p={5}
        my={5}
      >
        <Box>
          <img
            className="avatar"
            src={props.image}
            alt=""
          />
        </Box>
        <Typography
          fontWeight={600}
          variant="h6"
          my={1}
          color={theme.palette.primary.main}
        >
          {props.person}
        </Typography>
        <Typography px={4} color={theme.palette.primary.light}>
          {props.message}
        </Typography>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: props.activeIndex + 1 === props.index ? 1 : 0, transition: { duration: .6 } }}
            className="icon"
            src={logo}
            alt=""
          />
      </Box>
    </motion.div>
  );
};

export default Testimonial;
