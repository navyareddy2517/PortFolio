import React from "react";
import { Grid, Card, CardContent, Typography,Button,CardActions,useTheme, CardMedia,Box} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  { title: "Weather-Dashboard",  image: "../weather-db.png",description: "Weather Dashboard App using React." ,code: "https://github.com/navyareddy2517/weather-dashboard",
   },
    { title: "AI-Interview Practice", image: "/aiinterview.png", description: "An AI-powered platform for practicing interview questions.",  code: "https://github.com/yourusername/ai-interview-practice",
   },
  { title: "JS-Quiz", image: "../JSquiz.png", description: "Java Script Quiz App .", code: "https://github.com/navyareddy2517/JS-Quiz",
  },
  { title: "GAMs", image: "../snakgame.png", description: "Online Snake Game using Frontend with React.", code: "https://github.com/navyareddy2517/GAMs",
   },
  { title: "Music-Player", image: "../Musicplayer.png", description: "Music Player using Frontend", code: "https://github.com/navyareddy2517/Music-player",
 },
  { title: "IceBerg",  image: "../iceberg.png",description: "A online Ice Cream Store ." ,code: "https://github.com/navyareddy2517/iceberg-1",
},
];


const Projects = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
  
    return (
      <Box
        sx={{
          px: { xs: 2, sm: 4 },
          py: 8,
          minHeight: "100vh",
          bgcolor: isDark ? "#0f0f0f" : "#f0f0f0",
        }}
      >
        <Typography
          variant="h4"
          mb={6}
          textAlign="center"
          sx={{
            fontWeight: "bold",
            color: isDark ? "#90caf9" : "#1976d2",
            textShadow: isDark ? "1px 1px 2px #000" : "none",
          }}
        >
           My Projects
        </Typography>
  
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 4,
                    borderRadius: 4,
                    background: isDark ? "#1e1e1e" : "#ffffff",
                    transition: "0.3s",
                    '&:hover': {
                      boxShadow: isDark ? 8 : 6,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography variant="h6">
                      {project.tech}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={isDark ? "grey.400" : "text.secondary"}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
                    <Button
                      size="medium"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.code}
                      target="_blank"
                    >
                      Code
                    </Button>
                    
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Projects;