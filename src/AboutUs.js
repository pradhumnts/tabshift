import React from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import personVector from "./assets/person-researching-stem-concepts-4.png";
import ServiceItem from "./components/ServiceItem/ServiceItem";
import mobileSVG from "./assets/services-icon/mobile-app-development.svg";
import Team from "./sections/AboutUs/Team";
import useResponsive from "./hooks/useResponsive";

const AboutUs = () => {
  const isDesktop = useResponsive("up", "lg");
  return (
    <Box mt={isDesktop ? 15 : 8}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <img src={personVector} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant={isDesktop ? "h3" : "h4"} fontWeight={600}>
              Why Choose Us!
            </Typography>
            <Typography sx={{ lineHeight: 1.8, mt: 2 }}>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={5} px={isDesktop ? 15 : 2} my={4}>
        <Grid item xs={12} lg={4}>
          <ServiceItem
            svg={mobileSVG}
            title="Quick Delivery"
            caption="Get a mobile app that meets your thoughts.
              We deliver products quickly"
            captionShort={true}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ServiceItem
            svg={mobileSVG}
            title="Professional Support"
            caption="Get a mobile app that meets your thoughts
              A very get a mobile app that meets your thoughts"
            captionShort={true}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ServiceItem
            svg={mobileSVG}
            title="Smooth Transitioning"
            caption="Get a mobile app that meets your thoughts
              We’re always there for you to help"
            captionShort={true}
          />
        </Grid>
      </Grid>
      <Team />
      <Container>
        <Grid mb={10} container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={12} lg={7}>
            <Typography variant="h2" fontWeight={600}>
              Let's talk about what you have in mind.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              display: "flex",
              justifyContent: isDesktop ? "flex-end" : "flex-start",
            }}
          >
            <a href="mailto:contact@tabshift.io">
              <Button
                sx={{ fontSize: 18, mt: isDesktop ? 0 : 5 }}
                variant="contained"
                size="large"
              >
                Contact Now
              </Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
