import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/:pageNumber' component={App} />
  </Router>
), document.getElementById('app'))
