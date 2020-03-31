import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {
    BigPlayButton,
    ControlBar, ForwardControl,
    LoadingSpinner,
    PlaybackRateMenuButton, Player,
    ReplayControl,
    VolumeMenuButton
} from "video-react";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class CourseDetails extends Component {
    constructor(props) {
        super();
        this.state={
            id:props.courseID,
            short_title:"",
            small_img:"",
            short_description:"",
            long_title:"",
            total_lecture:"",
            total_student:"",
            long_des:"",
            skill_all:"",
            video_url:"",
            courses_link:"",
        }
    }
    componentDidMount() {

        RestClient.GetRequest(AppUrl.courseDetails+this.state.id).then(result =>{

            this.setState({
                short_title:result['short_title'],
                small_img:result['small_img'],
                short_description:result['short_description'],
                long_title:result['long_title'],
                total_lecture:result['total_lecture'],
                total_student:result['total_student'],
                long_des:result['long_des'],
                skill_all:result['skill_all'],
                video_url:result['video_url'],
                courses_link:result['courses_link']
            })
        }).catch(error=>{
            // this.setState({title:"?????",subtitle:"????"})
        });
    }
    render() {
        console.log(this.state.video_url)
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="courseFullTitle">{this.state.long_title}</h3>
                                    <h5 className="courseSubTitle">Total Lecture={this.state.total_lecture}</h5>
                                    <h5 className="courseSubTitle">Total Student={this.state.total_student}</h5>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                   <p className="courseDes">
                                       {
                                           this.state.long_des
                                       }
                                   </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                {
                    this.state.video_url &&(
                        <Container className="mt-5">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h1 className="serviceName">Skill You Get </h1>
                                    {
                                        ReactHtmlParser(this.state.skill_all)
                                    }

                                    <Button variant="primary">Buy Now</Button>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Player>
                                        {/*<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>*/}
                                        <source src={this.state.video_url}/>
                                        <BigPlayButton position="center" />
                                        <LoadingSpinner />
                                        <ControlBar autoHide={false}>
                                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                                            <VolumeMenuButton vertical />
                                            <ReplayControl seconds={5} order={2.1} />
                                            <ReplayControl seconds={10} order={2.2} />
                                            <ForwardControl seconds={5} order={3.1} />
                                            <ForwardControl seconds={10} order={3.2} />
                                        </ControlBar>
                                    </Player>
                                </Col>
                            </Row>
                        </Container>
                    )
                }

            </Fragment>
        );
    }
}

export default CourseDetails;