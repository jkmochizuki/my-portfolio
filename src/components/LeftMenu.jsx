import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../App.css";

export default function LeftMenu() {
  return (
    <Grid
      container
      position="fixed"
      color="white"
      sx={{
        height: "50vh",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "flex-start",
      }}
      pl={{ xs: 2, md: 5 }}
      mb={{ xs: -8, md: 0 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <LinkedInIcon sx={{ fontSize: { xs: "medium", md: "xx-large" } }} />
        <br />
        <GitHubIcon sx={{ fontSize: { xs: "medium", md: "xx-large" } }} />
        <br />
        <EmailIcon sx={{ fontSize: { xs: "medium", md: "xx-large" } }} />
        <br />
        <Divider
          orientation="vertical"
          color="white"
          sx={{ width: "0.3px", height: "100%", alignSelf: "center" }}
        />
      </Box>
    </Grid>
  );
}
