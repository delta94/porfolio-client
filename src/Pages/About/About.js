import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as ActionCreators from 'Redux/actions/actionCreators';
import { Carousel, Row, Col, Button, Divider, Spin, Icon } from 'antd';
import { withRouter, Link, Redirect } from 'react-router-dom';
import SkillIcons from 'Components/SkillIcons';
import Friend from 'Components/Friend';
import Project from 'Components/Project';
import styles from './About.module.scss';
import avatar from 'Assets/images/avatar.jpg';

const sampleFriend = {
    url: 'www.facebook.com',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Luan Nguyen Trong',
    description: 'He is a front end developer at Teko JSC.',
};

const sampleProject = {
    id: 0,
    name: 'BK Messenger',
    avatar: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    description: 'The project of my team for first Computer Networking assignment. In this project, I am responsible for back-end, design database, make APIs',
    note: 'Back end, Java, MySQL'
};

const range = (start = 0, end) => {
    let res = [];
    for (let i = start; i < end; ++i)
        res.push(i);
    return res;
};

class About extends PureComponent {

    componentDidMount() {
        const {
            fetchSkills,
            fetchFeatureProjects,
            fetchFriends,
        } = this.props;
        fetchSkills();
        fetchFeatureProjects();
        fetchFriends();
    }

    componentWillUnmount() {
        const { saveError } = this.props;
        const errors = ['fetchSkills', 'fetchFeatureProjects', 'fetchFriends'];
        for (let i = 0; i < errors.length; ++i)
            saveError(errors[i], false);
    }

