import { Box, Typography, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} sx={{ marginTop: "70px", height: "100vh" }}>
        <Grid
          item
          xs={7}
          bgcolor="darkgrey"
          p={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h3">Hi, I'm Juliana</Typography>
          <Typography variant="h4">Full Stack Web Developer</Typography>
          <br />
          <Typography variant="body1" sx={{ textAlign: "left" }}>
            Web Developer based in Metro Vancouver with a degree in Chemical
            Engineering and background in Accounting. As a web developer, I am
            adaptive to work on either frontend or backend, and am always eager
            to learn new technologies. I’m most excited about building
            client-facing applications, and I’m always eager to hit the ground
            running and learn something new.
          </Typography>
        </Grid>
        <Grid item xs={5} bgcolor="grey">
          IMAGE
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
