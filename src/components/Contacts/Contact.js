import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import mail from "../../Assets/mail.png";
import {Email, Phone, LocationOn, LinkedIn} from '@material-ui/icons';

function Contact() {
  return (
    <Container fluid className="services-section" id="contact">
      <div className="contact">
        <h1>For more info <strong className="purple">Contact Me :) </strong></h1>
        
        <div class="row align-items-center">
          <div class="col-2"></div>
          <div class="col-4 fade-in-left">
            <img src={mail} alt="brand"/>
          </div>
          <div class="col-3 fade-in-right">
            <div class="list-group" id="list-tab" role="tablist">
              <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                <Email className="contactlogo"/> <strong className="purple">khaoulacherkaoui99@gmail.com</strong>
              </a>
              <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                <Phone className="contactlogo"/> <strong className="purple">0652570604</strong>
              </a>
              <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">
                <LocationOn className="contactlogo"/> <strong className="purple">Khouribga, Maroc</strong>
              </a>
              <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">
                <LinkedIn className="contactlogo"/> <strong className="purple">
                  <a
                  href="https://www.linkedin.com/in/khaoulacherkaoui/"
                  // style={{ color: "purple" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="purple"
                  >https://www.linkedin.com/in/khaoulacherkaoui/</a></strong></a>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
