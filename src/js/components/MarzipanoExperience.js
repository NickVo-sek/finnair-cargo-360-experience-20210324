import React from 'react'
import { connect } from 'react-redux'
import Content from '../util/Content'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {getHotspotMarkup} from '../marzipano/MarzipanoHotspotCreator'

import {
  CeivCertificate,
  FreezerArea,
  DedicatedAcceptanceArea,
  SpecialHandlingCodes,
  FinnairPharmaStations,
  RealtimeTemperatureData,
  PharmaCargoTrafficGrowth
} from '../util/PharmaContent'

import {
  TimingAndTemperature,
  ElevatingTransferVehicles,
  UndergroundHeating,
  FinnairCargoRoutes,
  ShortTransferDistances,
  OurModernFleet
} from '../util/TarmacContent'

import {
  ShipmentScanning,
  TruckGateScreens,
  AutomatedInfoCheck,
  CargoPeakHours,
  SmartForklift,
  TruckYardManagement
} from '../util/AcceptanceContent'

import {
  PreplannedPalletBuilding,
  EmissionFreeForklifts,
  AutomatedStorageRetrievalSystem,
  ContainerStorageArea,
  SpecialHandlingCodes2,
  MoreShippingCapacity
} from '../util/GeneralContent'

import {
  CargoControlCenter,
  ProactiveDecisionMaking,
  Ready4ExternalChallenges,
  CentralisingDatainCargoEye,
  RoadFeederServices,
  SmoothTerminalOperation
} from '../util/ControlContent'

import {
  UnbrokenControlChain,
  UniqueTransportNeeds,
  CargoCrewWork,
  TakingCarePerishables,
  SalmonProducers
} from '../util/PerishableContent'

const cardComponents = []
cardComponents['CeivCertificate'] = CeivCertificate
cardComponents['FreezerArea'] = FreezerArea
cardComponents['DedicatedAcceptanceArea'] = DedicatedAcceptanceArea
cardComponents['SpecialHandlingCodes'] = SpecialHandlingCodes
cardComponents['FinnairPharmaStations'] = FinnairPharmaStations
cardComponents['RealtimeTemperatureData'] = RealtimeTemperatureData
cardComponents['PharmaCargoTrafficGrowth'] = PharmaCargoTrafficGrowth
cardComponents['TimingAndTemperature'] = TimingAndTemperature
cardComponents['ElevatingTransferVehicles'] = ElevatingTransferVehicles
cardComponents['UndergroundHeating'] = UndergroundHeating
cardComponents['FinnairCargoRoutes'] = FinnairCargoRoutes
cardComponents['ShortTransferDistances'] = ShortTransferDistances
cardComponents['OurModernFleet'] = OurModernFleet

cardComponents['ShipmentScanning'] = ShipmentScanning
cardComponents['TruckGateScreen'] = TruckGateScreens
cardComponents['AutomatedInfoCheck'] = AutomatedInfoCheck
cardComponents['CargoPeakHours'] = CargoPeakHours
cardComponents['SmartForklift'] = SmartForklift
cardComponents['TruckYardManagement'] = TruckYardManagement

cardComponents['PreplannedPalletBuilding'] = PreplannedPalletBuilding
cardComponents['EmissionFreeForklifts'] = EmissionFreeForklifts
cardComponents['AutomatedStorageRetrievalSystem'] = AutomatedStorageRetrievalSystem
cardComponents['ContainerStorageArea'] = ContainerStorageArea
cardComponents['SpecialHandlingCodes2'] = SpecialHandlingCodes2
cardComponents['MoreShippingCapacity'] = MoreShippingCapacity

cardComponents['CargoControlCenter'] = CargoControlCenter
cardComponents['ProactiveDecisionMaking'] = ProactiveDecisionMaking
cardComponents['Ready4ExternalChallenges'] = Ready4ExternalChallenges
cardComponents['CentralisingDatainCargoEye'] = CentralisingDatainCargoEye
cardComponents['RoadFeederServices'] = RoadFeederServices
cardComponents['SmoothTerminalOperation'] = SmoothTerminalOperation

