import React, { useEffect, useState, lazy, Suspense } from "react";
import CustomNav from "./NavBar";
import { Container, Row, Col, Spinner, Carousel } from "react-bootstrap";
import { skillsList, skillsData, certficatesList } from "../utils/helperList";

const SkillsBarChart = lazy(() => import("../utils/skillBarChart"));
const IconCard = lazy(() => import("../utils/IconCard"));

const Skills = () => {

  const [barData, setBarData] = useState([]);

  useEffect(() => {
    setChartData(skillsData);
  }, []);

  const setChartData = (skillsData) => {

    const skillNames = skillsData.map(obj => obj.name);

    // initialize data with 0.
    const defaultSkillData = skillNames.map(() => 0)

    const nameWiseData = skillsData.map(obj => {
      let tempObj = {
        name: obj.name,
        data: defaultSkillData
      };
      return tempObj;
    });

    skillsData.forEach(skillsDataObj => {
      nameWiseData.forEach(categoryObj => {
        if (skillsDataObj.name === categoryObj.name) {
          let categoryIndex = skillNames.indexOf(skillsDataObj.name);
          if (categoryIndex !== -1) {
            let arrData = JSON.parse(JSON.stringify(categoryObj.data));
            arrData[categoryIndex] = skillsDataObj.rating;
            categoryObj.data = arrData;
          }
        }
      });
    });

    setBarData(nameWiseData);
  }

  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        <Suspense fallback={<div className="d-flex justify-content-center mt-5"><Spinner animation="border" variant="secondary" /></div>}>
          <Row xs={1} md={2}>
            <Col>
              <div className="py-3">
                {barData.length > 0 &&
                  <SkillsBarChart skillsData={barData} skills={barData.map(obj => obj.name)} />
                }
              </div>
            </Col>
            <Col className="skill-icons-container">
              <Row className="justify-content-evenly">
                {skillsList.map(skill => (
                  <IconCard key={skill.label} src={skill.src} label={skill.label} />
                ))}
              </Row>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-3 mb-5">
            <Col md={5} xs={12}>
              <Carousel variant="dark">
                {certficatesList.map(cert => (
                  <Carousel.Item interval={1500}>
                    <a href={cert.href} target="_blank" rel="noreferrer">
                      <img className="d-block w-100" src={cert.src} alt="" loading="lazy" />
                    </a>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Suspense>
      </Container>
    </>
  )
};

export default Skills;
