import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  Container,
} from "@mui/material";
import img from "./assets/original-537d3e49946f95aa9b8cecc7f8827763.jpg";
import "./assets/css/template.css";
import SectionCard from "./components/Card/SectionCard";
import TemplateCard from "./components/Card/TemplateCard";
import TableText from "./components/Text/TableText";
import useResponsive from "./hooks/useResponsive";
import { templates } from "./sections/Template/templates";

const Template = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Container maxWidth="lg">
      <Grid container mt={isDesktop ? 15 : 10}>
        <Grid item lg={7} xs={12} pr={isDesktop ? 5 : 0}>
          <img
            style={{
              aspectRatio: 16 / 9,
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "#E4BEB9 0px 2px 54px 0px",
            }}
            className="project-cover"
            src={img}
            alt=""
          />
        </Grid>
        <Grid item lg={5} xs={12}>
          <Typography
            variant={isDesktop ? "h2" : "h4"}
            mt={isDesktop ? 0 : 3}
            fontWeight={600}
          >
            Django User Authentication
          </Typography>
          <Typography>A Next.js app and a Serverless Function API.</Typography>
          <Box mt={6}>
            <TableText heading="Framework" value="Django" />
            <Divider />
            <TableText heading="CSS" value="Implemented" />
            <Divider />
            <TableText heading="Price" value="Free" />
            <Divider />
            <TableText heading="Other Packages Used" value="No" />
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{ fontSize: 18, width: "100%" }}
              >
                Live Preview
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ fontSize: 18, width: "100%" }}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box mt={5} mb={5}>
        <Typography sx={{ lineHeight: 2 }}>
          So far, we’ve been introducing you to the world of project management.
          Now, it’s your turn to introduce yourself to your classmates! Your
          intro should give your fellow learners a good idea of who you are and
          should be 5-10 sentences long. If you don’t know what to write, here
          are a few suggestions: So far, we’ve been introducing you to the world
          of project management. Now, it’s your turn to introduce yourself to
          your classmates! Your intro should give your fellow learners a good
          idea of who you are and should be 5-10 sentences long. If you don’t
          know what to write, here are a few suggestions:
        </Typography>
        <SectionCard header="Screenshots">
          <Grid container spacing={5}>
            <Grid item xs={12} lg={4}>
              <img
                style={{
                  aspectRatio: 16 / 9,
                  objectFit: "cover",
                  borderRadius: 20,
                  boxShadow: "rgba(0,0,0,0.1) 0px 5px 40px 0px",
                }}
                src="https://pbs.twimg.com/media/EP9pUBcWAAAwvrJ.jpg:large"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <img
                style={{
                  aspectRatio: 16 / 9,
                  objectFit: "cover",
                  borderRadius: 20,
                  boxShadow: "rgba(0,0,0,0.1) 0px 5px 40px 0px",
                }}
                src="https://pbs.twimg.com/media/EP9pUBcWAAAwvrJ.jpg:large"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <img
                style={{
                  aspectRatio: 16 / 9,
                  objectFit: "cover",
                  borderRadius: 20,
                  boxShadow: "rgba(0,0,0,0.1) 0px 5px 40px 0px",
                }}
                src="https://pbs.twimg.com/media/EP9pUBcWAAAwvrJ.jpg:large"
                alt=""
              />
            </Grid>
          </Grid>
        </SectionCard>

        <Typography mt={4} sx={{ lineHeight: 2 }}>
          Advanced Fusion Page/Post Options We created the page and post options
          to extend the Avada Theme Options. Doing this gives you extreme
          flexibility by being able to override the global Theme Options and
          create unique and dynamic content-rich pages that stand out. Any
          single page or post (or more than one) can have a different layout and
          styling compared to the rest of the site. Multiple option panels with
          amazingly deep customization options: Sliders, Page, Post, Header,
          Footer, Sidebars, Backgrounds, Portfolio, Page Title Bar Assign any
          slider to any page or post, show slider above or below header, use
          transparent header per page Customize page title bar for any page or
          post Customize page settings like paddings uniquely for each page or
          post Customize header styles individually for any page or post. Insert
          custom images or colors for header section, main section, boxed
          background per page or post Choose a custom menu per page or post
          Enable or Disable headers, footers, sliders, sidebars, backgrounds and
          more per page or post Customize various parts of the portfolio per
          page or portfolio posts Insert custom excerpt length per portfolio
          pages Customize sidebars and sidebar positions for any page or post.
        </Typography>
        <SectionCard header="Similar Templates">
          <Grid container spacing={4}>
            {templates.slice(0, 3).map((template) => (
              <Grid item xs={12} lg={4}>
                <TemplateCard
                  title={template.title}
                  caption={template.caption}
                  cover={template.cover}
                />
              </Grid>
            ))}
          </Grid>
        </SectionCard>
      </Box>
    </Container>
  );
};

export default Template;
