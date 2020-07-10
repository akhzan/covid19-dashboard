import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../pages/App'
import { PUBLIC_URL } from '../config/url'

const RouteConfig = (
  <Router basename={PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>
)

export default RouteConfig
