import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import MarzipanoExperience from '../components/MarzipanoExperience'
import Navigation from '../components/Navigation'
import AdminView from '../components/AdminView'
import MapView from '../components/MapView'
import Content from '../util/Content'
import { getIcon } from '../marzipano/MarzipanoHotspotCreator'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import Acceptance_Area_Hero from '../marzipano/animations/Acceptance_Area_Hero.json'
import Control_Center_Hero from '../marzipano/animations/Control_Center_Hero.json'
import General_Cargo_Hero from '../marzipano/animations/General_Cargo_Hero.json'
import Perishables_hero from '../marzipano/animations/Perishables_hero.json'
import Pharma_Hero from '../marzipano/animations/Pharma_Hero.json'
import Tarmac_Hero from '../marzipano/animations/Tarmac_Hero.json'

class ThreeSixtyView extends React.Component {
  componentDidMount(){
    document.body.classList.add('marzipano')
  }

  componentWillUnmount(){
    document.body.classList.remove('marzipano')
  }

  getArea() {
    const uri = this.props.router.location.pathname.split(window.location.host)[0]
    const pieces = uri.split('/')
    return pieces[1]
  }

  getHotspot() {
    const uri = this.props.router.location.pathname.split(window.location.host)[0]
    const pieces = uri.split('/')
    return pieces[2]
  }

