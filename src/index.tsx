import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import Login from './Login'
import Users from './Users'
import ValidateAccount from './Login/ValidateAccount'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import './Colors.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducers from './reducers'

const store = createStore(Reducers)

ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/validateaccount" component={ValidateAccount} />
        </Switch>
      </HashRouter >
    </Provider>,
  document.getElementById('app') as HTMLElement
)
