import React from 'react';
import { Link } from 'react-router-dom';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import PropTypes from 'prop-types';
import styles from './Exception.module.scss';

class Exception extends React.PureComponent {

    render() {
        const { errorCode, errorMessage } = this.props;
        return (
            <div className={styles.parent}>
                <div className={styles.inlineDiv}>
                    <RubberBand><div className={styles.errorCode}>{errorCode}</div></RubberBand>
                    <Bounce right><div className={styles.errorMessage}>Oops! {errorMessage}</div></Bounce>
                    <Bounce left><div className={styles.backToHome}><Link to="/">&larr; Home Page</Link></div></Bounce>
                </div>
            </div>
        )
    }
}

Exception.propTypes = {
    errorCode: PropTypes.oneOf([403, 404, 500, 502]),
    errorMessage: PropTypes.string,
}

export default Exception;