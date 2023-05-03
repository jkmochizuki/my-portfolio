import React from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "../App.css";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Grid
      container
      p={{ xs: 8, md: 20 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignContent: "center",
      }}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            xs={12}
            container
            sx={{ minHeight: "60vh" }}
            className={`container ${inView ? "slide-in" : ""}`}
          >
            <Grid item xs={12}>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={["", 2000, "About Me", 2000]}
                  cursor={false}
                />
              </Typography>
            </Grid>
            {/* text and image */}
            <Grid
              container
              xs={12}
              sx={{
                minHeight: "80%",
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Grid item xs={12} md={7} pt={{ xs: 2, md: 5 }} alignSelf="flex-start">
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  Hello! My name is Juliana. As a web developer, I am
                  comfortable working on both the frontend and backend. I have a
                  strong desire to continuously learn and explore new
                  technologies, and I am always enthusiastic about embracing
                  fresh challenges. I approach my work with great motivation and
                  gratitude for every opportunity that comes my way.
                  <Typography
                    variant="h6"
                    color="primary.main"
                    fontWeight="bold"
                  >
                    My goal is to push my limits and constantly improve my
                    skills and abilities.
                  </Typography>
                  <br />
                  Apart from coding, I enjoy traveling, experimenting with new
                  foods, photography, and exploring new hobbies. Thank you for
                  visiting my site, and I look forward to connecting with you
                  soon!
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} mt={{ xs: 5, md: 0 }}  alignSelf="center">
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/images/headshot-juliana.jpg"}
                  alt=""
                  sx={{
                    border: "2px solid",
                    borderColor: "white",
                    borderRadius: "50%",
                    height: { xs: 150, md: 350 },
                    width: { xs: 150, md: 350 },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
