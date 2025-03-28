import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";
import React from 'react';
import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
  } from "react-particle-image";
import { Button ,Avatar} from '@mui/material';
import img1 from "../Images/Sellami.jpg";
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
import latex from "../Images/latex.png";
import numpy from "../Images/numpy.png";
import pytorch from "../Images/pytorch.png";
import pandas from "../Images/pandas.png";
import scikit from "../Images/scikit.png";
import matplotlib from "../Images/matplotlib.png";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import CV from "../Pdfs/CV.pdf";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import pureimg from "../Images/pureenergy.png"
import cyberimg from "../Images/CyberBull.png"
import intrimg from "../Images/intr.jpg"
import corrimg from "../Images/corr.png"
import earimg from "../Images/ear.png"
import medimg from "../Images/med.jpg"
import babyimg from "../Images/baby.jpg"
import frimg from "../Images/fr.png"
import egimg from "../Images/eg.jpg"
import arimg from "../Images/ar.png"
import gsimg from "../Images/gs.jpg"
import twimg from "../Images/tw.png"
import fcimg from "../Images/fc.jpg"
import indimg from "../Images/ind.jpg"
import restimg from "../Images/rest.png"
import itimg from "../Images/it.png"
import mlrimg from "../Images/mlr.jpg"
import Img from 'react-optimized-image';
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
            <Container  className='d-flex flex-row justify-content-around introContainer'>
                <div className='d-flex align-items-start para w-25'>
                Welcome! I'm Sellami Mohammed Abdelhadi, a programmer with a passion for building creative IT solutions. Explore my portfolio to see how I can help turn your vision into reality.
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-50'>
                    <span>Your Vision,</span>
                    <span className='main squeeze'> My Code</span>
                </div>
                <div className='d-flex flex-column align-items-start justify-content-end para w-25'>
                Unlock the potential of your data and unleash the power of AI. I offer a comprehensive suite of services designed to empower your business such as Data Analysis, AI Solutions, Website Creation.
                <Link to={"/Contact"}>
                <a className='but'>Lets talk</a>
                </Link>
                <div className='butline'></div>
                </div>

                <div className='imgHolder'>
                    <ParticleImage
                    src={img1}
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
            <div className="d-flex flex-row justify-content-center align-items-center p-2 Panle flex-wrap">
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
                onClick={() => window.location.replace("/Home#web")}
              >
                Websites
              </Button>
              <Button
                onClick={() => window.location.replace("/Home#design")}
              >
                Designs
              </Button>
              <Button
                onClick={() => window.location.replace("/Home#desktop")}
              >
                Desktop
              </Button>
              <Button
                onClick={() => window.location.replace("/Home#blender")}
              >
                Blender
              </Button>
              
            </div>
            <div className='bs'></div>
            </Container>
            <Container id="aboutme" className='d-flex flex-row mb-5 mt-4 justify-content-between align-items-center aboutme' style={{height:"fit-content"}}>
              <Avatar
              alt="me"
              src={me}
              sx={{ width: 250, height: 250 }}
              />
              {/* <Img
              // src={me}
              src = {me}
              /> */}
              <div className='d-flex flex-column justify-content-center flex-fill'>
                <span className='start'>
                Sellami Mohammed Abdelhadi
                </span>
                <span className='end'>
                Recent Graduate in AI and Data Analysis from the University of Kasdi Merbah Ouargla, adept at solving complex programming problems with proficiency in various languages. Experienced in web development, with a some foundation for mobile and desktop application programming. Eager to leverage my AI and data analysis knowledge to tackle real-world challenges.
                </span>
                <div className='d-flex' style={{gap:"5px"}}>
                <Button className='cvbtn mt-4' variant="contained" startIcon={<LinkedInIcon />} href='https://www.linkedin.com/in/mohammed-abdelhadi-sellami-241880209/'>
                LinkedIn
              </Button>
                <Button className='cvbtn mt-4' variant="contained" startIcon={<GitHubIcon />} href='https://github.com/hunter123520'>
                Github
              </Button>
              <Button className='cvbtn mt-4' variant="contained" startIcon={<FacebookIcon />} href='https://www.facebook.com/profile.php?id=100012502147526'>
                Facebook
              </Button>
                <Button className='cvbtn mt-4' variant="contained" href={CV} download={"Sellami-CV"} target="_blank" rel="noreferrer" > Download my CV</Button>
              
                </div>
                </div>
            </Container>

            <Container id="hard" className='d-flex flex-column align-items-center justify-content-start mb-5 hard w-100' style={{gap:"25px", height:"fit-content"}}>
            <span className='start'>
                Hard Skills
                </span>
                <div className='d-flex flex-row flex-wrap align-items-center justify-content-center w-100' style={{gap:"10px"}}>
                <Img alt="python" src={pythonimg} className='hardimg'/>
                <Img alt="react" src={reactimg} className='hardimg'/>
                <Img alt="html" src={htmlimg} className='hardimg'/>
                <Img alt="css" src={cssimg} className='hardimg'/>
                <Img alt="js" src={jsimg} className='hardimg'/>
                <Img alt="blender" src={blenderimg} className='hardimg'/>
                <Img alt="c" src={cimg} className='hardimg'/>
                <Img alt="figma" src={figmaimg} className='hardimg'/>
                <Img alt="java" src={javaimg} className='hardimg'/>
                <Img alt="flask" src={flaskimg} className='hardimg'/>
                <Img alt="latex" src={latex} className='hardimg'/>
                <Img alt="numpy" src={numpy} className='hardimg'/>
                <Img alt="pytorch" src={pytorch} className='hardimg'/>
                <Img alt="pandas" src={pandas} className='hardimg'/>
                <Img alt="matplotlib" src={matplotlib} className='hardimg'/>
                <Img alt="scikit" src={scikit} className='hardimg'/>
                </div>
            </Container>

            <Container id="soft" className='d-flex flex-column align-items-center justify-content-start mb-5 pb-5 flex-wrap soft' style={{gap:"25px",height:"fit-content"}}>
            <span className='start'>
                Soft Skills
                </span>
                <div className='d-flex flex-row flex-wrap w-100 align-items-center justify-content-center' style={{gap:"25px"}}>
                  <span className='el'> Effective communication </span>
                  <span className='el'> Team Work </span>
                  <span className='el'> Fast Learning </span>
                  <span className='el'> Time management </span>
                </div>
            </Container>

            <Container id="web" className='d-flex flex-column align-items-center justify-content-start  flex-wrap web' style={{gap:"25px"}}>
              <span className='start'>
                AI projects
                </span>

                <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={mlrimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Malaria Classification using Federated Learning
                      </span>
                      <span className='projectdesc'>
                      This project proposes a privacy-preserving malaria detection system using Federated Learning with Pretrained models and ensemble learning. The system trains a global model on distributed data without sharing sensitive information, enhancing security and privacy.
                      </span>
                      <span className='projectuse'>
                      Python, Pytorch, Flower
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Malaria-Classification-using-Federated-Learning" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={cyberimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Cyberbullying Detection
                      </span>
                      <span className='projectdesc'>
                      This project enhances cyberbullying detection by combining 1D Convolutional Neural Networks (CNNs) and Bidirectional Encoder Representations from Transformers (BERT) with a sliding window bigram preprocessing technique.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow, NLTK
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Cyber-Bullying-Detection" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={intrimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Intrusion Detection using Federated Learning
                      </span>
                      <span className='projectdesc'>
                      This project proposes a privacy-preserving intrusion detection system using Federated Learning with CNNs and random resampling. The system trains a global model on distributed data without sharing sensitive information, enhancing security and privacy.
                      </span>
                      <span className='projectuse'>
                      Python, Pytorch, Flower
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Federated-Intrusion-Detection" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={corrimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Corrosion Deffect Detection
                      </span>
                      <span className='projectdesc'>
                      This project explores the use of lightweight 1D CNNs for corrosion defect detection in materials. By leveraging the efficiency and accuracy of these models, the goal is to develop a practical solution for early detection and prevention of corrosion-related damage.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Corrosion-Deffect-Detection" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={earimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Ear Recognition
                      </span>
                      <span className='projectdesc'>
                      This project addresses the challenges of the AWE dataset for ear recognition by proposing a two-phase learning approach using VGG16. The first phase involves pre-training on a large dataset, followed by fine-tuning on the AWE dataset. This approach aims to improve the accuracy and robustness of ear recognition systems.
                      </span>
                      <span className='projectuse'>
                      Python, Pytorch
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Ear-Recognition" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={medimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Medical Cost Prediction
                      </span>
                      <span className='projectdesc'>
                      This project focuses on developing highly accurate medical cost prediction models using deep learning, specifically Multi-Layer Perceptrons (MLPs). By leveraging the power of deep learning, the goal is to create robust models that can accurately predict medical costs, aiding in financial planning and resource allocation.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Medical-Cost-Prediction" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={babyimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Baby Crying Classification
                      </span>
                      <span className='projectdesc'>
                      This project explores the use of deep learning to classify infant cries based on their underlying needs, such as hunger, pain, or tiredness. By analyzing audio signals, the goal is to develop a system that can accurately interpret infant cries, providing valuable insights for caregivers.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Baby-Crying-Classification" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={frimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Fruit Ripeness Detection
                      </span>
                      <span className='projectdesc'>
                      This project addresses the challenge of accurately detecting the ripeness of fruits and vegetables using deep learning techniques. By analyzing visual features such as color, texture, and shape, the goal is to develop a system that can reliably assess ripeness, improving food quality and reducing waste.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Ripeness-Detection" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={egimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        English Sign Language Detection
                      </span>
                      <span className='projectdesc'>
                      This project focuses on developing deep learning models to accurately recognize hand gestures and sign language, specifically for English alphabets. By analyzing video or image data, the goal is to create systems that can interpret hand movements and translate them into text, enabling communication for individuals with hearing impairments or language barriers.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/English-Sign-Language-Detection" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>


               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={arimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                       Arabic Gesture Prediction
                      </span>
                      <span className='projectdesc'>
                      This project aims to develop deep learning models capable of recognizing Arabic hand gestures and sign language. By analyzing video or image data of hand movements, the goal is to create systems that can accurately interpret and translate Arabic sign language into text, improving communication for individuals with hearing impairments or language barriers.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Arabic-Gesture-Prediction" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={gsimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Gestational Diabetes Classification using Federated Learning
                      </span>
                      <span className='projectdesc'>
                      This project explores the use of Federated Learning for diabetes classification, ensuring privacy by training a model on distributed data without sharing sensitive patient information. By collaboratively learning from multiple institutions, the goal is to improve the accuracy and efficiency of diabetes diagnosis while safeguarding patient privacy.  </span>
                      <span className='projectuse'>
                      Python, Pytorch, Flower
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Gestational-Diabetes-Classification-using-Federated-Learning" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={twimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Tweets Classification
                      </span>
                      <span className='projectdesc'>
                      This project involves developing a deep learning model to classify tweets into different categories, such as positive, negative, or neutral sentiment, or specific topics like politics, sports, or technology. This can be achieved by leveraging techniques like text preprocessing, feature extraction, and advanced neural network architectures like BERT or LSTM.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow, NLTK
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Tweets-Classification" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={fcimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Fake News Classification
                      </span>
                      <span className='projectdesc'>
                      This project focuses on developing a deep learning model to classify news articles as either real or fake. By analyzing the text content, the model can identify patterns and indicators of fake news, such as biased language, misinformation, or misleading headlines. This can help combat the spread of false information and promote accurate news consumption.</span>
                      <span className='projectuse'>
                      Python, Tensorflow, NLTK
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Fake-News-Classification" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={indimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Indian Diabetes Classification
                      </span>
                      <span className='projectdesc'>
                      This project involves developing a deep learning model to predict the onset of diabetes in individuals based on various health parameters like glucose levels, blood pressure, age, and BMI. By analyzing large datasets of patient records, the model can identify patterns and risk factors associated with diabetes, enabling early detection and preventive measures.
                      </span>
                      <span className='projectuse'>
                      Python, Tensorflow
                      </span>
                      <Button variant='contained' href="https://github.com/hunter123520/Indian-Diabetes-Classification" target="_blank">
                        Source Code
                      </Button>
                  </div>
               </div>

               </Container>

               <div style={{height:"100px"}}></div>
            

            <Container id="web" className='d-flex flex-column align-items-center justify-content-start  flex-wrap web' style={{gap:"25px"}}>
              <span className='start'>
                Websites projects
                </span>

                <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse  projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img src={pureimg} webp sizes={[400, 800]} alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Pure Energy
                      </span>
                      <span className='projectdesc'>
                      Pure Energy is an innovative solution designed to optimize the performance and efficiency of solar energy fields. By leveraging advanced drone technology and AI-driven analysis, our system empowers operators to proactively identify and address potential issues, maximizing energy output and minimizing downtime.
                      </span>
                      <span className='projectuse'>
                      REACT, CSS, FLASK, Huawei ModelArts
                      </span>
                      <Button variant='contained' href="https://pure-energy-demo.netlify.app" target="_blank">
                        Live Website
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img webp sizes={[400, 800]} src={itimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        IT Services Website
                      </span>
                      <span className='projectdesc'>
                      This project involves creating a web application that showcases the IT services offered by a company. The website will provide information about the company's expertise, services, and solutions.
                      </span>
                      <span className='projectuse'>
                      REACT, CSS
                      </span>
                      <Button variant='contained' href="https://itservices-techtune.netlify.app/Home" target="_blank">
                        Live Website
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img webp sizes={[400, 800]} src={restimg}  alt="" className='projectimg'/>
                  <div className='d-flex flex-column align-items-center justify-content-center projectcontent h-100' style={{gap:"10px",width:"50%"}}>
                        <span className='projecttitle'>
                        Resturant Delevery Website
                      </span>
                      <span className='projectdesc'>
                      This project involves creating a web application that showcases the functionality of a restaurant delivery website. The demo will highlight the key features and user interface without the actual functionality of placing orders or processing payments.
                      </span>
                      <span className='projectuse'>
                      REACT, CSS
                      </span>
                      <Button variant='contained' href="https://food-delivery-techtune.netlify.app/Homep" target="_blank">
                        Live Website
                      </Button>
                  </div>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img webp sizes={[400, 800]} src={algebra}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={stringimg}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={garbage}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={book}  alt="" className='projectimg'/>
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

            <div style={{height:"100px"}}></div>

            <Container id="design" className='d-flex flex-column align-items-center justify-content-start  flex-wrap design' style={{gap:"25px"}}>
              <span className='start'>
                Design projects
                </span>
                <div className='d-flex flex-row align-items-center justify-content-center flex-row-reverse projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img webp sizes={[400, 800]} src={buss}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={roll}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={loginimg}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={timetable}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={signin}  alt="" className='projectimg'/>
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

            <div style={{height:"100px"}}></div>

            <Container id="desktop" className='d-flex flex-column align-items-center justify-content-start  flex-wrap desktop' style={{gap:"25px"}}>
              <span className='start'>
                Desktop projects
                </span>


                <div className='d-flex flex-row align-items-center justify-content-center projectHolder ' style={{gap:"25px",width:"85%"}}>
                  <Img webp sizes={[400, 800]} src={privateschool}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={systemexpert}  alt="" className='projectimg'/>
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
                  <Img webp sizes={[400, 800]} src={comp}  alt="" className='projectimg'/>
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

            <div style={{height:"100px"}}></div>

            <Container id="blender" className='d-flex flex-column align-items-center justify-content-start  flex-wrap blender' style={{gap:"25px"}}>
              <span className='start'>
                Blender projects
                </span>
              <div className=' justify-content-center blendparent' style={{gap:"25px",width:"100%"}}>
                <div className='imgholder' ><Img webp sizes={[400, 800]} src={b1}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"3",gridRow:"1/3"}}><Img webp sizes={[400, 800]} src={Wall1}  alt="" className='blendimg'/></div>
                <div className='imgholder' style={{gridColumn:"1/2"}}><Img src={GlassCop}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"1",gridRow:"3/5"}}><Img src={LargeSpoon}  alt="" className='blendimg'/></div>
                <div className='imgholder' style={{gridColumn:"2/4",gridRow:"3"}}><Img src={b3}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={M9la}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={knife}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Tbsi2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Spoon1}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"1/4",gridRow:"5/7"}}><Img src={b2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Sinia}  alt="" className='blendimg'/></div>
                <div className='imgholder '><Img src={Bed1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={CoffCup5}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={CofferGlass2}  alt="" className='blendimg'/></div>
                <div className='imgholder double' style={{gridColumn:"3",gridRow:"9/11"}}><Img src={s1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Mond}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Kas1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Korsy}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={fork}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Lamp9}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Sa7n1}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Wall2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={untitled7}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={b4}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={photocadre}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={FirstSceneTea}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Bed4}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Carpet}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Piano2}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={b5}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Drawer4}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Lamp10}  alt="" className='blendimg'/></div>
                <div className='imgholder'><Img src={Taj2}  alt="" className='blendimg'/></div>
                

              </div>
            </Container>

            <div style={{height:"25px"}}></div>
            <div id="blender" className='d-flex flex-column align-items-center justify-content-start  flex-wrap colored p-5' >
              <span className='start' style={{color:"white"}}>
              Let's turn your dreams and ideas into reality
                </span>
                <Link to={"/Contact"}>
                <a className='but'>Lets talk</a>
                </Link>
                
                <div className='butline'></div>
            </div>
        </>
    );
}

export default HomePage