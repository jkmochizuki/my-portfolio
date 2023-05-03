import { Typography, Grid, ThemeProvider, Button } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          p={{ xs: 8, md: 20 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ textAlign: "left" }}
        >
          <Typography variant="body1" color="primary.main">
            Hey! My name is
          </Typography>
          <Typography variant="h3" color="white">
            Juliana Mochizuki.
          </Typography>
          <Typography variant="h3" color="white">
            I am a Full Stack Web Developer.
          </Typography>
          <br />
          <Typography xs={3} variant="body1" color="white">
            Web Developer based in Metro Vancouver with a degree in Chemical
            Engineering and background in Accounting.
          </Typography>
          <br />
          <Grid item container xs={1} md={1.2} mt={3}>
            <Button
              variant="outlined"
              borderColor="primary.main"
              sx={{ fontSize: { xs: 8, md: 11 } }}
            >
              Contact me
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
