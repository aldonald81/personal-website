import React from 'react';

import Name from '../../containers/Name'
import About from '../../containers/About'
import Skills from '../../containers/Skills'
import Projects from '../../containers/Projects'
import Experience from '../../containers/Experience';

import './Home.css'


const Home = () => {

    return (
        <div >

            <Name phrases={["Alexander Donald", "Software Engineer", "DI Scholar Athlete"]}/>
            <About />
            <Skills /> 
            <Projects />
            <Experience />
        </div>
    )
};

export default Home;