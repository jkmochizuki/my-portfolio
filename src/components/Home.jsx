import React from "react";
import { Typography, Grid, ThemeProvider, Button, Stack } from "@mui/material";
import { theme } from "../theme/theme";
import { HashLink } from "react-router-hash-link";
import { homeStyles } from "../theme/styles";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        item
        xs={12}
        sx={homeStyles.root}
        className={inView ? "section" : "opacity-0"}
        ref={ref}
        id="home"
      >
        <Grid
          item
          xs={12}
          sx={homeStyles.section}
          className={`container ${inView ? "slide-in-home" : ""}`}
        >
          <Typography variant="body1" color="primary.main">
            Hello! My name is
          </Typography>
          <br />
          <Typography variant="h2">Juliana Mochizuki</Typography>
          <Typography variant="h3">I am a Full Stack Developer</Typography>
          <br />
          <br />
          <Typography xs={3} variant="body1">
            Analytical thinker with a background in chemical engineering and
            accounting turned Full Stack Developer.
          </Typography>
          <br />
          <br />

          <Stack direction="row" spacing={2}>
            <HashLink to="#contact" smooth style={{ textDecoration: "none" }}>
              <Button variant="outlined" sx={homeStyles.button}>
                Contact me
              </Button>
            </HashLink>
            <Button
              variant="outlined"
              sx={homeStyles.button}
              onClick={() =>
                window.open(
                  "https://resume.creddle.io/resume/3bkcgktacjr",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
