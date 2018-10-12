import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/layout';
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import NotFound from './components/404/404'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/about" exact component={About} />
                    <Route path="/" exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;