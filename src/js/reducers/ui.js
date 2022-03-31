import _ from 'lodash'

const initialState = {
  introOpen: false,
  videoOverlay: {
    open: false,
    changing: false
  },
  heroMinimized: false,
  showHotspots: true,
  mapOverlay:{
    open: false,
    changing: false
  },
  urlSegments: []
}

export default (state = initialState, action) => {
  const newState = _.cloneDeep(state)
  let urlSegments = null

  switch (action.type) {
    case 'OPEN_VIDEO_OVERLAY':
      newState.videoOverlay.open = true
      newState.videoOverlay.changing = true
      return newState
    case 'OPENED_VIDEO_OVERLAY':
      newState.videoOverlay.open = true
      newState.videoOverlay.changing = false
      return newState
    case 'CLOSE_VIDEO_OVERLAY':
      newState.videoOverlay.changing = true
      return newState
    case 'CLOSED_VIDEO_OVERLAY':
      newState.videoOverlay.changing = false
      newState.videoOverlay.open = false
      return newState
    case 'OPEN_MAP_OVERLAY':
      newState.mapOverlay.open = true
      newState.mapOverlay.changing = true
      return newState
    case 'OPENED_MAP_OVERLAY':
      newState.mapOverlay.open = true
      newState.mapOverlay.changing = false
      return newState
    case 'CLOSE_MAP_OVERLAY':
      newState.mapOverlay.changing = true
      return newState
    case 'CLOSED_MAP_OVERLAY':
      newState.mapOverlay.open = false
      return newState
    case 'EXPAND_HERO':
      newState.heroMinimized = false
      return newState
    case 'MINIMIZE_HERO':
      newState.heroMinimized = true
      return newState
    case 'HIDE_HOTSPOTS':
      newState.showHotspots = false
      return newState
    case 'CLOSE_INTRO':
      newState.introOpen = false
      newState.showHotspots = true
      return newState
    case '@@router/LOCATION_CHANGE':
      // Hotspot is open
      urlSegments = action.payload.location.pathname.split('/')

      // Area changed
      if(urlSegments[1] !== state.urlSegments[1]) {
        newState.introOpen = true
        newState.showHotspots = false
      }

      if(urlSegments.length > 2) {
        newState.introOpen = false
        newState.showHotspots = true
      }

      newState.heroMinimized = true
      newState.urlSegments = urlSegments

      return newState
  }

  return state
}
