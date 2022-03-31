import React from 'react'
import {withRouter} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { connect } from 'react-redux'
import MapView from '../components/MapView'
import Navigation from '../components/Navigation'

class Welcome extends React.Component {
  start() {
    this.props.history.push('/acceptance')
  }
  openMap(){
    this.props.dispatch({type: 'OPEN_MAP_OVERLAY'})
    this.props.dispatch({type: 'OPENED_MAP_OVERLAY'})
  }
  render() {
    return (
      <div className={'Welcome ' + (this.props.ui.mapOverlay.open === true && this.props.ui.mapOverlay.changing === false ? ' no-scroll' : '')}>
        <div className="fold">
          <Navigation />
          <div className="PageTopNavi">
            Welcome to our new Finnair Cargo Experience!
            <div className="map">
              <button className="map" onClick={this.openMap.bind(this)}>
                <div className="labeled"><img src={require('../../img/icon-map.svg')} alt="" />Map</div>
                <div className="burger">
                  <svg viewBox="0 0 64 74" stroke="currentColor" strokeWidth="6" strokeLinejoin="bevel" fill="none" >
                    <path className="top" d="M5.0916789,20.818994C5.0916789,20.818994,58.908321,20.818994,58.908321,20.818994" ></path>
                    <path className="middle" transform="translate(0 5)" d="m 5.1969746,31.909063 53.8166424,0" ></path>
                    <path className="bottom" transform="translate(0 10)" d="M5.0916788,42.95698C5.0916788,42.95698,58.908321,42.95698,58.908321,42.95698" ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="PageHeader">
            <div className="PageHeadBand">
              <div className="cargoLogo" >
                <svg width="182" viewBox="0 0 182 17">
                  <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="15" fontWeight="300" letterSpacing=".75">
                      <tspan x="137.251" y="14">CARGO</tspan>
                  </text>
                  <path fill="#0B1560" d="M18.236 14.397h4.054c1.001 0 1.7-.388 2.071-1.108L30.714.959H26.66c-1 0-1.7.388-2.07 1.11-.442.855-6.354 12.328-6.354 12.328M93.1 14.397h4.054c1 0 1.7-.388 2.07-1.108l6.354-12.33h-4.053c-1.002 0-1.7.388-2.071 1.11L93.1 14.396M12.99.96c-.91 0-1.429.112-2.093.464-.22.116-2.619 1.379-4.354 2.305C5.17 4.462 4.215 5.495 3.61 6.76A2010.407 2010.407 0 0 0 0 14.397h3.745c.925 0 1.57-.388 1.914-1.108.15-.318.994-2.09 1.844-3.874h6.095c.836 0 1.157-.152 1.479-.828l.313-.676H8.054C8.72 6.512 9.713 4.41 9.713 4.41c.419-.88.912-1.234 2.025-1.234H19.63c.925 0 1.57-.388 1.914-1.109l.53-1.107h-9.084M72.945.962h-1.746c-.938 0-1.592.387-1.94 1.109l-4.031 8.379c-.053-.28-.248-.647-.421-.881-2.345-3.185-5.107-6.95-6.03-8.228-.314-.433-.84-.485-1.355-.217-.433.226-.634.333-1.087.571-1.317.693-2.08 1.577-2.714 2.89-1.762 3.648-4.671 9.812-4.671 9.812h1.735c.938 0 1.592-.387 1.94-1.108.189-.392 2.318-4.84 3.557-7.415.027.227.152.462.268.618a7864.15 7864.15 0 0 0 5.17 6.866c.505.665 1.027 1.039 1.965 1.039h2.86l6.5-13.435zM51.83.962h-1.747c-.937 0-1.592.387-1.94 1.109l-4.031 8.379c-.053-.28-.248-.647-.42-.881A1749.8 1749.8 0 0 1 37.66 1.34c-.313-.433-.839-.485-1.353-.217-.433.226-.635.333-1.088.571-1.317.693-2.08 1.577-2.715 2.89a1550.07 1550.07 0 0 0-4.67 9.812h1.734c.938 0 1.592-.387 1.94-1.108.19-.392 2.319-4.84 3.557-7.415.027.227.152.462.27.618 1.923 2.555 4.874 6.478 5.17 6.866.504.665 1.026 1.039 1.964 1.039h2.862L51.829.962zM78.558 7.91a986.163 986.163 0 0 0 1.682-3.429c.474-.964.922-1.305 2.146-1.305h6.336c.645 0 .846.343.62.805-.545 1.106-1.236 2.512-1.93 3.93h-8.854m14.975-3.865c-.195-.137-2.882-2.123-3.046-2.243-.763-.562-1.733-.843-2.753-.843h-4.258c-.94 0-1.476.112-2.163.464-.225.116-2.645 1.352-4.436 2.279-1.5.775-2.449 1.778-3.105 3.113a2328.34 2328.34 0 0 0-3.707 7.581h3.866c.954 0 1.62-.388 1.975-1.108.14-.287.985-1.999 1.91-3.875h8.857a7486.08 7486.08 0 0 1-1.702 3.465c-.39.792.034 1.518 1.07 1.518h3.475s4.09-8.33 4.305-8.757c.376-.742.33-1.159-.288-1.594M121.938 3.981c-.407.823-.744 1.537-1.257 2.573-.372.751-1.049 1.08-2.652 1.08h-6.805c.693-1.398 1.66-3.342 1.66-3.342.384-.776.959-1.116 1.966-1.116h6.464c.65 0 .853.343.624.805m4.225.067c-.198-.138-2.711-2-2.875-2.12a5.199 5.199 0 0 0-3.032-.968h-4.043c-.948 0-1.488.112-2.178.464-.228.115-2.46 1.246-4.265 2.172-1.786.916-2.634 1.79-3.39 3.315-1.805 3.646-3.682 7.485-3.682 7.485l3.896.001c.963 0 1.633-.388 1.99-1.108.158-.318 1.189-2.365 2.074-4.15h2.268c1.08 0 1.454.323 1.889 1.035.82 1.344 1.748 2.859 1.905 3.115.514.839.968 1.108 2.119 1.108h4.448s-1.155-1.805-2.476-3.974c-.208-.34-.445-.577-1.108-.683l-1.904-.304.041-.295h3.602c2.435 0 3.52-.514 4.047-1.506.25-.47.893-1.86.963-1.996.38-.741.332-1.157-.29-1.591"/>
                </svg>
              </div>
              <div className="threesixtyLogo" >
                <svg width="116" viewBox="0 0 116 43">
                  <g fill="#0B1560" fillRule="evenodd">
                      <text fontFamily="Amplitude Bold" fontSize="25" fontWeight="bold" letterSpacing="-.003" transform="translate(0 -3)">
                          <tspan x="34.343" y="20">360°</tspan>
                      </text>
                      <path d="M44.434 29.796v-6.192L56 33.32 44.488 43v-7.08c-2.655-.242-5.134-.434-7.605-.698-9.118-.972-18.182-2.292-26.786-5.666-2.636-1.033-5.232-2.424-7.491-4.134-3.51-2.657-3.43-6.015-.03-8.827C5.543 14.14 14.48 10.82 22.45 9c.393 1.042.613 1.671.868 2.3-6.208 1.777-12.175 4.16-14.02 5.492-2.056 1.484-2.052 3.516-.033 5.033a21.057 21.057 0 0 0 5.085 2.794c6.117 2.336 12.544 3.328 19 4.094 3.595.427 7.208.71 11.084 1.083M60 36.905V30.99c.595-.027 1.189-.067 1.783-.078 11.701-.2 23.352-.943 34.749-3.806 2.906-.73 5.722-1.905 8.482-3.1 1.53-.663 3.1-1.702 3.13-3.658.03-1.972-1.588-2.868-3.05-3.723-3.306-1.934-6.974-2.844-10.667-3.667l-2.11-.473L93.21 10c6.621 1.497 13.194 2.864 18.913 6.613 5.193 3.404 5.157 7.37-.042 10.81-4.562 3.018-9.755 4.482-15 5.703C85.2 35.89 73.116 36.879 60.945 37c-.292.003-.585-.057-.944-.095"/>
                  </g>
                </svg>
              </div>
            </div>
            <div className="PageHeaderContent">
              <h1>Explore our <br/>COOL Cargo <br/>terminal in 360°</h1>
              <button className="ctaButton" onClick={this.start.bind(this)}>START THE TOUR</button>
              <img className="arrow" src={require('../../img/nuoli.svg')}></img>
            </div>
            <div className="ReadMore">
              <p>
                <HashLink to="/#our-story">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 25 14">
                    <path fill="none" fillRule="evenodd" stroke="#0B1560" strokeLinecap="square" strokeWidth="2" d="M2 2l10.35 10L23 2"/>
                  </svg>
                  <span>Read about our Nordic way of working</span>
                </HashLink>
              </p>
            </div>
          </div>
        </div>
        <div className="fold">
          <div className="PageContent" id="our-story">
            <article>
              <h3>OUR STORY</h3>
              <br/>
              <h2>Reshaping the world of cargo </h2>
              <br/>
              <p>Our Nordic heritage means we value efficiency and transparency. It’s who we are, and it’s how we work. To thrive in the North, you also have to push boundaries. You have to try new things and evolve towards your potential. This is our mindset, and it’s part of everything we do. </p>
              <p>To reshape the world of cargo, we fully embrace digital technology. This is why we have one of the most modern cargo facilities in Europe. Click the link below for a 360° tour of our COOL cargo terminal. Inside the experience, you will see how we use IOT tracking, full-scale automation and more to serve our customers with Nordic efficiency.</p>
            </article>
            <button className="ctaButton" onClick={this.start.bind(this)}>START THE 360° TOUR</button>
            <div className="liftups">
              <div><img src={require('../../img/welcome/cta-copy@3x.jpg')}/></div>
              <div><img src={require('../../img/welcome/cta-copy-2@3x.jpg')} /></div>
              <div><img src={require('../../img/welcome/cta-copy-3@3x.jpg')} /></div>
            </div>
          </div>
          <MapView className={this.props.ui.mapOverlay.open === true && this.props.ui.mapOverlay.changing === false ? 'opened' : '' }/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  router: state.router,
  ui: state.ui
})
export default connect(mapStateToProps)(withRouter(Welcome))
