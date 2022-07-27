import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJava,
  DiJavascript,
  DiReact,
  DiAngularSimple,
  DiNodejs,
  DiIonic,
  DiMysql,
  DiMongodb,
  DiAndroid,
  DiFirebase,
  DiGit,
  DiTrello,
  DiJira
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><br/><span className="fs-3">Html</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><br/><span className="fs-3">Css</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /><br/><span className="fs-3">Bootstrap</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><br/><span className="fs-3">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript /><br/><span className="fs-3">Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><br/><span className="fs-3">React</span>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple /><br/><span className="fs-3">Angular</span>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><br/><span className="fs-3">Nodejs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIonic /><br/><span className="fs-3">Ionic</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiMysql /><br/><span className="fs-3">Mysql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><br/><span className="fs-3">Mongodb</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid /><br/><span className="fs-3">Android</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiFirebase /><br/><span className="fs-3">Firebase</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><br/><span className="fs-3">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTrello /><br/><span className="fs-3">Trello</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira /><br/><span className="fs-3">Jira</span>
      </Col>
    </Row>
  );
}

export default Techstack;