  getIntroCard() {
    if(this.props.ui.introOpen === false || this.props.ui.mapOpen === true || this.getHotspot()) {
      return
    }

    const currentPath = this.props.area ? this.props.area : this.getArea()
    const threeSixtyRoutes = Content.routes.filter( route => route.type=='threeSixty' )

    var currentIndex, prevPath, nextPath
    threeSixtyRoutes.map((route, i) => {
      if(currentPath === route.path.replace(/^\//, '')) currentIndex=i
    })

    prevPath = (threeSixtyRoutes[currentIndex-1]) ? threeSixtyRoutes[currentIndex-1].path : threeSixtyRoutes[threeSixtyRoutes.length - 1].path
    nextPath = (threeSixtyRoutes[currentIndex+1]) ? threeSixtyRoutes[currentIndex+1].path : threeSixtyRoutes[0].path

    const introContent = Content.routes.filter((route) => {
      return route.path === '/'+currentPath
    })[0]

    return (
      <div className="OverlayCard overlay-ui">
        <div className="IntroText">
          <h2 key={introContent.header} ><span>{introContent.number}</span></h2>
          <h1 dangerouslySetInnerHTML={{__html: introContent.header}}></h1>
          <span><button key={introContent.number} className="cta" onClick={this.closeIntro.bind(this)} >{introContent.button}</button></span>
          <img key={introContent.button} className="arrow" src={require('../../img/nuoli.svg')}></img>
        </div>
        <div className="PrevBtn">
          <Link to={prevPath}>
          <svg width="55" height="161" viewBox="0 0 55 161">
              <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="square" strokeWidth="3">
                  <path d="M52.717 2.244L2.283 80.256M52.717 158.756L2.283 80.744"/>
              </g>
          </svg>
          </Link>
        </div>
        <div className="NextBtn">
          <Link to={nextPath}>
          <svg width="55" height="161" viewBox="0 0 55 161">
              <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="square" strokeWidth="3">
                  <path d="M2.283 2.244l50.434 78.012M2.283 158.756l50.434-78.012"/>
              </g>
          </svg>
          </Link>
        </div>
      </div>
    )
  }

  closeIntro(){
    this.props.dispatch({ type: 'CLOSE_INTRO' })
  }

  expandHero() {
    this.props.dispatch({ type: 'EXPAND_HERO' })
  }

  getHero() {
    if(this.props.ui.introOpen === true || this.props.ui.videoOverlay.open === true || this.props.marzipano.currentSpot) {
      return
    }

    const currentPath = this.props.area ? this.props.area : this.getArea()
    const content = Content.routes.filter(route => route.path === '/'+currentPath)[0]

    const classes = ['overlay-ui','Hero']
    let action = this.openHero.bind(this)

    if(this.props.ui.heroMinimized === true) {
      classes.push('Hero-Minimized')
      action = this.expandHero.bind(this)
    }

    let animation = null

    switch(currentPath) {
      case 'acceptance' :
        animation = Acceptance_Area_Hero
        break
      case 'general' :
        animation = General_Cargo_Hero
        break
      case 'pharma' :
        animation = Pharma_Hero
        break
      case 'perishables' :
        animation = Perishables_hero
        break
      case 'control' :
        animation = Control_Center_Hero
        break
      case 'tarmac' :
        animation = Tarmac_Hero
        break
    }

    // Backup static icon
    let icon = getIcon(content.hero.icon)

    // Replace with animation
    if(animation) {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

      icon = <Lottie options={defaultOptions} height={100} width={100}/>
    }

    return (
      <div className={classes.join(' ')} onClick={action}>
        <div className="icon">
          {icon}
        </div>
        <div className="texts">
          <div className="title">{content.hero.title}</div>
          <button>Learn more</button>
        </div>
      </div>
    )
  }

  videoOver(){
    this.closeVideo()
  }

  closeVideo(){
    this.props.dispatch({type: 'CLOSE_VIDEO_OVERLAY'})

    setTimeout(()=> {
      this.props.dispatch({type: 'CLOSED_VIDEO_OVERLAY'})
    }, 1000)
  }

  openHero(){
    this.props.dispatch({type: 'OPEN_VIDEO_OVERLAY'})
    setTimeout(()=> {
      this.props.dispatch({type: 'OPENED_VIDEO_OVERLAY'})
    }, 1000)
  }

  getVideoOverlay(){
    if(this.props.ui.videoOverlay.open === false) {
      return null
    }

    const currentPath = this.props.area ? this.props.area : this.getArea()
    const content = Content.routes.filter((route) => {
      return route.path === '/'+currentPath
    })[0]

    const classes = ['overlay-ui', 'OverlayVideo']

    if(this.props.ui.videoOverlay.changing === false) {
      classes.push('opened')
    }

    return (
      <div className={classes.join(' ')}>
        <div>
          <button className="CloseBtn" onClick={this.closeVideo.bind(this)}>
            <span className="label">CLOSE</span>
            <div className="icon">
              <svg id="close" fill="currentColor" viewBox="-447 249 64 64"><polygon points="-415 288.2 -390.2 313 -383 305.8 -407.8 281 -383.2 256.4 -390.4 249.2 -415 273.8 -439.8 249 -447 256.2 -422.2 281 -446.8 305.6 -439.6 312.8 "/></svg>
            </div>
          </button>
        </div>
        <div>
          <video className="video-container" autoPlay="{true}" muted onEnded={this.videoOver.bind(this)}>
            <source src={'videos/src/video/' + content.hero.video} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  }

  getDownloadingIndicator() {
    if(this.props.ui.downloadingAssets === false) {
      return null
    }

    return (
      <div className="DownloadIndicator overlay-ui">
        <svg version="1.1" id="loader-1" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 50 50">
          <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(269.543 25 25)">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
          </path>
        </svg>
      </div>
    )
  }

  render() {
    const area = this.props.area ? this.props.area : this.getArea()

    return (
      <div>
        {this.props.admin.hideAdminControls === false ? <AdminView area={area} /> : null }
        <div className="overlay-ui">
          <div className="header">
            <Navigation/>
          </div>
        </div>
        {this.getIntroCard()}
        {this.getVideoOverlay()}
        {this.getHero()}
        <MarzipanoExperience area={area} hotspot={this.getHotspot()} push={this.props.history.push}/>
        <MapView className={this.props.ui.mapOverlay.open === true && this.props.ui.mapOverlay.changing === false ? 'opened' : '' }/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  router: state.router,
  marzipano: state.marzipano,
  admin: state.admin
})

export default connect(mapStateToProps)(withRouter(ThreeSixtyView))
