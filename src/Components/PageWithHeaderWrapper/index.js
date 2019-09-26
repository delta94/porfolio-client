import React from 'react';
import { Layout } from 'antd';
import LayoutWithScrollbar from 'Components/Layout';
import Footer from 'Components/Footer';
import Header from 'Components/Header';

const { Content } = Layout;

class PageWithHeaderWrapper extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <LayoutWithScrollbar>
              <Header />
              <Content style={{ backgroundColor: 'white' }}>
                {children}
              </Content>
              <Footer />
            </LayoutWithScrollbar>
        )
    }
}

export default PageWithHeaderWrapper;