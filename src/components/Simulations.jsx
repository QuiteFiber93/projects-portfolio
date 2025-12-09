import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container, Row, Col, Card } from "react-bootstrap";

const StyledSection = styled.section`
  min-height: 90vh;
  padding-top: var(--nav-height);

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    height: 100%;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .card-img-top {
    height: 200px;
    object-fit: cover;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 3rem;
  }
`;

const simulations = [
  {
    id: 1,
    title: "Two-Body Dynamics",
    description: "Orbital motion, ground tracks, Lagrange coefficients, and Stumpff functions",
    icon: "🌍",
    folder: "twobody",
    items: [
      { name: "Ground Track", file: "groundtrack.html" },
      { name: "Two-Body (COG Frame)", file: "twobody_wrtCOG.html" },
      { name: "Lagrange Coefficients", file: "lagrangecoeff_ta.html" },
      { name: "Stumpff Functions", file: "stumff_functions.html" },
    ],
  },
  {
    id: 2,
    title: "Three-Body Problem (CR3BP)",
    description: "Lagrange points, zero-velocity curves, effective potential, and trajectories",
    icon: "🌑",
    folder: "threebody",
    items: [
      { name: "3D Trajectory", file: "traj3d.html" },
      { name: "Effective Potential", file: "effective_potential_mu0_03.html" },
      { name: "Zero Velocity Curves", file: "zero_vel_line0_03.html" },
      { name: "Bifurcation Diagram", file: "bifurcation.html" },
    ],
  },
  {
    id: 3,
    title: "Orbit Determination",
    description: "State estimation and orbit determination simulation",
    icon: "📡",
    folder: "orbit_determination",
    items: [
      { name: "OD Simulation", file: "sim.html" },
    ],
  },
];

const Simulations = () => {
  return (
    <Element name="Simulations" id="simulations">
      <StyledSection className="d-flex align-items-center">
        <Container>
          <h2 className="text-center mb-5">Orbital Mechanics Simulations</h2>
          <Row className="g-4">
            {simulations.map((sim) => (
              <Col key={sim.id} md={6} lg={4}>
                <Card className="h-100">
                  <div className="card-img-top">{sim.icon}</div>
                  <Card.Body>
                    <Card.Title>{sim.title}</Card.Title>
                    <Card.Text>{sim.description}</Card.Text>
                    <ul className="list-unstyled">
                      {sim.items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={process.env.PUBLIC_URL + "/simulations/" + sim.folder + "/" + item.file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </StyledSection>
    </Element>
  );
};

export default Simulations;