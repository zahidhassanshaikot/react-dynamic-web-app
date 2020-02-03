import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';

class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navItem:"navItem",
            navVariant:"dark",
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                navBarTitle:'navTitleScroll',
                navBarLogo:[blueLogo],
                navBarBack:"navBackgroundScroll",
                navItem:"navItemScroll",
                navVariant:"light",
            });
        }else if(window.scrollY<100){
            this.setState({
                navBarTitle:'navTitle',
                navBarLogo:[whiteLogo],
                navBarBack:"navBackground",
                navItem:"navItem",
                navVariant:"dark",
            });
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> Zahid Hassan Shaikot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className={ this.state.navItem} href="#deets">Home</Nav.Link>
                            <Nav.Link className={ this.state.navItem} href="#deets">Services</Nav.Link>
                            <Nav.Link className={ this.state.navItem} href="#deets">Courses</Nav.Link>
                            <Nav.Link className={ this.state.navItem} href="#deets">Portfolio</Nav.Link>
                            <Nav.Link className={ this.state.navItem} href="#deets">Contact</Nav.Link>
                            <Nav.Link className={ this.state.navItem} href="#deets">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;