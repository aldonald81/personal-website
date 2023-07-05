import {React, useState, useEffect} from 'react';

import { TypeAnimation } from 'react-type-animation';
import DownloadIcon from '@mui/icons-material/Download';


import resume from '../../documents/Alexander Donald Resume.pdf'
import './Name.css'
const Name = ({phrases}) => {


      
    return (
        <div className='sectionOne'>
           

           <div>
           <h1>Alexander Donald</h1>

           </div>
                {/* <button onClick={handleDownload}>Download</button> */}
            <div>
            <TypeAnimation
        sequence={[
            "Davidson College Graduate",
            1000,
            "Data Scientist",
            1000,
            "Problem Solver",
            1000,
          "Former DI Athlete",
          1000,
          "Software Engineer",
          1000,
          "Entrepreneur",
          1000, 
          
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
      </div>
      <div>
      <a
                    href={resume}
                    download="Alexander Donald Resume"
                    target="_blank"
                    rel="noreferrer"
                    style={{display: 'flex', justifyContent: 'center', width: '200px', textDecoration: 'none', marginTop: '40px'}}
                >
                    <button className='resumeButton'>Current resume <DownloadIcon /></button>
                </a>
 
                </div>
            
            </div>
                

            
    )
};

export default Name;