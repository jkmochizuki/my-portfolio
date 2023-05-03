import React from "react";
import { Grid, Icon, ThemeProvider, Typography } from "@mui/material";
import { skills } from "../constants";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "../App.css";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <Grid
      container
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
              <Typography variant="h4" color="primary.main">
                <TypeAnimation
                  sequence={["", 1500, "My Skills", 2000]}
                  cursor={false}
                />
              </Typography>
            </Grid>
            <Grid item xs={8} container justifyContent="center">
              {skills.map((s) => (
                <Grid item xs={2} key={s.name}>
                  <Icon className={s.class} fontSize="large" />
                  <Typography color="white">{s.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
