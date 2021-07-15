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
                            A full-stack developer from Kerala.
                            Have strong experience in developing UI and CRUD APIs, and always open to new directions of programming.
                        </p>
                        <p>
                            Prefer to work in a team and to have strong communication with every member, to increase my own and team skills and produce the perfect product.
                            Have the desire to learn and develop something new, as well as adhere to the rule "Good code is beautiful code" and try to follow all standards of the modern development process.
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
