import React from "react";
import CustomNav from "./NavBar";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import CodingSvg from "../utils/coding";
import Particles from "../utils/particles";
import Typist from "react-typist";
import About from "./About"

const Home = () => {

  return (
    <>
      <CustomNav />
      <Container className="h-100 home-container">
        <div className="d-flex h-100">
          <div className="my-auto w-lg-50">
            <div>
              <span className="color-customBlueLight h5 font-weight-bold">Hey !</span><br />
              <span className="color-nameBlue h1 font-weight-bold">I'm Bipin</span><br />
              <span className="color-customBlueLight h3">
                <Typist className="TypistExample-message" cursor={{ show: false }}>
                  <span>I'm a </span><span className="font-weight-bold">
                    <span className="font-weight-bold">front-end <span className="font-weight-normal">developer</span></span>
                    <Typist.Backspace count={19} delay={3500} /> full stack</span> developer </Typist></span><br />
              <span className="color-customBlueLight h5">I specialized in developing pixel perfect user interfaces</span><br />
            </div>
            <div>
              <div className="d-flex mt-4">
                <Button variant="" className="color-customBlue p-0 mr-3 border-0" onClick={() => window.open('https://github.com/bipinmv', '_blank')}><FontAwesomeIcon size="2x" icon={faGithubSquare} /></Button>
                <Button variant="" className="color-customBlue p-0 mr-3 border-0" onClick={() => window.open('https://www.linkedin.com/in/bipin-mv', '_blank')}><FontAwesomeIcon size="2x" icon={faLinkedin} /></Button>
                <Button variant="" className="color-customBlue p-0 mr-3 border-0" onClick={() => window.open('https://hackerrank.com/bipinmv23', '_blank')}><FontAwesomeIcon spin size="2x" icon={faHackerrank} /></Button>
              </div><br />
              <Button className="bg-customBlue font-weight-bold shadow-sm border-0 resume-btn" onClick={() => window.open('/static/Bipin_mv_resume.pdf', '_blank')}>Download Resume</Button>
            </div>
          </div>
          <div className="w-50 my-auto d-none d-md-block ml-lg-5">
            <CodingSvg />
          </div>
        </div>
      </Container>
      <Particles />
      <About />
    </>
  )
};

export default Home;
