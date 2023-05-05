import "./App.css";
import Navbar from "./components/Navbar";
import { Box, ThemeProvider, Tooltip } from "@mui/material";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { theme } from "./theme/theme";
import Home from "./components/Home";
import LeftMenu from "./components/LeftMenu";
import { BrowserRouter } from "react-router-dom";
import Toggle from "./components/Toggle";
import { useEffect, useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box className="App" bgcolor="background.default">
          <Navbar />
          <LeftMenu />
          {!isHome && <Toggle />}
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
