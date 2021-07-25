import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timeline from "../utils/timeline";

const About = () => {
    return (
        <Container className="mt-2 mr-lg-5" fluid>
            <Row xs={1} md={2}>
                <Col className="mb-3">
                    <Timeline />
                </Col>
                <Col className="px-lg-5 mb-2">
                    <div className="px-lg-5 about-text text-justify">
                        <p className="about-me-block">About</p>
                        <p>
                            A Full Stack Developer from Kerala.
                            Have strong experience in developing UI and CRUD APIs, and always open to new directions of programming.
                        </p>
                        <p>
                            Dedicated to creating and optimizing
                            interactive, user-friendly and feature-rich web applications. Exposure to Front-end & Back-end web
                            development, UI/UX and Progressive Web Application (PWA) development. Believe that continuous
                            learning and belief are the key factors for achieving personal and professional success.
                            Have the desire to learn and develop something new, as well as adhere to the rule
                            "Good code is beautiful code" and try to follow all standards of the modern development process.
                        </p>
                    </div>
                    <div className="text-center mt-5">
                        <img src="static/images/programmer.svg" alt="programmer" className="programmer" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default About;
