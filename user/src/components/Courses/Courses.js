import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Courses extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseHome).then(result =>{
            this.setState({myData:result})
        }).catch(error=>{

        });

    }
    render() {
        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={6} md={12} sm={12} className="p-2">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img className="CourseImage" src={myList.small_img} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h5 className="CourseTitle">{myList.short_title}</h5>
                        <p className="CourseDes">{myList.short_description}</p>
                        <Link className="CourseDetails" to="/course-details">Details</Link>
                    </Col>
                </Row>
            </Col>
        })
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <Row className='text-justify'>
                        {myView}
                      {/*<Col lg={6} md={12} sm={12} className="p-2">*/}
                      {/*     <Row>*/}
                      {/*        <Col lg={6} md={6} sm={12}>*/}
                      {/*            <img className="CourseImage" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />*/}
                      {/*        </Col>*/}
                      {/*        <Col lg={6} md={6} sm={12}>*/}
                      {/*            <h5 className="CourseTitle">Web Development</h5>*/}
                      {/*            <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>*/}
                      {/*            <Link className="CourseDetails" to="/course-details">Details</Link>*/}
                      {/*        </Col>*/}
                      {/*     </Row>*/}
                      {/*</Col>*/}
                      {/*<Col lg={6} md={12} sm={12} className="p-2">*/}
                      {/*     <Row>*/}
                      {/*         <Col lg={6} md={6} sm={12}>*/}
                      {/*             <img className="CourseImage" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />*/}
                      {/*         </Col>*/}
                      {/*         <Col lg={6} md={6} sm={12}>*/}
                      {/*             <h5 className="CourseTitle">Web Development</h5>*/}
                      {/*             <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>*/}
                      {/*             <Link className="CourseDetails" to="/course-details">Details</Link>*/}
                      {/*         </Col>*/}
                      {/*     </Row>*/}
                      {/*</Col>*/}
                      {/*  <Col lg={6} md={12} sm={12} className="p-2">*/}
                      {/*      <Row>*/}
                      {/*          <Col lg={6} md={6} sm={12}>*/}
                      {/*              <img className="CourseImage" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />*/}
                      {/*          </Col>*/}
                      {/*          <Col lg={6} md={6} sm={12}>*/}
                      {/*              <h5 className="CourseTitle">Web Development</h5>*/}
                      {/*              <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>*/}
                      {/*              <Link className="CourseDetails" to="/course-details">Details</Link>*/}
                      {/*          </Col>*/}
                      {/*      </Row>*/}
                      {/*  </Col>*/}
                      {/*  <Col lg={6} md={12} sm={12} className="p-2">*/}
                      {/*      <Row>*/}
                      {/*          <Col lg={6} md={6} sm={12}>*/}
                      {/*              <img className="CourseImage" src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" />*/}
                      {/*          </Col>*/}
                      {/*          <Col lg={6} md={6} sm={12}>*/}
                      {/*              <h5 className="CourseTitle">Web Development</h5>*/}
                      {/*              <p className="CourseDes">I build native and cross platfrom mobile app for your business app for your business</p>*/}
                      {/*              <Link className="CourseDetails" to="/course-details">Details</Link>*/}
                      {/*          </Col>*/}
                      {/*      </Row>*/}
                      {/*  </Col>*/}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;