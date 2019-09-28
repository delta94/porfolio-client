import React from 'react';
import { truncate } from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default ({ blog }) => {
    return (
        <div className={styles.blog}>
            <div className={styles.cover}>
                <img alt="avatar" src={blog.avatar} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    {blog.name}
                </div>
                <div className={styles.summary}>
                    {truncate(blog.summary, {
                        length: 130,
                        separator: /,? +/
                    })}
                </div>
                <div className={styles.readmore}>
                    <Link to={`/blog/${blog.id}`}>
                        Read more &rarr;
                    </Link>
                </div>
                <div className={styles.date}>
                    Published {moment(blog.date).fromNow()}
                </div>
            </div>
        </div>
    );
}