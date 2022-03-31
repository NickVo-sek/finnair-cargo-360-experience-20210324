import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class AdminView extends React.Component {
  constructor() {
    super()
    this.state = {
      num: null,
      basefont: 16
    }

    this.keyPress = this._keyPress.bind(this)
    this.updateSelection = _.debounce(this.activateHotspot.bind(this), 800)
  }

  componentDidMount(){
    document.addEventListener('keydown', this.keyPress)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.keyPress)
  }

  _keyPress(e){
    const keyName = e.key

    // If pressed key is number
    if(!isNaN(keyName)) {
      // Add to existing number or start a new number
      const newNum = this.state.num !== null ? this.state.num +''+ keyName : keyName

      // add tmp variable to add numbers, this is needed for numbers that have two digits
      this.setState({
        num: newNum
      })

      this.updateSelection()
    }
  }

  activateHotspot() {
    const path = this.props.area
    const hotspot = this.props.marzipano.spots[path][Number(this.state.num)]

    this.setState({
      num: null
    })

    if(!hotspot) {
      return
    }

    this.props.dispatch({
      type: 'SELECT_CONTROLLABLE_HOTSPOT',
      data: {
        id: hotspot.id
      }
    })
  }

  toggleAdminMenu() {
    this.props.dispatch({
      type: 'TOGGLE_ADMIN_MENU'
    })
  }

  addHotspot() {
    const path = this.props.area
    this.props.dispatch({
      type: 'ADD_HOTSPOT',
      data: {
        path: path,
        id: `${path}-${this.props.marzipano.spots[path].length+1}`
      }
    })
  }

  toggleAutoRotate() {
    this.props.dispatch({
      type: 'TOGGLE_AUTOROTATE'
    })
  }

  getCurrentHotspot() {
    let current = null
    const path = this.props.area

    for (var i = 0; i < this.props.marzipano.spots[path].length; i++) {
      const spot = this.props.marzipano.spots[path][i]
      if(spot.id === this.props.admin.controllingSpot) {
        current = spot
      }
    }
    return current
  }

  logData() {
    const path = this.props.area
    var data = this.props.marzipano.spots[path].map((item) => {
      return {
        id: item.id,
        type: item.type,
        icon: item.icon,
        position: item.position,
        settings: item.settings,
      }
    })

    console.log(data)
    console.log(JSON.stringify(data))
  }

  moveZ(e){
    const current = this.getCurrentHotspot()
    current.settings.perspective.radius = e.currentTarget.value

    this.props.dispatch({
      type: 'UPDATE_HOTSPOT',
      data: current
    })
  }

  moveY(e){
    const current = this.getCurrentHotspot()
    current.position.pitch = Number(e.currentTarget.value)

    this.props.dispatch({
      type: 'UPDATE_HOTSPOT',
      data: current
    })
  }

  moveX(e){
    const current = this.getCurrentHotspot()
    current.position.yaw = Number(e.currentTarget.value)

    this.props.dispatch({
      type: 'UPDATE_HOTSPOT',
      data: current
    })
  }

  rotateHotspot(axis, e){
    const current = this.getCurrentHotspot()
    current.settings.perspective.extraRotations = axis + '(' + Number(e.currentTarget.value) + 'deg)'

    this.props.dispatch({
      type: 'UPDATE_HOTSPOT',
      data: current
    })
  }

  changeBasefont(e){
    document.documentElement.style.fontSize = e.currentTarget.value + 'px'
    this.setState({
      basefont: e.currentTarget.value
    })
  }

  getAdminEditControls() {
    const current = this.getCurrentHotspot()

    if(!current) {
      return <span></span>
    }

    return (
      <div>
        <span className="label">X</span>
        <input type="range" step="0.002" min="0" max="6.3" value={current.position.yaw} onChange={this.moveX.bind(this)}/><br/>

        <span className="label">Y</span>
        <input type="range" step="0.002" min="-3.3" max="3.3" value={current.position.pitch} onChange={this.moveY.bind(this)}/><br/>

        <span className="label">Base font size ({this.state.basefont}px)</span>
        <input type="range" step="0.002" min="5" max="100" value={this.state.basefont} onChange={this.changeBasefont.bind(this)}/><br/>
      </div>
    )
  }
  render() {
    if(this.props.admin.menuOpen === false) {
      return (
        <div>
          <div className='overlay-ui special-card special-card-right'>
            <button onClick={this.toggleAdminMenu.bind(this)}>«</button>
          </div>
        </div>
      )
    }

    return (
      <div className="Admin">
        <div className='overlay-ui special-card special-card-right'>
          <div>
            <button onClick={this.toggleAdminMenu.bind(this)}>»</button>
          </div>

          <br/>
          <h4>Admin</h4>
          <br/>
          <hr/>
          <div>
            id: {this.props.admin.controllingSpot}
          </div>
          <p><button onClick={this.addHotspot.bind(this)}>Add Hotspot</button></p>

          {this.getAdminEditControls()}

          <hr/>
          <button onClick={this.logData.bind(this)}>Console.log positions</button><br/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  router: state.router,
  admin: state.admin,
  marzipano: state.marzipano,
})

export default connect(mapStateToProps)(AdminView)
