import React from "react";
import "./landing-card.css";
import { Grid, Typography, Box } from "@mui/material";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const LandingCard = (props) => {
  return (
    <Grid
      container
      my={10}
      sx={{
        flexDirection: props.reverse
          ? { xs: "column-reverse", lg: "row-reverse" }
          : { xs: "column-reverse", lg: "row" },
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.22) 0px 12px 24px -4px;",
        padding: 5,
        px: { lg: 10 },
        borderRadius: 5,
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 1,
          margin: "auto",
          pt: { xs: 3, lg: 0 },
        }}
        pl={props.reverse ? { lg: 4 } : 0}
        pr={props.reverse ? 0 : { lg: 4 }}
        xs={12}
        lg={8}
      
      >
        <Box sx={{ width: "90%", margin: "auto", overflow: "hidden" }}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          >
            <Typography variant="h4" fontWeight={600}>
              {props.heading}
            </Typography>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <Typography
              mb={3}
              mt={1}
              variant="h6"
              color="#707070"
              fontWeight={400}
            >
              {props.text}
            </Typography>
          </motion.div>
          <motion.div viewport={{ once: true }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.7 },
            }}>
          <Button variant="elementory" size="large">
            Read More
          </Button>
          </motion.div>
        </Box>
      </Grid>
      <Grid xs={12} item lg={4}>
        <img src={props.serviceImage} alt="" />
      </Grid>
    </Grid>
  );
};

export default LandingCard;
