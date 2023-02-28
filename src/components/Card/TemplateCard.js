import React from "react";
import { Typography, Box } from "@mui/material";
import './card.css'
const TemplateCard = (props) => {
  return (
    <Box className="template-card">
      <img
        style={{
          aspectRatio: 16 / 9,
          objectFit: "cover",
          borderRadius: 20,
          boxShadow: "rgba(0,0,0,0.1) 0px 5px 40px 0px",
        }}
        src={props.cover}
        alt=""
      />
      <Typography fontWeight={600} variant="h6" mt={2}>{props.title}</Typography>
      <Typography>{props.caption}</Typography>
    </Box>
  );
};

export default TemplateCard;
