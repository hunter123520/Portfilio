import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from 'react-bootstrap/Container';
import "../Styles/FAQs.css";
const FAQs = () => {
  return (
    <div>
        <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-100 mt-5 mb-5 pb-5'>
            <span>Frequently Asked</span>
            <span className='main squeeze'>Questions</span>
        </div>

        <Container  className='d-flex flex-row align-items-center justify-content-center mb-5 pb-5 h-100' style={{gap:"25px",}}>
            <div className='d-flex flex-column w-50 h-100'>
            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                What services do you offer ?
                </AccordionSummary>
                <AccordionDetails>
                I offer the following services: data analysing, AI creations, developing websites, designing, 3d creations (limited), developing desktop applications.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                How do you Charge ?
                </AccordionSummary>
                <AccordionDetails>
                It totally depends on what you are creating, you can contact me about your project and i will give you more details.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                How much long it takes ?
                </AccordionSummary>
                <AccordionDetails>
                depending on the type of work you are trying to do, if you have a predesign for your idea this will make things work faster than you imagine.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                Can i offer something not in the portfilio ?
                </AccordionSummary>
                <AccordionDetails>
                Iam able to learn things fast, this is why i may be able to help you in many other fields.
                </AccordionDetails>
            </Accordion>
            </div>
            <div className='d-flex flex-column w-50 h-100'>
            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                What are you looking for in the future ?
                </AccordionSummary>
                <AccordionDetails>
                At the current moment i want to learn and create as much as i can. IT creations will make other's ideas come to reality.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                Can we colaborate ?
                </AccordionSummary>
                <AccordionDetails>
                Of course, iam open for any type of work.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                Can i ask for some advices ?
                </AccordionSummary>
                <AccordionDetails>
                Yes, you can talk to me on facebook and i will be open to help you with some advices
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                How much your experience ?
                </AccordionSummary>
                <AccordionDetails>
                Iam starting to work in IT creations from the first year of the university, now its been 5 years.
                </AccordionDetails>
            </Accordion>
            </div>
        </Container>


    </div>
  )
}

export default FAQs