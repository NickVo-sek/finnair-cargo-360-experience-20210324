import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Content from '../util/Content'
import { push } from 'connected-react-router'

class MapView extends React.Component {
  constructor(props) {
    super(props)
    const area = this.props.router.location.pathname.split('/').join('')
    this.state = {
      activeArea: area !== '' ? area : 0
    }
    //console.log(this.props)
  }
  componentDidMount()
  {
    this.setActiveAreaByLocation()
  }
  setActiveAreaByLocation()
  {
    this.setState({
     activeArea: this.props.router.location.pathname.split('/').join('')
    })
  }
  closeMap(){
    this.props.dispatch({type: 'CLOSE_MAP_OVERLAY'})

    setTimeout(()=> {
      this.props.dispatch({type: 'CLOSED_MAP_OVERLAY'})
      this.setActiveAreaByLocation()
    }, 500)
  }
  openArea(path, e) {
    e.stopPropagation()
    this.props.dispatch(push(path))
    this.activate(path.substr(1))
    setTimeout(()=> {
      this.closeMap()
    }, 1000)
  }
  activate(id) {
    this.setState({
      activeArea: id
    })
  }
  render() {
    return (
      <div className={this.props.className + ' OverlayMap overlay-ui'}>
        <div className="content">
          <div className="topBar">
            <div className="cargoLogo">
              <svg width="182" viewBox="0 0 182 17" onClick={this.openArea.bind(this, '/')}>
                  <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="15" fontWeight="300" letterSpacing=".75">
                      <tspan x="137.251" y="14">CARGO</tspan>
                  </text>
                  <path fill="#0B1560" d="M18.236 14.397h4.054c1.001 0 1.7-.388 2.071-1.108L30.714.959H26.66c-1 0-1.7.388-2.07 1.11-.442.855-6.354 12.328-6.354 12.328M93.1 14.397h4.054c1 0 1.7-.388 2.07-1.108l6.354-12.33h-4.053c-1.002 0-1.7.388-2.071 1.11L93.1 14.396M12.99.96c-.91 0-1.429.112-2.093.464-.22.116-2.619 1.379-4.354 2.305C5.17 4.462 4.215 5.495 3.61 6.76A2010.407 2010.407 0 0 0 0 14.397h3.745c.925 0 1.57-.388 1.914-1.108.15-.318.994-2.09 1.844-3.874h6.095c.836 0 1.157-.152 1.479-.828l.313-.676H8.054C8.72 6.512 9.713 4.41 9.713 4.41c.419-.88.912-1.234 2.025-1.234H19.63c.925 0 1.57-.388 1.914-1.109l.53-1.107h-9.084M72.945.962h-1.746c-.938 0-1.592.387-1.94 1.109l-4.031 8.379c-.053-.28-.248-.647-.421-.881-2.345-3.185-5.107-6.95-6.03-8.228-.314-.433-.84-.485-1.355-.217-.433.226-.634.333-1.087.571-1.317.693-2.08 1.577-2.714 2.89-1.762 3.648-4.671 9.812-4.671 9.812h1.735c.938 0 1.592-.387 1.94-1.108.189-.392 2.318-4.84 3.557-7.415.027.227.152.462.268.618a7864.15 7864.15 0 0 0 5.17 6.866c.505.665 1.027 1.039 1.965 1.039h2.86l6.5-13.435zM51.83.962h-1.747c-.937 0-1.592.387-1.94 1.109l-4.031 8.379c-.053-.28-.248-.647-.42-.881A1749.8 1749.8 0 0 1 37.66 1.34c-.313-.433-.839-.485-1.353-.217-.433.226-.635.333-1.088.571-1.317.693-2.08 1.577-2.715 2.89a1550.07 1550.07 0 0 0-4.67 9.812h1.734c.938 0 1.592-.387 1.94-1.108.19-.392 2.319-4.84 3.557-7.415.027.227.152.462.27.618 1.923 2.555 4.874 6.478 5.17 6.866.504.665 1.026 1.039 1.964 1.039h2.862L51.829.962zM78.558 7.91a986.163 986.163 0 0 0 1.682-3.429c.474-.964.922-1.305 2.146-1.305h6.336c.645 0 .846.343.62.805-.545 1.106-1.236 2.512-1.93 3.93h-8.854m14.975-3.865c-.195-.137-2.882-2.123-3.046-2.243-.763-.562-1.733-.843-2.753-.843h-4.258c-.94 0-1.476.112-2.163.464-.225.116-2.645 1.352-4.436 2.279-1.5.775-2.449 1.778-3.105 3.113a2328.34 2328.34 0 0 0-3.707 7.581h3.866c.954 0 1.62-.388 1.975-1.108.14-.287.985-1.999 1.91-3.875h8.857a7486.08 7486.08 0 0 1-1.702 3.465c-.39.792.034 1.518 1.07 1.518h3.475s4.09-8.33 4.305-8.757c.376-.742.33-1.159-.288-1.594M121.938 3.981c-.407.823-.744 1.537-1.257 2.573-.372.751-1.049 1.08-2.652 1.08h-6.805c.693-1.398 1.66-3.342 1.66-3.342.384-.776.959-1.116 1.966-1.116h6.464c.65 0 .853.343.624.805m4.225.067c-.198-.138-2.711-2-2.875-2.12a5.199 5.199 0 0 0-3.032-.968h-4.043c-.948 0-1.488.112-2.178.464-.228.115-2.46 1.246-4.265 2.172-1.786.916-2.634 1.79-3.39 3.315-1.805 3.646-3.682 7.485-3.682 7.485l3.896.001c.963 0 1.633-.388 1.99-1.108.158-.318 1.189-2.365 2.074-4.15h2.268c1.08 0 1.454.323 1.889 1.035.82 1.344 1.748 2.859 1.905 3.115.514.839.968 1.108 2.119 1.108h4.448s-1.155-1.805-2.476-3.974c-.208-.34-.445-.577-1.108-.683l-1.904-.304.041-.295h3.602c2.435 0 3.52-.514 4.047-1.506.25-.47.893-1.86.963-1.996.38-.741.332-1.157-.29-1.591"/>
              </svg>
            </div>
            <h1>Finnair Cargo Cool Terminal</h1>
            <button className="CloseBtn" onClick={this.closeMap.bind(this)}>
              <span className="label">CLOSE</span>
              <div className="icon">
                <svg id="close" fill="currentColor" viewBox="-447 249 64 64"><polygon points="-415 288.2 -390.2 313 -383 305.8 -407.8 281 -383.2 256.4 -390.4 249.2 -415 273.8 -439.8 249 -447 256.2 -422.2 281 -446.8 305.6 -439.6 312.8 "/></svg>
              </div>
            </button>
          </div>
          <div className="mapArea">
            <svg id="map" viewBox="0 0 993 472">
              <g fill="none" fillRule="evenodd" transform="translate(0 -115)">
                <path fill="#EDEDED" d="M510.572 493.364h-35.639V501h-7.638v-7.636h-45.822V501h-7.637v-7.636h-11.88V501h-7.637v-7.636H345.95V501h-7.637v-7.636h-35.64V501h-7.636v-7.636h-22.912V501h-7.637v-7.636h-25.457V501h-7.637v-7.636h-3.092v-35.476h3.545v-6.224h6.487v13.526h28.7V313.485h7.637V305h8.486v8.485h11.88V305h8.485v8.485h14.426V305h8.485v8.485h44.126V305h8.485v8.485h22.063V305h8.486v8.485h47.52V305h8.485v8.485h11.031V305h8.486v8.485h11.031V305h8.486v8.485h.064v151.943h34.79v-13.764h8.373v6.224h4.578v35.476h-34.228V501h-7.637v-7.636z"/>
                <g stroke="#FFF">
                  <path d="M275.171 322.47v160.212h5.789V322.47h-5.789zM309.962 322.47v160.212h5.789V322.47h-5.789zM374.453 322.47v160.212h5.789V322.47h-5.789zM437.247 322.47v160.212h5.788V322.47h-5.788zM315.902 322.47v160.212h5.789V322.47h-5.789zM380.393 322.47v160.212h5.788V322.47h-5.788zM443.187 322.47v160.212h5.788V322.47h-5.788zM289.597 322.47v160.212h5.788V322.47h-5.788zM331.176 322.47v160.212h5.789V322.47h-5.789zM352.39 322.47v160.212h5.789V322.47h-5.789zM395.667 322.47v160.212h5.789V322.47h-5.789zM416.033 322.47v160.212h5.788V322.47h-5.788zM458.46 322.47v160.212h5.79V322.47h-5.79zM478.826 322.47v160.212h5.789V322.47h-5.789zm5.789 160.212h.5l-.5.5v-.5zM295.537 322.47v160.212h5.788V322.47h-5.788zM337.116 322.47v160.212h5.789V322.47h-5.789zM358.33 322.47v160.212h5.789V322.47h-5.789zM401.607 322.47v160.212h5.789V322.47h-5.789zM421.973 322.47v160.212h5.788V322.47h-5.788zM464.4 322.47v160.212h5.79V322.47h-5.79zM484.766 322.47v160.212h5.789V322.47h-5.789zm5.789 160.212h.5l-.5.5v-.5zM498.343 322.47v160.212h5.789V322.47h-5.789zm5.789 160.212h.5l-.5.5v-.5z"/>
                   <path d="M155.154 220.021v15.902h546.423V220.02H155.154zM155.154 181.148V205.5h546.423v-24.352H155.154z"/>
                </g>
                <g fill="#EDEDED">
                  <path d="M702.077 174.732H753v67.606h-83.174V266h-9.336v-23.662h-32.252V266h-9.335v-23.662h-33.1V266h-9.336v-23.662h-32.252V266h-9.336v-23.662h-32.25V266h-9.337v-23.662h-33.1V266h-9.336v-23.662h-33.1V266h-9.335v-23.662h-33.1V266h-9.336v-23.662h-32.252V266h-9.336v-23.662h-33.1V266h-9.335v-23.662h-33.1V266h-9.336v-23.662h-33.1V266h-9.336v-23.662h-33.1V266h-9.336v-23.662H91v-67.606h63.654V146h31.402v28.732h95.057V146h31.402v28.732h94.208V146h31.403v28.732h95.056V146h31.403v28.732h95.905V146h31.402v28.732h10.185z"/>
                  <path d="M278.843 541h12.732v14h-12.732zM342.503 541h12.732v14h-12.732zM406.163 541h12.732v14h-12.732zM469.823 541h12.732v14h-12.732zM533.483 541h12.732v14h-12.732z"/>
                  <path d="M849 541h12.732v14H849zM892 541h12.732v14H892zM300.063 541h12.732v14h-12.732zM363.723 541h12.732v14h-12.732zM427.383 541h12.732v14h-12.732zM491.043 541h12.732v14h-12.732zM554.703 541h12.732v14h-12.732z"/>
                  <path d="M870 541h12.732v14H870zM913 541h12.732v14H913zM934 541h12.732v14H934zM173 541h12.732v14H173zM89 541h12.732v14H89zM236.623 541h12.732v14h-12.732zM152 541h12.732v14H152zM68 541h12.732v14H68zM214.623 541h12.732v14h-12.732zM131 541h12.732v14H131zM47 541h12.732v14H47zM194 541h12.732v14H194zM110 541h12.732v14H110z"/>
                  <path d="M783 146h39v64h-39zM908 146h57v64h-57zM257.623 541h12.732v14h-12.732zM321.283 541h12.732v14h-12.732zM384.943 541h12.732v14h-12.732zM448.603 541h12.732v14h-12.732zM512.263 541h12.732v14h-12.732z"/>
                </g>
                <g fill="#E4E4E6">
                  <path d="M765.054 541h12.732v14h-12.732zM828 541h12.732v14H828z"/>
                  <path d="M786.274 541h12.732v14h-12.732z"/>
                  <path d="M807 541h12.732v14H807z"/>
                </g>
                <g stroke="#0B1560">
                    <path d="M884.5 497.4V388.15h-19.45V168.5H759.5v373h105.55v-44.1h19.45z"/>
                    <path d="M.5 168.5h992v373.047H.5z"/>
                    <path d="M.5 168.5h992v373.047H.5z"/>
                    <path d="M84.523 168.5v80.425h674.58V168.5H84.523zM759.254 168.5h105.938v373.047H759.254z"/>
                    <path fill="#FFF" d="M844.126 388.178v66.006h40.587v-66.006h-40.587zm40.587 66.006h.5l-.5.5v-.5z"/>
                    <path fill="#FFF" d="M844.126 453.488v43.953h40.587v-43.953h-40.587zm40.587 43.953h.5l-.5.5v-.5z"/>
                    <path d="M759.254 497.593h105.938v43.953H759.254zM107.438 493.495v48.052h651.665v-43.954h-218.21v-4.098H107.438zM865.344 497.593v43.954H992.5v-43.954H865.344zM865.344 168.5v101.63H992.5V168.5H865.344zM716.818 249.077h42.285v47.346h-42.285zM504.638 329.654h27.008v13.419h-27.008zM504.638 343.225v9.178h27.008v-9.178h-27.008zM716.818 296.575h42.285v13.419h-42.285zM504.638 352.555h27.008v53.283h-27.008zM716.818 310.146v32.079h42.285v-32.08h-42.285zM504.638 405.99v10.874h27.008V405.99h-27.008zM504.638 417.016v36.32h27.008v-36.32h-27.008zm27.008 36.32h.5l-.5.5v-.5z"/>
                    <path d="M531.646 453.488h-27.008v12.57h35.495v-8.33h-8.487v-4.24zm8.487 12.57h.5l-.5.5v-.5zM694.751 373.76v41.408h64.352v-41.409H694.75zM694.751 415.32v21.052h64.352V415.32H694.75zm64.352 21.052h.5l-.5.5v-.5zM694.751 436.524v42.257h64.352v-42.257H694.75zM588.359 541.698V586.5h135.644v-44.802H588.359zM611.577 461.483V493.2h43.133v-31.717h-11.297v-7.995h-13.487v7.995h-18.35zM716.818 342.377v10.026h19.37v-10.026h-19.37zM736.338 342.377h11.731v10.026h-11.731zM748.22 342.377v10.026h10.883v-10.026H748.22zM.5 494.2v47.347h40.587V494.2H.5z"/>
                </g>
                <g>
                  <path stroke="#6A6A6A" d="M844.064 388.15v65.15H884.5v-65.15h-40.436zM844.064 453.5v43.948H884.5V453.5h-40.436zM759.5 497.5v43.948h106V497.5h-106z"/>
                </g>
                <g id="num-1" className={'number ' + (this.state.activeArea === 'acceptance' ? 'active' : '')} onMouseOver={this.activate.bind(this, 'acceptance')} onClick={this.openArea.bind(this, '/acceptance')} >
                  <rect width="38" height="38" x="359" y="498" fill="#0B1560" rx="19"/>
                  <text fill="#FFF" fontFamily="Amplitude Bold" fontSize="24.5" x="373.63" y="524.24">1</text>
                </g>
                <g id="num-2" className={'number ' + (this.state.activeArea === 'general' ? 'active' : '')} onMouseOver={this.activate.bind(this, 'general')} onClick={this.openArea.bind(this, '/general')} >
                  <rect width="38" height="38" x="597" y="322" fill="#0B1560" rx="19"/>
                  <text fill="#FFF" fontFamily="Amplitude Bold" fontSize="24.5" x="611.37" y="347.64" >2</text>
                </g>
                <g id="num-3" className={'number ' + (this.state.activeArea === 'pharma' ? 'active' : '')} onMouseOver={this.activate.bind(this, 'pharma')} onClick={this.openArea.bind(this, '/pharma')} >
                  <rect width="38" height="38" x="792" y="322" fill="#0B1560" rx="19"/>
                  <text fill="#FFF" fontFamily="Amplitude Bold" fontSize="24.5" x="806.49" y="347.64">3</text>
                </g>
                <g id="num-4" className={'number ' + (this.state.activeArea === 'perishables' ? 'active' : '')} onMouseOver={this.activate.bind(this, 'perishables')} onClick={this.openArea.bind(this, '/perishables')} >
                  <rect width="38" height="38" x="910" y="322" fill="#0B1560" rx="19"/>
                  <text fill="#FFF" fontFamily="Amplitude Bold" fontSize="24.5" x="923.45" y="347.64">4</text>
                </g>
                <g id="num-5" className={'number ' + (this.state.activeArea === 'control' ? 'active' : '')} onMouseOver={this.activate.bind(this, 'control')} onClick={this.openArea.bind(this, '/control')} >
                  <rect width="38" height="38" x="635" y="545" fill="#0B1560" rx="19"/>
                  <text fill="#FFF" fontFamily="Amplitude Bold" fontSize="24.5" x="649.47" y="570.64">5</text>
                </g>
                <g id="num-6" className={'number ' + (this.state.activeArea === 'tarmac' ? 'active' : '')} onMouseOver={this.activate.bind(this, 'tarmac')} onClick={this.openArea.bind(this, '/tarmac')} >
                  <rect width="38" height="38" x="468" y="115" rx="19"/>
                  <text fontSize="24.5" x="481.0" y="141.24">6</text>
                </g>
              </g>
            </svg>
          </div>
          <nav>
            <ol>
            {Content.routes.map((route, i) => {
              if(route.type==='threeSixty') {
                return <li key={route.path}><Link className={this.state.activeArea === route.path.substr(1) ? 'active' : ''} onMouseOver={this.activate.bind(this, route.path.substr(1))} onClick={this.openArea.bind(this, route.path)} to={route.path}><span>{i}.</span> <span>{route.title}</span></Link></li>
              }
              else return
            })}
            </ol>
          </nav>
          <footer>
            <section className="info">
              <img src={require('../../img/info-icon.svg')} alt=""/>
              <ul>
                <li>80 million Euro investment,<br />opened 2017</li>
                <li>State-of-the-art<br />design and functionality</li>
                <li>IoT & data-driven<br />monitoring and handling</li>
                <li>A very good<br/>sustainability rating</li>
              </ul>
            </section>
            <section className="contact">
              <ul>
                <li>
                  <span>cargo.finnair.com</span>
                </li>
              </ul>
            </section>
          </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  router: state.router,
  ui: state.ui
})

export default connect(mapStateToProps)(MapView)
