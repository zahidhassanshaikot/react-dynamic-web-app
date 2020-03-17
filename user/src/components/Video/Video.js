import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton,LoadingSpinner,ControlBar,ReplayControl,ForwardControl,PlaybackRateMenuButton,VolumeMenuButton} from 'video-react';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";


class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            video_description:"",
            video_url:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.videoHome).then(result =>{
            this.setState({
                video_description:result[0]['video_description'],
                video_url:result[0]['video_url']
            })
        }).catch(error=>{
            // this.setState({title:"?????",subtitle:"????"})
        });
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
                                <p className="videoDes">{this.state.video_description}</p>
                                <p className="playBtn"><FontAwesomeIcon className="iconBullet" onClick={this.modalOpen} icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>
                        <Player>
                            <source src={this.state.video_url} />
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