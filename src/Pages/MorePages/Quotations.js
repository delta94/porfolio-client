import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, List, Button, Spin, Icon } from 'antd';
import { Redirect, withRouter } from 'react-router-dom';
import * as ActionCreators from 'Redux/actions/actionCreators';
import styles from './Quotations.module.scss';

class Quotations extends React.PureComponent {
    componentDidMount() {
        const { fetchQuotations } = this.props;
        fetchQuotations();
    }

    componentWillUnmount() {
        const { saveError } = this.props;
        saveError('fetchQuotations', false);
    }

    render() {
        const { quotations, fetchQuotationsLoading, fetchQuotationsError } = this.props;
        if (fetchQuotationsError)
            return <Redirect to={`/exception/${fetchQuotationsError}`} />;
        return (
            <Row className={styles.quotations}>
                <Row className={styles.hireMe}>
                    <div className={styles.hireMeCont}>
                        <div className={styles.title}>Favorite Quotes</div>
                        <div className={styles.text}>
                            Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?
                        </div>
                    </div>
                </Row>
                {(fetchQuotationsLoading || quotations.length === 0) ? (
                    <Row className={styles.loading}>
                        <div className={styles.inlineDiv}>
                            <Spin spinning size="large" tip="Fetching Quotations..." indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>} />
                        </div>
                    </Row>
                ) : (
                    <Row className={styles.quotationsList}>
                        <List
                            itemLayout="horizontal"
                            rowKey={record => record.id}
                            dataSource={quotations}
                            split={false}
                            renderItem={item => (
                            <List.Item key={item.id} style={{ marginBottom: 20 }}>
                                <List.Item.Meta
                                    title={`"${item.content}"`}
                                    description={item.author ? item.author : 'Sưu tầm'}
                                />
                            </List.Item>
                            )}
                        />
                    </Row>
                )}
            </Row>
        )
    }
};

const mapStateToProps = state => ({
    quotations: state.quotation,
    fetchQuotationsLoading: state.loading['fetchQuotations'] || false,
    fetchQuotationsError: state.error['fetchQuotations'] || false,
});

const mapDispatchToProps = dispatch => ({
    fetchQuotations: () => dispatch(ActionCreators.fetchQuotations()),
    saveError: (errorType, errorCode) => dispatch(ActionCreators.saveError(errorType, errorCode)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quotations));