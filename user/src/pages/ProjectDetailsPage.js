import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

class ProjectDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            projectID:match.params.projectId,
            projectName:match.params.projectName
        }
    }
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title={this.state.projectName}/>
                <PageTop pageTitle={this.state.projectName}/>
                <ProjectDetails id={this.state.projectID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;