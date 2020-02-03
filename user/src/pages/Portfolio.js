import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProject from "../components/AllProjects/AllProject";
import Footer from "../components/Footer/Footer";

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop pageTitle="All Project"/>
                <AllProject/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfolio;