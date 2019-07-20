
import React from 'react';
import { Route } from 'react-router-dom';
import Page1  from './Page1'
import Page2  from './Page2'

export default [
    <Route exact path="/page1" component={Page1} />,
    <Route exact path="/page2" component={Page2} />,
    <Route exact path="/page3" component={Page1} noLayout />,
];