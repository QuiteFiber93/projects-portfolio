import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";

const StyledSection = styled.section`
  min-height: 90vh;
  padding-top: var(--nav-height);

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
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

  .sim-link {
    display: block;
    padding: 0.5rem 0;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);

    &:hover {
      color: var(--bs-primary, #0d6efd);
      padding-left: 0.5rem;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 90vw;
    max-height: 90vh;
    margin: 5vh auto;
  }

  .modal-content {
    height: 85vh;
    background: #0d1117;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  .modal-header {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 1.5rem;

    .modal-title {
      color: #fff;
      font-weight: 600;
    }

    .btn-close {
      filter: invert(1);
      opacity: 0.7;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  .modal-body {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  .plot-container {
    flex: 1;
    min-height: 50%;
    position: relative;
    background: #fff;

    @media (min-width: 992px) {
      min-height: 100%;
      flex: 2;
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  .description-panel {
    flex: 0 0 auto;
    padding: 1.5rem;
    background: #161b22;
    color: #c9d1d9;
    overflow-y: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    max-height: 40%;

    @media (min-width: 992px) {
      flex: 0 0 350px;
      max-height: none;
      border-top: none;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }

    h5 {
      color: #fff;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      line-height: 1.7;
      margin-bottom: 1rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .tech-tag {
      background: rgba(56, 139, 253, 0.15);
      color: #58a6ff;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
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
      {
        name: "Ground Track",
        file: "groundtrack.html",
        description:
          "Visualization of a satellite's ground track - the path traced on Earth's surface directly beneath the orbiting spacecraft. The ground track pattern reveals the orbit's inclination and period, showing how coverage changes over time.",
        tags: ["Orbital Mechanics", "Visualization", "Satellite Coverage"],
      },
      {
        name: "Two-Body (COG Frame)",
        file: "twobody_wrtCOG.html",
        description:
          "Animation of the two-body problem viewed from the center of gravity (barycenter) frame. This perspective shows how both bodies orbit their common center of mass, rather than assuming one body is stationary.",
        tags: ["Two-Body Problem", "Reference Frames", "Animation"],
      },
      {
        name: "Lagrange Coefficients",
        file: "lagrangecoeff_ta.html",
        description:
          "Visualization of the Lagrange f and g coefficients as functions of true anomaly. These coefficients provide an elegant solution to propagate orbital state vectors without solving Kepler's equation directly.",
        tags: ["Lagrange Coefficients", "State Propagation", "True Anomaly"],
      },
      {
        name: "Stumpff Functions",
        file: "stumff_functions.html",
        description:
          "Plot of the Stumpff functions c₀, c₁, c₂, and c₃, which are fundamental to universal variable formulations. These functions unify the treatment of elliptic, parabolic, and hyperbolic orbits into a single framework.",
        tags: ["Universal Variables", "Stumpff Functions", "Orbital Mechanics"],
      },
    ],
  },
  {
    id: 2,
    title: "Three-Body Problem (CR3BP)",
    description: "Lagrange points, zero-velocity curves, effective potential, and trajectories",
    icon: "🌑",
    folder: "threebody",
    items: [
      {
        name: "3D Trajectory",
        file: "traj3d.html",
        description:
          "Three-dimensional trajectory visualization in the Circular Restricted Three-Body Problem (CR3BP). The rotating frame reveals the complex dynamics near the primary bodies and Lagrange points.",
        tags: ["CR3BP", "3D Visualization", "Trajectory"],
      },
      {
        name: "Effective Potential",
        file: "effective_potential_mu0_03.html",
        description:
          "Surface plot of the effective potential in the CR3BP rotating frame (μ = 0.03). The potential wells around each primary and the saddle points at L1, L2, and L3 determine the allowable regions of motion for a given Jacobi constant.",
        tags: ["Effective Potential", "CR3BP", "Jacobi Constant"],
      },
      {
        name: "Zero Velocity Curves",
        file: "zero_vel_line0_03.html",
        description:
          "Zero-velocity curves (Hill's regions) showing the boundaries of allowable motion for different energy levels. These curves separate regions where motion is possible from forbidden regions, crucial for understanding capture and escape dynamics.",
        tags: ["Zero Velocity Curves", "Hill's Regions", "Energy Bounds"],
      },
      {
        name: "Bifurcation Diagram",
        file: "bifurcation.html",
        description:
          "Bifurcation diagram showing how the stability and location of Lagrange points change as the mass ratio μ varies. This reveals the transition from stable to unstable equilibria and the birth of new periodic orbit families.",
        tags: ["Bifurcation", "Stability Analysis", "Lagrange Points"],
      },
    ],
  },
  {
    id: 3,
    title: "Orbit Determination",
    description: "State estimation and orbit determination simulation",
    icon: "📡",
    folder: "orbit_determination",
    items: [
      {
        name: "OD Simulation",
        file: "sim.html",
        description:
          "Simulation of the orbit determination process, demonstrating how noisy range and range-rate measurements from ground stations are processed to estimate the spacecraft's orbital state. Includes visualization of measurement residuals and state covariance evolution.",
        tags: ["Orbit Determination", "Kalman Filter", "State Estimation"],
      },
    ],
  },
];

const Simulations = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSim, setSelectedSim] = useState(null);

  const handleOpenModal = (sim, item) => {
    setSelectedSim({
      ...item,
      category: sim.title,
      folder: sim.folder,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSim(null);
  };

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
                    <div className="list-unstyled">
                      {sim.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="sim-link"
                          onClick={() => handleOpenModal(sim, item)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              handleOpenModal(sim, item);
                            }
                          }}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </StyledSection>

      <StyledModal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedSim?.category} — {selectedSim?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="plot-container">
            {selectedSim && (
              <iframe
                src={
                  process.env.PUBLIC_URL +
                  "/simulations/" +
                  selectedSim.folder +
                  "/" +
                  selectedSim.file
                }
                title={selectedSim.name}
              />
            )}
          </div>
          <div className="description-panel">
            <h5>About this visualization</h5>
            <p>{selectedSim?.description}</p>
            {selectedSim?.tags && (
              <div className="tech-tags">
                {selectedSim.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Modal.Body>
      </StyledModal>
    </Element>
  );
};

export default Simulations;