import React from "react";
import { Box, Grid, Icon, ThemeProvider, Typography } from "@mui/material";
import { skills } from "../constants";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { skillsStyles } from "../theme/styles";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Grid
      container
      sx={skillsStyles.root}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
      id="skills"
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            xs={12}
            container
            sx={skillsStyles.container}
            className={`container ${inView ? "slide-in" : ""}`}
          >
            {/* title */}
            <Grid item xs={12}>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={["", 1500, "Skills", 2000]}
                  cursor={false}
                />
              </Typography>
            </Grid>

            {/* skills */}
            <Grid xs={12} container sx={{ justifyContent: "center" }}>
              {skills.map((s) => (
                <Grid item xs={4} md={2.2} key={s.name}>
                  {s.name === "SQL" ||
                  s.name === "Express.js" ||
                  s.name === "Prisma" ? (
                    <Box
                      component="img"
                      sx={skillsStyles.iconImage}
                      src={s.src}
                      alt={s.name}
                    />
                  ) : (
                    <Icon className={s.class} sx={skillsStyles.icon}></Icon>
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
