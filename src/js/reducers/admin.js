import _ from 'lodash'

const initialState = {
  hideAdminControls: true,
  menuOpen: true,
  controllingSpot: 1
}

export default (state = initialState, action) => {
  const newState = _.cloneDeep(state)

  switch (action.type) {
    case 'ADD_HOTSPOT':
      newState.controllingSpot = action.data.id
      return newState
    case 'SELECT_CONTROLLABLE_HOTSPOT':
      newState.controllingSpot = action.data.id
      return newState
    case 'TOGGLE_ADMIN_MENU':
      newState.menuOpen = newState.menuOpen !== true
      return newState
  }

  return state
}
