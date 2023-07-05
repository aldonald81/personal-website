import React from 'react';

import 'devicon/devicon.min.css'; // Import the devicon CSS file

import './Skills.css'

const Skills = () => {

    return (
        <div className='skillsSection'>
            <h1 className='sectionHeader'>Skills</h1>
    
        <div className='skills'>

            <div className='skill'>
                <i className="devicon-python-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>Python</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-rstudio-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>RStudio</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-react-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>React</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-java-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>Java</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-mysql-plain">
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>MySQL</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-html5-plain">
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>HTML</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-css3-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>CSS</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-javascript-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>JavaScript</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-firebase-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>Firebase</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-nodejs-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>Node.js</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-express-original" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>Express</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-php-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>PHP</p>
                </i>
            </div>
            <div className='skill'>
                <i className="devicon-googlecloud-plain" >
                <p  style={{ fontSize: '30%', marginTop: '4px' }}>Google Cloud</p>
                </i>
            </div>
                
        </div>
        </div>
    
    )
};

export default Skills;