import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class AllCourses extends Component {
    constructor() {
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseAll).then(result =>{
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
                        <Link className="CourseDetails" to={"/course-details/"+myList.id+"/"+myList.short_title}>Details</Link>
                    </Col>
                </Row>
            </Col>
        })
        return (
            <Fragment>
                <Container className='text-center mt-5'>

                    <Row className='text-justify'>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;