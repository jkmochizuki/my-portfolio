import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  const navItems = ["About", "Projects", "Contact"];

  return (
    <AppBar component="nav">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
        >
          Juliana | Full Stack Developer
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "white" }}>
              {item}
            </Button>
          ))}
          Resume
        </Box>
      </Toolbar>
    </AppBar>
  );
}
