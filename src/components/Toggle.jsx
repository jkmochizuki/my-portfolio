import React from "react";
import { Box, Tooltip } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { HashLink } from "react-router-hash-link";
import { toggleStyles } from "../theme/styles";

export default function Toggle() {
  return (
    <Box sx={toggleStyles.root}>
      <HashLink to="#home" smooth style={{ textDecoration: "none" }}>
        <Tooltip title="Scroll to top">
          <ExpandCircleDownIcon sx={toggleStyles.icon} />
        </Tooltip>
      </HashLink>
    </Box>
  );
}
