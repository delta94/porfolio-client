import React from 'react';
import Icon from 'Elements/Icon';
import styles from './index.module.scss';

export default ({ icons }) => {
    return (
        <div className={styles.icons}>
            {icons.map(icon => <Icon key={icon} type={icon} />)}
        </div>
    )
}