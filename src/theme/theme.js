import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2af0ea",
    },
    secondary: {
      main: "#b8336a",
      mainOpacity: "rgba(184, 51, 106, 0.9)",
    },
    warning: {
      main: "#c8b900",
    },
    success: {
      main: "#39ff14",
    },
    text: {
      primary: "#ffffff",
      secondary: "#2f323d",
      disabled: "#444a59",
      hint: "#b7c0cc",
    },
    background: {
      default: "#1c1e26",
    },
  },

  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h3: {
      color: "#ffffff",
      "@media (max-width:900px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      color: "#2af0ea",
      "@media (max-width:900px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      color: "#ffffff",
      "@media (max-width:900px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      color: "#ffffff",
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
    },
    body1: {
      color: "#ffffff",
      "@media (max-width:900px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      color: "#ffffff",
      "@media (max-width:900px)": {
        fontSize: "0.7rem",
      },
    },
  },
});
