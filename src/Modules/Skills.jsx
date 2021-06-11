import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import IconCard from '../Components/IconCard';
import { skillsList, skillsData } from '../utils/helperList';
import SkillsBarChart from "../utils/skillBarChart";

const Skills = () => {
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        <Row xs={1} md={2}>
          <Col>
            <div className="py-3">
              <SkillsBarChart skillsData={skillsData} skills={skillsData.map(obj => obj.name)} />
            </div>
          </Col>
          <Col>
            <Row className="justify-content-evenly">
              {skillsList.map(skill => (
                <IconCard key={skill.label} src={skill.src} label={skill.label} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Skills;
