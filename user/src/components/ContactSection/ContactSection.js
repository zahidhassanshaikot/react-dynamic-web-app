import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../loading/loading";
import WentWrong from "../wentWrong/WentWrong";

class ContactSection extends Component {
    constructor() {
        super();
        this.state={
            address: "",
            email: "",
            phone: "",
            loading:true
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.footer).then(result =>{

            if(result==null){
                this.setState({ error:true,loading:false })
            }else{
                this.setState({
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    loading:false
                })
            }
        }).catch(error=>{
            this.setState({ error:true,loading:false })
        });
    }
    sendContact(){
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let message=document.getElementById("message").value;

        let jsonObject={name:name,email:email,message:message};
        RestClient.PostRequest(AppUrl.contactSend,JSON.stringify(jsonObject)).then(result =>{
            alert(result)
        }).catch(error=>{
            alert("error")
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
                                <h1 className="serviceName">Quick Connect</h1>

                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label className="serviceDescription">Name</Form.Label>
                                        <Form.Control type="text" id="name" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="serviceDescription">Email address</Form.Label>
                                        <Form.Control type="email" id="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicMessage">
                                        <Form.Label className="serviceDescription">Message</Form.Label>
                                        <Form.Control as="textarea" id="message" rows="3" />
                                    </Form.Group>

                                    <Button variant="primary" onClick={this.sendContact} >
                                        Submit
                                    </Button>
                                </Form>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Discuss Now</h1>
                                <p className="serviceDescription">{this.state.address}</p>
                                <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> {this.state.email}</p>
                                <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> {this.state.phone}</p>
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

export default ContactSection;