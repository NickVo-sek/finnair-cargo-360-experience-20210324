import React from 'react'
import TerminalMap from './svg/TerminalMap'
import CargoEye from './svg/CargoEye'
import RoadMap from './svg/RoadMap'
import OperationalDashboard from './svg/OperationalDashboard'

export class CargoControlCenter extends React.Component {
  render() {
    return (
        <div>
        <img className="full-width" src={require('../../img/control-area-img/operator2.jpg')} srcSet={require('../../img/control-area-img/operator2@2x.jpg')+' 2x,'+ require('../../img/control-area-img/operator2@3x.jpg')+' 3x'} ></img>
        <p>From start to finish, all of the information that is critical to efficient cargo operations is monitored in the Cargo Control Center (CCC). By centralising information in the CCC, we can coordinate and synchronise core tasks.</p>

        <section className="wider">
              <table>
              <tbody>
                <tr>
                  <th colSpan="2">Data collected in the Cargo Control Center</th>
                </tr>
                <tr>
                  <td>
                    <img className="small"  src={require('../../img/control-area-img/group-16.svg')} />
                  </td>
                  <td><p><strong>1</strong>  – Shipment data</p></td>
                </tr>
                <tr>
                  <td>
                    <img className="small" src={require('../../img/control-area-img/group.svg')} />
                  </td>
                  <td><p><strong>2</strong> – Flight info</p></td>
                </tr>
                <tr>
                  <td>
                    <img className="small" src={require('../../img/control-area-img/group-12.svg')} />
                  </td>
                  <td><p><strong>3</strong> – Real-time conditions</p></td>
                </tr>
                <tr>
                  <td>
                    <img className="small" src={require('../../img/control-area-img/group-11.svg')} />
                  </td>
                  <td><p><strong>4</strong> – Truck movements</p></td>
                </tr>
                <tr>
                  <td>
                    <img className="small" src={require('../../img/control-area-img/group-7.svg')} />
                  </td>
                  <td><p><strong>5</strong> – Workstation progress</p></td>
                </tr>
              </tbody>
            </table>
          </section>
          <p>Centralising key operational data and monitoring processes in one place gives us complete visibility, enabling proactive decisions that benefit our customers. The Cargo Control Center allows us to solve problems before they affect shipment. </p>
        </div>
    )
  }
}

export class ProactiveDecisionMaking extends React.Component {
  render() {
    return (
        <div>
        <TerminalMap/>
        <section>
          <p>Off-site shipment data like weight, dimensions, number of pieces, and origin/destination is automatically sent to the Cargo Control Center (CCC) where it is used to optimise container and pallet assembly. </p>
          <p className="table-title">This allows for:</p>
          <ul>
            <li>shipment planning up to 48 hours before goods arrive at the terminal</li>
            <li>proactive resource planning and allocation</li>
          </ul>
        </section>
        <section>
          <img src={require('../../img/control-area-img/cargo-box.jpg')} srcSet={require('../../img/control-area-img/cargo-box@2x.jpg')+' 2x,'+ require('../../img/control-area-img/cargo-box@3x.jpg')+' 3x'} alt="" />
          <div>
            <p>In addition to using standard shipment information, proactive load planning is also supported with visual information. When a shipment enters the automated storage and retrieval system, a picture is taken and sent to the CCC. This helps the planners see the shape of a shipment. </p>
          </div>
        </section>
      </div>
    )
  }
}

