import React from 'react'
import CargoRouteTable from './svg/CargoRouteTable'
import FleetGraphic from './svg/FleetGraphic'

export class TimingAndTemperature extends React.Component {
  render() {
    return (
      <div>
        <img className="full-width" src={require('../../img/tarmac-area-img/cargo-hold-door.jpg')} srcSet={require('../../img/tarmac-area-img/cargo-hold-door@2x.jpg')+' 2x,'+ require('../../img/tarmac-area-img/cargo-hold-door@3x.jpg')+' 3x'}/>
        <section>
            <h2>How we handle special cargo: </h2>
            <ul>
                <li>Special cargo comes directly from dedicated temperature-controlled areas</li>
                <li>Pharma and perishables are picked up at the last possible moment</li>
                <li>Temperature-controlled dollies are used to transfer delicate king crab shipments</li>
                <li>Special cargo is not placed near the cargo hold door because the temperature is lower </li>
            </ul>
        </section>
        <section>
            <img src={require('../../img/tarmac-area-img/pilot-in-cockpit.jpg')} srcSet={require('../../img/tarmac-area-img/pilot-in-cockpit@2x.jpg')+' 2x,'+ require('../../img/tarmac-area-img/pilot-in-cockpit@3x.jpg')+' 3x'}alt="" />
            <div>
                <h2>How we load temperature-sensitive cargo</h2>
                <ol>
                    <li>Load planning and loading instructions are completed by the CLC office</li>
                    <li>the Ramp Foreman records required temperatures in a ‘Notification to Captain’</li>
                    <li>The Pilot in command uses this document to adjust the hold temperature accordingly</li>
                </ol>
            </div>
        </section>
      </div>
    )
  }
}
export class ElevatingTransferVehicles extends React.Component {
  render() {
    return (
       <div>
            <img className="full-width" src={require('../../img/tarmac-area-img/finnair-cargo-vehicle.jpg')} srcSet={require('../../img/tarmac-area-img/finnair-cargo-vehicle@2x.jpg')+' 2x,'+ require('../../img/tarmac-area-img/finnair-cargo-vehicle@3x.jpg')+' 3x'}/>
            <section>
                <h2>The ETVs proactively sort, arrange and move ULDs</h2>
            </section>
            <section>
              <table>
                <tbody>
                  <tr>
                      <th>ETVs can complete</th>
                  </tr>
                  <tr>
                      <td><span className="number">72</span> operations per hour. This improves efficiency because it organises and moves ULDs to ensure a timely tarmac transfer process.</td>
                  </tr>
                </tbody>
              </table>
              <div>Specifically:
                <ul>
                    <li>ULDs are retrieved just before they are needed</li>
                    <li>Cargo is fed to both the terminal and tarmac side at the right time</li>
                    <li>Precise, safe handling of ULDs ensures timely operations on the tarmac and inside the terminal</li>
                </ul>
              </div>
            </section>
            <section>
                <h2>The efficiency of the ETVs allows us to optimise for two key departure/arrival periods.</h2>
            </section>
            <svg className="full-width" viewBox="0 0 582 328">
                <g fill="none" fillRule="evenodd">
                    <path fill="#EEF2F9" d="M0 0h582v328H0z"/>
                    <g transform="translate(25 22)">
                        <g fill="#1E1E1E">
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="39.164" y="278">05</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="12" transform="translate(7)">
                                <tspan x="95.54" y="10">MORNING</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="12" transform="rotate(-90 9.5 121)">
                                <tspan x="-79.47" y="128.5">DISTRIBUTION OF FINNAIR FLIGHTS </tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="12" transform="translate(7)">
                                <tspan x="324.012" y="10">AFTERNOON</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="146.716" y="278">09</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="257.396" y="278">13</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="369.48" y="278">17</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="65.709" y="278">06</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="174.787" y="278">10</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="283.85" y="278">14</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="396.039" y="278">18</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="93.199" y="278">07</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="203.068" y="278">11</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="311.445" y="278">15</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="422.997" y="278">19</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="477.459" y="278">21</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="119.758" y="278">08</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="229.459" y="278">12</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="337.99" y="278">16</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="449.178" y="278">20</tspan>
                            </text>
                            <text fontFamily="Amplitude Book" fontSize="14" transform="translate(7)">
                                <tspan x="503.787" y="278">23</tspan>
                            </text>
                        </g>
                        <g stroke="#464646" transform="translate(18 264)">
                            <path d="M11.569 12.631L8 9.1V3"/>
                            <circle cx="8.5" cy="8.5" r="8.5"/>
                        </g>
                        <path stroke="#0B1560" strokeLinecap="square" d="M41 251h25v-18H41zM68 251h25v-24H68z"/>
                        <path fill="#0B1560" d="M95 251h25V110H95zM123 251h25v-90h-25zM150 251h25v-68h-25z"/>
                        <path stroke="#0B1560" d="M177 251h25v-13h-25zM204 251h25v-30h-25zM232 251h25v-44h-25zM259 251h25v-13h-25zM286 251h25v-24h-25zM313 251h25v-24h-25z"/>
                        <path fill="#0B1560" d="M341 251h25V28h-25zM369 251h25V135h-25z"/>
                        <path stroke="#0B1560" d="M396 251h25v-18h-25zM423 251h25v-30h-25zM450 251h25v-50h-25zM477 251h25v-13h-25zM504 251h25v-44h-25z"/>
                        <rect width="83" height="20" x="93.5" y="263.5" stroke="#464646" rx="10"/>
                        <rect width="57" height="20" x="338.5" y="263.5" stroke="#464646" rx="10"/>
                        <path stroke="#0B1560" d="M.5 251.25h533"/>
                    </g>
                </g>
            </svg>
        </div>
    )
  }
}
export class UndergroundHeating extends React.Component {
  render() {
    return (
      <div>
          <img className="full-width" src={require('../../img/tarmac-area-img/cargo-terminal-outside.jpg')} srcSet={require('../../img/tarmac-area-img/cargo-terminal-outside@2x.jpg')+' 2x,'+ require('../../img/tarmac-area-img/cargo-terminal-outside@3x.jpg')+' 3x'}/>
          <section>
              Heated water pipes keep the ground next to the terminal doors free from snow and ice
              <ul>
                  <li>Departing and arriving cargo moves without interruptions</li>
                  <li>Operations in the terminal and on the tarmac can continue seamlessly</li>
              </ul>
              <br />
              <p>We are well prepared for any kind of weather. Our Helsinki hub is in Northern Europe and it can get cold here, but over the course of the year, temperatues stay well within a manageable range.</p>
              <h2 style={{ marginBottom:0 }}>Average daily temperature in 2018</h2>
          </section>
          <svg className="full-width" viewBox="0 0 582 345">
              <g fill="none" fillRule="evenodd">
                  <path fill="#EEF2F9" d="M0 0h582v345H0z"/>
                  <path stroke="#C3C3C3" d="M77.911 57.25H549.47M77.911 86.25H549.47M77.911 112.25H549.47M77.911 137.25H549.47M77.911 163.25H549.47"/>
                  <path stroke="#0B1560" d="M77.911 189.25H549.47"/>
                  <path stroke="#C3C3C3" d="M77.911 215.25H549.47M77.911 241.25H549.47M78.356 267.5H549.47"/>
                  <g fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14">
                      <text transform="translate(24 13)">
                          <tspan x="58.087" y="288">JAN</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="92.003" y="288">FEB</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="127.298" y="288">MAR</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="164.621" y="288">APR</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="199.543" y="288">MAY</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="237.405" y="288">JUN</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="274.336" y="288">JUL</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="308.243" y="288">AUG</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="345.594" y="288">SEP</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="381.181" y="288">OCT</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="415.886" y="288">NOV</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="452.139" y="288">DEC</tspan>
                      </text>
                      <text transform="translate(24 13)">
                          <tspan x="14.227" y="11">°C</tspan>
                          <tspan x="12.477" y="37.5">25</tspan>
                          <tspan x="11.161" y="64">20</tspan>
                          <tspan x="13.695" y="90.5">15</tspan>
                          <tspan x="12.379" y="117">10</tspan>
                          <tspan x="19.127" y="143.5">5</tspan>
                          <tspan x="17.811" y="170">0</tspan>
                          <tspan x="14.731" y="196.5">-5</tspan>
                          <tspan x="7.983" y="223">-10</tspan>
                          <tspan x="9.299" y="249.5">-15</tspan>
                      </text>
                  </g>
                  <g stroke="#0B1560">
                      <path fill="#0B1560" strokeLinecap="square" d="M77 213h31v-27H77zM113 250h31v-36h-31z"/>
                      <path fill="#0B1560" d="M148.28 229h31v-34h-31z"/>
                      <path fill="#EEF2F9" d="M185 174h31v-21h-31zM221 120h31V93h-31zM257 117h31V95h-31zM292 83h31V61h-31zM329 111h31V87h-31zM365 134h31v-30h-31zM400 170h31v-35h-31z"/>
                      <path fill="#0B1560" d="M436 196h31v-37h-31zM473 197h31v-16h-31z"/>
                  </g>
              </g>
          </svg>
          <section>
              <h2>World-class snow removal</h2>
              <p>Helsinki Airport and Finnair are prepared for any kind of weather.</p>
              <video className="full-width" src={require('../../video/snowhow.mp4')} poster={require('../../img/tarmac-area-img/snowhow-video.jpg')} controls>
              </video>
          </section>
      </div>
    )
  }
}
export class FinnairCargoRoutes extends React.Component {
  render() {
    return (
      <div>
        <table>
        <tbody>
            <tr>
                <th>Finnair flies the short northern route between Europe and Asia. We are a global carrier and the chart below shows our routes, frequencies and flight times.</th>
                <td>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                  <CargoRouteTable />
                </td>
            </tr>
        </tbody>
        </table>
      </div>
    )
  }
}
export class ShortTransferDistances extends React.Component {
  render() {
    return (
       <div>
          <img className="full-width" src={require('../../img/tarmac-area-img/short-transfer-distances.jpg')} srcSet={require('../../img/tarmac-area-img/short-transfer-distances@2x.jpg')+' 2x,'+ require('../../img/tarmac-area-img/short-transfer-distances@3x.jpg')+' 3x'}/>
          <section>
              <h2>Aircraft parking spots are close to the terminal</h2>
              <p>Helsinki Airport is designed for efficiency and its relatively small size has some significant benefits. For example, short distances between the aircraft and the terminal means that precious cargo spends less time outdoors on the tarmac. </p>
              <p>The tarmac is a temperature-critical zone and short transfer distances minimise the amount of time a shipment spends outdoors. </p>
          </section>
          <section>
              <h2>Transfer distances and times at our terminal are:</h2>
              <figure>
                  <svg width="467" height="34" viewBox="0 0 467 34">
                      <g fill="none" fillRule="evenodd">
                          <rect width="130" height="32.444" x=".5" y=".5" stroke="#CCC" rx="3" transform="translate(36 .185)"/>
                          <text fill="#16086D" fontFamily="Amplitude Light" fontSize="18" transform="translate(36 5)">
                              <tspan x="8.784" y="17">15 m</tspan>
                          </text>
                          <text fill="#110E69" fontFamily="Amplitude Light" fontSize="18" transform="translate(36 5)">
                              <tspan x="91.521" y="17">20 s</tspan>
                          </text>
                          <g stroke="#959595" transform="translate(176 5)">
                              <path d="M16.648 17.498l-5.574-4.739V3.407"/>
                              <circle cx="11.5" cy="11.5" r="11.5"/>
                          </g>
                          <g>
                              <path fill="#959595" d="M17.409 13.342c-.071-.075-.188-.019-.188.091l.006 2.303c0 .069-.05.125-.111.125h-6.309c-.061 0-.111-.056-.11-.125l.005-2.303c0-.11-.117-.166-.188-.09l-3.787 3.105a.135.135 0 0 0 0 .18l3.797 3.107c.071.075.188.019.188-.091l-.006-2.538c0-.069.05-.125.111-.125h6.29c.06 0 .11.056.11.125l-.006 2.538c0 .11.117.166.188.09l3.797-3.106a.136.136 0 0 0 0-.18l-3.787-3.106z"/>
                              <path stroke="#979797" d="M28.032 8H23v16.391h5.032M0 8h5.032v16.391H0"/>
                          </g>
                      </g>
                  </svg>
                  <figcaption>Aircraft parked next to COOL Cargo terminal</figcaption>
              </figure>
              <figure>
                  <svg width="467" height="34" viewBox="0 0 467 34">
                      <g fill="none" fillRule="evenodd">
                          <text fill="#16086D" fontFamily="Amplitude Light" fontSize="18" transform="translate(36 5)">
                              <tspan x="9.784" y="17">700 m</tspan>
                          </text>
                          <g transform="translate(36 .216)">
                              <rect width="396" height="32.765" x=".5" y=".5" stroke="#CCC" rx="3"/>
                              <text fill="#110E69" fontFamily="Amplitude Light" fontSize="18">
                                  <tspan x="317.942" y="22">10–15 min</tspan>
                              </text>
                          </g>
                          <g stroke="#959595" transform="translate(442 5)">
                              <path d="M17.372 18.259l-5.816-4.945V3.556"/>
                              <circle cx="12" cy="12" r="12"/>
                          </g>
                          <g>
                              <path fill="#959595" d="M17.409 14.342c-.071-.075-.188-.019-.188.091l.006 2.303c0 .069-.05.125-.111.125h-6.309c-.061 0-.111-.056-.11-.125l.005-2.303c0-.11-.117-.166-.188-.09l-3.787 3.105a.135.135 0 0 0 0 .18l3.797 3.107c.071.075.188.019.188-.091l-.006-2.538c0-.069.05-.125.111-.125h6.29c.06 0 .11.056.11.125l-.006 2.538c0 .11.117.166.188.09l3.797-3.106a.136.136 0 0 0 0-.18l-3.787-3.106z"/>
                              <path stroke="#979797" d="M28.032 9H23v16.391h5.032M0 9h5.032v16.391H0"/>
                          </g>
                      </g>
                  </svg>
                  <figcaption>Aircraft parked at the passenger terminal  </figcaption>
              </figure>
          </section>
          <section>
              <img className="full-width" src={require('../../img/tarmac-area-img/airport-map.jpg')} srcSet={require('../../img/tarmac-area-img/airport-map@2x.jpg')+' 2x,'+ require('../../img/tarmac-area-img/airport-map@3x.jpg')+' 3x'} alt="" />
          </section>
      </div>
    )
  }
}
export class OurModernFleet extends React.Component {
  render() {
    return (
      <div>
        <img className="full-width" src={require('../../img/tarmac-area-img/modern-fleet@2x.jpg')} srcSet={require('../../img/tarmac-area-img/modern-fleet@2x.jpg')+' 2x,'+ require('../../img/tarmac-area-img/modern-fleet@3x.jpg')+' 3x'} alt="" />
        <section>We have increased cargo capacity and decreased CO2 emissions per kilogram of cargo shipped:</section>
        <section className="wider">
        <div className="left-table">
              <table>
                <tbody>
                  <tr>
                    <th>Our New A350 aircraft produce</th>
                  </tr>
                  <tr>
                    <td><span className="number">20% </span><div>less CO2 emissions than previous<br/>generation aircraft</div></td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>The A350 increases Cargo capacity by</th>
                  </tr>
                  <tr>
                    <td><span className="number">16–20%</span><div>per route</div></td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="right-narrow">
            <table>
              <tbody>
                <tr>
                  <th>Fleet renewal is the best way for an airline to reduce its environmental impact</th>
                </tr>
                <tr>
                  <td>
                    <FleetGraphic />
                    <br />We have 14 A350s in operation and 5 more on order</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="wider">
            <table>
              <tbody>
                <tr>
                  <td className="expand-left-right">
                    <svg width="121" height="89" viewBox="0 0 81 89">
                      <g fill="none" fillRule="evenodd">
                        <path stroke="#0B1560" strokeWidth="2" d="M1.735 1.382c16.674 0 29.49 4.176 37.858 7.83C51.34 14.341 57.788 22.817 60.99 25.294 67.768 30.543 80.018 36.995 80 43.032c-.029 9.411-28.29 17.958-80 17.902"/>
                        <path fill="#0B1560" d="M48.18 17.097c-6.199-.02-9.96.533-9.971 4.224-.01 3.333 1.867 4.056 5.88 4.069 2.796.01 6.663-2.133 9.61-2.124 2.782-.127 4.808-.127 4.808-.127l-3.031-2.938-2.386-2.305s-2.023-.79-4.91-.8"/>
                        <path stroke="#0B1560" d="M48.18 17.097c-6.199-.02-9.96.533-9.971 4.224-.01 3.333 1.867 4.056 5.88 4.069 2.796.01 6.663-2.133 9.61-2.124 2.782-.127 4.808-.127 4.808-.127l-3.031-2.938-2.386-2.305s-2.023-.79-4.91-.8z"/>
                        <path stroke="#0B1560" strokeWidth="3" d="M26.269 81.668c0 2.944-2.405 5.332-5.374 5.332-2.966 0-5.373-2.388-5.373-5.332s2.407-5.331 5.373-5.331c2.969 0 5.374 2.387 5.374 5.331z"/>
                        <path stroke="#0B1560" strokeWidth="2" d="M20.299 77.522V59.749"/>
                      </g>
                    </svg>
                  </td>
                  <th>Over half of all Finnair long-haul flights are operated with A350 aircraft</th>
                </tr>
              </tbody>
            </table>
          </section>
      </div>
    )
  }
}
