import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";
import { motion } from "framer-motion";

const Customers = () => {
  const slashMotion = {
    rest: {
      duration: 1,
      transition: {
        ease: "easeInOut",
      },
      height: 0,
      width: 0,
    //   border: "0px solid transparant",
    },
    hover: {
      border: "2px solid #FFE9E6",
      //   backgroundColor: "red",
      width: "100%",
      height: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  const theme = useTheme();
  const isDesktop = useResponsive("up", "lg");
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        marginBottom: isDesktop ? 20 : 10,
        display: "flex",
        justifyContent: "space-evenly",
        overflow: "scroll",
        padding: 5,
        width: "100%",
      }}
    >
      <motion.a
        initial="rest"
        whileHover="hover"
        animate="rest"
        href="https://nisthasutra.com"
      >
        <Typography
          variant={isDesktop ? "h3" : "h4"}
          mx={isDesktop ? 0 : 3}
          color="#FFE9E6"
        >
          nisthasutra.com
        </Typography>
        <motion.div variants={slashMotion} style={{ border: "0px solid #FFE9E6" }}></motion.div>
      </motion.a>
      <motion.a
        initial="rest"
        whileHover="hover"
        animate="rest"
        href="https://nisthasutra.com"
      >
        <Typography
          variant={isDesktop ? "h3" : "h4"}
          mx={isDesktop ? 0 : 3}
          color="#FFE9E6"
        >
          ula.do
        </Typography>
        <motion.div variants={slashMotion} style={{ border: "0px solid #FFE9E6" }}></motion.div>
      </motion.a>
      <motion.a
        initial="rest"
        whileHover="hover"
        animate="rest"
        href="https://nisthasutra.com"
      >
        <Typography
          variant={isDesktop ? "h3" : "h4"}
          mx={isDesktop ? 0 : 3}
          color="#FFE9E6"
        >
          toddzemek.com
        </Typography>
        <motion.div variants={slashMotion} style={{ border: "0px solid #FFE9E6" }}></motion.div>
      </motion.a>
      <motion.a
        initial="rest"
        whileHover="hover"
        animate="rest"
        href="https://nisthasutra.com"
      >
        <Typography
          variant={isDesktop ? "h3" : "h4"}
          mx={isDesktop ? 0 : 3}
          color="#FFE9E6"
        >
          ciento.me
        </Typography>
        <motion.div variants={slashMotion} style={{ border: "0px solid #FFE9E6" }}></motion.div>
      </motion.a>
    </Box>
  );
};

export default Customers;
