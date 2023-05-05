import React from "react";
import { Box, Tooltip } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "../App.css";
import { HashLink } from "react-router-hash-link";

export default function Toggle() {
  return (
    <Box position="fixed" bottom={0} right={0} p={{ xs: 3, md: 10 }}>
      <HashLink to="#home" smooth>
        <Tooltip title="Scroll to top">
          <ExpandCircleDownIcon
            className="circle-icon"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "medium", md: "xx-large" },
            }}
          />
        </Tooltip>
      </HashLink>
    </Box>
  );
}
