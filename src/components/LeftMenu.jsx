import React from "react";
import { Box, Divider, Grid, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import "../App.css";

export default function LeftMenu() {
  return (
    <Grid
      container
      position="fixed"
      color="text.secondary"
      sx={{
        height: "40vh",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "flex-start",
      }}
      pl={{ xs: 2, md: 5 }}
      mb={{ xs: -8, md: 0 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Tooltip title="LinkedIn" placement="right">
          <LinkedInIcon
            sx={{
              fontSize: { xs: "medium", md: "x-large" },
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/jkmochizuki/", "_blank")
            }
          />
        </Tooltip>
        <br />
        <Tooltip title="GitHub" placement="right">
          <GitHubIcon
            sx={{
              fontSize: { xs: "medium", md: "x-large" },
              cursor: "pointer",
            }}
            onClick={() =>
              window.open("https://github.com/jkmochizuki", "_blank")
            }
          />
        </Tooltip>
        <br />
        <Tooltip title="Email" placement="right">
          <EmailIcon
            sx={{
              fontSize: { xs: "medium", md: "x-large" },
              cursor: "pointer",
            }}
            onClick={() => window.open("mailto:jkmochizuki@gmail.com")}
          />
        </Tooltip>
        <br />
        <Tooltip title="Resume" placement="right">
          <DescriptionIcon
            sx={{
              fontSize: { xs: "medium", md: "x-large" },
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                "https://resume.creddle.io/resume/3bkcgktacjr",
                "_blank"
              )
            }
          />
        </Tooltip>
        <br />
        <Divider
          orientation="vertical"
          color="#A0AEC0"
          sx={{ width: "0.2px", height: "25vh", alignSelf: "center" }}
        />
      </Box>
    </Grid>
  );
}
