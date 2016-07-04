import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Router, Route, Redirect, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Redirect from="/" to="/1" />
    <Route path='/:pageNumber' component={App} />
  </Router>
), document.getElementById('app'))
