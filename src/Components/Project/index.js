import React from 'react';
import { truncate } from 'lodash';
import { Card, Row, Col, Button } from 'antd';
import styles from './index.module.scss';

export default ({ project }) => {
    return (
        <Card className={styles.project} bodyStyle={{ padding: 0 }}>
            <Row className={styles.content}>
                <Col span={8} className={styles.avatar}>
                    <img alt="avatar" src={project.avatar} /> 
                </Col>
                <Col span={16} className={styles.info}>
                    <div className={styles.name}>{project.name}</div>
                    <p className={styles.description}>{
                        truncate(project.description, {
                            length: 128,
                            separator: /,? +/
                        })
                    }</p>
                    <div className={styles.note}>{project.note}</div>
                </Col>
            </Row>
        </Card>
    )
};