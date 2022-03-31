import React from 'react'
import PeakHoursGraph from './svg/PeakHoursGraph'
import WeeklyTruckTraffic from './svg/WeeklyTruckTraffic'

export class ShipmentScanning extends React.Component {
  render() {
    return (
       <div>
        <img className="full-width"  src={require('../../img/acceptance-area-img/cargo-scanner.jpg')} srcSet={require('../../img/acceptance-area-img/cargo-scanner@2x.jpg')+' 2x,'+ require('../../img/acceptance-area-img/cargo-scanner@3x.jpg')+' 3x'} alt="" />
        <section>
          <ul className="checkbox green">
            <li>Scanning is integrated into the acceptance process</li>
            <li>Scanning starts the in-house tracking process </li>
          </ul>
        </section>
        <section>
          <div>
            <p>Once an item has been scanned, we are able to verifiy the shipment details. Scanning also allows us to connect the air waybill with an in-house pallet barcode before it is sent to the automated storage and retrieval system. At this point, we know where a shipment is headed in our terminal and exactly where it is going after it leaves our facility.</p>
            <p>Scanning is the first part of the tracking process where we come into direct contact with a shipment. It’s where we first assess the condition of a shipment, and it’s where we take direct responsibility for how it is handled and looked after. </p>
          </div>
        </section>
        <section>
          <h2>Scanning gives us the following information:</h2>
          <ul className="checkbox">
            <li>air waybill number</li>
            <li>number of pieces</li>
            <li>origin</li>
            <li>destination</li>
            <li>security status</li>
            <li>special handling code</li>
          </ul>
        </section>
      </div>
    )
  }
}

