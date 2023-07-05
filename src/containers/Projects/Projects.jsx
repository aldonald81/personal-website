import React from "react";
import Grid from "@mui/material/Grid";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiPowerbi } from 'react-icons/si';

import "./Projects.css";

import 'devicon/devicon.min.css'; // Import the devicon CSS file

import bottender from "../../documents/bot-tender.png";
import marchmadness from "../../documents/ncaa-bracket.png";
import vailcomments from "../../documents/vail-comments.png";
import garden from "../../documents/garden.png";
import mlb from "../../documents/mlb.jpg";
import kershaw from "../../documents/kershaw.png"
import athleteApp from "../../documents/athlete-app.png"

//git, website, modal for more info
const Projects = () => {
  let projects = [
    {
      image: bottender,
      name: "Bot-Tender",
      description:
        "Full-stack AI bartender providing personalized cocktail recommendations for over 100 users.",
      info: { url: "https://bot-tender.com/" },
      skills: ["react", "nodejs", "express", "css3", "firebase"],
    },
    {
      image: marchmadness,
      name: "March Madness Bracket Predictor",
      description:
        "A k-nearest neighbors approach to classify tournament teams as “x-round” caliber to predict NCAA bracket. ",
      info: {github: "https://github.com/aldonald81/march-madness-prediction"},
      skills: ["python"],
    },
    {
      image: mlb,
      name: "MLB Fantasy Baseball Team Builder",
      description:
        "Evolved a high-performance lineup within 2.5% of the budget contraint through genetic algorithms for the 2021 MLB season.",
      info: {github: "https://github.com/aldonald81/Fantasy-Baseball-Team-Builder"},
      skills: ["python"],
    },
    {
      image: vailcomments,
      name: "Vail Comments",
      description:
        "Full-stack web app allowing Davidson students to see what the dining hall is serving, favorite items, and receive email alerts.",
      info: {github: "https://github.com/aldonald81/Vail-Comments-Website"},
      skills: ["php", "html5", "css3", "mysql"],
    },
    {
      image: kershaw,
      name: "MLB Pitch Prediction",
      description: "Using ML algorithms to baseball pitch types based on the pitch's speed, spin profile, and movement.",
      info: {github: "https://github.com/aldonald81/ML-Baseball-Pitch-Predition"},
      skills: ["python"],
    },
    {
      image: athleteApp,
      name: "Athlete App",
      description: "App developed to bridge the gap between Davidson coaches and athletes, tracking metrics such as sleep, stress, soreness, etc.",
      info: {github: "https://github.com/aldonald81/Athlete-App"},
      skills: ["react", "firebase", "css3"],
    },
    {
      image: garden,
      name: "SouthPark Produce Dashboard",
      description: "Recording poundage of vegetables harvested from backyard garden and visualizing data on Power BI dashboard to analyze yield.",
      info: {url: 'https://app.powerbi.com/view?r=eyJrIjoiYjZmOWMyNmUtNTMxZi00OTE1LWJjZGEtNmU1MjQ3ZWViOWI2IiwidCI6IjM1ZDg3NjNjLWQyYjEtNDIxMy1iNjI5LWY1ZGYwYWY5ZTNjMyIsImMiOjF9'},
      skills: ["power bi", "rstudio", ],
    },
  ];
  return (
    <div className="projectsSection">
      <h1 className="sectionHeaderProjects">Projects</h1>
      <h4 className="sectionSubheader">(Click icons to visit websites, view GitHub, etc.)</h4>
      <Grid
        container
        spacing={2}
        className="grid"
        sx={{ margin: 0, display: "flex", justifyContent: "center" }}
      >
        {projects.map(({ image, name, description, info, skills }) => (
          <Grid item key={name} xs={12} sm={6} md={4} lg={3} id="gridItem">
            <Grid container direction="column" style={{ height: "100%" }}>
              <div style={{ width: "100%", height: "50%" }}>
                {/* Image */}
                <img
                  src={image}
                  alt={name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{display: 'flex', alignItems:'center'}}>
                  {/* Text */}
                  <h3>{name}</h3>
                  {info.url ? (
                    <a href={info.url} target="_blank" rel="noopener noreferrer" className='iconStyle'>
                      <LinkIcon />
                    </a>
                  ) : null}
                  {info.github ? (
                    <a href={info.github} target="_blank" rel="noopener noreferrer" className='iconStyle'>
                      <GitHubIcon />
                    </a>
                  ) : null}
                </div>
                <div>
                <p>{description}</p>

                </div>

              <div className='skillsSubsection'>
                {/* Text */}
                {skills.map((skill, index) => (
  skill === 'express' ? (
    <i className="devicon-express-original skillsIcon" key={index}></i>
  ) : skill === 'power bi' ? (
    <SiPowerbi key={index} className='skillsIcon' />
  ) : (
    <i className={`devicon-${skill}-plain skillsIcon`} key={index}></i>
  )
))}
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
