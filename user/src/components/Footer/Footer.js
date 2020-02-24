import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection text-center'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <Link className="socialLink" to="#"><FontAwesomeIcon icon={faFacebook}/> Facebook</Link><br/>
                            <Link className="socialLink" to="#"><FontAwesomeIcon icon={faYoutube}/> Youtube</Link>

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
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            {/*<a className="footerLink" href="#">My Resume</a><br/>*/}
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms">Terms And Condition</Link><br/>
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='copyRightSection text-center'>
                    <Link className="copyRightLink" to="#" >shaikot.com &copy; 2020 2021</Link>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;