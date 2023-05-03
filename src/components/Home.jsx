import { Box, Typography, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} sx={{ height: "100vh" }}>
        <Grid
          item
          xs={7}
          p={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h3" color="primary.main">Hey! My name is Juliana</Typography>
          <Typography variant="h4" color="white">I am a Full Stack Web Developer</Typography>
          <br />
          <Typography variant="body1" sx={{ textAlign: "left" }} color="white">
            Web Developer based in Metro Vancouver with a degree in Chemical
            Engineering and background in Accounting.
          </Typography>
          <br />
          <Grid
            item
            container
            xs={2}
            display="flex"
            justifyContent="space-between"
            color="white"
          >
            <LinkedInIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
            <EmailIcon fontSize="large" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={5}
          p={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          IMAGE
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
