import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
