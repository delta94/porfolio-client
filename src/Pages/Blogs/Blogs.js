import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Row, Col, Input, Spin, Icon, message } from 'antd';
import Blog from 'Components/Blog';
import * as ActionCreators from 'Redux/actions/actionCreators';
import styles from './Blogs.module.scss';

const { Search } = Input;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class Blogs extends React.PureComponent {
    state = {
        email: '',
    }

    componentDidMount() {
        const { fetchBlogs } = this.props;
        fetchBlogs();
    }

    componentWillUnmount() {
        const { saveError } = this.props;
        saveError('fetchBlogs', false);
    }

    handleSubscribeEmail = email => {
        if (!email || email.trim() === '' || !emailRegex.test(email))
            message.error('Your email is invalid!');
        else {
            message.success('You have subscribed successfully!');
            this.setState({
                email: ''
            });
        }
    }

    render() {
        const { blogs, fetchBlogsLoading, fetchBlogsError } = this.props;
        if (fetchBlogsError)
            return <Redirect to={`/exception/${fetchBlogsError}`} />;
        return (
            <Row className={styles.blogs}>
                <Row className={styles.subscribe}>
                    <div className={styles.subscribeCont}>
                        <div className={styles.title}>Blogs About Software Development And Life</div>
                        <div className={styles.text}>
                            Welcome to my blog. Subscribe and get my latest blog post in your inbox.
                        </div>
                        <div className={styles.subscribeBtn}>
                            <Search
                                placeholder="Enter email"
                                enterButton="Subscribe"
                                size="large"
                                onSearch={this.handleSubscribeEmail}
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </div>
                    </div>
                </Row>
                <Row className={styles.blogsList}>
                    {(fetchBlogsLoading || blogs.length === 0) ? (
                        <Row className={styles.loading}>
                            <div className={styles.inlineDiv}>
                                <Spin spinning size="large" tip="Fetching Blogs..." indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>} />
                            </div>
                        </Row>
                    ) : (
                        <Row className={styles.blogsList}>
                            {_.chunk(blogs , 3).map((blogsRow, i) => (
                                <Row key={i} className={styles.blogsRow} gutter={24}>
                                    {blogsRow.map((blog, j) => (
                                        <Col key={`${i}_${j}`} className={styles.blogItem} span={8}>
                                            <Blog blog={blog} />
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </Row>
                    )}
                </Row>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    fetchBlogsLoading: state.loading['fetchBlogs'] || false,
    fetchBlogsError: state.error['fetchBlogs'] || false,
    blogs: state.blog.list,
});

const mapDispatchToProps = dispatch => ({
    fetchBlogs: () => dispatch(ActionCreators.fetchBlogs()),
    saveError: (errorType, errorCode) => dispatch(ActionCreators.saveError(errorType, errorCode)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blogs));