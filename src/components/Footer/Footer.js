import React from "react";
import { Grid, Typography, Divider, Box } from "@mui/material";
import logo from "./../../assets/logo.png";
import "./footer.css";
import github from "../../assets/social/github.svg";
import instagram from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import linkedin from "../../assets/social/linkedin.svg";
import whatsapp from "../../assets/social/whatsapp-2.png";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";

const menuItems = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "About Us",
    path: "/about-us",
  },
  {
    page: "Developer - Templates",
    path: "/templates",
  },
  {
    page: "Contact Us",
    path: "mailto:contact@tabshift.io",
  },
];

const services = [{
  page: "Designing Package",
  path: "/services",
},{
  page: "Web Development Package",
  path: "/services",
},{
  page: "App Development Package",
  path: "/services",
},{
  page: "E-Commerce Package",
  path: "/services",
}]

const Footer = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Box px={10} py={6} style={{ backgroundColor: "#FDF6F6" }}>
      <Grid container>
        <Grid item lg={3} mb={2}>
          <img
            className="logo-footer"
            style={{ height: isDesktop ? "auto" : "auto" }}
            src={logo}
            alt=""
          />
        </Grid>
        <Grid
        item
          lg={3}
          style={{
            display: "flex",
            justifyContent: isDesktop ? "center" : "start",
            width: !isDesktop ? "50%" : "",
          }}
        >
          <Box>
            <Typography fontWeight={500} textTransform="uppercase">
              Menu
            </Typography>
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <Typography my={2}>{item.page}</Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid
        item
          lg={3}
          style={{
            display: "flex",
            justifyContent: isDesktop ? "center" : "start",
            width: !isDesktop ? "50%" : "",
          }}
        >
          <Box>
            <Typography fontWeight={500} textTransform="uppercase">
              Services
            </Typography>
            {services.map((item, index) => (
              <Link key={index} to={item.path}>
                <Typography my={2}>{item.page}</Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid
        item
          lg={3}
          style={{
            display: "flex",
            gap: 15,
            justifyContent: "flex-end",
            marginTop: 5,
          }}
        >
          {/* <Box className="footer-icon">
            <img src={facebook} alt="" />
          </Box> */}
          <a href="https://wa.me/message/4TD7J6HF23HPN1?src=qr">
            <Box className="footer-icon">
              <img src={whatsapp} alt="" />
            </Box>
          </a>
          <a href="https://www.linkedin.com/company/tabshift-io/">
            <Box className="footer-icon">
              <img src={linkedin} alt="" />
            </Box>
          </a>
          <a href="https://github.com/tabshiftio/">
            <Box className="footer-icon">
              <img src={github} alt="" />
            </Box>
          </a>
          <a href="https://twitter.com/tabshift_io">
            <Box className="footer-icon">
              <img src={twitter} alt="" />
            </Box>
          </a>
          <a href="https://www.instagram.com/tabshift.io/">
            <Box className="footer-icon">
              <img src={instagram} alt="" />
            </Box>
          </a>
        </Grid>
      </Grid>
      <Divider style={{ borderColor: "#E3B0B7", marginTop: 20 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={5}>
        <Typography variant="subtitle2" color="#7F7F7F">
          Copyright © 2022 Laaqiq. All Rights Reserved.
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography mr={10} variant="subtitle2" color="#7F7F7F">
            Terms of Use
          </Typography>
          <Typography variant="subtitle2" color="#7F7F7F">
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
