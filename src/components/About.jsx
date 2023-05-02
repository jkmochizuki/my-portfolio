import { Box, Typography, Grid } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Grid container sx={{ marginTop: "70px", height: "100vh" }}>
      <Grid item>
        <Typography variant="h3">Hi, I'm Juliana</Typography>
        <Typography variant="h4">Full Stack Web Developer</Typography>
        <Typography variant="h7">
          Web Developer based in Metro Vancouver with a degree in Chemical Engineering and background in Accounting.

          As a web developer, I am adaptive to work on either frontend or
          backend, and am always eager to learn new technologies. I’m most
          excited about building client-facing applications, and I’m always
          eager to hit the ground running and learn something new.
        </Typography>
      </Grid>
      <Grid item>
        IMAGE
      </Grid>
    </Grid>
  );
}
