import React from "react";
import CustomNav from "./NavBar";
import { Container, Button, Row, Col, CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { contactDetails } from "../utils/helperList";

const Contact = () => {
  return (
    <>
      <CustomNav />
      <Container className="pt-lg-5">
        <Row className="mt-5">
          <Col xs={12} md={9}>
            <CardDeck>
              {contactDetails.map(obj => (
                <Card className="contactCard">
                  <div className="shadow d-flex justify-content-center text-center flex-column py-3">
                    <div>
                      <img className="contactImg" src={obj.iconSrc} alt={obj.type} />
                    </div>
                    <span className="text-muted mt-2 mb-3">{obj.type}</span>
                    <span className="color-customBlue">{obj.data}</span>
                  </div>
                </Card>
              ))}
            </CardDeck>
          </Col>
          <Col className="float-md-right text-right">
            <h2 className="pr-lg-5 pr-xs-3 text-boldest color-customBlue mb-4">
              Lets <br />Work <br /> Together!
            </h2>
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
