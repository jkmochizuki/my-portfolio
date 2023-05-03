import React from "react";
import {
  Box,
  Divider,
  Grid,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../App.css";

export default function Left() {
  return (
    <Grid
      container
      position="fixed"
      color="white"
      sx={{
        height: "40vh",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "flex-start",
        paddingLeft: 5,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <LinkedInIcon fontSize="large" />
        <br />
        <GitHubIcon fontSize="large" />
        <br />
        <EmailIcon fontSize="large" />
        <br /><Divider orientation="vertical" color="white" sx={{ width: "0.5px", alignSelf: "center"}} />
      </Box>
      
    </Grid>
  );
}
