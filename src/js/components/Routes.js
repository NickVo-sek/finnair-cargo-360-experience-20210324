import React from 'react'
import { Route, Switch } from 'react-router'

import ThreeSixtyView from '../pages/ThreeSixtyView'
import Welcome from '../pages/Welcome'
import NotFound from '../pages/NotFound'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (<Welcome />)} />
        <Route exact path="/pharma" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/pharma/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/tarmac" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/tarmac/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/acceptance" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/acceptance/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/general" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/general/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/pharma" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/pharma/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/perishables" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/perishables/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/control" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/control/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/tarmac" render={() => (<ThreeSixtyView/>)} />
        <Route exact path="/tarmac/:hotspot" render={() => (<ThreeSixtyView/>)} />
        <Route render={() => (<NotFound/>)} />
      </Switch>
    )
  }
}

export default Routes
