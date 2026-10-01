import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/foodhub.png";
import bitsOfCode from "../../Assets/Projects/homecare.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Home Care"
              description="A full-stack service booking platform built with React, Node.js, and MongoDB. Features secure user authentication, dynamic service category filtering, and seamless doorstep appointment scheduling with an interactive UI."
              ghLink="https://github.com/garvittsoni/Home-Care-Full-Stack-Project"
              demoLink="https://homezocare.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Food Hub"
              description="A modern food ordering web app built using the MERN stack and Tailwind CSS. Includes dynamic food menu browsing, category-based item filtering, and real-time shopping cart management for a smooth checkout experience."
              ghLink="https://github.com/garvittsoni/Food-Hub-Full-Stack-Projectt."
              demoLink="https://food-hub-full-stack-projectt.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
