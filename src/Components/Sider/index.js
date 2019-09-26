import React, { PureComponent } from 'react';
import _ from 'lodash';
import RouteConfigs from 'Configs/route.config';
import { Layout, Menu, Avatar, Divider, Row, Col, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import SocialButton from 'Elements/SocialButton';
import styles from './index.module.scss';
import avatarImage from 'Assets/images/photo.jpg';

const MenuItem = Menu.Item;
const { Sider } = Layout;
const Socials = [
    {
        type: 'google',
        link: 'mailto:luannguyentrong98@gmail.com&subject=Contact',
    },
    {
        type: 'instagram',
        link: 'https://instagram.com',
    },
    {
        type: 'twitter',
        link: 'https://twitter.com/LuanNguyenTron3',
    },
    {
        type: 'github',
        link: 'https://github.com/luantnguyen',
    },
    {
        type: 'codepen',
        link: 'https://codepen.com'
    }
];

class FixedSider extends PureComponent {
    handleSelectLink = (params) => {
        const { history } = this.props;
        history.push(`/${params.key}`);
    }

    toMenuItem = route => {
        if (route.redirect || route.hideInMenu)
            return null;
        if (route.component) {
            return (
                <MenuItem key={route.key}>
                    <Icon type={route.icon} />
                    <span>{route.name}</span>
                </MenuItem>
            );
        }
        else if (route.routes)
        {
            return (
                <Menu.SubMenu key={route.key} title={
                    <span>
                        <Icon type={route.icon} />
                        <span>{route.name}</span>
                    </span>
                }>
                    {route.routes.map(childRoute => this.toMenuItem({
                        ...childRoute,
                        key: `${route.key}/${childRoute.key}`,
                    }))}
                </Menu.SubMenu>
            );
        }
        return null;
    };

    render() {
        const {
            location,
        } = this.props;
        const paths = _.split(_.trimStart(location.pathname, '/'), '/');
        let openKeys = [];
        let selectedKeys = [];
        if (paths.length === 1)
            selectedKeys = [paths[0]];
        else if (paths.length === 2) {
            openKeys = [paths[0]];
            selectedKeys = [`${paths[0]}/${paths[1]}`];
        }
        return (
            <Sider className={styles.sider}>
                <div className={styles.avatarCont}>
                    <div className={styles.name}>Luan Nguyen</div>
                    <div className={styles.avatar}>
                        <Avatar shape="circle" src={avatarImage} alt="Avatar" size={120} style={{ backgroundColor: 'white' }}/>
                    </div>
                    <div className={styles.description}>
                        Front End Developer passionate about Javascript, especially ReactJS Framework.
                    </div>
                    <div className={styles.social}>
                        <Row gutter={32} style={{ position: 'relative', right: '-12px' }}>
                            {Socials.map(social => (
                                <Col span={Math.floor(24 / Socials.length)} key={social.type}>
                                    <SocialButton type={social.type} link={social.link}/>
                                </Col>
                            ))}
                        </Row>    
                    </div>
                </div>
                <Divider dashed />
                <div className={styles.menu}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        onSelect={this.handleSelectLink}
                        defaultOpenKeys={openKeys}
                        selectedKeys={selectedKeys}
                    >
                        {RouteConfigs.map(this.toMenuItem)}
                    </Menu>
                </div>
            </Sider>
        )
    }
}

export default withRouter(FixedSider);