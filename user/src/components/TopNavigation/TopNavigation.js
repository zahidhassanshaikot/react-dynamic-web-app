import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navItem:"navItem",
            navVariant:"dark",
            pageTitle:props.title,
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
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> Zahid Hassan Shaikot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={ this.state.navItem} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={ this.state.navItem} to="/service">Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={ this.state.navItem} to="/course">Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={ this.state.navItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={ this.state.navItem} to="/contact">Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={ this.state.navItem} to="/about">About</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;