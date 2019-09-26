import React from 'react';
import styles from './index.module.scss';

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div><span style={{ color: '#1890ff' }}>2019</span> © Copyright. All right reserved.</div>
        </div>
    )
}

export default Footer;