import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import CodingSvg from '../Icons/coding';
import Particles from "../utils/Particles";
import Typist from "react-typist";
import About from "./About"

const Home = () => {

  return (
    <>
      <CustomNav />
      <div className="position-absolute" style={{ height: '100vh', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <Container className="h-100">
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
                <Button className="bg-customBlue font-weight-bold shadow-sm border-0" onClick={() => window.open('/static/Bipin_mv_resume.pdf', '_blank')}>Download Resume</Button>
                {/* <Button className="bg-customBlue font-weight-bold shadow-sm border-0" onClick={() => window.open('https://drive.google.com/file/d/1l77DXpp747k_6qegd8pck8HUzd7iqpIL/view?usp=sharing', '_blank')}>Download Resume</Button> */}
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block ml-lg-5 pl-lg-5">
              <CodingSvg />
            </div>
          </div>
        </Container>
      </div>
      <Particles />
      <About />
    </>
  )
};

export default Home;
