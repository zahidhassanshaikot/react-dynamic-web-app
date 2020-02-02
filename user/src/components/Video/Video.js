import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton,LoadingSpinner,ControlBar,ReplayControl,ForwardControl,PlaybackRateMenuButton,VolumeMenuButton} from 'video-react';


class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false,
        }
    }
    modalClose=()=>this.setState({show:false});
    modalOpen=()=>this.setState({show:true});

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="videoTitle">How I Do</p>
                                <p className="videoDes">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                <p className="playBtn"><FontAwesomeIcon className="iconBullet" onClick={this.modalOpen} icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;