export class Ready4ExternalChallenges extends React.Component {
  render() {
    return (
      <div>
        <img className="full-width" src={require('../../img/control-area-img/operator1.jpg')} srcSet={require('../../img/control-area-img/operator1@2x.jpg')+' 2x,'+ require('../../img/control-area-img/operator1@3x.jpg')+' 3x'} ></img>
        <section>
          <div>
            <p>Careful planning and flexible decision making help us respond quickly to unforeseen events that have the potential to disrupt our operations. </p>
            <p>For example, when a typhoon in Japan forced Osaka Airport to close, we used our disruption management planning to quickly choose the correct course of action. Specifically, Network Supervisors in the Cargo Control Center worked with the Finnair global sales team and the revenue yield management team to re-route shipments to other airports in Japan.</p>
            <p>Closer to home, snow storms have the potential to slow down operations. But at Helsinki Airport, sophisticated snow removal means snow on the runway rarely causes flight delays, and if there is a weather-related problem, we’re ready for it. Our Network Supervisors attend daily disruption management meetings with stakeholders from across the company. </p>
          </div>
        </section>
      </div>
    )
  }
}


export class CentralisingDatainCargoEye extends React.Component {
  render() {
    return (
        <div>
            <CargoEye/>
            <section>
              <table>
                <tbody>
                  <tr>
                      <th>CARGO EYE TRACKS APPROXIMATELY</th>
                  </tr>
                  <tr>
                  <td><span className="number" style={{fontSize: '2.8rem'}}>500 000<span className="sub-text">km</span></span>OF AIRCRAFT MOVEMENTS PER DAY </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p>The Cargo Eye is a software tool that pulls in data from multiple sources, enabling end-to-end tracking.</p>
                <h2>Cargo Eye can track: </h2>
                <ul>
                <li>temperature and humidity</li>
                <li>global location of aircraft and trucks</li>
                <li>arrivals and departures</li>
                <li>amount of special cargo on board</li>
                </ul>
              </div>
            </section>
            <section>
                <p>One of the key functions of the Cargo Eye tool is to use data to identify potential problems. For example, if an incoming flight departs is late, it alerts planners in the Cargo Control Center that the transit time will be tight. This allows us to make adjustments in our operations, and because it flags issues in advance, we can begin finding a solution as soon as possible. </p>
            </section>
        </div>
    )
  }
}

export class RoadFeederServices extends React.Component {
  render() {
    return (
      <div>
        <RoadMap/>
        <p>A large portion of the shipments that reach Helsinki by air continue on to their final destination in Europe by road transport. Coordination and planning of our road feeder network is managed from the Cargo Control Center (CCC). </p>
        <section>
            <ul className="checkbox green">
                <li>Dedicated people manage the road feeder network in the CCC </li>
                <li>Trucks have an AY flight code for schedule coordination </li>
                <li>Truck arrivals and departures are pre-planned in the CCC</li>
            </ul>
        </section>
        <section>
            <p>Coordinating road feeder services from the CCC allows us to ensure that shipments reach their final destinations safely and on time. </p>
        </section>
    </div>
    )
  }
}

export class SmoothTerminalOperation extends React.Component {
  render() {
    return (
        <div>
            <img className="full-width" src={require('../../img/control-area-img/cargo-forklift.jpg')} srcSet={require('../../img/control-area-img/cargo-forklift@2x.jpg')+' 2x,'+ require('../../img/control-area-img/cargo-forklift@3x.jpg')+' 3x'} />
            <p className="no-bottom-space">We measure and track many key operational metrics. For example, we have overall visibility on things like the number of air waybills, same-day connections and special handling requirements.</p>
            <section>
            <h2 className="extend">Operational metrics help us: </h2>
            <br/>
            <ul className="checkbox green">
                <li>allocate resources in the most effective way </li>
                <li>ensure high-quality service </li>
                <li>identify opportunities for improvement</li>
            </ul>
            </section>
            <h2>Operational metrics dashboard </h2>
            <OperationalDashboard/>
            <section>
                <p>Tracking operational metrics is critical to our success. But it’s just data until we turn it into knowledge and insight. Preventing bottlenecks and ensuring smooth terminal operations requires logic and creative thinking. The technology in the Cargo Control Center is important, but it’s our people who turn it into an action plan.</p>
            </section>
        </div>
    )
  }
}
