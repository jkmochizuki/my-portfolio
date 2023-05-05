import React from "react";
import { Box, Divider, Grid, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import { leftMenuStyles } from "../theme/styles";

export default function LeftMenu() {
  return (
    <Grid container sx={leftMenuStyles.root}>
      <Box sx={leftMenuStyles.section}>
        <Tooltip title="LinkedIn" placement="right">
          <LinkedInIcon
            sx={leftMenuStyles.icon}
            onClick={() =>
              window.open("https://www.linkedin.com/in/jkmochizuki/", "_blank")
            }
          />
        </Tooltip>
        <br />
        <Tooltip title="GitHub" placement="right">
          <GitHubIcon
            sx={leftMenuStyles.icon}
            onClick={() =>
              window.open("https://github.com/jkmochizuki", "_blank")
            }
          />
        </Tooltip>
        <br />
        <Tooltip title="Email" placement="right">
          <EmailIcon
            sx={leftMenuStyles.icon}
            onClick={() => window.open("mailto:jkmochizuki@gmail.com")}
          />
        </Tooltip>
        <br />
        <Tooltip title="Resume" placement="right">
          <DescriptionIcon
            sx={leftMenuStyles.icon}
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
          sx={leftMenuStyles.divider}
        />
      </Box>
    </Grid>
  );
}
