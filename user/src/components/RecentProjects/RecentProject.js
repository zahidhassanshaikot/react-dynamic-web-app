import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class RecentProject extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.projectHome).then(result =>{
            this.setState({myData:result})
        }).catch(error=>{
            // this.setState({title:"?????",subtitle:"????"})
        });

    }
    render() {

        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={4} md={6} sm={12} className="p-2">
                <Card className="projectCard">
                    <Card.Img variant="top" src={myList.img_one} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                        <Card.Text className="projectCardDes">
                            {myList.short_description}
                        </Card.Text>
                        <Button variant="primary"><Link className="linkStyle" to={"/project-details/"+myList.id+"/"+myList.project_name}>Details </Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        })

        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        {myView}
                        {/*<Col lg={4} md={6} sm={12} className="p-2">*/}
                        {/*    <Card className="projectCard">*/}
                        {/*        <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png" />*/}
                        {/*        <Card.Body>*/}
                        {/*            <Card.Title className="projectCardTitle">Card Title</Card.Title>*/}
                        {/*            <Card.Text className="projectCardDes">*/}
                        {/*                Some quick example text to build on the card title and make up the bulk of*/}
                        {/*                the card's content.*/}
                        {/*            </Card.Text>*/}
                        {/*            <Button variant="primary"><Link className="linkStyle" to="/project-details">Details </Link></Button>*/}
                        {/*        </Card.Body>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col lg={4} md={6} sm={12} className="p-2">*/}
                        {/*    <Card className="projectCard">*/}
                        {/*        <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png" />*/}
                        {/*        <Card.Body>*/}
                        {/*            <Card.Title className="projectCardTitle">Card Title</Card.Title>*/}
                        {/*            <Card.Text className="projectCardDes">*/}
                        {/*                Some quick example text to build on the card title and make up the bulk of*/}
                        {/*                the card's content.*/}
                        {/*            </Card.Text>*/}
                        {/*            <Button variant="primary"><Link className="linkStyle" to="/project-details">Details </Link></Button>*/}
                        {/*        </Card.Body>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col lg={4} md={6} sm={12} className="p-2">*/}
                        {/*    <Card className="projectCard">*/}
                        {/*        <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/mobilepondit.png" />*/}
                        {/*        <Card.Body>*/}
                        {/*            <Card.Title className="projectCardTitle">Card Title</Card.Title>*/}
                        {/*            <Card.Text className="projectCardDes">*/}
                        {/*                Some quick example text to build on the card title and make up the bulk of*/}
                        {/*                the card's content.*/}
                        {/*            </Card.Text>*/}
                        {/*            <Button variant="primary"><Link className="linkStyle" to="/project-details">Details </Link></Button>*/}
                        {/*        </Card.Body>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProject;