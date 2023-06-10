import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#67EBCF",
    },
    secondary: {
      main: "#67EBCF"
      // main: "#993955"
      // main: "#6A5B6E",
      // main: "#FF7477",
      // main: "#C97064",
      // main: "#FFC0CB",
      // main: "#f0a82a",
      // main: "#f06292",
    },
    warning: {
      main: "#c8b900",
    },
    success: {
      main: "#2af0ea",
    },
    text: {
      primary: "#E2E8F0",
      secondary: "#A0AEC0",
    },
    background: {
      default: "#171a26",
      light: "#1a1e2e"
    },
  },

  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h2: {
      color: "#E2E8F0",
      fontWeight: "bold",
      "@media (max-width:900px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      color: "#A0AEC0",
      fontWeight: "bold",
      "@media (max-width:900px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      color: "#2af0ea",
      fontWeight: "bold",
      fontSize: "2.2rem",
      "@media (max-width:900px)": {
        fontSize: "1.3rem",
      },
    },
    h6: {
      color: "E2E8F0",
      fontSize: "1.1rem",
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
    },
    body1: {
      color: "#A0AEC0",
      fontSize: "1.1rem",
      "@media (max-width:900px)": {
        fontSize: "0.9rem",
      },
    },
    body2: {
      color: "#E2E8F0",
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
    },
    body3: {
      color: "E2E8F0",
      fontSize: "1.0rem",
      "@media (max-width:900px)": {
        fontSize: "0.5rem",
      },
    },
  },
});
