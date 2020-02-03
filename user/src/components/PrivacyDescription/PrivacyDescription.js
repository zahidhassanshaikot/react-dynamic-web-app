import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PrivacyDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <p className="serviceDescription"> My mission is to develop unique idea and quality software that will secure top ranking in marketplace, people's system and people's heart. Develop robust, secure, dynamic, responsive software for all platform (computer, tab, mobile phone). Provide top notch customer service, customization of our product according to customer demand and current technology. Planning advanced techniques for optimization, user experience and satisfaction of customer for our software. Planning flexible software that will not be bounded by any linguistic or regional restriction. I want to flourish software that can blow people's heart and soul</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PrivacyDescription;