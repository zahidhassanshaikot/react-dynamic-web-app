import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../loading/loading";
import WentWrong from "../wentWrong/WentWrong";

class ProjectDetails extends Component {
    constructor(props) {
        super();
        this.state={
            myProjectId:props.id,
            project_name:"",
            short_description:"",
            project_fetures:"",
            live_preview:"",
            img_two:"",
            loading:true,
            error:false
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.projectDetails+this.state.myProjectId).then(result =>{
            if(result==null){
                this.setState({ error:true,loading:false })
            }else{
                this.setState({
                    project_name:result['project_name'],
                    short_description:result['short_description'],
                    project_fetures:result['project_fetures'],
                    live_preview:result['live_preview'],
                    img_two:result['img_two'],
                    loading:false
                })
            }

        }).catch(error=>{
            this.setState({ error:true,loading:false })
        });
    }

    render() {
        if(this.state.loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.loading==false && this.state.error==false){
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="mt-4 w-100" src={this.state.img_two}/>
                                {/*<img className="serviceName CourseImage" src={this.state.img_two}/>*/}
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">{this.state.project_name}</h2>
                                <p className="serviceDescription">{this.state.short_description}</p>

                                {
                                    ReactHtmlParser(this.state.project_fetures)
                                }

                                <Button target="_blank" href={"//"+this.state.live_preview} variant="primary">More Info</Button>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default ProjectDetails;