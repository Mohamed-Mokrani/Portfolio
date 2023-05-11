import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/CV-MOHAMED-MOKRANI.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";

const resumeLink = "";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="div-resume">
      <Container fluid className="resume-section">
        <div className="education-container">
          <div>
            <h1>LBG</h1>
            
            <h2>High school diploma</h2>
            <h2>Computer science</h2>
            <h5>Pascal/Python/C++</h5>
          <h5>2014</h5></div>
          <div>
            <h1>ISET Gabès</h1>
            
            <h2>Bachelor's degree</h2>
            <h2>Cyber-security</h2>
            <h5>Java/Linux/C#/CCNA/Matlab</h5>
          <h5>2018</h5></div>
          <div>
            <h1>GOMYCODE</h1>
            
            <h2>Certificate</h2>
            <h2>FullStack JavaScript</h2>
            <h5>MongoDB/ExpressJS/ReactJS/NodeJS</h5>
          <h5>2023</h5></div>
        </div>

        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          className="btn-div"
        >
          CV
        </Button>
      </Container>
      <Particle />
    </div>
  );
}

export default ResumeNew;
