import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Experience.css'
const Experience = () => {

    return (
        <div className="experienceSection">
          <h1 className='sectionHeader' >Work Experience</h1>
        <VerticalTimeline>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h2 className="vertical-timeline-element-title">Bot-Tender</h2>
    <h4 className="vertical-timeline-element-subtitle">Founder</h4>
    <p>
        <ul>
            <li>Developing a React.js web application using the GPT large language model and other AI technology to offer unlimited cocktail recommendations based on user prompts</li>
            <li>Rapidly iterating on functionality and UI through user feedback, achieving public deployment and acquiring 50 active users within 2 weeks </li>
            <li>Managing a Firebase NoSQL database to store user information, prompt data, and trending drinks</li>
        </ul>
      
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="August 2019 - May 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h2 className="vertical-timeline-element-title">Davidson College Graduate</h2>
    <h4 className="vertical-timeline-element-subtitle">Division I Scholar-Athlete</h4>
    <p>
        <ul>
            <li>Graduated Magna Cum Laude with a Computer Science major and Data Science minor</li>
            <li>Relevant Coursework: Machine Learning, Machine Reasoning, Deep Learning Specialization (Coursera), Data Science and Society, Analysis of Algorithms, Data Structures, Database Systems, Statistics, Linear Algebra, Blockchains, and Computer Organization</li>
            <li>Scholar athlete on the DI football team, earning starting position and 1st Team All-Academic after walking on sophomore year by dedicating 25+ hours per week to football activities, including weightlifting, film, practice, travel, and games</li>
        </ul>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June 2022 - August 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h2 className="vertical-timeline-element-title">Tryon Direct</h2>
    <h4 className="vertical-timeline-element-subtitle">Data Science Intern</h4>
    <p>
        <ul>
            <li>Queried large Snowflake databases using MySQL to access medical records data  </li>
            <li>Developed 3 production-ready Tableau analytics dashboards with key metrics in collaboration with business leaders  </li>
            <li>Designed and optimized a logistic regression ML model on very imbalanced data, achieving an ROC AUC score of .91, to accurately predict appointment no-shows based on slot and patient data</li>
        </ul>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="January 2021 - December 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h2 className="vertical-timeline-element-title">Pro Skills Basketball</h2>
    <h4 className="vertical-timeline-element-subtitle">Data Science Intern</h4>
    <p>
        <ul>
            <li>Spearheaded the creation of a Power BI dashboard, presenting key performance metrics for organization leaders and supporting expansion into 11 new cities </li>
            <li>Automated data extraction from APIs using Python scripts on Google Cloud Platform, streamlined data cleaning, and integrated with Power BI's automatic report refresh feature </li>
            <li>Fostered clear communication with company leaders, engaging in a feedback cycle to ensure the delivery of a valuable daily report</li>
        </ul>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2020 - August 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h2 className="vertical-timeline-element-title">SouthPark Produce</h2>
    <h4 className="vertical-timeline-element-subtitle">Founder</h4>
    <p>
        <ul>
            <li>Created an Instagram to provide other gardeners with gardening tips and tricks and advertise produce for sale from backyard garden </li>
            <li>Used leadership and creativity to increase followers and customers by 200% after the first week</li>
            <li>Built a Power BI dashboard to visualize total pounds of each vegetable by the day, requiring me to weigh and input data after each harvest</li>
        </ul>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline>
</div>
    )
};

export default Experience;