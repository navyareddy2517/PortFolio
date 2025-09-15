import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useState, useMemo } from "react";
import { ColorModeContext } from "./theme/ColorModeContext";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />

     
        <ScrollToTop
          smooth
          color="#f29f67"
          style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        />


        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="techstack"><Techstack /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
