import React from "react";
import "../../assets/css/main.css";
import headerSVG from "../../assets/headerSVG.svg";
import { Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

const SVGHeader = (props) => {
  const isDesktop = useResponsive("up", "lg")

  return (
    <div className="svg-header">
      <div>
        <img src={headerSVG} style={{ scale: isDesktop ? 1.6 : 1 }} alt="" />
        <div className="svg-header-text">
          <Typography textAlign="center" variant="h2" fontWeight={600}>{props.heading}</Typography>
          <Typography textAlign="center">{props.text}</Typography>
        </div>
      </div>
    </div>
  );
};

export default SVGHeader;
