import _ from 'lodash'

const acceptanceSpots = '[{"id":"acceptance-0","icon":"acceptance5","position":{"pitch":0.16,"yaw":3.106},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"acceptance-1","icon":"acceptance3","position":{"pitch":-0.29,"yaw":3.604},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"acceptance-2","icon":"acceptance2","position":{"pitch":-0.146,"yaw":1.188},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"acceptance-3","icon":"acceptance4","position":{"pitch":-0.254,"yaw":5.346},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"acceptance-4","icon":"acceptance1","position":{"pitch":0,"yaw":4.826},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"acceptance-5","icon":"acceptance6","position":{"pitch":-0.114,"yaw":2.576},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}}]'

const generalSposts = '[{"id":"general-0","icon":"general1","position":{"pitch":-0.046,"yaw":6.17},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"general-1","icon":"general4","position":{"pitch":-0.162,"yaw":4.582},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"general-2","icon":"barcodeIcon","position":{"pitch":-0.138,"yaw":2.136},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"general-3","icon":"general2","position":{"pitch":-0.138,"yaw":1.188},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"general-4","icon":"general5","position":{"pitch":-0.1,"yaw":3.9},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"general-5","icon":"general6","position":{"pitch":0,"yaw":3.194},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}}]'

const perishablesSpots = '[{"id":"perishable-0","icon":"perishables3","position":{"pitch":-0.138,"yaw":1.254},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"perishable-1","icon":"perishables1","position":{"pitch":-0.062,"yaw":3.966},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"perishable-2","icon":"perishables2","position":{"pitch":-0.038,"yaw":0.372},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"perishable-3","icon":"perishables4","position":{"pitch":-0.07,"yaw":5.178},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"perishable-4","icon":"perishables5","position":{"pitch":0.138,"yaw":2.294},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}}]'

const controlSpots = '[{"id":"control-0","icon":"e2e-visibility","position":{"yaw":5.86,"pitch":0.046},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"control-1","icon":"pallet-handling","position":{"pitch":-0.092,"yaw":1.542},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"control-2","icon":"disruption-management","position":{"pitch":-0.046,"yaw":0.638},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"control-3","icon":"iot-monitoring","position":{"pitch":-0.172,"yaw":5.364},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"control-4","icon":"ground-transport","position":{"pitch":-0.07,"yaw":2.864},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}},{"id":"control-5","icon":"bottlenecks","position":{"pitch":-0.254,"yaw":0.088},"settings":{"perspective":{"extraRotations":"","extraTransforms":""}}}]'

const pharmaSpots = '[{"id":"pharma-0","icon":"certificateIcon","position":{"yaw":2.478,"pitch":-0.222},"settings":{"perspective":{"extraRotations":""}}},{"id":"pharma-1","icon":"subzeroIcon","position":{"yaw":4.276,"pitch":-0.058},"settings":{"perspective":{"extraRotations":""}}},{"id":"pharma-2","icon":"acceptanceIcon","position":{"yaw":5.046,"pitch":0},"settings":{"perspective":{"extraRotations":""}}},{"id":"pharma-3","icon":"barcodeIcon","position":{"yaw":5.57,"pitch":-0.008},"settings":{"perspective":{"extraRotations":""}}},{"id":"pharma-4","icon":"stationsIcon","position":{"yaw":0.562,"pitch":0.222},"settings":{"perspective":{"extraRotations":""}}},{"id":"pharma-5","icon":"sensorsIcon","position":{"yaw":3.394,"pitch":-0.104},"settings":{"perspective":{"extraRotations":""}}},{"id":"pharma-6","icon":"partnerIcon","position":{"yaw":1.022,"pitch":-0.064},"settings":{"perspective":{"extraRotations":""}}}]'

const tarmacSpots = '[{"id":"tarmac-0","icon":"specialCargoIcon","position":{"yaw":2.752,"pitch":-0.062},"settings":{"perspective":{"extraRotations":""}}},{"id":"tarmac-1","icon":"uldIcon","position":{"yaw":4.368,"pitch":-0.052},"settings":{"perspective":{"extraRotations":""}}},{"id":"tarmac-2","icon":"winterIcon","position":{"yaw":5.046,"pitch":0.178},"settings":{"perspective":{"extraRotations":""}}},{"id":"tarmac-3","icon":"networkIcon","position":{"yaw":0.226,"pitch":-0.202},"settings":{"perspective":{"extraRotations":""}}},{"id":"tarmac-4","icon":"shortDistanceIcon","position":{"yaw":1.402,"pitch":0.174},"settings":{"perspective":{"extraRotations":""}}},{"id":"tarmac-5","icon":"worldClassIcon","position":{"yaw":2.042,"pitch":-0.344},"settings":{"perspective":{"extraRotations":""}}}]'

const initialState = {
  currentSpot: null,
  autorotate: false,
  iconTypes: [
    'defaultIcon',
    'containerIcon',
    'temperatureIcon',
    'sensorsIcon',
    'acceptanceIcon',
    'certificateIcon',
    'subzeroIcon',
    'partnerIcon',
    'barcodeIcon',
    'stationsIcon',
    'tarmacIcon',
    'specialCargoIcon',
    'uldIcon',
    'winterIcon',
    'networkIcon',
    'shortDistanceIcon',
    'worldClassIcon',
  ],
  spots: {
    acceptance: JSON.parse(acceptanceSpots),
    general: JSON.parse(generalSposts),
    pharma: JSON.parse(pharmaSpots),
    perishables: JSON.parse(perishablesSpots),
    control: JSON.parse(controlSpots),
    tarmac: JSON.parse(tarmacSpots)
  }
}

export default (state = initialState, action) => {
  const newState = _.cloneDeep(state)
  let urlSegments = null

  switch (action.type) {
    case 'UPDATE_HOTSPOT':
      for (var i = 0; i < newState.spots.length; i++) {
        if(newState.spots[i].id === action.data.id) {
          newState.spots[i].position = action.data.position
          newState.spots[i].settings = action.data.settings
        }
      }
      return newState
    case 'ADD_HOTSPOT': {
      const newSpot = {
        id: action.data.id,
        icon: 'defaultIcon',
        position: {
          yaw: 0.752,
          pitch: -0.062
        },
        settings:{
          perspective:{
            extraRotations: ''
          }
        }
      }

      newState.spots[action.data.path].push(newSpot)
      return newState
    }
    case '@@router/LOCATION_CHANGE':
      newState.currentSpot = null

      urlSegments = action.payload.location.pathname.split('/')

      // Hotspot is open
      if(urlSegments.length > 2) {
        newState.currentSpot = urlSegments[urlSegments.length-1]
      }

      return newState
    case 'USER_INTERACTED_WITH_MARZIPANO':
      newState.currentSpot = null
      return newState
    case 'TOGGLE_AUTOROTATE':
      newState.autorotate = newState.autorotate !== true
      return newState
  }

  return state
}
