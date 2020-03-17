import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class PrivacyDescription extends Component {
    constructor() {
        super();
        this.state={
            desc: ""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.information).then(result =>{
            this.setState({desc:result[0]['privacy']})
        }).catch(error=>{
            // this.setState({title:"?????",subtitle:"????"})
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            {ReactHtmlParser(this.state.desc)}
                            </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyDescription;