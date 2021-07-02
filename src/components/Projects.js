import React from "react";
import CustomNav from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { projectsList } from "../utils/helperList";

const Projects = () => {
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        <h2 className="color-customBlue ml-lg-5 proj-slide">Weekend | Academic projects</h2>
        {projectsList.map(proj => (
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} key={proj.label}>
            <Col>
              <img className="img-fluid proj-image shadow" src={proj.imgSrc} alt={proj.label} />
            </Col>
            <Col className="pt-2">
              <h3 className="font-weight-bold color-customBlue mb-0">{proj.label}</h3><br />
              {proj.description && <>
                <span>{proj.description}</span><br />
              </>}
              {proj.src && <>
                Demo: <a href={proj.src} target="_blank" rel="noopener noreferrer">{proj.src}</a><br /><br />
              </>}
              {proj.githubSrc && <>
                Source code: <a href={proj.githubSrc} target="_blank" rel="noopener noreferrer">{proj.githubSrc}</a><br />
              </>}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
};

export default Projects;
