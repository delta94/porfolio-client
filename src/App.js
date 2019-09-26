import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import configureStore from 'Redux/store';
import { Layout } from 'antd';
import LayoutWithScrollbar from 'Components/Layout';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import Sider from 'Components/Sider'
import RouteConfigs from 'Configs/route.config';
import { toRoute } from 'Utils/route';
import styles from './App.module.css';

const { Content } = Layout;
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.main}>
          <Layout>
            <Sider />
            <LayoutWithScrollbar>
              <Header />
              <Content style={{ backgroundColor: 'white' }}>
                <Switch>
                  {RouteConfigs.map(route => toRoute(route))}
                </Switch>
              </Content>
              <Footer />
            </LayoutWithScrollbar>
          </Layout>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
