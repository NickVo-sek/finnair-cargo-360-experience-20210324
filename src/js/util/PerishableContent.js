import React from 'react'
import SalmonShipmentGraph from './svg/SalmonShipmentGraph'
import ControlChainInfo from './svg/ControlChainInfo'

export class UnbrokenControlChain extends React.Component {
  render() {
    return (
        <div>
        <img className="full-width" src={require('../../img/perishable-area-img/controlman2.jpg')} srcSet={require('../../img/perishable-area-img/controlman2@2x.jpg')+' 2x,'+ require('../../img/perishable-area-img/controlman2@3x.jpg')+' 3x'} />
        <section>
          <table>
            <tbody>
              <tr>
                  <th>We follow the </th>
              </tr>
              <tr>
                  <td><span className="number">IATA</span>guidelines for perishables</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>Perishables are always temperature controlled.</p>
            <ul>
            <li>The correct temperature zone is selected both in the terminal and on the plane</li>
            <li>Sensors immediately trigger an alarm if a temperature excursion has occurred</li>
            <li>If a door is open for longer than it has to be, an alarm goes off</li>
            <li>Exposure to extreme weather	conditions during tarmac transport is minimised</li>
            </ul> 
          </div>
        </section>
        <section>
            <h2>An unbroken control chain from truck to aircraft </h2>
        </section>
        <ControlChainInfo/>
        <section>
            <p>To ensure product integrity, Finnair Cargo does not accept a perishable shipment if the contents do not appear to be in good condition, if the packaging appears to be inadequate or if it is evident that the goods will not reach their destination in a satisfactory condition. </p>
        </section>
      </div>
    )
  }
}

export class UniqueTransportNeeds extends React.Component {
  render() {
    return (
        <div>
        <img className="full-width" src={require('../../img/perishable-area-img/finnair-cargo-seafood@2x.jpg')}/>
        <section>
        <p>We work with our customers to design a shipping process that ensures quality and punctuality while meeting their business objectives.</p>
        <p>For example, we created a custom shipping process for transporting salmon and live King Crab from Norway to Asia. This tailored process required us to match our schedules with salmon companies and set up direct communication with incoming truck drivers. </p>
          <ul className="checkbox">In addition to seafood from Norway, we ship a wide range of perishable items:
            <li>orchids</li>
            <li>papaya</li>
            <li>chili peppers</li>
            <li>cherries (seasonal)</li>
            <li>organic chicken</li>
            <li>caviar</li>
          </ul>
        </section>
      </div>
    )
  }
}

export class CargoCrewWork extends React.Component {
  render() {
    return (
        <div>
        <img className="full-width" src={require('../../img/perishable-area-img/cargo-packing.jpg')} srcSet={require('../../img/perishable-area-img/cargo-packing@2x.jpg')+' 2x,'+ require('../../img/perishable-area-img/cargo-packing@3x.jpg')+' 3x'}/>
        <section>
            <h2 className="extend">Time is critical because: </h2>
            <ul className="checkbox green">
                <li>we set and execute against tight schedules to optimise shipping times </li>
                <li>one minute lost early in a process can potentially have a “knock-on effect” down the line </li>
            </ul>
        </section>
        <section>
          <div> 
            <p>Trucks from Norway arrive between 10:00 and 11:00 in the morning, and the first outgoing flights leave Helsinki Airport at 14:00. This means cargo crew must execute unloading of ﬁsh trucks and pallet building efficiently for shipments to stay on time.</p>
          </div>          
        </section>
        <video className="full-width" src={require('../../video/Finnair_Pallet_building_v3.mp4')} poster={require('../../img/perishable-area-img/pallet-building@2x.jpg')} controls></video>
      </div>
    )
  }
}


export class TakingCarePerishables extends React.Component {
  render() {
    return (
        <div>
            <img className="full-width" src={require('../../img/perishable-area-img/controlman1.jpg')} srcSet={require('../../img/perishable-area-img/controlman1@2x.jpg')+' 2x,'+ require('../../img/perishable-area-img/controlman1@3x.jpg')+' 3x'} />
            <section>
              <table>
                <tbody>
                  <tr>
                      <th>1 pallet of king crab is worth</th>
                  </tr>
                  <tr>
                      <td><span className="number" style={{fontSize: '3rem'}}>75 000</span>EUROS </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p>Perishable cargo often needs special packaging and handling procedures that minimise the temperature variations during storage and transportation. We have special operating procedures for maintaining the requested temperature and avoiding exposures to extreme conditions.</p>
                <p className="table-title">For example:</p>
                <ul>
                <li>storage in proper facilities.</li>    
                <li>standard operating procedure (SOP). </li>   
                <li>critical control points observed.</li>     
                </ul>               
              </div>
            </section>
            <section>
                <p>One of the most interesting things we ship is live King Crab. They are very sensitive to their environment and the complete journey from Norway to Asia needs to take less than 40 hours. To accomplish this, the crabs are properly packed and we use of real-time temperature control to keep the crabs in a semi-hibernated state at a temperature between 0–5 °C. </p>
            </section>
        </div>
    )
  }
}

export class SalmonProducers extends React.Component {
  render() {
    return (
      <div>
        <SalmonShipmentGraph/>
        <section>
              <table>
                <tbody>
                  <tr>
                      <th>Our top 5 salmon destinations are:</th>
                  </tr>
                  <tr>
                      <td className="text">
                        <span>japan</span>
                        <br/> 
                        <span>thailand</span>
                        <br/> 
                        <span>hongkong</span>
                        <br/> 
                        <span>korea</span>
                        <br/> 
                        <span>singapore</span>
                      </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p>Over the last 4 years, the volume of salmon we are carrying has increased by 40% and we currently serve some of the major salmon producers in Norway.</p>
                <p>We have worked closely with salmon shippers.</p>
                <p className="table-title">To meet their needs, we:</p>
                <ul>
                <li>agree on schedules with salmon companies</li>    
                <li>have direct contact with truck drivers</li>   
                <li>keep shipments inside the terminal as long as possible</li>     
                </ul>               
              </div>
            </section>
        <section>
            <div>
            <p>Trucking salmon down to Oslo is complicated and slow because the road winds through the fjords. But the journey to Helsinki is a lot faster because the roads are straight. That’s one reason the world’s biggest salmon producers send so much fish to Asia via Helsinki. </p> 
            </div>
        </section>
        <h2>See a film about our quick global transport of perishables </h2>
        <video className="full-width" src={require('../../video/quick-trasnsport-perishables.mp4')} poster={require('../../img/perishable-area-img/bitmap-perishables@2x.jpg')} controls></video>
    </div>
    )
  }
}