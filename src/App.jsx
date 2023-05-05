import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import Toggle from "./components/Toggle";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { theme } from "./theme/theme";
import "./App.css";

function App() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
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
