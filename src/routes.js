import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    );
}
