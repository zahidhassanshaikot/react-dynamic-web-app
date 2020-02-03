import React, {Component, Fragment} from 'react';
import Footer from "../components/Footer/Footer";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course" />
                <PageTop pageTitle="All Courses"/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesPage;