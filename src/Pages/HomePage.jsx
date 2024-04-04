import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";
import { Link } from 'react-router-dom'
import React from 'react';
import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
  } from "react-particle-image";
import { Button ,Avatar} from '@mui/material';
import img from "../Images/Sellami.jpg";
import me from "../Images/me.png";
import pythonimg from "../Images/python.png";
import reactimg from "../Images/react.png";
import htmlimg from "../Images/html.png";
import cssimg from "../Images/css.png";
import jsimg from "../Images/js.png";
import blenderimg from "../Images/blender.png";
import figmaimg from "../Images/figma.png";
import cimg from "../Images/c.png";
import javaimg from "../Images/java.png";
import flaskimg from "../Images/flask.png";
import algebra from "../Images/algebradark.png";
import stringimg from "../Images/StringDark2.png";
import garbage from "../Images/garbagewhite.png";
import buss from "../Images/buss.png";
import roll from "../Images/roll.png";
import loginimg from "../Images/login.png";
import timetable from "../Images/timetable.png";
import signin from "../Images/signin.png";
// const particleOptions = {
//     filter: ({ x, y, image }) => {
//       // Get pixel
//       const pixel = image.get(x, y);

//       return (pixel.b > 100 && pixel.g > 100);
//     },
//     color: ({ x, y, image }) => "#dae0e8"
//   };
const particleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      return (pixel.b > 100 && pixel.g > 100);
    },
    color: ({ x, y, image }) => "#dae0e8",
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    
  };
const motionForce = (x, y) => {
    return forces.disturbance(x, y, 5);
  };
