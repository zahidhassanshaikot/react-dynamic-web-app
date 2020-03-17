import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Footer extends Component {
    constructor() {
        super();
        this.state={
            address: "",
            email: "",
            phone: "",
            facebook: "",
            youtube: "",
            footer_credit: ""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.footer).then(result =>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                facebook:result[0]['facebook'],
                youtube:result[0]['youtube'],
                footer_credit:result[0]['footer_credit']
            })
        }).catch(error=>{
            // this.setState({title:"?????",subtitle:"????"})
        });
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection text-center'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <Link className="socialLink" to={this.state.facebook}><FontAwesomeIcon icon={faFacebook}/> Facebook</Link><br/>
                            <Link className="socialLink" to={this.state.youtube}><FontAwesomeIcon icon={faYoutube}/> Youtube</Link>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription">{this.state.address}</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> {this.state.email}</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> {this.state.phone}</p>
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