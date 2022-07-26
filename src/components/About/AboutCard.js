import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cherkaoui Khaoula </span>
            <br />22 Years old engineering student at the National Institut of 
            Posts and Telecommunications <span className="purple">INPT</span> - 
            Rabat, Morocco - In Advanced Software Engineering for Digital Services 
            <span className="purple">(A.S.E.D.S)</span>.I am a freshly graduated 
            and I am currently looking for a job which will allow me to gain 
            experience in <span className="purple">web/mobile development </span>
            and everything related to digital services, and to develop my skills acquired during my course in the field of development.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> 

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
