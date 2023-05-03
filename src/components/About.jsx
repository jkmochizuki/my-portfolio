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
      p={20}
      sx={{
        height: "100vh",
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
            p={5}
            display="flex"
            justifyContent="center"
            marginBottom={5}
            sx={{ height: "60vh" }}
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
            <Grid container xs={12} sx={{ height: "80%" }}>
              <Grid
                item
                xs={7}
                p={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Typography
                  variant="body1"
                  sx={{ textAlign: "left" }}
                >
                  Hello! My name is Juliana. As a web developer, I am
                  comfortable working on both the frontend and backend. I have a
                  strong desire to continuously learn and explore new
                  technologies, and I am always enthusiastic about embracing
                  fresh challenges. I approach my work with great motivation and
                  gratitude for every opportunity that comes my way.
                  <Typography variant="h6" color="primary.main" fontWeight="bold">
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
              <Grid
                item
                xs={5}
                p={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/images/headshot-juliana.jpg"}
                  alt=""
                  sx={{
                    border: "2px solid",
                    borderColor: "white",
                    borderRadius: "50%",
                    height: 350,
                    width: 350,
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
