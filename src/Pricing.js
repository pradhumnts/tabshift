import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Box, Typography, Tab, Tabs, Grid } from "@mui/material";
import SVGHeader from "./components/SVGHeader/SVGHeader";
import PricingCard from "./sections/Pricing.js/PricingCard";
import PricingFeature from "./components/Pricing/PricingFeature";
import {
  webFeatures,
  appFeatures,
  eCommerceFeatures,
} from "./sections/Pricing.js/features";
import Contact from "./sections/Home/Contact";
import useResponsive from "./hooks/useResponsive";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Pricing = () => {
  const [country, setCountry] = useState("");

  const getGeoInfo = () => {
    fetch("https://ipapi.co/json/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountry(data.country_name);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => { getGeoInfo() }, [country])

  const isDesktop = useResponsive("up", "lg");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg">
      <Box mt={15}>
        <SVGHeader
          heading="Ready to start with tabshift?"
          text="Choose the right package for your next project."
        />
        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: "100%", mt: 10 }}>
            <Tabs
              variant="scrollable"
              className="pricing-tabs"
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "#A74B56",
                  color: "#FFE9E6",
                  transition: ".3s",
                },
                "& button:hover": {
                  backgroundColor: "#A74B56",
                  color: "#FFE9E6",
                  transition: ".3s",
                },
              }}
              value={value}
              onChange={handleChange}
              aria-label={
                isDesktop ? "basic auto tabs" : "scrollable auto tabs"
              }
            >
              <Tab
                label="Website Development"
                sx={{
                  width: isDesktop ? "100%" : "auto",
                  color: "#A74B56",
                  py: 3,
                  borderRadius: 4,
                  backgroundColor: "#FFE9E6",
                  fontWeight: 600,
                  fontSize: 16,
                  mx: 1.5,
                }}
                {...a11yProps(0)}
              />
              <Tab
                label="Mobile App Development"
                sx={{
                  width: isDesktop ? "100%" : "auto",
                  color: "#A74B56",
                  py: 3,
                  borderRadius: 4,
                  backgroundColor: "#FFE9E6",
                  fontWeight: 600,
                  fontSize: 16,
                  mx: 1.5,
                }}
                {...a11yProps(1)}
              />
              <Tab
                label="e-Commerce"
                sx={{
                  width: isDesktop ? "100%" : "auto",
                  color: "#A74B56",
                  py: 3,
                  borderRadius: 4,
                  backgroundColor: "#FFE9E6",
                  fontWeight: 600,
                  fontSize: 16,
                  mx: 1.5,
                }}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <Typography
            textAlign="center"
            fontWeight={600}
            my={3}
            mt={7}
            variant="h5"
          >
            Pricing Plan
          </Typography>
          <TabPanel value={value} index={0}>
            <Grid container spacing={4}>
              <Grid item lg={4} xs={12}>
                <PricingCard
                  category="Basic"
                  discountPrice={
                    country.toLowerCase() === "india" ? "9,999 INR" : "$349"
                  }
                  mainPrice={
                    country.toLowerCase() === "india" ? "14,999 INR" : "$449"
                  }
                  backgroundColor="#E5BABF"
                >
                  {webFeatures.basic.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
              <Grid item lg={4} xs={12}>
                <PricingCard
                  category="Standard"
                  discountPrice={
                    country.toLowerCase() === "india" ? "14,999 INR" : "$549"
                  }
                  mainPrice={
                    country.toLowerCase() === "india" ? "19,999 INR" : "$699"
                  }
                  backgroundColor="#B87C82"
                >
                  {webFeatures.standard.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
              <Grid item lg={4} xs={12}>
                <PricingCard
                  category="Premium"
                  discountPrice={
                    country.toLowerCase() === "india" ? "24,999 INR" : "$799"
                  }
                  mainPrice={
                    country.toLowerCase() === "india" ? "34,999 INR" : "$999"
                  }
                  backgroundColor="#A74B56"
                >
                  {webFeatures.premium.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={4}>
              <Grid item lg={4} xs={12}>
                <PricingCard
                  category="Basic"
                  discountPrice={
                    country.toLowerCase() === "india" ? "14,999 INR" : "$499"
                  }
                  mainPrice={
                    country.toLowerCase() === "india" ? "19,999 INR" : "$649"
                  }
                  backgroundColor="#E5BABF"
                >
                  {appFeatures.basic.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
              <Grid item lg={4} xs={12}>
                <PricingCard
                  category="Standard"
                  discountPrice={
                    country.toLowerCase() === "india" ? "24,999 INR" : "$899"
                  }
                  mainPrice={
                    country.toLowerCase() === "india" ? "34,999 INR" : "$1199"
                  }
                  backgroundColor="#B87C82"
                >
                  {appFeatures.standard.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
              <Grid item lg={4} xs={12}>
                <PricingCard
                  category="Premium"
                  discountPrice={
                    country.toLowerCase() === "india" ? "39,999 INR" : "$1499"
                  }
                  mainPrice={
                    country.toLowerCase() === "india" ? "49,999 INR" : "$1999"
                  }
                  backgroundColor="#A74B56"
                >
                  {appFeatures.premium.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={4}>
              <Grid item lg={6} xs={12}>
                <PricingCard
                  category="Website"
                  discountPrice={country.toLowerCase() === "india" ? "14,999 INR" : "$449"}
                  mainPrice={country.toLowerCase() === "india" ? "19,999 INR" : "$599"}
                  backgroundColor="#A74B56"
                >
                  {eCommerceFeatures.website.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
              <Grid item lg={6} xs={12}>
                <PricingCard
                  category="Mobile Application"
                  discountPrice={country.toLowerCase() === "india" ? "39,999 INR" : "$999"}
                  mainPrice={country.toLowerCase() === "india" ? "49,999 INR" : "$1199"}
                  backgroundColor="#A74B56"
                >
                  {eCommerceFeatures.mobileApp.map((feature) => (
                    <PricingFeature
                      text={feature.feature}
                      check={feature.check}
                    />
                  ))}
                </PricingCard>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Box>
      <Box my={5}>
        <Contact />
      </Box>
    </Container>
  );
};

export default Pricing;
