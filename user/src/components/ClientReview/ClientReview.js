import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import {Link} from "react-router-dom";


class ClientReview extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result => {
            this.setState({myData: result})
        }).catch(error => {

        });
    }

    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <div>
                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img className="circleImg" src={myList.client_img}/>
                        <h1 className="serviceName">{myList.client_title}</h1>
                        <p className="serviceDescription">{myList.client_description}</p>
                    </Col>
                </Row>
            </div>
        })

        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        {myView}
                        {/*<div>*/}
                        {/*    <Row className="text-center justify-content-center">*/}
                        {/*        <Col lg={6} md={6} sm={12}>*/}
                        {/*            <img className="circleImg" src="https://avatars3.githubusercontent.com/u/20878483?s=400&v=4"/>*/}
                        {/*            <h1 className="serviceName">Web Development</h1>*/}
                        {/*            <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding.</p>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Row className="text-center justify-content-center">*/}
                        {/*        <Col lg={6} md={6} sm={12}>*/}
                        {/*            <img className="circleImg" src="https://avatars3.githubusercontent.com/u/20878483?s=400&v=4"/>*/}
                        {/*            <h1 className="serviceName">Web Development</h1>*/}
                        {/*            <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding.</p>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <Row className="text-center justify-content-center">*/}
                        {/*        <Col lg={6} md={6} sm={12}>*/}
                        {/*            <img className="circleImg" src="https://avatars3.githubusercontent.com/u/20878483?s=400&v=4"/>*/}
                        {/*            <h1 className="serviceName">Web Development</h1>*/}
                        {/*            <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding.</p>*/}
                        {/*        </Col>*/}
                        {/*    </Row>*/}
                        {/*</div>*/}

                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;