    render() {
        const {
            skills,
            featureProjects,
            friends,
            fetchSkillsLoading,
            fetchFeatureProjectsLoading,
            fetchFriendsLoading,
            fetchSkillsError,
            fetchFeatureProjectsError,
            fetchFriendsError,
        } = this.props;
        const errors = [fetchSkillsError, fetchFriendsError, fetchFeatureProjectsError];
        for (let i = 0; i < errors.length; ++i) {
            if (errors[i])
                return <Redirect to={`/exception/${errors[i]}`} />;
        }

        return (
            <Row className={styles.about}>
                <Row className={styles.information}>
                    <Col span={16} className={styles.text}>
                        <div className={styles.name}>Luan Nguyen</div>
                        <div className={styles.job}>Junior Frontend Developer</div>
                        <p className={styles.description}>I'm a Frontend Engineer specialised in <span>reactjs</span> and <span>vuejs</span> development for complex 
                        scalable web apps. I write about software development on my blog. Want to know how I may 
                        help your project? Check out my project portfolio and online resume.</p>
                        <div className={styles.btns}>
                            <Button type="primary" icon="right-circle" className={styles.porBtn} size="large" style={{ marginRight: 10 }}>
                                View Portfolio
                            </Button>
                            <Button type="primary" icon="solution" className={styles.resumeBtn} size="large">
                                View Resume
                            </Button>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <img src={avatar} alt="avatar" style={{ width: '100%' }}/>
                        </div>
                    </Col>
                </Row>
                
                <Row className={styles.whatIDo}>
                    <div className={styles.title}>What I Do</div>
                    <div className={styles.text}>I have more than 1 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill 
                    sets and technologies I use. Want to find out more about my experience? Check out my online <Link to="/more-pages/resume">resume</Link> and <Link to="/projects">project portfolio</Link>.</div>
                    <Row className={styles.skills}>
                        {(fetchSkillsLoading || skills.length === 0) ? (
                            <Row className={styles.skillsRow} gutter={32}>
                                {range(0, 4).map(n => (
                                    <Col span={6} key={n} className={styles.skillItem}>
                                        <Spin spinning tip="Loading Skill..." indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>}>
                                            <SkillIcons icons={['react']} />
                                            <div className={styles.name}>ReactJS</div>
                                            <div className={styles.description}>
                                                List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                                            </div>
                                        </Spin>
                                    </Col>
                                ))}
                            </Row>
                        ) : (
                            <React.Fragment>
                                {_.chunk(skills, 4).map((skillsRow, i) => (
                                    <Row key={i} className={styles.skillsRow} gutter={32}>
                                        {skillsRow.map((skill, j) => (
                                            <Col span={6} key={`${i}_${j}`} className={styles.skillItem}>
                                                <SkillIcons icons={skill.icons} />
                                                <div className={styles.name}>{skill.name}</div>
                                                <div className={styles.description}>{_.truncate(skill.description, { length: 145, separator: /,? +/ })}</div>
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </React.Fragment>
                        )}
                        
                    </Row>
                </Row>
                <div style={{ padding: '0 60px' }}><Divider style={{ marginTop: 60, marginBottom: 60 }} /></div>
                <Row className={styles.friends}>
                    <div className={styles.title}>Friends & Colleagues</div>
                    <div className={styles.text}>My friends and colleagues have always motivated me to rise every day.</div>
                    <Row className={styles.friendsList}>
                        <Carousel autoplay>
                            {(fetchFriendsLoading || friends.length === 0) ? (
                                [range(0, 3), range(3, 6)].map((l, i) => (
                                    <Row key={i} className={styles.friendsGroup} gutter={32}>
                                        {l.map(n => (
                                            <Col key={n} span={8} className={styles.friendItem}>
                                                <Friend loading friend={sampleFriend} />
                                            </Col>
                                        ))}
                                    </Row>
                                ))
                            ) : (
                                _.chunk(friends, 3).map((friendsGroup, i) => (
                                    <Row key={i} className={styles.friendsGroup} gutter={32}>
                                        {friendsGroup.map((friend, j) => (
                                            <Col key={`${i}_${j}`} span={8} className={styles.friendItem}>
                                                <Friend friend={friend} />
                                            </Col>
                                        ))}
                                    </Row>
                                ))
                            )}
                        </Carousel>
                    </Row>
                </Row>
                <div style={{ padding: '0 60px' }}><Divider style={{ marginTop: 60, marginBottom: 60 }} /></div>
                <Row className={styles.lastedProjects}>
                    <div className={styles.title}>Feature Projects</div>
                    <Row className={styles.projectsList}>
                        {fetchFeatureProjectsLoading || featureProjects.length === 0 ? (
                            <Row className={styles.projectsRow} gutter={48}>
                                {range(0, 2).map(n => (
                                    <Col key={n} className={styles.projectItem} span={12}>
                                        <Spin spinning tip="Loading Project..." indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>}>
                                            <Project project={sampleProject} />
                                        </Spin>
                                    </Col>
                                ))}
                            </Row>
                        ) : (
                            <React.Fragment>
                                {_.chunk(featureProjects , 2).map((projectsRow, i) => (
                                    <Row key={i} className={styles.projectsRow} gutter={48}>
                                        {projectsRow.map((project, j) => (
                                            <Col key={`${i}_${j}`} className={styles.projectItem} span={12}>
                                                <Project project={project} />
                                            </Col>
                                        ))}
                                    </Row>
                                ))}
                            </React.Fragment>
                        )}
                        
                    </Row>
                    <Row className={styles.btnRedirect}>
                        <Link to="/projects">
                            <Button type="primary" icon="login" className={styles.redirect} size="large">
                                View Projects
                            </Button>
                        </Link>
                    </Row>
                </Row>
            </Row>
        )
    };
}

const mapStateToProps = state => ({
    fetchSkillsLoading: state.loading['fetchSkills'] || false,
    fetchFeatureProjectsLoading: state.loading['fetchFeatureProjects'] || false,
    fetchFriendsLoading: state.loading['fetchFriends'] || false,
    friends: state.friend,
    skills: state.skill,
    featureProjects: state.project.feature,
    fetchSkillsError: state.error['fetchSkills'] || false,
    fetchFeatureProjectsError: state.error['fetchFeatureProjects'] || false,
    fetchFriendsError: state.error['fetchFriends'] || false,
});

const mapDispatchToProps = dispatch => ({
    fetchSkills: () => dispatch(ActionCreators.fetchSkills()),
    fetchFeatureProjects: () => dispatch(ActionCreators.fetchFeatureProjects()),
    fetchFriends: () => dispatch(ActionCreators.fetchFriends()),
    saveError: (errorType, errorCode) => dispatch(ActionCreators.saveError(errorType, errorCode))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));