import React from "react";
import { Box, Typography } from "@mui/material";

const TeamMember = (props) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
    >
      <img
        style={{
          borderRadius: "50%",
          aspectRatio: 1 / 1,
          objectFit: "cover",
          height: "auto",
        }}
        src={props.imageSrc}
        alt=""
      />
      <Typography fontWeight={600} fontSize={18} mt={2}>
        {props.title}
      </Typography>
      <Typography color="#C66B75" fontWeight={500}>{props.caption}</Typography>
    </Box>
  );
};

export default TeamMember;
