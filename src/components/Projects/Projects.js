import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sharedev from "../../Assets/Projects/sharedev.png";
import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import ecoenergy from "../../Assets/Projects/ecoenergy.png";
//import chatify from "../../Assets/Projects/chatify.png";
import location_sale_immob from "../../Assets/Projects/location_sale_immob.png";
import detection_maladies_plantes from "../../Assets/Projects/detection_maladies_plantes.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import salesrocket from "../../Assets/Projects/salesrocket.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location_sale_immob}
              isBlog={false}
              title="MANAGEMENT PLATFORM FOR THE SALE AND RENTAL"
              description="Development of a management platform for the sale and rental of real estate, with location map and virtual map and virtual visit....TECNOLOGIES & TOOLS : Figma for design,NextJs,NodeJs,ExpressJs,MongoDB"
              ghLink="https://github.com/khaoulacherkaoui/Immobilier-vente-achat"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesrocket}
              isBlog={false}
              title="Email Marketing"
              description="a web application of Email Marketing with big data. Tools: Nodejs, Reactjs, Mongodb, Bigquery..."
              ghLink="https://github.com/khaoulacherkaoui/API_EmailMarketing_PFE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoenergy}
              isBlog={false}
              title="EcoEnergy"
              description="Our application aims to help users face the challenges of limited challenges posed by limited solar energy resources, 
              determine the proper the right coordination of energy use between dwellings in a home, as well as residence, as well as improving 
              energy efficiency. This is done through through the management of consumption schedules for each resident to optimize the energy 
              bill and the peak"
              ghLink="https://github.com/khaoulacherkaoui/EcoEnergy"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharedev}
              isBlog={false}
              title="ShareDev"
              description="A social network website built with the MERN stack. It is dedicated to developers and and allows them to know each 
              other and share their experiences. TECNOLOGIES & TOOLS : Figma for design, MongoDB, ExpressJs, ReactJs, NodeJs"
              ghLink="https://github.com/khaoulacherkaoui/Share-Dev"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={detection_maladies_plantes}
              isBlog={false}
              title="Mobile application for plant disease detection"
              description="I was a member in hybrid cell we made a Mobile application for plant disease detection with a machine learning algorithm using ionic, then we did the integration with other cells"
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
