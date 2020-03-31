import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";

class CourseDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            courseID:match.params.courseId,
            courseName:match.params.courseName


        }
    }
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {

        return (
            <Fragment>
                <TopNavigation title={this.state.courseName}/>
                <CourseDetails courseID={this.state.courseID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;