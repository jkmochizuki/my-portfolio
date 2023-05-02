import { Grid, Icon, Typography } from "@mui/material";
import React from "react";
import { skills } from "../constants";

export default function Skills() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        xs={12}
        container
        p={5}
        display="flex"
        justifyContent="center"
        marginBottom={5}
        sx={{ height: "60vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4">Skills</Typography>
        </Grid>
        <Grid item xs={8} container justifyContent="center">
          {skills.map((s) => (
            <Grid item xs={2} key={s.name}>
              <Icon className={s.class} fontSize="large" />
              <Typography>{s.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
