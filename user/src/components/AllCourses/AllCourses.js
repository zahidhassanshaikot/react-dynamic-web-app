import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../loading/loading";
import WentWrong from "../wentWrong/WentWrong";

class AllCourses extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseAll).then(result =>{
            if(result==null){
                this.setState({ error:true,loading:false })
            }else{
                this.setState({myData:result,loading:false})
            }
        }).catch(error=>{
            this.setState({ error:true,loading:false })
        });

    }

    render() {
        if(this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){
            const myList = this.state.myData;
            const myView = myList.map(myList=>{
                return <Col lg={6} md={12} sm={12} className="p-2">
                    <Row className="p-3">
                        <Col className="p-2" lg={6} md={6} sm={12}>
                            <img className="CourseImage" src={myList.small_img} />
                        </Col>
                        <Col className="p-2" lg={6} md={6} sm={12}>
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
        }else if(this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default AllCourses;