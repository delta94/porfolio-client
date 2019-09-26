import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadingPage from 'Elements/LoadingPage';

const asyncComponent = (getComponent) => {
    return class AsyncComponent extends React.Component {
        timeout = null
        state = {
            Component: null,
        }
        componentDidMount() {
            if (!this.state.Component) {
                this.timeout = setTimeout(() => {
                    getComponent().then(Component => {
                        this.setState({
                            Component
                        });
                    })
                }, 500);
            }
        }
        componentWillUnmount() {
            if (this.timeout)
                clearTimeout(this.timeout);
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />;
            }
            return <LoadingPage />;
        }
    };
};

const asyncComponentFromPath = (component) => { 
    return asyncComponent(() => {
        return import(`Pages/${component}`).then(module => module.default);
    });
};

export function toRoute(route) {
    if (route.redirect) {
        if (route.path)
            return <Redirect exact from={route.path} to={route.redirect} />;
        return <Redirect to={route.redirect} />;
    }
    if (!route.path) {
        if (route.component)
            return <Route component={asyncComponentFromPath(route.component)} />;
    }
    else {
        if (route.routes) {
            return (
                <Route
                    path={route.path}
                    render={({ match }) => (
                        <Switch>
                            {route.routes.map(r => {
                                let pathObj = {};
                                if (r.path !== undefined)
                                    pathObj.path = `${match.path}${r.path}`;
                                return toRoute({ ...r, ...pathObj });
                            })}
                        </Switch>
                    )}
                />);
        }
        else if (route.component) {
            return (
                <Route exact path={route.path} component={asyncComponentFromPath(route.component)} />
            );
        }
    }
    return null;
}