import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import TopHeroSection from "../../Components/TopHeroSection/TopHeroSection";
import aboume from "../../assets/aboume.webp";
import bg from "../../assets/bg.webp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ProgressBar from "../../Components/AboutMe/ProgressBar";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "5% 20px",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "100%",
      maxWidth: "1440px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexDirection: "row-reverse",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    imageContainer: {
      width: "70%",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    contentSection: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      padding: "20px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    subBoxes: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    experienceBoxes: {
      display: "flex",
      gap: "20px",
    },
    skillContainer: {
      padding: "5% 0px",
    },
  };
});

const Aboutme = () => {
  const {
    container,
    subContainer,
    contentContainer,
    imageContainer,
    contentSection,
    subBoxes,
    experienceBoxes,
    skillContainer,
  } = useStyle();
  const [contacts] = useState([
    {
      icon: <LinkedInIcon color="primary" sx={{ fontSize: "25px" }} />,
      link: "https://www.linkedin.com",
    },
    {
      icon: <TwitterIcon color="primary" sx={{ fontSize: "25px" }} />,
      link: "/",
    },
    {
      icon: <InstagramIcon color="primary" sx={{ fontSize: "25px" }} />,
      link: "/",
    },
    {
      icon: <WhatsAppIcon color="primary" sx={{ fontSize: "25px" }} />,
      link: "/",
    },
  ]);
  const [skills] = useState([
    {
      percentage: 70,
      title: "React JS",
    },
    {
      percentage: 80,
      title: "Node JS",
    },
    {
      percentage: 90,
      title: "Express JS",
    },
    {
      percentage: 100,
      title: "Wordpress",
    },
    {
      percentage: 60,
      title: "PHP",
    },
    {
      percentage: 70,
      title: "Service Sales",
    },
    {
      percentage: 80,
      title: "Project Management",
    },
    {
      percentage: 90,
      title: "Fluent French Speaker",
    },
    {
      percentage: 100,
      title: "Time management/Efficiency",
    },
    {
      percentage: 60,
      title: "Recruiting",
    },
  ]);
  return (
    <Box id={"aboutme"}>
      <Box className={container}>
        <Box className={subContainer}>
          <Box className={contentContainer}>
            <Box className={imageContainer}>
              <Box>
                <img alt="about me" src={bg} style={{ width: "100%" }} />
              </Box>
              <Box className={skillContainer}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontWeight: "bold",
                    }}
                  >
                    My Skills
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {skills?.map((skill, i) => {
                      return <ProgressBar key={i} skill={skill} />;
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={contentSection}>
              <Box>
                <Typography color={"primary"}>HELLO I'M</Typography>
                <Typography
                  variant="h3"
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  eelnimeiry
                </Typography>
                <Typography variant="h5" color={"primary"}>
                  Web Developer
                </Typography>
              </Box>
              <Box>
                <Typography color={"secondary"}>Are you aware of:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Where can I go for help?
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Whether you are ready for tax season or not?
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Who and how much do they owe you?
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  What the balances in your accounts are?
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography>
                  My name is eelnimeiry, owner/operator of eelnimeiryDevs
                  Services.
                </Typography>
                <Typography>
                  I work closely with individuals and small businesses to
                  accurately track, document, and report financial transactions.
                  BBS wants to give you a thorough understanding of your
                  company's financial situation so you can forward with purpose,
                  assurance, and profitability. Your money are built on
                  bookkeeping, and I'm passionate about paving the route for
                  your prosperous future.
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Typography
                  color={"secondary"}
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  Phone:{" "}
                  <Typography component={"span"}>+1 832 224 6963</Typography>
                </Typography>

                <Typography
                  color={"secondary"}
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  Email:{" "}
                  <Typography component={"span"}>
                    Elsadekelnimeriy@gmail.com
                  </Typography>
                </Typography>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  {contacts?.map((data) => {
                    return (
                      <Link href={data?.link} target={"_black"}>
                        {data?.icon}
                      </Link>
                    );
                  })}
                </Box>
              </Box>
              <Box className={subBoxes}>
                <Typography
                  variant="h5"
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  My Objectives
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse erat lectus, pellentesque at porttitor eu, euismod
                  id dolor. Donec sit amet mauris rutrum, sodales turpis eget,
                  consectetur purus. Nullam congue nec urna eget blandit.
                </Typography>
              </Box>

              <Box className={subBoxes}>
                <Typography
                  variant="h5"
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  My Educational Background
                </Typography>
                <Box className={experienceBoxes}>
                  <Box sx={{ padding: "20px" }}>
                    <SchoolIcon color="primary" sx={{ fontSize: "50px" }} />
                  </Box>
                  <Typography>
                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                      Clemson University - 2003
                    </Typography>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse erat lectus, pellentesque at porttitor eu,
                    euismod id dolor. Donec sit amet mauris rutrum, sodales
                    turpis eget, consectetur purus. Nullam congue nec urna eget
                    blandit.
                  </Typography>
                </Box>
                <Box className={experienceBoxes}>
                  <Box sx={{ padding: "20px" }}>
                    <SchoolIcon color="primary" sx={{ fontSize: "50px" }} />
                  </Box>
                  <Typography>
                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                      Universal Weather & Aviation 2016
                    </Typography>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse erat lectus, pellentesque at porttitor eu,
                    euismod id dolor. Donec sit amet mauris rutrum, sodales
                    turpis eget, consectetur purus. Nullam congue nec urna eget
                    blandit.
                  </Typography>
                </Box>
                <Box className={experienceBoxes}>
                  <Box sx={{ padding: "20px" }}>
                    <SchoolIcon color="primary" sx={{ fontSize: "50px" }} />
                  </Box>
                  <Typography>
                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                      QBO ProAdvisor Certification 2021
                    </Typography>{" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse erat lectus, pellentesque at porttitor eu,
                    euismod id dolor. Donec sit amet mauris rutrum, sodales
                    turpis eget, consectetur purus. Nullam congue nec urna eget
                    blandit.
                  </Typography>
                </Box>
              </Box>

              <Box className={subBoxes}>
                <Typography
                  variant="h5"
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontWeight: "bold",
                  }}
                >
                  My Experiences
                </Typography>
                <Box className={experienceBoxes}>
                  <Box sx={{ padding: "20px" }}>
                    <Diversity2Icon color="primary" sx={{ fontSize: "50px" }} />
                  </Box>
                  <Typography>
                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                      Owner - eelnimeiryDevs Services 2020-present
                    </Typography>{" "}
                    Partnering with small business clients to assist with
                    bookkeeping needs (setting up chart of accounts; tracking,
                    recording, and categorizing transactions; reconciling
                    accounts; preparing and sending financial reports)
                  </Typography>
                </Box>
                <Box className={experienceBoxes}>
                  <Box sx={{ padding: "20px" }}>
                    <Diversity2Icon color="primary" sx={{ fontSize: "50px" }} />
                  </Box>
                  <Typography>
                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                      Aviation Services World Fuel Services / Houston, TX
                      04/2018-10/2020
                    </Typography>{" "}
                    Planned and executed private aviation operations -
                    highlights:{" "}
                    <Typography>
                      • Assisted in client familiarization with company’s new
                      iPad application
                    </Typography>
                    <Typography>
                      • Assisted in updating client docs/profile info for secure
                      database storage
                    </Typography>
                    <Typography>
                      • Arranged client hotels via Amadeus and Conferma (travel
                      agency/anti-fraud payment software)
                    </Typography>
                  </Typography>
                </Box>
                <Box className={experienceBoxes}>
                  <Box sx={{ padding: "20px" }}>
                    <Diversity2Icon color="primary" sx={{ fontSize: "50px" }} />
                  </Box>
                  <Typography>
                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                      Aviation Services Universal Weather & Aviation / Houston,
                      TX 2005-2015
                    </Typography>{" "}
                    Planned and executed private aviation operations -
                    highlights:
                    <Typography>
                      • Selected to manage four high-profile client accounts
                      (2009-2015)
                    </Typography>
                    <Typography>
                      • Assisted fuel sales department in pricing margins for
                      clients (2008-2015)
                    </Typography>
                    <Typography>
                      • Worked closely with sales to assist new clients
                      (2008-2015)
                    </Typography>
                    <Typography>
                      • Selected by leadership as a top metrics performer (2012)
                    </Typography>
                    <Typography>
                      • Assisted in the all-women Dash for a Cure world record
                      flight (2008)
                    </Typography>
                    <Typography>
                      • Employee of the month (Aug 2007; December 2008)
                    </Typography>
                  </Typography>
                </Box>

                <Box className={experienceBoxes}>
                  <Box sx={{ padding: "20px" }}>
                    <Diversity2Icon color="primary" sx={{ fontSize: "50px" }} />
                  </Box>
                  <Typography>
                    <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                      Destination Counselor I.O.R. Global Services / Houston, TX
                      2003-2004
                    </Typography>{" "}
                    Expedited licensing and social security applications for
                    overseas business transfers
                    <Typography>• Secured lodging</Typography>
                    <Typography>• Arranged transportation</Typography>
                    <Typography>• Conducted orientations</Typography>
                    <Typography>• Assisted in acclimatization</Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutme;
