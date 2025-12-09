import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container, Row, Col, Button } from "react-bootstrap";

const StyledSection = styled.section`
  min-height: 80vh;
  padding-top: var(--nav-height);

  .skill-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    border-radius: 20px;
    background: var(--bs-primary);
    color: white;
    font-size: 0.9rem;
  }

  .education-item {
    margin-bottom: 1.5rem;
  }

  .experience-item {
    margin-bottom: 1.5rem;
    padding-left: 1rem;
    border-left: 3px solid var(--bs-primary);
  }
`;

const skills = [
  "Python", "C++", "MATLAB", "Git",
  "FreeFlyer", "GMAT", "STK", "SPICE Toolkit",
  "Siemens NX", "Simulink"
];

const Resume = () => {
  return (
    <Element name="Resume" id="resume">
      <StyledSection className="d-flex align-items-center">
        <Container>
          <h2 className="text-center mb-4">Resume</h2>

          <Row className="justify-content-center mb-4">
            <Col md={8} className="text-center">
              <h4>Dylan D'Silva</h4>
              <p className="lead">
                M.S. Aerospace Engineering Student @ UCF
                <br />
                Focus: Orbital Mechanics / Guidance, Navigation, and Control
              </p>
              <Button
                variant="primary"
                href={process.env.PUBLIC_URL + "/Dylan_DSilva_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                Download PDF
              </Button>
            </Col>
          </Row>

          <Row className="justify-content-center mb-4">
            <Col md={8}>
              <h5 className="text-center mb-3">Skills and Tools</h5>
              <div className="text-center">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={6}>
              <h5 className="mb-3">Education</h5>
              <div className="education-item">
                <strong>University of Central Florida</strong>
                <br />
                M.S. Aerospace Engineering (Aug 2024 - Present)
              </div>
              <div className="education-item">
                <strong>University of Illinois Urbana-Champaign</strong>
                <br />
                B.S. Aerospace Engineering, Minor in Astronomy (Aug 2020 - Dec 2023)
              </div>
            </Col>
            <Col md={6}>
              <h5 className="mb-3">Experience Highlights</h5>
              <div className="experience-item">
                <strong>Autonomous Quadcopter GNC Design</strong>
                <br />
                Simulink simulation with stereo camera, RRT path planning, and cascaded PID control
              </div>
              <div className="experience-item">
                <strong>Mars Satellite Constellation Design</strong>
                <br />
                Orbit design and analysis using FreeFlyer and GMAT
              </div>
              <div className="experience-item">
                <strong>NASA Micro-g NExT Challenge</strong>
                <br />
                Designed lunar coring device tested at NASA's Neutral Buoyancy Lab
              </div>
            </Col>
          </Row>

        </Container>
      </StyledSection>
    </Element>
  );
};

export default Resume;