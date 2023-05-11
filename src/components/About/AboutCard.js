import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
// Copyrights MOHAMED MOKRANI | Linkedin:https://www.linkedin.com/in/medmokranii/
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed MOKRANI </span>
            from <span className="purple"> Gabès, Tunisia.</span>
            <br />I am a Full-Stack JavaScrip developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
