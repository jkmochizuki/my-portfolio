import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <Box className="App">
      <Navbar sx={{ position: "absolute" }} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
