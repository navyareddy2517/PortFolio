import React, {useState} from "react";
import { Typography, Box, Avatar, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

export default function Home() {
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleDownload = () => {
    setOpenSnackbar(true);
  };
   
  return (
   
    <Box

      sx={{
        backgroundImage: 'url("/bg.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
         <Snackbar open={openSnackbar}autoHideDuration={3000}onClose={()=>setOpenSnackbar(false)}
            message="Download Started!"></Snackbar>
    
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />


      <Grid
        container
        spacing={4}
        sx={{ zIndex: 2, position: "relative", color: "white", maxWidth: 1200 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h4" gutterBottom>
              Welcome to My Portfolio
            </Typography>
            <Typography variant="h3" gutterBottom>
              This Is Navya Gujjula
            </Typography>
            <Typography variant="h5"  gutterBottom>
              I am a Full Stack Web Developer 
            </Typography>
            <Box display="flex" gap={2} justifyContent={{ xs: "center", md: "flex-start" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                href="/NAVYA GUJJULA_Resume.pdf"
                target="_blank"
                onClick={handleDownload}
              >
                Download RESUME
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<ContactMailIcon />}
                href="#contact"
              >
                 <Button onClick={()=>navigate('/contact')}>Go to Contact</Button>
                
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Avatar
              alt="Profile Image"
              src="/profileimg.jpg"
              sx={{ width: 200, height: 200, border: "2px solid white", mx: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

