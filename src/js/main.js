// React
import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

// Are we using this on some old browser?
//import requestAnimationFrame from './lib/requestAnimationFrame'
import '../scss/main.scss'

// Redux
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './reducers'

// Routing
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'

import Main from './components/Main'

// Marzipano
import MarzipanoCreator from './marzipano/MarzipanoCreator'

const history = createHashHistory()
const initialState = {}

const store = createStore(
  createRootReducer(history),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)

window.marzipanoInstance = new MarzipanoCreator(store, store.dispatch, history)

window.electron = process.env.VERSION === 'ELECTRON'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Main />
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)
