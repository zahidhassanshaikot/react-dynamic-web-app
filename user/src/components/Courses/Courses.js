import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <Row className='text-justify'>
                      <Col lg={6} md={12} sm={12} className="p-2">
                           <Row>
                              <Col lg={6} md={6} sm={12}>
                                  <img className="CourseImage" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png" />
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                                  <h5 className="CourseTitle">Web Development</h5>
                                  <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                  <a className="CourseDetails" href="#">Details</a>
                              </Col>
                           </Row>
                      </Col>
                      <Col lg={6} md={12} sm={12} className="p-2">
                           <Row>
                               <Col lg={6} md={6} sm={12}>
                                   <img className="CourseImage" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png" />
                               </Col>
                               <Col lg={6} md={6} sm={12}>
                                   <h5 className="CourseTitle">Web Development</h5>
                                   <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                   <a className="CourseDetails" href="#">Details</a>
                               </Col>
                           </Row>
                      </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="CourseTitle">Web Development</h5>
                                    <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className="CourseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="CourseTitle">Web Development</h5>
                                    <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className="CourseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;