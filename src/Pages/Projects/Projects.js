import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col, Button, Spin, Icon } from 'antd';
import Slide from 'react-reveal/Slide';
import { Link, Redirect, withRouter } from 'react-router-dom';
import * as ActionCreators from 'Redux/actions/actionCreators';
import Project from 'Components/Project';
import styles from './Projects.module.scss';

class Projects extends React.PureComponent {
    componentDidMount() {
        const { fetchProjects } = this.props;
        fetchProjects();
    }

    componentWillUnmount() {
        const { saveError } = this.props;
        saveError('fetchProjects', false);
    }

    render() {
        const { projects, fetchProjectsLoading, fetchProjectsError } = this.props;
        if (fetchProjectsError)
            return <Redirect to={`/exception/${fetchProjectsError}`} />;
        return (
            <Row className={styles.projects}>
                <Row className={styles.hireMe}>
                    <div className={styles.hireMeCont}>
                        <div className={styles.title}>My Projects</div>
                        <div className={styles.text}>
                            Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?
                        </div>
                        <div className={styles.btnCont}>
                            <Button type="primary" icon="fire" className={styles.hireBtn} size="large">
                                Hire me
                            </Button>
                        </div>
                    </div>
                </Row>
                {(fetchProjectsLoading || projects.length === 0) ? (
                    <Row className={styles.loading}>
                        <div className={styles.inlineDiv}>
                            <Spin spinning size="large" tip="Fetching Projects..." indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>} />
                        </div>
                    </Row>
                ) : (
                    <Row className={styles.projectsList}>
                        {_.chunk(projects , 2).map((projectsRow, i) => (
                            <Row key={i} className={styles.projectsRow} gutter={48}>
                                {projectsRow.map((project, j) => (
                                    <Col key={`${i}_${j}`} className={styles.projectItem} span={12}>
                                        <Link to={`/project/${project.id}`}><Slide top><Project project={project} /></Slide></Link>
                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </Row>
                )}
            </Row>
        )
    }
};

const mapStateToProps = state => ({
    projects: state.project.list,
    fetchProjectsLoading: state.loading['fetchProjects'] || false,
    fetchProjectsError: state.error['fetchProjects'] || false,
});

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(ActionCreators.fetchProjects()),
    saveError: (errorType, errorCode) => dispatch(ActionCreators.saveError(errorType, errorCode)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));