cardComponents['UnbrokenControlChain'] = UnbrokenControlChain
cardComponents['UniqueTransportNeeds'] = UniqueTransportNeeds
cardComponents['CargoCrewWork'] = CargoCrewWork
cardComponents['TakingCarePerishables'] = TakingCarePerishables
cardComponents['SalmonProducers'] = SalmonProducers


class MarzipanoExperience extends React.Component {
  buildMarzipanoView(newProps) {
    let oldProps = this.props

    // On init/componentDidMount we only have props, not newProps
    if(!newProps) {
      newProps = this.props
      oldProps = Object.assign({}, this.props)
      oldProps.area = null
    }

    const lastPath = oldProps.area
    const currentPath = newProps.area

    // If we don't have marzipano instance OR area has changed.
    // Create (new) Marzipano instance
    if(lastPath !== currentPath) {
      window.marzipanoInstance.switchTo(currentPath, newProps.marzipano.spots[currentPath])
    }

    // If intro closed
    if(oldProps.ui.introOpen === true && newProps.ui.introOpen === false) {
      window.marzipanoInstance.zoomOut()
    }

    // If videoOverlay status has changed
    if(oldProps.ui.videoOverlay.open !== newProps.ui.videoOverlay.open) {
      if(newProps.ui.videoOverlay.open === true) {
        window.marzipanoInstance.startHero()
      } else {
        window.marzipanoInstance.endHero()
      }
    }

    // Close hotspot -> zoom out and start idle animation
    if(oldProps.marzipano.currentSpot !== null && newProps.marzipano.currentSpot === null) {
      window.marzipanoInstance.unHighlightHotspot()
    }

    if(newProps.ui.showHotspots === false) {
      window.marzipanoInstance.hideHotspots()
    } else {
      window.marzipanoInstance.showHotspots()
    }

    // User expanded hero
    if(oldProps.ui.heroMinimized === true && newProps.ui.heroMinimized === false) {
      window.marzipanoInstance.userActive()
    }

    // Don't show hotspots when intro card is open
    if(oldProps.ui.introOpen === false && newProps.ui.introOpen === true) {
      window.marzipanoInstance.hideHotspots()
      window.marzipanoInstance.pauseIdleMovement()
    }

    // The hotspot amount has chanegd
    if(oldProps.marzipano.spots[currentPath].length !== newProps.marzipano.spots[currentPath].length) {
      window.marzipanoInstance.recreateHotspots(newProps.marzipano.spots[currentPath])
    }

    // The hotspot amount has not chanegd,
    if(oldProps.marzipano.spots[currentPath].length === newProps.marzipano.spots[currentPath].length) {
      // but admin might be changing one's values(?)
      if(oldProps.admin.hideAdminControls === false && oldProps.admin.menuOpen === true) {
        window.marzipanoInstance.updateHotspots(newProps.marzipano.spots[currentPath])
      }
    }
  }

  componentDidMount() {
    this.buildMarzipanoView()
  }

  componentWillReceiveProps(props) {
    this.buildMarzipanoView(props)
  }

  inInitialView() {
    if(this.props.ui.heroMinimized === true) {
      this.props.dispatch({ type: 'EXPAND_HERO' })
    }
  }

  notInInitialView() {
    if(this.props.ui.heroMinimized === false) {
      this.props.dispatch({ type: 'MINIMIZE_HERO' })
    }
  }

  userInteracted() {
    this.props.dispatch({ type: 'USER_INTERACTED_WITH_MARZIPANO' })
  }

  highlightHotspot(id) {
    this.props.push(`/${this.props.area}/${id}`)
  }

  getCurrentHotspot() {
    const currentPath = this.props.area
    return this.props.marzipano.spots[currentPath].filter((item) => {
      return item.id === this.props.marzipano.currentSpot
    })[0]
  }

  getNextAvailableHotspot(currentSpot, dir){
    const currentPath = this.props.area
    let nextHotspot = null

    // Sort by yaw (x position)
    const tempList = this.props.marzipano.spots[currentPath]
      .sort(function (a, b) {
        return a.position.yaw - b.position.yaw
      })

    tempList.map((hotspot, i) => {
      if(hotspot.id === currentSpot.id) {
        nextHotspot = tempList[i+dir]
      }
    })

    // If we went over the array limits
    // so < 0 or more than the length of the array
    if(!nextHotspot) {
      if(dir > 0) {
        nextHotspot = this.props.marzipano.spots[currentPath][0]
      } else {
        nextHotspot = this.props.marzipano.spots[currentPath][this.props.marzipano.spots[currentPath].length-1]
      }
    }

    return nextHotspot
  }