export class TruckGateScreens extends React.Component {
  render() {
    return (
      <div>
        <img className="full-width" alt="" src={require('../../img/acceptance-area-img/truck-gates.jpg')} srcSet={require('../../img/acceptance-area-img/truck-gates@2x.jpg')+' 2x,'+ require('../../img/acceptance-area-img/truck-gates@3x.jpg')+' 3x'} />
        <section>
          <div>
            <p>Truck gate screens give warehouse staff and Terminal Supervisors an overall view of the completion timeline of the acceptance process. The Landside Supervisor, located in the COOL Control Center (CCC), assigns trucks to gates and warehouse operators working in the Acceptance area/Landside area and processes/updates jobs using the warehouse app on their tablets. </p>
          </div>
          <h2 style={{marginBottom:0, marginTop:'1em'}}>Truck gate info screens provide live contextual information</h2>
        </section>
        <svg className="full-width" viewBox="0 0 582 552">
          <g fill="none">
            <path fill="#EEF2F9" d="M0 0h583v552H0z"/>
            <g fill="#FFF">
              <path d="M69 65h522.945v22H69zM69 115h522.945v22H69zM69 165h522.945v22H69zM69 215h522.945v22H69zM69 265h522.945v22H69zM69 90h522.945v22H69zM69 140h522.945v22H69zM69 190h522.945v22H69zM69 240h522.945v22H69zM69 290h522.945v22H69zM69 315h522.945v22H69zM69 340h522.945v22H69zM69 365h522.945v22H69zM69 390h522.945v22H69z"/>
            </g>
            <text fill="#696969" fontFamily="Amplitude Book" fontSize="10" fontWeight="300" letterSpacing=".84" transform="translate(19 54)">
              <tspan x="0" y="26">GATE 12</tspan> <tspan x="0" y="51">GATE 13</tspan> <tspan x="0" y="76">GATE 14</tspan> <tspan x="0" y="101">GATE 15</tspan> <tspan x="0" y="126">GATE 16</tspan> <tspan x="0" y="151">GATE 17</tspan> <tspan x="0" y="176">GATE 18</tspan> <tspan x="0" y="201">GATE 19</tspan> <tspan x="0" y="226">GATE 20</tspan> <tspan x="0" y="251">GATE 21</tspan> <tspan x="0" y="276">GATE 22</tspan> <tspan x="0" y="301">GATE 23</tspan> <tspan x="0" y="326">GATE 24</tspan> <tspan x="0" y="351">GATE 25</tspan>
            </text>
            <g transform="translate(69 60)" fill="#696969" fontFamily="Amplitude Book" fontSize="10" fontWeight="300" letterSpacing=".84">
              <text x="0">07:00</text>
              <text x="43">08:00</text>
              <text x="86">09:00</text>
              <text x="130">10:00</text>
              <text x="260">13:00</text>
              <text x="391">16:00</text>
              <text x="173">11:00</text>
              <text x="304">14:00</text>
              <text x="435">17:00</text>
              <text x="217">12:00</text>
              <text x="347">15:00</text>
              <text x="478">18:00</text>
            </g>
            <g stroke="#464646" transform="translate(68 25)">
              <path d="M11.569 12.631L8 9.1V3"/>
              <circle cx="8.5" cy="8.5" r="8.5"/>
            </g>
            <g stroke="#EEF2F9" strokeLinecap="square" strokeWidth="2">
              <path d="M69.055 65v347M199.055 65v347M329.055 65v347M460.055 65v347M112.055 65v347M242.055 65v347M373.055 65v347M504.055 65v347M155.055 65v347M285.055 65v347M416.055 65v347M548.055 65v347"/>
            </g>
            <path stroke="#464646" d="M321.5 444.5v13h-30v-8.095l5.852-4.905H321.5zM291.5 470.5v13h30v-8.095l-5.852-4.905H291.5z"/>
            <g fill="#1E1E1E" fontFamily="Amplitude Medium" fontSize="12" transform="translate(68 447)">
              <text x="271" y="10">IN-COMING TRUCKS</text>
              <text x="271" y="34">OUT-GOING TRUCKS</text>
              <text x="34" y="10">A JOB HAS BEEN DONE</text>
              <text x="34" y="34">A JOB IS STILL IN PROGRESS</text>
              <text x="34" y="58">BEHIND SCHEDULE</text>
            </g>
            <g fill="#D2DCED">
              <path d="M292 65h8v22.029h-8zM253 90h4v22.029h-4zM198 165h4v22.029h-4zM277 90h4v22.029h-4zM222 165h4v22.029h-4zM268 290h4v22.029h-4z"/>
              <path d="M286 115h2v22.029h-2z"/>
              <path d="M259 146.591l6.724-6.591H270v22.03h-11zM259 196.591l6.724-6.591H272v22.03h-13zM212 146.591l6.724-6.591H226v22.03h-14z"/>
              <path d="M68 444h17v16H68z"/>
              <path d="M204 221.591l6.724-6.591h12.938v22.03H204zM260 246.591l6.724-6.591h12.938v22.03H260zM271 271.591l6.724-6.591h25.098v22.03H271zM233 346.591l6.724-6.591h25.098v22.03H233zM185 271.591l6.724-6.591h22.528v22.03H185z"/>
              <path d="M161 296.591l6.724-6.591h9.548v22.03H161z"/>
              <path d="M230 246.591l6.724-6.591h9.938v22.03H230zM134 271.591l6.724-6.591h5.585v22.03H134zM117 296.591l6.724-6.591h3.585v22.03H117zM101 321.591l6.724-6.591h9.595v22.03H101zM250 221.591l6.724-6.591H264v22.03h-14zM222 196.591l6.724-6.591H234v22.03h-12zM147 196.591l6.724-6.591H161v22.03h-14z"/>
            </g>
            <g fill="#0B1560">
              <path d="M307.183 321.591L300.459 315H199v22.03h108.183z"/>
              <path d="M293 246.591l6.724-6.591h17.794v22.03H293zM308 271.591l6.724-6.591h22.528v22.03H308z"/>
              <path d="M308 165h4v22.029h-4z"/>
              <path d="M308 140h11v22.029h-11z"/>
              <path d="M68 468h17v16H68z"/>
            </g>
            <g fill="#F6A4A4">
              <path d="M316.004 371.591L309.28 365H290v22.03h26.004zM371.89 371.591L365.165 365H318v22.03h53.89zM345.89 396.591L339.165 390h-52.702v22.03h59.425z"/>
              <path d="M308 296.591l6.724-6.591h7.902v22.03H308z"/>
              <path d="M68 492h17v16H68z"/>
            </g>
            <path stroke="#FF5F5F" strokeWidth="2" d="M307.5 65v347"/>
          </g>
        </svg>
        <section>
          <p>COOL Control Center also has a view over landside traffic and for busy days the Landside Supervisors re-prioritise Landside door usage in cooperation with Network Supervisors and cargo service agents responsible for truck traffic.</p>
        </section>
      </div>
    )
  }
}


