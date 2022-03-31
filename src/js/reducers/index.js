import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import marzipano from './marzipano'
import ui from './ui'
import admin from './admin'

export default (history) => combineReducers({
  router: connectRouter(history),
  ui: ui,
  marzipano,
  admin
})
