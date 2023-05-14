import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import LegalPracticeAreaCard from "../LegalPracticeAreaCard";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import InsightsIcon from "@mui/icons-material/Insights";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import GavelIcon from "@mui/icons-material/Gavel";
import Carousel from "react-grid-carousel";
const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "100%",
      maxWidth: "1440px",
      alignItems: "center",
      padding: "20px 0px",
    },
    headingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      textAlign: "center",
      width: "100%",
      maxWidth: "550px",
    },
  };
});

const LegalPracticeArea = () => {
  const { container, subContainer, headingContainer } = useStyle();
  const [cardData] = useState([
    {
      icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--5yuHmkYZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bqh7szmq6e917xfa1lod.jpg",
      title: "Templates.",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "https://d85wutc1n854v.cloudfront.net/live/products/icons/WB04858CD.jpg?v=3.1",
      title: "Samava",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "https://www.easeout.co/images/uploads/leno.jpg",
      title: "Leno",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "https://www.easeout.co/images/uploads/leon-landing.png",
      title: "Leon",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
  ]);
  return (
    <Box className={container} id={"portfolio"}>
      <Box className={subContainer}>
        <Box className={headingContainer}>
          <Typography color={"primary"} sx={{ textAlign: "center" }}>
            Portfolio
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            My Professional Work
          </Typography>
          <Typography>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Carousel
            cols={3}
            rows={1}
            gap={10}
            loop
            hideArrow={false}
            showDots={true}
            autoplay={5000}
          >
            {cardData?.map((data, i) => {
              return (
                <Carousel.Item key={i}>
                  <Box sx={{ padding: "20px" }}>
                    <LegalPracticeAreaCard data={data} />
                  </Box>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default LegalPracticeArea;
