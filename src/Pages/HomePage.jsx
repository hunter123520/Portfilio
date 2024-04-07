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
import book from "../Images/book.png";
import privateschool from "../Images/privateschool.png";
import comp from "../Images/Comp.png";
import systemexpert from "../Images/systemexpert.png";
import b1 from "../Images/blender/b1.png";
import b2 from "../Images/blender/b2.png";
import b3 from "../Images/blender/b3.png";
import b4 from "../Images/blender/b4.png";
import b5 from "../Images/blender/b5.png";
import GlassCop from "../Images/blender/GlassCop4.png";
import LargeSpoon from "../Images/blender/LargeSpoon.png";
import fork from "../Images/blender/Fork1.png";
import knife from "../Images/blender/Knife3.png";
import M9la from "../Images/blender/M9la.png";
import Tbsi2 from "../Images/blender/Tbsi2.png";
import Spoon1 from "../Images/blender/Spoon1.png";
import Sinia from "../Images/blender/Sinia.png";
import Bed1 from "../Images/blender/Bed1.png";
import Bed4 from "../Images/blender/Bed4.png";
import Carpet from "../Images/blender/Carpet.png";
import CoffCup5 from "../Images/blender/CoffCup5.png";
import CofferGlass2 from "../Images/blender/CofferGlass2.png";
import Drawer4 from "../Images/blender/Drawer4.png";
import FirstSceneTea from "../Images/blender/FirstSceneTea.png";
import Kas1 from "../Images/blender/Kas1.png";
import Korsy from "../Images/blender/Korsy.png";
import Lamp9 from "../Images/blender/Lamp9.png";
import Lamp10 from "../Images/blender/Lamp10.png";
import Mond from "../Images/blender/Mond.png";
import photocadre from "../Images/blender/photocadre.png";
import Piano2 from "../Images/blender/Piano2.png";
import s1 from "../Images/blender/s1.png";
import Sa7n1 from "../Images/blender/Sa7n1.png";
import untitled7 from "../Images/blender/untitled7.png";
import Wall1 from "../Images/blender/Wall1.png";
import Wall2 from "../Images/blender/Wall2.png";
import Taj2 from "../Images/blender/Taj2.png";
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

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={book}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Book Store
                      </span>
                      <span className='projectdesc'>
                      This was one of my previous projects at university. It is a website for displaying and purchasing books. I worked on this project with my university colleague, who was responsible for managing the database, and I did the rest of the work related to the main interface.
                      </span>
                      <span className='projectuse'>
                      HTML, CSS, JS, PHP
                      </span>
                      <Button variant='contained' href="http://bookstoredaw.infinityfreeapp.com/index.php" target="_blank">
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

            <div style={{height:"25px"}}></div>

            <Container id="desktop" className='d-flex flex-column align-items-center justify-content-start  flex-wrap desktop' style={{gap:"25px"}}>
              <span className='start'>
                Desktop projects
                </span>


                <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={privateschool}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Private School Manager
                      </span>
                      <span className='projectdesc'>
                      
                      This was my and my colleague's graduation project in the bachelor's degree. We created this program that allows you to manage a private school with all its needs, from teachers and students to program management. This program contains many details and cases, which makes it one of the biggest projects I have ever completed.
                      </span>
                      <span className='projectuse'>
                      JAVAFX, CSS
                      </span>
                      
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={systemexpert}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      System Expert Manager
                      </span>
                      <span className='projectdesc'>
                      This was one of the most enjoyable programs to create, and it was our first step towards artificial intelligence. This program allows you to create an intelligent system, with the ability to write new elements and laws, which allows the intelligent system to deal with inputs in various ways.
                      </span>
                      <span className='projectuse'>
                      JAVAFX, CSS
                      </span>
                  </div>
               </div>
                

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <img src={comp}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                      Simple Compilation System
                      </span>
                      <span className='projectdesc'>
                      This was one of the programs that was completed in university, in which we learned how the computer deals with programming commands. We implemented a simple simulation of it with mathematical operations. This is considered one of my first actual programs, in which I learned design. </span>
                      <span className='projectuse'>
                      JAVAFX, CSS
                      </span>
                      
                  </div>
               </div>

            </Container>


            <Container id="blender" className='d-flex flex-column align-items-center justify-content-start  flex-wrap blender' style={{gap:"25px"}}>
              <span className='start'>
                Blender projects
                </span>
              <div className=' justify-content-center blendparent' style={{gap:"25px",width:"100%"}}>
                <div className='imgholder' ><img src={b1}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"3",gridRow:"1/3"}}><img src={Wall1}  alt="" className='blendimg'/></div>
                <div className='imgholder' style={{gridColumn:"1/2"}}><img src={GlassCop}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"1",gridRow:"3/5"}}><img src={LargeSpoon}  alt="" className='blendimg'/></div>
                <div className='imgholder' style={{gridColumn:"2/4",gridRow:"3"}}><img src={b3}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={M9la}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={knife}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Tbsi2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Spoon1}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"1/4",gridRow:"5/7"}}><img src={b2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Sinia}  alt="" className='blendimg'/></div>
                <div className='imgholder '><img src={Bed1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={CoffCup5}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={CofferGlass2}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"3",gridRow:"9/11"}}><img src={s1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Mond}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Kas1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Korsy}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={fork}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Lamp9}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Sa7n1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Wall2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={untitled7}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={b4}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={photocadre}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={FirstSceneTea}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Bed4}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Carpet}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Piano2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={b5}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Drawer4}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Lamp10}  alt="" className='blendimg'/></div>
                <div className='imgholder'><img src={Taj2}  alt="" className='blendimg'/></div>
                

              </div>
            </Container>

            <div style={{height:"25px"}}></div>
            <div id="blender" className='d-flex flex-column align-items-center justify-content-start  flex-wrap colored p-5' >
              <span className='start' style={{color:"white"}}>
              Let's turn your dreams and ideas into reality
                </span>
                <a className='but' href='#'>Lets talk</a>
                <div className='butline'></div>
            </div>
        </>
    );
}

export default HomePage