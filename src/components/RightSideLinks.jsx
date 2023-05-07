import React from "react";
import { Divider, Grid, Stack, Tooltip, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import { rightSideLinksStyles } from "../theme/styles";

export default function RightSideLinks() {
  return (
    <Grid container sx={rightSideLinksStyles.root}>
      <Stack direction="column" spacing={1}>
        <Typography sx={rightSideLinksStyles.text}>
          Stay&nbsp;Connected
        </Typography>
        <Divider
          orientation="vertical"
          color="#A0AEC0"
          sx={rightSideLinksStyles.divider}
        />
        <Tooltip title="LinkedIn" placement="left">
          <LinkedInIcon
            sx={rightSideLinksStyles.icon}
            onClick={() =>
              window.open("https://www.linkedin.com/in/jkmochizuki/", "_blank")
            }
          />
        </Tooltip>
        <Tooltip title="GitHub" placement="left">
          <GitHubIcon
            sx={rightSideLinksStyles.icon}
            onClick={() =>
              window.open("https://github.com/jkmochizuki", "_blank")
            }
          />
        </Tooltip>
        <Tooltip title="Email" placement="left">
          <EmailIcon
            sx={rightSideLinksStyles.icon}
            onClick={() => window.open("mailto:jkmochizuki@gmail.com")}
          />
        </Tooltip>
        <Tooltip title="Resume" placement="left">
          <DescriptionIcon
            sx={rightSideLinksStyles.icon}
            onClick={() =>
              window.open(
                "https://resume.creddle.io/resume/3bkcgktacjr",
                "_blank"
              )
            }
          />
        </Tooltip>
      </Stack>
    </Grid>
  );
}
