import React from 'react';
import _ from 'lodash';
import { Tooltip, Card, Avatar } from 'antd';
import bkLogo from 'Assets/images/hcmut.png';
import styles from './index.module.scss';

const { Meta } = Card;

const mapSchoolToLogo = {
    hcmut: bkLogo,
};

export default ({ friend, loading = false }) => {
    const descript = _.truncate(friend.description, {
        'length': 110,
        'separator': /,? +/
    });
    const logo = friend.school && mapSchoolToLogo[friend.school];
    return (
        <Tooltip title={friend.description} placement="top">
            <Card
                className={styles.friend}
                loading={loading}
                onClick={() => window.location.href = friend.url}
                bodyStyle={{
                    height: 158,
                }}
            >
                <Meta
                    className={styles.meta}
                    avatar={
                    <Avatar src={friend.avatar} size={64} />
                    }
                    title={
                        <div style={{ position: 'relative' }}>
                            <span>{friend.name}</span>
                            {logo ? <img src={logo} alt="school" height="25" width="25" style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                            }}/> : null}
                        </div>
                    }
                    description={descript}
                />
            </Card>
        </Tooltip>
    )
}