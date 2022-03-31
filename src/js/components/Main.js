import React from 'react'
import Routes from './Routes'
import {withRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

const ScrollTopWrapper = withRouter(ScrollToTop)

class Main extends React.Component {
  render(){
    return (
      <div className={window.electron ? 'Electron' : ''}>
        <ScrollTopWrapper>
          <Routes />
        </ScrollTopWrapper>
      </div>
    )
  }
}

export default hot(Main)
