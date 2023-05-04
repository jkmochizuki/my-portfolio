import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../theme/theme";
import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let Link= Scroll.Link;

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          height: { xs: "12vh", md: "16vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          p: { xs: 3, md: 6 },
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <IconButton
          sx={{ bgcolor: "secondary.main", color: "background.default" }}
          onClick={toggleDrawer}
        >
          <MenuIcon sx={{ fontSize: { xs: "medium", md: "xx-large" } }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer}
          PaperProps={{
            sx: {
              height: { xs: 270, md: 450 },
              width: { xs: 270, md: 450 },
              borderBottomLeftRadius: "100%",
              mt: -4,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "secondary.main",
              color: "background.default",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{
                alignSelf: "flex-end",
                marginTop: { xs: 1, md: -1 },
                marginRight: { xs: 3, md: 6 },
                color: "background.default",
              }}
            >
              <CloseIcon sx={{ fontSize: { xs: "medium", md: "xx-large" } }} />
            </IconButton>
            <Box
              sx={{
                pl: { xs: 13, md: 20 },
              }}
            >
              <Link activeClass="active" to="#skills" spy={true} smooth={true}>
                <Typography variant="subtitle1" mb={{ xs: 0.5, md: 2 }}>
                  Home
                </Typography>
              </Link>
              <Typography variant="subtitle1" mb={{ xs: 0.5, md: 2 }}>
                Skills
              </Typography>
              <Typography variant="subtitle1" mb={{ xs: 0.5, md: 2 }}>
                Project
              </Typography>
              <Typography variant="subtitle1" mb={{ xs: 0.5, md: 2 }}>
                About
              </Typography>
              <Typography variant="subtitle1" mb={{ xs: 0.5, md: 2 }}>
                Contact
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
}
