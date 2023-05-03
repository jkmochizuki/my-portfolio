import React from "react";
import { Grid, Icon, ThemeProvider, Typography } from "@mui/material";
import { skills } from "../constants";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "../App.css";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Grid
      container
      p={{ xs: 0, md: 20 }}
      sx={{
        minHeight: "100vh",
      }}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            xs={12}
            container
            display="flex"
            justifyContent="center"
            sx={{ maxHeight: "60vh" }}
            className={`container ${inView ? "slide-in" : ""}`}
          >
            <Grid item xs={12}>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={["", 1500, "Skills", 2000]}
                  cursor={false}
                />
              </Typography>
            </Grid>
            <Grid item xs={8} container justifyContent="center">
              {skills.map((s) => (
                <Grid item xs={5} md={2} key={s.name}>
                  <Icon
                    className={s.class}
                    sx={{ fontSize: { xs: "large", md: "xxx-large" } }}
                  />
                  <Typography variant="body2" color="white">{s.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