function HomePage() {

    return (
        <>
            <Container  className='d-flex flex-row justify-content-around h-100 introContainer'>
                <div className='d-flex align-items-start para w-25'>
                Welcome! I'm Sellami Mohammed Abdelhadi, a programmer with a passion for building creative IT solutions. Explore my portfolio to see how I can help turn your vision into reality.
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-50'>
                    <span>Informatiques</span>
                    <span className='main squeeze'>Creations</span>
                </div>
                <div className='d-flex align-items-end para w-25'>
                Unlock the potential of your data and unleash the power of AI. I offer a comprehensive suite of services designed to empower your business such as Data Analysis, AI Solutions, Website Creation.
                </div>
                <div className='imgHolder'>
                    <ParticleImage
                    src={img}
                    scale={1}
                    entropy={20}
                    maxParticles={4200}
                    particleOptions={particleOptions}
                    mouseMoveForce={motionForce}
                    touchMoveForce={motionForce}
                    backgroundColor="transparent"
                    />
                </div>
            </Container>
            
            <Container  className='d-flex flex-column justify-content-around  '>
            <div className="d-flex flex-row justify-content-center align-items-center p-2 Panle">
              <Button onClick={() => window.location.replace("/Home#aboutme")}>
                About me
              </Button>
              <Button onClick={() => window.location.replace("/Home#hard")}>
                Hard Skills
              </Button>
              <Button onClick={() => window.location.replace("/Home#soft")}>
                Soft Skills
              </Button>
              <Button
                onClick={() => window.location.replace("/About#ShareKnowledge")}
              >
                share your knowledge
              </Button>
              <Button
                onClick={() => window.location.replace("/About#Thanks")}
              >
                FeedBack Special Thanks
              </Button>
              
            </div>
            <div className='bs'></div>
            </Container>
            <Container id="aboutme" className='d-flex flex-row justify-content-between align-items-center h-50 aboutme'>
              <Avatar
              alt="me"
              src={me}
              sx={{ width: 250, height: 250 }}
              />
              <div className='d-flex flex-column justify-content-center flex-fill'>
                <span className='start'>
                Sellami Mohammed Abdelhadi
                </span>
                <span className='end'>
                AI and Data Analysis Enthusiast (Final Year) - University of Kasdi Merbah Ouargla, adept at solving complex programming problems with proficiency in various languages. Experienced in web development, with a some foundation for mobile and desktop application programming. Eager to leverage my AI and data analysis knowledge to tackle real-world challenges.
                </span>
              </div>
            </Container>

            <Container id="hard" className='d-flex flex-column align-items-center justify-content-start h-50 flex-wrap hard w-100' style={{gap:"25px"}}>
            <span className='start'>
                Hard Skills
                </span>
                <div className='d-flex flex-row' style={{gap:"10px"}}>
                <img alt="python" src={pythonimg} className='hardimg'/>
                <img alt="react" src={reactimg} className='hardimg'/>
                <img alt="html" src={htmlimg} className='hardimg'/>
                <img alt="css" src={cssimg} className='hardimg'/>
                <img alt="js" src={jsimg} className='hardimg'/>
                <img alt="blender" src={blenderimg} className='hardimg'/>
                <img alt="c" src={cimg} className='hardimg'/>
                <img alt="figma" src={figmaimg} className='hardimg'/>
                <img alt="java" src={javaimg} className='hardimg'/>
                <img alt="flask" src={flaskimg} className='hardimg'/>
                </div>
            </Container>

            <Container id="soft" className='d-flex flex-column align-items-center justify-content-start h-50 flex-wrap soft' style={{gap:"25px"}}>
            <span className='start'>
                Soft Skills
                </span>
                <div className='d-flex flex-row' style={{gap:"25px"}}>
                  <span className='el'> Effective communication </span>
                  <span className='el'> Team Work </span>
                  <span className='el'> Fast Learning </span>
                  <span className='el'> Time management </span>
                </div>
            </Container>
            

            <Container id="web" className='d-flex flex-column align-items-center justify-content-start  flex-wrap web' style={{gap:"25px"}}>
              <span className='start'>
                Websites projects
                </span>
               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={algebra}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Easy Algebra
                      </span>
                      <span className='projectdesc'>
                      This project was an exciting project that involved teamwork between myself and my team from the University of Kasdi Merbah Ouargla. I was the main programmer for the website, while the rest of the team took care of its internal operations. This website includes important mathematical functions for researchers and students with step by step solutions.
                      </span>
                      <span className='projectuse'>
                      REACT, CSS, FLASK
                      </span>
                      <Button variant='contained' href="https://easy-algebra.onrender.com/" target="_blank">
                        Live Website
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={stringimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      String Operations
                      </span>
                      <span className='projectdesc'>
                      This website is a practical solution for the Natural Language Processing (NLP) course that I created in collaboration with my university colleague. I designed and developed the website's user interface, while my colleague developed the internal functions. The website contains many different tools for processing texts and files
                      </span>
                      <span className='projectuse'>
                      REACT, CSS, FLASK
                      </span>
                      <Button variant='contained' href="https://string-operations.onrender.com/" target="_blank">
                        Live Website
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={garbage}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Smart Recycle
                      </span>
                      <span className='projectdesc'>
                      This work, like my other works, was the result of a team effort with my university colleagues. While I was responsible for creating the website, my colleagues were responsible for the rest of the internal work. We created this website to participate in the GAIA 2024 Hackathon, which was a fun and unique event to share our different experiences. We created this website that allows you to identify different types of waste and provides instructions on how to recycle them.
                      </span>
                      <span className='projectuse'>
                      REACT, CSS, FLASK
                      </span>
                      <Button variant='contained' href="https://smart-recycle.onrender.com/Home" target="_blank">
                        Live Website
                      </Button>
                  </div>
               </div>
            </Container>

            <div style={{height:"25px"}}></div>

            <Container id="design" className='d-flex flex-column align-items-center justify-content-start  flex-wrap design' style={{gap:"25px"}}>
              <span className='start'>
                Design projects
                </span>
                <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={buss}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Buss Application
                      </span>
                      <span className='projectdesc'>
                      This is a complete mobile application design for Fateni El-Bus, a student lifesaver!
                      Fateni El-Bus helps university students stay ahead of schedule by providing real-time bus arrival times, locations, and everything a student needs in one app - from the main landing page to the most detailed settings.
                      </span>
                      <span className='projectuse'>
                      Figma
                      </span>
                      <Button variant='contained' href="https://www.youtube.com/watch?v=KcxxsjpKv7Q" target="_blank">
                        Promotional video
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={roll}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Rolling wheel
                      </span>
                      <span className='projectdesc'>
                      This is a design for a spinning wheel application. I was learning mobile app programming and at the same time I wanted to learn design, so I created this simple application that can use the spinning wheel, keep the results, and change the colors of the wheel as needed.
                      </span>
                      <span className='projectuse'>
                      Figma
                      </span>
                      <Button variant='contained' href="https://www.figma.com/file/Aqds9dJ2Qm7sFe2s6f0HvV/Untitled?type=design&mode=design&t=NgE1mFIti0a1KPrh-1" target="_blank">
                        Live Preview
                      </Button>
                      
                  </div>
               </div>


               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={loginimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      School Login
                      </span>
                      <span className='projectdesc'>
                      I was asked to design a login and sign-up interface for a school website that was entered into a programming competition by some of my university colleagues. I put a lot of effort into making it look clean, beautiful, and suitable for the style they needed.
                      </span>
                      <span className='projectuse'>
                      Figma
                      </span>
                      <Button variant='contained' href="https://www.figma.com/file/3ILpdjQFOl0BteJw4gQp5U/Untitled?type=design&node-id=0%3A1&mode=design&t=NgE1mFIti0a1KPrh-1" target="_blank">
                      Live Preview
                      </Button>
                  </div>
               </div>


               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={timetable}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      School Time Management
                      </span>
                      <span className='projectdesc'>
                      This was one of my old attempts to create a design for an application to manage the schedules and times of private schools. The application was supposed to be converted into a website, but there was not enough time for that.
                      </span>
                      <span className='projectuse'>
                      Figma
                      </span>
                      <Button variant='contained' href="https://www.figma.com/file/6c4ADJmQaTqKIw5xiQ1JFs/Time-Table?type=design&node-id=0%3A1&mode=design&t=o9IV42czl5k2k7c3-1" target="_blank">
                        Live Preview
                      </Button>
                      
                  </div>
               </div>


               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={signin}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Signin / Signup Pages
                      </span>
                      <span className='projectdesc'>
                      This is a quick design I did earlier for a login and logout page, where I was learning ways to incorporate whitespace and simplicity in design.
                      </span>
                      <span className='projectuse'>
                      Figma
                      </span>
                      <Button variant='contained' href="https://www.figma.com/file/6c4ADJmQaTqKIw5xiQ1JFs/Time-Table?type=design&node-id=0%3A1&mode=design&t=o9IV42czl5k2k7c3-1" target="_blank">
                      Live Preview
                      </Button>
                  </div>
               </div>
            </Container>


            <Container id="desktop" className='d-flex flex-column align-items-center justify-content-start  flex-wrap desktop' style={{gap:"25px"}}>
              <span className='start'>
                Desktop projects
                </span>
            </Container>
        </>
    );
}

export default HomePage