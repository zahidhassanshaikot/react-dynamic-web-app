import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection text-center'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube}/> Youtube</a>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription">#79/6 Padma Residential Aria, 3rd Floor Front Side,
                                Rajshahi</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> demo@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> +880 1000 000 000</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <a className="footerLink" href="#">About Me</a><br/>
                            <a className="footerLink" href="#">My Resume</a><br/>
                            <a className="footerLink" href="#">Contact Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <a className="footerLink" href="#">Refund Policy</a><br/>
                            <a className="footerLink" href="#">Terms And Condition</a><br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='copyRightSection text-center'>
                    <a className="copyRightLink" href="#" >shaikot.com &copy; 2020 2021</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;