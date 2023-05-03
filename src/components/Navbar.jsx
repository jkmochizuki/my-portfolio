import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../theme/theme";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          height: {xs: "12vh", md: "16vh"},
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          p: { xs: 3, md: 6 },
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <IconButton
          sx={{ bgcolor: "secondary.main", color: "white" }}
          onClick={toggleDrawer}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer}
          PaperProps={{
            sx: {
              height: { xs: 300, md: 500 },
              width: { xs: 300, md: 500 },
              borderBottomLeftRadius: "100%",
              mt: -4,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: theme.palette.secondary.main,
              color: "white",
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
                marginTop: {xs: 1, md: -1},
                marginRight: {xs: 3, md: 6},
                color: "white",
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            <Box
              sx={{
                pl: { xs: 13, md: 20 },
              }}
            >
              <Typography variant="h5" mb={{ xs: 0.5, md: 2 }}>
                Home
              </Typography>
              <Typography variant="h5" mb={{ xs: 0.5, md: 2 }}>
                Skills
              </Typography>
              <Typography variant="h5" mb={{ xs: 0.5, md: 2 }}>
                Project
              </Typography>
              <Typography variant="h5" mb={{ xs: 0.5, md: 2 }}>
                About
              </Typography>
              <Typography variant="h5" mb={{ xs: 0.5, md: 2 }}>
                Contact
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  textTransform: "none",
                }}
              >
                <Typography variant="h6">Resume</Typography>
              </Button>
            </Box>
          </Box>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
}
