import { Box, Button, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import bg from "../../assets/bg.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Fade } from "react-awesome-reveal";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      height: "90vh",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(60,60,117,1) 49%, rgba(22,41,45,1) 100%)",
    },
    subContainer: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      position: "relative",
      alignItems: "center",
    },

    contentBox: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      textAlign: "center",
    },
  };
});

const HeroSection = ({ bg }) => {
  const { container, subContainer, contentContainer, contentBox } = useStyle();
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Fade duration={1000} direction={"up"}>
            <Box className={contentBox}>
              <Box>
                <Typography
                  variant="h4"
                  color={"primary"}
                  sx={{ fontWeight: "bold" }}
                >
                  Hello,
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: (theme) => theme.palette.white.main,
                  }}
                >
                  I'm eelnimeiry
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: (theme) => theme.palette.primary.main }}
                >
                  Web Developer
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <a href="https://github.com/eelnimeiry" target="_blank">
                  <Button variant="contained">GitHub</Button>
                </a>
                <a href="https://github.com/eelnimeiry" target="_blank">
                  <Button variant="contained">Resume</Button>
                </a>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
