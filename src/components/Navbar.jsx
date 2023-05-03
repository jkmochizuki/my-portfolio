import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../theme/theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          p: 5,
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
              elevation: 8,
              height: "500px",
              width: "500px",
              borderBottomLeftRadius: "100%",
              marginTop: -11,
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
              sx={{ alignSelf: "flex-end", marginTop: -1, marginRight: 6, color: "white"}}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            <List sx={{ paddingLeft: 10 }}>
            <ListItem>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Skills" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </ThemeProvider>
  );
}
