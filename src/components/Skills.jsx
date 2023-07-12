import React from "react";
import {
  Box,
  Grid,
  Icon,
  Paper,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { skills } from "../constants";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { skillsStyles } from "../theme/styles";

export default function Skills() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: isSmallScreen ? 1 : 0.4,
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
            container
            sx={skillsStyles.container}
            className={`container ${inView ? "slide-in" : ""}`}
          >
            {/* title */}
            <Grid item xs={12} sx={skillsStyles.title}>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={["", 800, "Skills", 2000]}
                  cursor={false}
                  speed={10}
                />
              </Typography>
            </Grid>

            {/* skills */}
            <Paper elevation={4} sx={skillsStyles.paper}>
              <Grid item xs={12} container sx={skillsStyles.container}>
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
            </Paper>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