  nextHotspot() {
    const nextHotspot = this.getNextAvailableHotspot(this.getCurrentHotspot(), +1)
    this.highlightHotspot(nextHotspot.id)
  }

  previousHotspot() {
    const prevHotspot = this.getNextAvailableHotspot(this.getCurrentHotspot(), -1)
    this.highlightHotspot(prevHotspot.id)
  }

  getHotsportCard() {
    const current = this.getCurrentHotspot()

    if(!current) {
      return
    }

    const contentId = current.id
    let content = Content.hotspots.filter((hotspot) => {
      return hotspot.id === contentId
    })[0]

    // We don't want the program to fail just because there's no content
    if(!content) {
      content = {}
    }

    let contentMarkup = <span></span>
    if(content) {
      const CardComponent = cardComponents[content.body]

      contentMarkup = (
        <div key={content.header} >
          <h1>{content.header}</h1>
          <div className={'content ' + ((!content.template) ? '' : content.template)  }>
            <CardComponent />
          </div>
        </div>
      )
    } else {
      contentMarkup = (
        <div key="404">
          <h1>404</h1>
          <div className="content">Hotspot content not found</div>
        </div>
      )
    }

    return (
      <div>
        <div className='hotspot-content-dimmer' onClick={this.closeHotspot.bind(this)}></div>
        <div className='overlay-ui special-card special-card-left'>
          <div className='special-card-contentwrapper'>
            <div>
              <h3 className="CloseBtn" onClick={this.closeHotspot.bind(this)}>✕</h3>
            </div>
            <ReactCSSTransitionGroup
              className="template"
              transitionName="crossfade"
              transitionEnterTimeout={500}
              transitionLeave={false}
              component="div">
                {contentMarkup}
            </ReactCSSTransitionGroup>
            <nav>
              <button className="hotspot-nav-PrevBtn" onClick={this.previousHotspot.bind(this)}>
                <svg width="59" height="59" viewBox="0 0 59 59">
                    <g fill="none" stroke="#464646" transform="matrix(-1 0 0 1 58 1)">
                      <circle cx="28.5" cy="28.5" r="28.5"/>
                      <g strokeLinecap="square">
                          <path d="M23.23 18.212L34.729 28.75M34.77 29.212L23.271 39.75"/>
                      </g>
                  </g>
                </svg>
                <span>
                Previous
                </span>
              </button>
              <button className="hotspot-nav-NextBtn" onClick={this.nextHotspot.bind(this)}>
                <span>
                  Next
                </span>
                <svg width="59" height="59" viewBox="0 0 59 59">
                    <g fill="none" stroke="#464646" transform="translate(1 1)">
                      <circle cx="28.5" cy="28.5" r="28.5"/>
                      <g strokeLinecap="square">
                          <path d="M23.23 18.212L34.729 28.75M34.77 29.212L23.271 39.75"/>
                      </g>
                  </g>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    )
  }

  closeHotspot(){
    this.props.push(`/${this.props.area}`)
  }

  render() {
    // Let react build the hotspot DOM first, then command marzipano
    setTimeout(() => {
      if(window.marzipanoInstance && this.props.marzipano.currentSpot !== null) {
        window.marzipanoInstance.highlightHotspot(this.props.marzipano.currentSpot)
      } else if(window.marzipanoInstance && this.props.marzipano.currentSpot === null && this.props.ui.videoOverlay.open === false) {
        window.marzipanoInstance.zoomOut()
      }
    }, 100)

    const currentPath = this.props.area
    const hotspotMarkup = this.props.marzipano.spots[currentPath]
      .map((spot) => {
        return <div key={spot.id}>{getHotspotMarkup(spot)}</div>
      })

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.getHotsportCard()}
        </ReactCSSTransitionGroup>
        {hotspotMarkup}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  router: state.router,
  marzipano: state.marzipano,
  admin: state.admin,
  ui: state.ui
})

export default connect(mapStateToProps)(MarzipanoExperience)
