import React from 'react';
import { Button } from 'antd';
import SocialTypes from './SocialTypes';
import styles from './SocialButton.module.scss';

const MapTypeToIcon = { 
    [SocialTypes.FACEBOOK]: 'facebook',
    [SocialTypes.GOOGLE]: 'google',
    [SocialTypes.TWITTER]: 'twitter',
    [SocialTypes.INSTAGRAM]: 'instagram',
    [SocialTypes.CODEPEN]: 'codepen',
    [SocialTypes.GITHUB]: 'github',
};

const SocialButton = props => {
    const { type, link, history, ...restProps } = props;
    return (
        <a href={link} target="_blank">
            <Button type="default" shape="circle" icon={MapTypeToIcon[type]} className={styles.button} {...restProps} />
        </a>
    )
};

export default SocialButton;