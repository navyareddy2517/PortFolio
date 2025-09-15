import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ThemeToggle from "../theme/ThemeToggle";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          My Portfolio
        </Typography>

        <Box sx={{ flexGrow: 1, ml: 4 }}>
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#education">Educations</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#techstack">Techstack</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>

        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
