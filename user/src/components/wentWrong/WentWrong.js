import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import error from "../../asset/image/error.svg";

class WentWrong extends Component {
    render() {
        return (
            <>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="loaderAnimation" src={error}/>
                        </Col>
                    </Row>
                </Container>

            </>
        );
    }
}

export default WentWrong;