export class AutomatedInfoCheck extends React.Component {
  render() {
    return (
       <div>
        <img className="full-width" src={require('../../img/acceptance-area-img/automated-info-check.jpg')} srcSet={require('../../img/acceptance-area-img/automated-info-check@2x.jpg')+' 2x,'+ require('../../img/acceptance-area-img/automated-info-check@3x.jpg')+' 3x'} alt="" />
        <section>
          <p>Every package that goes into the automated storage and retrieval system (ASRS) passes through a verification scan.</p>
          <h2>This scan:</h2>
          <ul className="checkbox multiline">
            <li>Validates the weight and size to prevent oversize packages from disrupting the flow of shipments in the ASRS</li>
            <li>Includes a digital photograph that can be used by the Network Supervisors in the Cargo Control Center to plan ULD build-up</li>
          </ul>
          <p>The entry and exit points of the ASRS have a scale to make sure a shipment isn’t heavier than 1200kg. A contour check is also done before a shipment enters the ASRS to make sure everything fits inside the system. To fit in the ASRS, a shipment must be less than 1.7m x 1.7m.</p>
        </section>
      </div>
    )
  }
}

export class CargoPeakHours extends React.Component {
  render() {
    return (
       <div>
        <PeakHoursGraph />
        <section>
          <p>There are 3 main busy periods during the day. In the morning, we have the first aircraft bank, which peaks around 7:00–8:00. Then, trucks begin to arrive more frequently, with acceptance area truck traffic peaking around 11:00. Once the mid-day truck arrivals slow down, we have the biggest aircraft bank of the day, which peaks around 17:00. </p>
          <p>This operational setup allows us to use team members with cross-functional skills more effectively and helps ensure we can handle peak hours smoothly and efficiently.</p>
        </section>
      </div>
    )
  }
}

export class SmartForklift extends React.Component {
  render() {
    return (
       <div>
        <img className="full-width" src={require('../../img/acceptance-area-img/cargo-forklift.jpg')} srcSet={require('../../img/acceptance-area-img/cargo-forklift@2x.jpg')+' 2x,'+ require('../../img/acceptance-area-img/cargo-forklift@3x.jpg')+' 3x'} alt="" />
        <section>
          <h2>Forklift drivers are given the task that is closest to their current location.</h2>
          <p className="table-title">This allows us to:</p>
          <ul>
            <li>minimise the total distance that our forklifts travel</li>
            <li>optimise for precise and timely movement of shipments</li>
            <li>reduce the amount of travel time between tasks</li>
          </ul>
        </section>
        <section>          
          <img src={require('../../img/acceptance-area-img/cargo-driver-info-screen.jpg')} srcSet={require('../../img/acceptance-area-img/cargo-driver-info-screen@2x.jpg')+' 2x,'+ require('../../img/acceptance-area-img/cargo-driver-info-screen@3x.jpg')+' 3x'} alt="" />
          <div> 
            <p>Once a forklift has completed a task, the closest available task appears at the top of the driver’s info screen. The task list is constantly changing based on a forklift’s location. </p>
          </div>
        </section>
      </div>
    )
  }
}

export class TruckYardManagement extends React.Component {
  render() {
    return (
        <div>
            <img className="full-width" src={require('../../img/acceptance-area-img/cargo-truck-terminal.jpg')} srcSet={require('../../img/acceptance-area-img/cargo-truck-terminal@2x.jpg')+' 2x,'+ require('../../img/acceptance-area-img/cargo-truck-terminal@3x.jpg')+' 3x'} />
            <section>
            <h2>Proactive planning</h2>
              <table>
                <tbody>
                  <tr>
                      <th>Truck yard efficiency</th>
                  </tr>
                  <tr>
                      <td><span className="number">12<span className="unit">MIN</span></span>Average time spent at loading dock </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p>We use air waybill info from SkyChain and truck appointment data to anticipate the arrival of shipments at our facility.</p>
                <p className="table-title">This allows us to:</p>
                <ul>
                  <li>be prepared for multiple arrivals</li>
                  <li>efficiently assign trucks to the right doors</li>
                  <li>handle special cargo cases</li>
                </ul>
              </div>
            </section>
            <section>
                <h2>Weekly truck traffic to Cool Cargo Terminal</h2>
            </section>
            <WeeklyTruckTraffic />
        </div>
    )
  }
}
