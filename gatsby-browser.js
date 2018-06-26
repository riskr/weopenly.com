import React from 'react'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'


exports.replaceRouterComponent = ({ history }) => {

  const ConnectedRouterWrapper = ({ children }) => (
      <Router history={history}>{children}</Router>
  )

  return ConnectedRouterWrapper
}