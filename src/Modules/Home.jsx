import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import CodingSvg from '../Icons/coding';
import useWindowDimensions from '../utils/dimensionHelper';
import Particles from "../utils/Particles";
import Typist from "react-typist";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <CustomNav />
      <div className="position-absolute" style={{ height: '100vh', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <Container className="h-100">
          <div className="d-flex h-100">
            <div className={`my-auto ${width > 760 ? 'w-50' : ''}`}>
              <div>
                <div className="">
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
                    {/* <Button variant="" className="color-customBlue p-0 mr-3 border-0" onClick={() => window.open('https://github.com/bipinmv', '_blank')}><FontAwesomeIcon size="2x" icon={faGithubSquare} /></Button>
                    <Button variant="" className="color-customBlue p-0 mr-3 border-0" onClick={() => window.open('https://www.linkedin.com/in/bipin-mv', '_blank')}><FontAwesomeIcon size="2x" icon={faLinkedin} /></Button>
                    <Button variant="" className="color-customBlue p-0 mr-3 border-0" onClick={() => window.open('https://hackerrank.com/bipinmv23', '_blank')}><FontAwesomeIcon className="fa-spin" size="2x" icon={faHackerrank} /></Button> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/bipinmv" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faGithubSquare} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bipin-mv" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://hackerrank.com/bipinmv23" className="color-customBlue p-0 mr-3"><FontAwesomeIcon className="fa-spin" size="2x" icon={faHackerrank} /></a>
                  </div><br />
                  {/* <Button className="bg-customBlue font-weight-bold shadow-sm border-0"><Link to="/Bipin_mv_resume.pdf" target="_blank" download className="text-link">Download Resume</Link></Button> */}
                  <Button className="bg-customBlue font-weight-bold shadow-sm border-0" onClick={() => window.open('/Bipin_mv_resume.pdf', '_blank')}>Download Resume</Button>
                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block">
              <CodingSvg />
            </div>
          </div>
        </Container>
      </div>
      <Particles />
    </>
  )
};

export default Home;
