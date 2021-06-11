import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import curveSvg from '../Icons/curved.svg';
import useWindowDimensions from '../utils/dimensionHelper';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { width } = useWindowDimensions();
  let textContainerWidthClass, heroTextFontSize;

  if (width < 768) {
    textContainerWidthClass = 'w-100';
    heroTextFontSize = undefined;
  } else if (width >= 768 && width < 992) {
    textContainerWidthClass = 'w-50';
    heroTextFontSize = 'xx-large';
  } else {
    textContainerWidthClass = 'w-50';
    heroTextFontSize = undefined;
  }

  return (
    <>
      <CustomNav />
      <div className="position-absolute w-100 d-none d-md-block" style={{ height: '100vh', top: 0, zIndex: -1000 }}>
        <div
          style={{
            backgroundImage: `url(${curveSvg})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: `auto 100vh`
          }}
          className="h-100 position-fixed fixed-top fixed-bottom"
        />
      </div>
      <Container className={`${textContainerWidthClass} mt-lg-5 mr-lg-5`}>
        <Row xs={1} md={2}>
          <Col>
            <div className="d-flex justify-content-center flex-column text-center px-5 mb-3">
              <div className="shadow-sm mt-3 p-4 contactCard">
                <div>
                  <img className="" src="https://img.icons8.com/color/144/000000/phone.png" alt="phone" />
                </div>
                <span className="text-muted my-2">Contact Number</span>
                <span className="color-customBlue">+91 9895051128</span>
              </div>
              <div className="shadow-sm mt-3 p-2 contactCard">
                <div>
                  <img className="" src="https://img.icons8.com/color/144/000000/gmail.png" alt="gmail" />
                </div>
                <span className="text-muted my-2">Email</span>
                <span className="color-customBlue">bipinmv23@gmail.com</span>
              </div>
            </div>
          </Col>
          <Col className="float-md-right text-right">
            <h1 className="pr-lg-5 pr-xs-3 text-boldest color-customBlue mb-4" style={{ fontSize: heroTextFontSize }}>
              Lets <br />Work <br /> Together!
            </h1>
            <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
              <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1">
                <FontAwesomeIcon size="1x" icon={faPhoneAlt} /><span><a href="tel:+919895051128" className="text-link">Phone</a></span>
              </Button>
              <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1 px-2" onClick={() => window.open('mailto:bipinmv23@gmail.com?subject="Hello !"', '_blank')}>
                <FontAwesomeIcon size="1x" icon={faEnvelope} /><span>Email</span>
              </Button>
              <Button className="contact-btns bg-customBlue shadow border-0 py-1" onClick={() => window.open('https://www.linkedin.com/in/bipin-mv', '_blank')}>
                <FontAwesomeIcon size="1x" icon={faLinkedinIn} /><span>Linkedin</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Contact;
