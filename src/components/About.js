import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <>
            <Container className="mt-5 mr-lg-5" fluid>
                <Row xs={1} md={2}>
                    <Col className="mb-3">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date=""
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} />}
                            >
                                <h6 className="vertical-timeline-element-subtitle">To be continued...</h6>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="Aug 2020 - present"
                                dateClassName="text-secondary mx-lg-2"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} />}
                            >
                                <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
                                <h6 className="vertical-timeline-element-subtitle mt-1">Caparizon, Kochi</h6>
                                <p>React.JS | Node.JS | PostgreSQL</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2018 - 2020"
                                dateClassName="mx-lg-2"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} />}
                            >
                                <h3 className="vertical-timeline-element-title mb-4">Master of Computer Applications</h3>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2015 - 2018"
                                dateClassName="mx-lg-2"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} />}
                            >
                                <h3 className="vertical-timeline-element-title mb-4">Bachelor of Computer Applications</h3>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Col>
                    <Col className="px-lg-5 mb-5">
                        <div className="px-lg-5 about-text text-justify">
                            <p className="about-me-block">About</p>
                            <p>
                                Full-stack developer with front-end preferring.
                                Have strong experience in React.JS.
                                Basically have experience in web development, but always open to new directions of programming.
                            </p>
                            <p>
                                Prefer to work in a team and to have strong communication with every member, to increase my own and team skills and produce the perfect product.
                                Have the desire to learn and develop something new, as well as adhere to the rule "Good code is beautiful code" and try to follow all standards of the modern development process.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default About;
