import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2af0ea",
    },
    secondary: {
      // main: "#734B5E"
      // main: "#993955"
      // main: "#6A5B6E",
      // main: "#FF7477",
      // main: "#C97064",
      main: "#FFC0CB"
    },
    warning: {
      main: "#c8b900",
    },
    success: {
      main: "#39ff14",
    },
    text: {
      primary: "#E2E8F0",
      secondary: "#A0AEC0",
    },
    background: {
      default: "#1c1e26",
    },
  },

  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h2: {
      color: "#E2E8F0",
      "@media (max-width:900px)": {
        fontSize: "1.7rem",
      },
    },
    h3: {
      color: "#E2E8F0",
      "@media (max-width:900px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      color: "#2af0ea",
      fontWeight: "bold",
      "@media (max-width:900px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      color: "#E2E8F0",
      "@media (max-width:900px)": {
        fontSize: "0.8rem",
      },
    },
    h6: {
      color: "#2af0ea",
      fontWeight: "bold",
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
    },
    subtitle1: {
      color: "#1c1e26",
      fontSize: "1.3rem",
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
    },
    subtitle2: {
      color: "#1c1e26",
      fontSize: "1.2rem",
      "@media (max-width:900px)": {
        fontSize: "0.5rem",
      },
    },
    body1: {
      color: "#A0AEC0",
      "@media (max-width:900px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      color: "#E2E8F0",
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
    },
  },
});
