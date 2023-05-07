import React from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { aboutStyles } from "../theme/styles";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Grid
      container
      sx={aboutStyles.root}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
      id="about"
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            xs={12}
            container
            sx={aboutStyles.container}
            className={`container ${inView ? "slide-in" : ""}`}
          >
            {/* title */}
            <Grid item xs={12} sx={aboutStyles.title}>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={["", 2000, "About me", 2000]}
                  cursor={false}
                />
              </Typography>
            </Grid>

            {/* text and image */}
            <Grid item container xs={12}>
              {/* text */}
              <Grid item xs={12} md={8}>
                <Typography variant="body1" sx={aboutStyles.body}>
                  Hello! My name is Juliana. As a web developer, I am
                  comfortable working on both the frontend and backend. I have a
                  strong desire to continuously learn and explore new
                  technologies, and I am always enthusiastic about embracing
                  fresh challenges. I approach my work with great motivation and
                  gratitude for every opportunity that comes my way.
                  <Typography variant="h6">
                    I believe in challenging myself and becoming the best
                    version I can be, constantly improving my skills and
                    abilities.
                  </Typography>
                  <br />
                  Apart from coding, I enjoy traveling, experimenting with new
                  foods, and exploring new hobbies. Thank you for visiting my
                  site, and I look forward to connecting with you soon!
                </Typography>
              </Grid>
              {/* image */}
              <Grid item xs={12} md={4} sx={aboutStyles.imageContainer}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/images/headshot-juliana.jpg"}
                  alt=""
                  sx={aboutStyles.image}
                />
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
