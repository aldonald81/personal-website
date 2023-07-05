import {React, useState, useEffect} from 'react';

import './About.css'
import portrait from '../../documents/portrait.jpg'

const About = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='aboutSection'>
            <h1 className='aboutSectionHeader' style={{textAlign: 'center', marginTop: '0px'}}>About</h1>

            <div className='image'>
                <img className='imageFit' src={portrait} alt='Image of Alexander Donald' />
            </div>
            <div className='about'>
                {/* {!isMobile ? <h1 className='aboutSectionHeader' style={{textAlign: 'left', marginTop: '0px'}}>About</h1> : null} */}
                <p className='aboutText'>
                I was born and raised in Charlotte, NC and graduated Magna Cum Laude from Davidson College this past May with a Computer Science/Data Science degree. I also played on the football team, starting at punter, winning the conference 2 times, and making 3 consecutive trips to the FCS playoffs. <br/> <br/>
                My exposure to a variety of tech topics at Davidson and exploration outside of the classroom has given me a passion for solving complex and interesting problems with technology. Recently, I have enjoyed developing Bot-Tender, a full-stack AI personal bartender.<br/>   <br/>
                Away from my computer, I love working out, fishing, and gardening. My most recent achievement includes pulling up a 8.1 pound sheepshead while fishing with a jelly ball out of Pawleys Island, SC.
            
                </p>
            </div>
    {/* //         <div className="container">
    //   <div className="largeDiv">Large Div</div>
    //   <div className="smallDiv">Small Div</div>
    // </div> */}
         </div>
    )
};

export default About;