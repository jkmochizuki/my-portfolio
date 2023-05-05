import { Typography, Grid, ThemeProvider, Button, Stack } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} sx={{ height: "100vh" }} id="home">
        <Grid
          item
          xs={12}
          p={{ xs: 8, md: 15 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ textAlign: "left" }}
        >
          <Typography variant="body1" color="primary.main">
            Hey! My name is
          </Typography>
          <br />
          <Typography variant="h2" fontWeight="bold">
            Juliana Mochizuki.
          </Typography>
          <Typography variant="h3">I am a Full Stack Web Developer.</Typography>
          <br />
          <br />
          <Typography xs={3} variant="body1" width="55%">
            Web Developer based in Metro Vancouver with a degree in Chemical
            Engineering and background in Accounting.
          </Typography>
          <br />
          <br />

          <Stack direction="row" spacing={2}>
            <HashLink to="#contact" smooth>
              <Button
                variant="outlined"
                borderColor="primary.main"
                sx={{
                  borderRadius: 2,
                  fontSize: { xs: 10, md: 15 },
                  width: { xs: 100, md: 140 },
                }}
              >
                Contact me
              </Button>
            </HashLink>
            <Button
              variant="outlined"
              borderColor="primary.main"
              sx={{
                borderRadius: 2,
                fontSize: { xs: 10, md: 15 },
                width: { xs: 100, md: 140 },
              }}
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
