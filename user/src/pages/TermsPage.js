import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms"/>
                <PageTop pageTitle="Terms of Use"/>
                <TermsDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;