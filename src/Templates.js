import React from "react";
import { Box, Grid, Container } from "@mui/material";
import SVGHeader from "./components/SVGHeader/SVGHeader";
import TemplateCard from "./components/Card/TemplateCard";
import { Link } from "react-router-dom";
import { templates } from "./sections/Template/templates";

const Templates = () => {
  return (
    <Container>
      <Box my={15}>
        <SVGHeader
          heading="Start working with our starter kits"
          text="Download templates and starter kits for your next project."
        />
        <Grid container spacing={5} mt={5}>
          {templates.map((template) => (
            <Grid item lg={4}>
              <Link to="/templates/1">
                <TemplateCard
                  title={template.title}
                  caption={template.caption}
                  cover={template.cover}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Templates;
