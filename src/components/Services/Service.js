import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import './service.css'

function Service() {
  return (
    <Container fluid className="services-section" id="service">
      <div class="container2">
        <div class="card2">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="java">Web Design</h2>
              <p class="java">I like to do design for website and application mobile</p>
            </div>
          </div>
          <div class="face face2">
            <h2>Web Design</h2>
          </div>
        </div>

        <div class="card2">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="python">Full Stack developer</h2>
              <p class="python">Building out the "server-side" of web applications, focusing on databases and website architecture...</p>
              <p class="python">Development client-side using web technologies (i.e., HTML, CSS, DOM, and JavaScript)...</p>
            </div>
          </div>
          <div class="face face2">
            <h2>Full Stack developer</h2>
          </div>
        </div>

        <div class="card2">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <h2 class="cSharp">Mobile application developer</h2>
              <p class="cSharp">Create, maintain, and implement the source code to develop mobile apps and mobile platform programs</p>
            </div>
          </div>
          <div class="face face2">
            <h2>Mobile application developer</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Service;
