import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiAndroidstudio,
  SiEclipseide,
  SiBitbucket,
  SiGithub,
  SiSwagger
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><br/><span className="fs-5">Visual Studio Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><br/><span className="fs-3">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /><br/><span className="fs-3">Heroku</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /><br/><span className="fs-3">Android Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /><br/><span className="fs-3">Eclipse</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket /><br/><span className="fs-3">Bitbucket</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /><br/><span className="fs-3">Github</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger /><br/><span className="fs-3">Swagger</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
