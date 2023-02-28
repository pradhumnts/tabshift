import React from "react";
import { Box, Typography } from "@mui/material";

const TableText = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
      <Typography color="#7F7F7F" fontWeight={500}>
        {props.heading}
      </Typography>
      <Typography color="#7F7F7F">{props.value}</Typography>
    </Box>
  );
};

export default TableText;
