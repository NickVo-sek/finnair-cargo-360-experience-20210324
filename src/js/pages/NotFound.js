import React from 'react'
import Navigation from '../components/Navigation'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className="PageContent">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </div>
    )
  }
}

export default NotFound
