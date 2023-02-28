import { Box, Grid } from "@mui/material";
import React from "react";
import SVGHeader from "../../components/SVGHeader/SVGHeader";
import TeamMember from "../../components/Team/TeamMember";
import member1 from "../../assets/team/IMG_2446.jpg";
import member2 from "../../assets/team/FFC3CD32-1E7A-4D97-8DCF-B21275235EFA_1_105_c-removebg-preview.png"
import member3 from "../../assets/team/5048ABF5-AA7C-430B-89CA-5258750496D2.jpg";
import member4 from "../../assets/team/67AA13E8-8600-4E2D-8A9D-3D7A3111F170_1_201_a.jpg";
import member5 from "../../assets/team/8F175D54-87D3-4AF9-AB48-6C3FF63CE196_1_201_a.jpg";
import member6 from "../../assets/team/A635FC3B-2D1F-494F-871C-D277AAEDED00_1_201_a.jpg";
import useResponsive from "../../hooks/useResponsive";

const Team = () => {
    const isDesktop = useResponsive("up", "lg")
  const team = [
    {
      name: "Pradyumn Vaishnav",
      role: "Chief Executive Officer",
      image: member3,
    },
    {
        name: "Lakhan Chhipa",
        role: "Full Stack Developer",
        image: member4,
      },
    {
      name: "Amisha Mundra",
      role: "UX Designer",
      image: member2,
    },
    {
      name: "Karuna Vaishnav",
      role: "UI/UX Designer",
      image: member6,
    },
    {
      name: "Rohit Sargara",
      role: "Front End Developer",
      image: member5,
    },
    {
      name: "Rajaram Mewara",
      role: "Backend Developer",
      image: member1,
    },
  ];

  return (
    <Box my={10} p={5} py={10} bgcolor="#FFF6F5">
      <SVGHeader
        heading="Meet Our Professionals"
        text="Each day our team continues to grow and help more business."
      />
      <Grid container mt={8} mb={isDesktop ? 5 : 0} spacing={5}>
        {team.map((member) => (
          <Grid item xs={6} lg={2}>
            <TeamMember
              title={member.name}
              caption={member.role}
              imageSrc={member.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
