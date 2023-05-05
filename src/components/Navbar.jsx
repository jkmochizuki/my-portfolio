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
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
          sx={{
            bgcolor: "secondary.main",
            color: "background.default",
            "&:hover": {
              bgcolor: "secondary.dark",
            },
          }}
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
          disableScrollLock={true}
          variant="persistent"
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
              <NavHashLink to="#home" smooth style={{ textDecoration: "none" }}>
                <Typography
                  variant="subtitle1"
                  mb={{ xs: 0.5, md: 2 }}
                  sx={{
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  Home
                </Typography>
              </NavHashLink>
              <NavHashLink
                to="#skills"
                smooth
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  mb={{ xs: 0.5, md: 2 }}
                  sx={{
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  Skills
                </Typography>
              </NavHashLink>
              <NavHashLink
                to="#projects"
                smooth
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  mb={{ xs: 0.5, md: 2 }}
                  sx={{
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  Project
                </Typography>
              </NavHashLink>
              <NavHashLink
                to="#about"
                smooth
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  mb={{ xs: 0.5, md: 2 }}
                  sx={{
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  About
                </Typography>
              </NavHashLink>
              <NavHashLink
                to="#contact"
                smooth
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  mb={{ xs: 0.5, md: 2 }}
                  sx={{
                    "&:hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  Contact
                </Typography>
              </NavHashLink>
            </Box>
          </Box>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
}
