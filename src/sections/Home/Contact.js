import React from "react";
import { Grid, Typography, useTheme, Button } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import contactSVG from "../.././assets/contact-vector.png";

const Contact = () => {
  const isDesktop = useResponsive("up", "lg");
  const theme = useTheme();
  return (
    <Grid
      container
      flexDirection={isDesktop ? "row" : "row-reverse"}
      pb={3}
    >
      <Grid
      item
        pl={10}
        mb={5}
        lg={7}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          textTransform="uppercase"
          fontWeight={500}
          sx={{ color: theme.palette.primary.main }}
        >
          GET STARTED
        </Typography>
        <Typography variant="h4" mt={2} mb={5}>
          We Help Businesses Move Faster.
        </Typography>
        <a href="mailto:contact@tabshift.io">
        <Button
          variant="contained"
          size="large"
          sx={{ width: "fit-content", fontSize: 18 }}
        >
          Contact Now
        </Button>
        </a>
      </Grid>
      <Grid p={3} item lg={5}>
        <img src={contactSVG} alt="" />
      </Grid>
    </Grid>
  );
};

export default Contact;
