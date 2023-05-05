import React from "react";
import { Box, Grid, Icon, ThemeProvider, Typography } from "@mui/material";
import { skills } from "../constants";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "../App.css";
import { Image } from "@mui/icons-material";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Grid
      container
      p={{ xs: 8, md: 20 }}
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
            sx={{ minHeight: "70vh" }}
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
            <Grid
              xs={12}
              container
              sx={{
                minHeight: "60%",
                display: "flex",
                justifyContent: "center",
                alignContent: "space-around",
              }}
            >
              {skills.map((s) => (
                <Grid item xs={4} md={2.2} key={s.name}>
                  {s.name === "SQL" ||
                  s.name === "Express.js" ||
                  s.name === "Prisma" ? (
                    <Box component="img" sx={{ height: { xs: 35, md: 70 } }} src={s.src} alt={s.name} />
                  ) : (
                    <Icon
                      className={s.class}
                      sx={{ fontSize: { xs: 35, md: 70 } }}
                    ></Icon>
                  )}
                  <Typography variant="body2">{s.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
