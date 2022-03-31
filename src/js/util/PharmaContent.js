import React from 'react'

export class CeivCertificate extends React.Component {
  render() {
    return (
      <div>
        <section className="vertically-centered">
          <img alt="CEIV Pharma" src={require('../../img/pharma-area-img/ceiv-pharma-stamp@2x.png')} srcSet={require('../../img/pharma-area-img/ceiv-pharma-stamp@2x.png')+' 2x,'+ require('../../img/pharma-area-img/ceiv-pharma-stamp@3x.png')+' 3x'}/>
          <div>
            <p>Our COOL cargo terminal has recently achieved CEIV certification, bringing us one step closer to offering end-to-end CEIV certified air transport. Finnair was the first airline in the world to achieve IATA Excellence for Independent Validators in Pharmaceutical Logistics (CEIV Pharma certification).</p>
          </div>
        </section>
        <svg className="full-width" viewBox="0 0 582 328">
          <g fill="none" fillRule="evenodd">
            <path fill="#EEF2F9" d="M0 0h582v328H0z"/>
            <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14" transform="translate(33 34)">
              <tspan x="17" y="11">TOTAL NUMBER</tspan>
              <tspan x="17" y="29">OF AIRLINE CEIV </tspan>
              <tspan x="17" y="47">CERTIFICATES</tspan>
              <tspan x="17" y="65">BY YEAR</tspan>
              <tspan fontFamily="Amplitude Medium" x="44.287" y="242">2015</tspan>
            </text>
            <text fill="#0B1560" fontFamily="Amplitude Light" fontSize="32" transform="translate(33 34)">
              <tspan x="49.072" y="192.584">2</tspan>
              <tspan x="184.152" y="146.584">7</tspan>
              <tspan x="310.2" y="48.584">17</tspan>
              <tspan x="439.256" y="21.584">20</tspan>
            </text>
            <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14" transform="translate(33 34)" y="244">
              <tspan x="178.336">2016</tspan>
              <tspan x="312.819">2017</tspan>
              <tspan x="445.371">2018</tspan>
            </text>
            <path stroke="#0B1560" strokeLinecap="square" d="M33.5 257.5h515"/>
            <path stroke="#0B1560" d="M51.5 239.5h82v18h-82zM184.5 193.5h82v64h-82zM316.5 95.5h82v162h-82zM449.5 68.5h82v189h-82z"/>
          </g>
        </svg>
        <section>
          <img alt="" src={require('../../img/pharma-area-img/certificate.svg')} />
          <div>
            <h2>The CEIV certification program aims to: </h2>
            <ul>
              <li>prevent product quality issues caused by temperature excursions during transportation</li>
              <li>prevent contamination situations caused by the wrong storage conditions during transportation</li>
              <li>improve the handling procedures of pharmaceutical products to ensure compliance with existing regulations and the implementation of consistent standards</li>
              <li>elevate the level of staff competency through a robust and efficient training program </li>
              <li>create a globally consistent certification program that industry can rely on. </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export class FreezerArea extends React.Component {
  render() {
    return (
        <div>
          <img src={require('../../img/pharma-area-img/bottles.jpg')} srcSet={require('../../img/pharma-area-img/bottles@2x.jpg')+' 2x,'+ require('../../img/pharma-area-img/bottles@3x.jpg')+' 3x'} className="full-width" alt="" />
          <section className="wider">
            <table>
              <tbody>
                <tr>
                  <th colSpan="2">We have a large freezer that is used for storing special pharma cargo like varicella-containing vaccines which help prevent deadly diseases.</th>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../img/pharma-area-img/icon-50m2.svg')} alt="50 m2" />
                  </td>
                  <td>50 square meters of total space</td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../img/pharma-area-img/icon-ULD.svg')} alt="ULD" />
                  </td>
                  <td>A ULD can be built inside the freezer if necessary.</td>
                </tr>
                <tr>
                  <td>
                    <img src={require('../../img/pharma-area-img/icon-cooling.svg')} alt="cooling" />
                  </td>
                  <td>Dynamic cooling decreases the temperature right before a shipment arrives</td>
                </tr>
              </tbody>
            </table>
          </section>
      </div>
    )
  }
}

export class DedicatedAcceptanceArea extends React.Component {
  render() {
    return (
      <div>
        <svg className="full-width" viewBox="0 0 582 254" style={{ padding:'30px 0' }}>
          <g fill="none" fillRule="evenodd" transform="translate(-1)">
            <mask id="b" fill="#fff">
              <path id="a" d="M0 0h584v282H0z"/>
            </mask>
            <path d="M471-10h102v327H471z" mask="url(#b)"/>
            <path fill="#3CC9C6" fillOpacity=".29" d="M452 29h60v139h-60z" mask="url(#b)"/>
            <g stroke="#FFF" strokeLinecap="square" strokeOpacity=".6" strokeWidth="2" mask="url(#b)">
              <path d="M252.144 29.217L235.682 98.53M282.343 29.217L265.88 98.53M267.243 29.217L250.781 98.53M297.442 29.217L280.98 98.53M252.051 167.314L235.59 98l16.462 69.314zM282.25 167.314L265.788 98l16.462 69.314zM267.15 167.314L250.69 98l16.462 69.314zM297.35 167.314L280.886 98l16.462 69.314z"/>
              <path d="M191.747 29.217L175.285 98.53M221.945 29.217L205.483 98.53M206.846 29.217L190.384 98.53M237.045 29.217L220.583 98.53M191.654 167.314L175.192 98l16.462 69.314zM221.853 167.314L205.39 98l16.462 69.314zM206.753 167.314L190.291 98l16.462 69.314zM236.952 167.314L220.49 98l16.462 69.314z"/>
              <path d="M131.35 29.217L114.886 98.53M161.548 29.217L145.086 98.53M146.449 29.217L129.987 98.53M176.647 29.217L160.185 98.53M131.257 167.314L114.795 98l16.462 69.314zM161.455 167.314L144.993 98l16.462 69.314zM146.356 167.314L129.894 98l16.462 69.314zM176.555 167.314L160.093 98l16.462 69.314z"/>
              <path d="M70.952 29.217L54.49 98.53M101.15 29.217L84.69 98.53M86.051 29.217L69.59 98.53M116.25 29.217L99.788 98.53M70.86 167.314L54.396 98l16.462 69.314zM101.058 167.314L84.596 98l16.462 69.314zM85.959 167.314L69.497 98l16.462 69.314zM116.157 167.314L99.695 98l16.462 69.314z"/>
              <path d="M10.555 29.217L-5.908 98.53M40.753 29.217L24.291 98.53M25.654 29.217L9.192 98.53M55.853 29.217L39.39 98.53M10.462 167.314L-6 98l16.462 69.314zM40.66 167.314L24.2 98l16.462 69.314zM25.561 167.314L9.1 98l16.462 69.314zM55.76 167.314L39.298 98l16.462 69.314z"/>
            </g>
            <g stroke="#FFF" strokeLinecap="square" strokeOpacity=".601" strokeWidth="2" mask="url(#b)">
              <path d="M556.144 29.217L539.682 98.53M586.343 29.217L569.88 98.53M571.243 29.217L554.781 98.53M556.051 167.314L539.59 98l16.462 69.314zM586.25 167.314L569.788 98l16.462 69.314zM571.15 167.314L554.69 98l16.462 69.314z"/>
              <path d="M495.747 29.217L479.285 98.53M525.945 29.217L509.483 98.53M510.846 29.217L494.384 98.53M541.045 29.217L524.583 98.53M495.654 167.314L479.192 98l16.462 69.314zM525.853 167.314L509.39 98l16.462 69.314zM510.753 167.314L494.291 98l16.462 69.314zM540.952 167.314L524.49 98l16.462 69.314z"/>
              <path d="M435.35 29.217L418.886 98.53M465.548 29.217L449.086 98.53M450.449 29.217L433.987 98.53M480.647 29.217L464.185 98.53M435.257 167.314L418.795 98l16.462 69.314zM465.455 167.314L448.993 98l16.462 69.314zM450.356 167.314L433.894 98l16.462 69.314zM480.555 167.314L464.093 98l16.462 69.314z"/>
              <path d="M374.952 29.217L358.49 98.53M405.15 29.217L388.69 98.53M390.051 29.217L373.59 98.53M420.25 29.217L403.788 98.53M374.86 167.314L358.396 98l16.462 69.314zM405.058 167.314L388.596 98l16.462 69.314zM389.959 167.314L373.497 98l16.462 69.314zM420.157 167.314L403.695 98l16.462 69.314z"/>
              <path d="M314.555 29.217L298.092 98.53M344.753 29.217L328.291 98.53M329.654 29.217L313.192 98.53M359.853 29.217L343.39 98.53M314.462 167.314L298 98l16.462 69.314zM344.66 167.314L328.2 98l16.462 69.314zM329.561 167.314L313.1 98l16.462 69.314zM359.76 167.314L343.298 98l16.462 69.314z"/>
            </g>
            <path fill="#EEF2F9" d="M307 3h145v54H307z" mask="url(#b)"/>
            <g stroke="#464646" mask="url(#b)">
              <path d="M357 56h-18M411 56h-26M313.025 56.723h-7.076V3H452v53.723h-30.57M59 140.987h3.56v27.597H257.73V173M287.462 173v-4.416H452M452 169v-39M452 83V56M516 135.193h-4.421V147H516M516 108.257h-4.421v11.807H516M481 78v7.38h30.579v7.748H516M480.567 65v-7.794H511V29h-33"/>
              <path strokeLinecap="square" d="M510.833 39.696V-11M511.833 191v-22"/>
              <path d="M459 29h-7M452 168h7M482 168h30v-6h4M60 84h3.564V28.417H259V24"/>
              <path strokeLinecap="square" d="M63.5 36.5V.5M62.25 190.5v-36"/>
              <path d="M287 24v5h18M263 168h20M263 29h21M460 29h16M462 168h16M394 56V3M435.342 56V3M394 30h42M315 56h23M360 56h23M412 56h7"/>
              <g>
                <path d="M516 76.727h-5V84M511 56v7.636h5"/>
              </g>
            </g>
            <g stroke="#585858" strokeWidth="2" mask="url(#b)">
              <path d="M544 121l-13-13 13-13M532 108l25 .068"/>
              <path d="M438 120l-13-13 13-13M426 107l25 .068"/>
              <path d="M50 124l-13-13 13-13M38 111l25 .068"/>
            </g>
            <g fill="#1E1E1E" fontSize="14" mask="url(#b)">
              <text fontFamily="Amplitude Medium">
                <tspan x="451" y="213">PHARMA </tspan>
                <tspan x="451" y="231">ACCEPTANCE </tspan>
                <tspan x="451" y="249">AREA</tspan>
              </text>
              <g fontFamily="Amplitude Book">
                <text transform="rotate(-90 537 43)">
                  <tspan x="505.942" y="45">TRUCK YARD</tspan>
                </text>
                <text transform="rotate(-90 43 11)">
                  <tspan x="2" y="13">TARMAC</tspan>
                </text>
                <text>
                  <tspan x="103" y="91">PHARMA </tspan>
                  <tspan x="103" y="109">STORAGE </tspan>
                  <tspan x="103" y="127">AREA</tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
        <section>
          <h2>Pharma cargo comes and goes directly through a dedicated acceptance area. This allows us to: </h2>
          <ul className="checkbox green">
            <li>Maintain steady temperatures in the terminal</li>
            <li>Verify the incoming temperature </li>
            <li>Identify shipments that could be subject to a temperature excursion</li>
            <li>Take immediate action in case of irregularity</li>
          </ul>
        </section>
        <section>
          <img src={require('../../img/pharma-area-img/scanner.jpg')} alt="" srcSet={require('../../img/pharma-area-img/scanner@2x.jpg')+' 2x,'+ require('../../img/pharma-area-img/scanner@3x.jpg')+' 3x'} />
          <div><p>When pharma cargo arrives directly in the dedicated pharma area, it is scanned with a temperature gun as part of the acceptance process. </p>
            <p>When the process is complete, a shipment is marked as one of the following: </p>
            <ul>
              <li>Fully compliant</li>
              <li>Not fully compliant</li>
              <li>Not compliant</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>A shipment is fully compliant when it meets the following conditions: </h2>
          <ul className="checkbox">
            <li>it arrived in a sealed, temperature-controlled vehicle </li>
            <li>the temperature inside the vehicle is within the correct range </li>
            <li>it was transferred immediately to the warehouse after the first leg </li>
            <li>it comes with the required IATA pharma labelling </li>
            <li>it has a temperature code </li>
            <li>it was booked showing the correct SPH code </li>
            <li>there is no damage to the outer package </li>
            <li>all irrelevant markings and labels are removed </li>
            <li>it comes with a 24-hour emergency contact number</li>
          </ul>
        </section>
      </div>
    )
  }
}

export class SpecialHandlingCodes extends React.Component {
  render() {
    return (
      <div>
        <section>
          <svg id="handling-code" viewBox="0 0 315 372">
            <g fill="none">
              <g transform="matrix(-1 0 0 1 315 0)">
                <mask id="b" fill="#fff">
                  <path d="M0 0h315v372H0z"/>
                </mask>
                <path stroke="#1E1E1E" d="M.5.5h314v371H.5z"/>
                <g fill="#1E1E1E" mask="url(#b)">
                  <path d="M166.146-167.777l381.131 381.13-16.54 16.54-381.13-381.13zM133.066-134.696l381.13 381.13-16.54 16.54-381.13-381.13zM99.986-101.617l381.13 381.131-16.54 16.54-381.13-381.13zM66.905-68.536l381.131 381.13-16.54 16.54-381.13-381.13zM33.826-35.456l381.13 381.13-16.54 16.54-381.13-381.13zM.745-2.376l381.13 381.131-16.54 16.54-381.13-381.13zM-32.336 30.705l381.131 381.13-16.54 16.54-381.13-381.13zM-65.415 63.785l381.13 381.13-16.54 16.54-381.13-381.13zM-98.496 96.865l381.13 381.131-16.54 16.54-381.13-381.13zM-131.576 129.945l381.13 381.13-16.54 16.54-381.13-381.13zM-164.656 163.026l381.13 381.13-16.54 16.54-381.13-381.13zM-197.737 196.107l381.13 381.13-16.54 16.54-381.13-381.13z"/>
                </g>
              </g>
              <path fill="#FFF" stroke="#1E1E1E" d="M10.5 11.5h294v349h-294z"/>
              <g fill="#1E1E1E">
                <text fontFamily="Amplitude Light" fontSize="32" transform="translate(10 11)">
                  <tspan x="69.596" y="60">+2°C to +8°C</tspan>
                  <tspan fontSize="16" x="33.46" y="191">TIME AND TEMPERATURE SENSITIVE</tspan>
                </text>
                <path d="M54 163h3.313V95H54zM72.776 163h1.105V95h-1.105zM60.627 163h1.104V95h-1.104zM94.866 95l-3.313.004V163h3.313zM95.97 163h1.105V95h-1.104zM63.94 163h6.627V95H63.94zM77.194 163H78.3V95h-1.105zM100.388 163h3.314V95h-3.314zM81.612 95v68l6.627-.004V95z"/>
                <path d="M107 163h3.313V95H107zM125.776 163h1.105V95h-1.105zM113.627 163h1.104V95h-1.104zM147.866 95l-3.313.004V163h3.313zM148.97 163h1.105V95h-1.104zM116.94 163h6.627V95h-6.627zM130.194 163h1.105V95h-1.105zM153.388 163h3.314V95h-3.314zM134.612 95v68l6.627-.004V95z"/>
                <path d="M159 163h3.313V95H159zM177.776 163h1.105V95h-1.105zM165.627 163h1.104V95h-1.104zM199.866 95l-3.313.004V163h3.313zM200.97 163h1.105V95h-1.104zM168.94 163h6.627V95h-6.627zM182.194 163h1.105V95h-1.105zM205.388 163h3.314V95h-3.314zM186.612 95v68l6.627-.004V95z"/>
                <path d="M212 163h3.313V95H212zM230.776 163h1.105V95h-1.105zM218.627 163h1.104V95h-1.104zM252.866 95l-3.313.004V163h3.313zM253.97 163h1.105V95h-1.104zM221.94 163h6.627V95h-6.627zM235.194 163h1.105V95h-1.105zM258.388 163h3.314V95h-3.314zM239.612 95v68l6.627-.004V95z"/>
              </g>
              <path stroke="#979797" strokeLinecap="square" d="M41.435 234.5h233.13M41.435 326.5h233.13"/>
            </g>
          </svg>
          <p>Unique, scannable identification markings that trigger special temperature requirements while preventing pharma cargo from being mixed with regular shipments.</p>
        </section>
        <section className="wider">
          <table>
            <tbody>
              <tr>
                <td>
                  <svg width="93" height="61" viewBox="0 0 93 61">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" fontWeight="300" letterSpacing="2">
                      <tspan x="22" y="54">PHA</tspan>
                    </text>
                  </svg>
                </td>
                <td>
                  <p>
                    <strong>PHA</strong> – pharma shipments without any temperature requirement
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <svg width="93" height="61" viewBox="0 0 93 61">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" fontWeight="300" letterSpacing="2">
                      <tspan x="29.575" y="54">PI</tspan>
                      <tspan x="53.6" y="54">L</tspan>
                    </text>
                  </svg>
                </td>
                <td>
                  <p>
                    <strong>PIL</strong> – all temperature controlled pharma shipments
                  </p>
                  <p>In combination with the PIL special handling code, pharma is also separated and handled based on precise temperature needs.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <svg width="93" height="61" viewBox="0 0 93 61">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" fontWeight="300" letterSpacing="1.5">
                      <tspan x="26.387" y="54">CO</tspan>
                      <tspan x="56.788" y="54">L</tspan>
                    </text>
                  </svg>
                </td>
                <td>
                  <p><strong>COL</strong> – pharma is to be kept between +2°C and +8°C. (e.g. vaccines)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <svg width="93" height="61" viewBox="0 0 93 61">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" fontWeight="300" letterSpacing="1.5">
                      <tspan x="26.762" y="54">CR</tspan>
                      <tspan x="56.237" y="54">T</tspan>
                    </text>
                  </svg>
                </td>
                <td>
                  <p><strong>CRT</strong>  – pharma is kept between +15°C and +25°C</p>
                </td>
              </tr>
              <tr>
                <td>
                  <svg width="93" height="61" viewBox="0 0 93 61">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" fontWeight="300" letterSpacing="1.5">
                      <tspan x="26.762" y="54">ERT</tspan>
                    </text>
                  </svg>
                </td>
                <td>
                  <p><strong>ERT</strong> – pharma is kept between +2°C and +25°C</p>
                </td>
              </tr>
              <tr>
                <td>
                  <svg width="93" height="61" viewBox="0 0 93 61">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" fontWeight="300" letterSpacing="1">
                      <tspan x="25.913" y="54">FR</tspan>
                      <tspan x="54.013" y="54">O</tspan>
                    </text>
                  </svg>
                </td>
                <td>
                  <p>
                    <strong>FRO</strong>  – pharma is kept in a freezer with a temperature between –17°C and –30°C
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="wider">
          <table>
            <tbody>
              <tr>
                <th colSpan="2">Our dedicated pharma area has: </th>
              </tr>
              <tr>
                <td>
                  <span className="number">2600 m2</span>
                </td>
                <td style={{verticalAlign : 'middle'}}>controlled room temperature space (CRT)</td>
              </tr>
              <tr>
                <td>
                  <span className="number">208 m2</span>
                </td>
                <td style={{verticalAlign : 'middle'}}>refrigerated storage (COL)</td>
              </tr>
              <tr>
                <td>
                  <span className="number">50 m2</span>
                </td>
                <td style={{verticalAlign : 'middle'}}>freezer space (FRO)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export class FinnairPharmaStations extends React.Component {
  render() {
    return (
      <div>
          <figure className="map">
              <img className="full-width" src={require('../../img/pharma-area-img/kartta@2x.png')} srcSet={require('../../img/pharma-area-img/kartta@2x.png')+' 2x,'+ require('../../img/pharma-area-img/kartta@3x.png')+' 3x'}/>
              <figcaption>
                  <ul>
                      <li className="pink full-content">Approved Finnair pharma stations:<br/>HEL, AMS, ARN, BCN, BRU, CPH, DEL, FCO, FRA, HKG, KIX, LHR, MAD, MIA, MXP, OSL, PVG, SIN, ZRH</li>
                      {/* <li className="grey">Regular Finnair pharma stations: <br/>NRT, NGO, KIX, BKK, PEK</li> */}
                  </ul>
              </figcaption>
          </figure>
          <section>
              <p>An approved Finnair pharma station is an airport where our handling agent has facilities and processes for properly handling temperature-sensitive pharma shipments.</p>
              <h3>For example, an approved Finnair pharma station has: </h3>
              <ul>
                  <li>an internal quality assurance system which includes facilities, procedures and change control related to them</li>
                  <li>temperature-controlled storage facilities with a control method to ensure that temperature is maintained within a set range. </li>
                  <li>documented processes and procedures in compliance with IATA Pharma CEIV requirements, including contingency plans</li>
                  <li>a sufficient amount of staff who are trained to handle Pharma shipments </li>
                  <li>risk assessment documentation, covering all operational phases, facilities and equipment. </li>
              </ul>
          </section>
          <section className="wider">
              <figure className="left" >
                  <img className="full-width" src={require('../../img/pharma-area-img/loading-cargo.jpg')} srcSet={require('../../img/pharma-area-img/loading-cargo@2x.jpg')+' 2x,'+ require('../../img/pharma-area-img/loading-cargo@3x.jpg')+' 3x'} />
                  <img className="full-width" src={require('../../img/pharma-area-img/hand.jpg')} srcSet={require('../../img/pharma-area-img/hand@2x.jpg')+' 2x,'+ require('../../img/pharma-area-img/hand@3x.jpg')+' 3x'} />
              </figure>
            <div className="right grey">
                <h2>The Finnair Pharma Lane service follows these requirements:</h2>
                <h3>1. FLIGHT CARGO SERVICE</h3>
                <ul>
                    <li>Aircraft are operated by Finnair</li>
                    <li>Transportation happens between two Finnair pharma stations</li>
                    <li>Shipment temperature can be optimised when it is loaded in the hold</li>
                </ul>
                <h3>2.  ROAD TRANSPORT SERVICE</h3>
                <ul>
                    <li>Operated by a Finnair approved trucking company (under Finnair flight number)</li>
                    <li>Transportation happens between two Finnair Pharma Stations</li>
                    <li>Shipment temperature can be optimised when it is loaded in the hold</li>
                    <li>The trucking company has an IATA pharma CEIV certificate, a GDP certificate, or</li>
                    <li>The trucking company has signed a service level agreement (SLA) to follow specific Finnair Cargo requirements and metrics.</li>
                </ul>
          </div>
        </section>
      </div>
    )
  }
}

export class RealtimeTemperatureData extends React.Component {
  render() {
    return (
       <div>
          <svg className="full-width" viewBox="0 0 582 344">
              <path fill="#F4F4F4" d="M0 0h583v344H0z"/>
              <g fill="#FFF">
                  <path d="M157 191h130v137H157z"/>
                  <path d="M157 42h130v137H157z"/>
                  <path d="M19 191h130v137H19z"/>
                  <path d="M295 191h130v137H295z"/>
                  <path d="M295 42h130v137H295z"/>
                  <path d="M433 191h130v137H433z"/>
                  <path d="M433 42h130v137H433z"/>
                  <path d="M19 42h130v137H19z"/>
              </g>
              <g fill="#B4E2AB">
                  <path d="M157 191h130v4.029H157z"/>
                  <path d="M157 42h130v4.029H157z"/>
                  <path d="M19 191h130v4.029H19z"/>
                  <path d="M19 42h130v4.029H19z"/>
                  <path d="M295 191h130v4.029H295z"/>
                  <path d="M295 42h130v4.029H295z"/>
                  <path d="M433 191h130v4.029H433z"/>
                  <path d="M433 42h130v4.029H433z"/>
              </g>
              <g fill="#1E1E1E" fontSize="13" letterSpacing=".45" fontFamily="Amplitude Book">
                  <text transform="translate(19 42)">
                      <tspan x="8" y="23.3">801-TE/ME P1</tspan>
                      <tspan x="8" y="37.3">TEMPERATURE</tspan>
                      <tspan fontSize="40" x="11.143" y="124.764">19.7</tspan>
                      <tspan fontSize="22" x="97.772" y="115.529">°C</tspan>
                  </text>
                  <text transform="translate(295 42)">
                      <tspan x="8" y="23.3">801-TE/ME P2</tspan>
                      <tspan x="8" y="37.3">TEMPERATURE</tspan>
                      <tspan fontSize="40" x="11.1" y="124.8">19.6</tspan>
                      <tspan x="97.8" y="115.5" fontSize="22">°C</tspan>
                  </text>
                  <text transform="translate(19 191)">
                      <tspan x="8" y="23.3">801-TE/ME P3</tspan>
                      <tspan x="8" y="37.3">TEMPERATURE</tspan>
                      <tspan fontSize="40" x="11.1" y="124.8">19.8</tspan>
                      <tspan x="97.8" y="115.5" fontSize="22">°C</tspan>
                  </text>
                  <text transform="translate(295 191)">
                      <tspan x="8" y="23.3">801-TE/ME P4</tspan>
                      <tspan x="8" y="37.3">TEMPERATURE</tspan>
                      <tspan fontSize="40" x="11.1" y="124.8">18.6</tspan>
                      <tspan x="97.8" y="115.5" fontSize="22">°C</tspan>
                  </text>
                  <text transform="translate(157 42)">
                      <tspan x="8" y="23.3">801-TE/ME P1</tspan>
                      <tspan x="8" y="37.3">HUMIDITY</tspan>
                      <tspan fontSize="40" x="11.1" y="124.8">16.1</tspan>
                      <tspan x="97.9" y="115.5" fontSize="22">%</tspan>
                  </text>
                  <text transform="translate(433 42)">
                      <tspan x="8" y="23.3">801-TE/ME P2</tspan>
                      <tspan x="8" y="37.3">HUMIDITY</tspan>
                      <tspan fontSize="40" x="11.1" y="124.8">15.2</tspan>
                      <tspan x="97.9" y="115.5" fontSize="22">%</tspan>
                  </text>
                  <text transform="translate(157 191)">
                      <tspan x="8" y="23.3">801-TE/ME P3</tspan>
                      <tspan x="8" y="37.3">HUMIDITY</tspan>
                      <tspan fontSize="40" x="11.1" y="124.8">14.6</tspan>
                      <tspan fontSize="22" x="97.9" y="115.5">%</tspan>
                  </text>
                  <text transform="translate(433 191)">
                      <tspan x="8" y="23.3">801-TE/ME P4</tspan>
                      <tspan x="8" y="37.3" letterSpacing=".67">HUMIDITY</tspan>
                      <tspan fontSize="40" x="11.1" y="124.8">17.8</tspan>
                      <tspan fontSize="22" x="97.9" y="115.5">%</tspan>
                  </text>
              </g>
              <text fill="#C0C1C0" fontFamily="Amplitude Book" fontSize="18">
                  <tspan x="21" y="32">FINNAIR AIR CARGO CENTER</tspan>
              </text>
              <text fill="#C0C1C0" fontFamily="Amplitude Book" fontSize="18">
                  <tspan x="494.7" y="32">HELSINKI</tspan>
              </text>
          </svg>
          <section>
              <p>Data is monitored in real time on screens in the pharma area to quickly identify temperature excursions and take immediate corrective action. </p>
              <ul>
                  <li>Temperature sensors are connected with Wi-Fi</li>
                  <li>Data goes directly to the Cargo Control Center (CCC)</li>
              </ul>
          </section>
          <section>
              <svg className="full-width" viewBox="0 0 502 155">
                  <g fill="#0b1560" fontFamily="Amplitude Bold" fontSize="50" transform="translate(0 62)">
                      <text x="62.4">2</text>
                      <text x="238.6">5</text>
                      <text x="402.9">17</text>
                  </g>
                  <g fill="#464646" fontFamily="Amplitude Light" fontSize="17">
                      <text>
                          <tspan x="40.4" y="92">Sensors in </tspan>
                          <tspan x="33.9" y="114">freezer area</tspan>
                      </text>
                      <text>
                          <tspan x="200.5" y="92">Sensors in cold </tspan>
                          <tspan x="208.6" y="114">storage area</tspan>
                      </text>
                      <text>
                          <tspan x="363.9" y="92">Sensors in general </tspan>
                          <tspan x="382.9" y="114">pharma area</tspan>
                      </text>
                  </g>
                  <g fill="none" stroke="#0b1560">
                      <rect width="150" height="154" x=".5" y=".5" rx="75">
                      </rect>
                      <rect width="150" height="154" x="176.5" y=".5" rx="75">
                      </rect>
                      <rect width="150" height="154" x="351.5" y=".5" rx="75">
                      </rect>
                  </g>
              </svg>
          </section>
          <section>
              <p>In the Controlled Room Temperature area (CRT), an alarm is triggered if the temperature goes below +16°C or above +23°C. For the cold storage area (COL), an alarm is triggered if the temperature goes below +4°C or above +7°C. And in the frozen area (FRO), an alarm is triggered if the temperature goes below -30°C or above -17°C.</p>
          </section>
      </div>
    )
  }
}

export class PharmaCargoTrafficGrowth extends React.Component {
  render() {
    return (
      <div>
          <img src={require('../../img/pharma-area-img/cargo-traffic-growth.jpg')} srcSet={require('../../img/pharma-area-img/cargo-traffic-growth@2x.jpg')+' 2x,'+ require('../../img/pharma-area-img/cargo-traffic-growth@3x.jpg')+' 3x'} className="full-width" />
          <p>With same-day, wide-body aircraft connections from London and Brussels for thru pallets to all key Asian destinations, we are an ideal choice for your long-haul pharma shipments. <br /><br/>And we will continue to grow in the future. </p>
          <section className="wider">
          <div className="left-table" >
                  <table>
                  <tbody>
                      <tr>
                          <th>Pharma volume growth (kg) 2017–2018</th>
                      </tr>
                      <tr>
                          <td className="number">+39%</td>
                      </tr>
                  </tbody>
                  </table>
                  <table>
                      <tbody>
                          <tr>
                              <th>number of shipments (AWB) 2017–2018</th>
                          </tr>
                          <tr>
                              <td className="number">-2.3%</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div className="right-narrow">
                  <table>
                      <tbody>
                          <tr>
                              <th>The city pairings that support the future growth of pharma</th>
                          </tr>
                          <tr>
                              <td>
                                  <svg className="full-width" viewBox="0 0 194 246">
                                      <g fill="none" fillRule="evenodd">
                                          <text fill="#16086D" fontFamily="Amplitude Light" fontSize="17" transform="translate(0 3)">
                                              <tspan x="8" y="14">BRU</tspan>
                                              <tspan x="8" y="39">DUB</tspan>
                                              <tspan x="8" y="64">BRU</tspan>
                                              <tspan x="8" y="89">BRU</tspan>
                                              <tspan x="8" y="114">ARN</tspan>
                                              <tspan x="8" y="139">DUB</tspan>
                                              <tspan x="8" y="164">AMS</tspan>
                                              <tspan x="8" y="189">BRU</tspan>
                                              <tspan x="8" y="214">DUB</tspan>
                                              <tspan x="8" y="239">BRU</tspan>
                                          </text>
                                          <text fill="#110E69" fontFamily="Amplitude Light" fontSize="17" transform="translate(0 3)">
                                              <tspan x="161.837" y="14">PEK</tspan>
                                              <tspan x="160.29" y="39">PVG</tspan>
                                              <tspan x="158.556" y="64">NGO</tspan>
                                              <tspan x="165.424" y="89">SIN</tspan>
                                              <tspan x="161.208" y="114">CKG</tspan>
                                              <tspan x="166.002" y="139">KIX</tspan>
                                              <tspan x="166.002" y="164">KIX</tspan>
                                              <tspan x="160.766" y="189">BKK</tspan>
                                              <tspan x="160.885" y="214">NRT</tspan>
                                              <tspan x="166.002" y="239">KIX</tspan>
                                          </text>
                                          <g>
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 100)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 50)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 150)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 25)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 125)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 75)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 175)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 200)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                          <g transform="translate(0 225)">
                                              <rect width="193" height="20" x=".5" y=".5" stroke="#CCC" rx="3"/>
                                              <path stroke="#979797" strokeLinecap="round" d="M94 5l6 5.76-6 5.438"/>
                                          </g>
                                      </g>
                                  </svg>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>
          <section className="wider">
              <table>
                  <tbody>
                      <tr>
                          <th style={{ width:'35%' }}>
                              <h3>Our top 5 countries</h3>
                              <p>Belgium<br/>Ireland<br/>Sweden<br/>Finland<br/>Germany</p>
                              <h3>The fastest growing country is</h3>
                              <p>Ireland (DUB)</p>
                          </th>
                          <td style={{ padding:0 }}>
                              <img className="full-width" src={require('../../img/pharma-area-img/ireland.png')}  srcSet={require('../../img/pharma-area-img/ireland@2x.png')+' 2x,'+ require('../../img/pharma-area-img/ireland@3x.png')+' 3x'} />
                          </td>
                      </tr>
                  </tbody>
              </table>
          </section>
      </div>
    )
  }
}
