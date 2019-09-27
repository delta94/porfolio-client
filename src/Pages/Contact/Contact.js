import React from 'react';
import { Row, Col, Form, Icon, message } from 'antd';
import styles from './Contact.module.scss';

const links = [
    {
        icon: 'google',
        link: 'mailto:luannguyentrong98@gmail.com',
    },
    {
        icon: 'instagram',
        link: 'https://www.instagram.com/bk_hardware',
    },
    {
        icon: 'twitter',
        link: 'https://www.twitter.com',
    },
    {
        icon: 'github',
        link: 'https://www.github.com/luantnguyen'
    },
    {
        icon: 'medium',
        link: 'https://www.medium.com',
    },
    {
        icon: 'codepen',
        link: 'https://www.codepen.com',
    },
];

const Contact = (props) => {
    return (
        <Row className={styles.contact}>
            <Row className={styles.slogan}>
                <div className={styles.sloganCont}>
                    <div className={styles.title}>Contact</div>
                    <div className={styles.text}>
                        Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <span>luannguyentrong98@gmail.com</span>
                    </div>
                    <div className={styles.follow}>
                        <div className={styles.text}>
                            Want to get connected? Follow me on the social channels below.
                        </div>
                        <div className={styles.linkCont}>
                            <Row gutter={24} className={styles.links}>
                                {links.map((link, i) => (
                                    <Col key={i} span={4}>
                                        <a href={link.link} target="blank">
                                            <Icon type={link.icon} />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </Row>
            
        </Row>
    )
};

export default Contact;