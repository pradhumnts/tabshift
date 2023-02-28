import React from "react";
import { Box, Typography } from "@mui/material";

const PricingCard = (props) => {
  return (
    <Box sx={{ borderRadius: 10, boxShadow: "#FFEAED 0px 5px 40px 0px" }}>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: props.backgroundColor,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          p: 8,
        }}
      >
        <Typography variant="h5" color="white">
          {props.category}
        </Typography>
        <Typography variant="h2" color="white" fontWeight={600}>
          {props.discountPrice}
        </Typography>
        <Typography
          variant="h6"
          sx={{ textDecoration: "line-through" }}
          fontWeight={600}
          color="white"
        >
          {props.mainPrice}
        </Typography>
      </Box>
      <Box py={4} px={2}>
        {props.children}
      </Box>
    </Box>
  );
};

export default PricingCard;
