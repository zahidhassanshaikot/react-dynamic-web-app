import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../loading/loading";
import WentWrong from "../wentWrong/WentWrong";


class TopBanner extends Component {
    constructor() {
        super();
        this.state={
            title:"",
            subtitle:"",
            loaderClass:"text-center",
            mainDivClass:"d-none",
            wentWrongClass:"d-none",
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result =>{
            if(result==null){
                this.setState({
                    loaderClass:"d-none",
                    mainDivClass:"d-none",
                    wentWrongClass:"text-center"
                })
            }else{
                this.setState({
                    title:result[0]['home_title'],
                    subtitle:result[0]['home_subtitle'],
                    loaderClass:"d-none",
                    mainDivClass:"text-center"
                })
            }

        }).catch(error=>{
            this.setState({
                loaderClass:"d-none",
                mainDivClass:"d-none",
                wentWrongClass:"text-center"
            })
        });

    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className={this.state.wentWrongClass}>
                                    <WentWrong/>
                                </Col>
                                <Col className={this.state.loaderClass}>
                                    <Loading/>
                                </Col>
                                <Col className={this.state.mainDivClass}>

                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;