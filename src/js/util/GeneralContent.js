import React from 'react'
import CargoVolumGraph from './svg/CargoVolumGraph'
import ShippingCapacityGraph from './svg/ShippingCapacityGraph'

export class PreplannedPalletBuilding extends React.Component {
  render() {
    return (
      <div>
        <img className="full-width" src={require('../../img/general-area-img/cargo-packing.jpg')}  srcSet={require('../../img/general-area-img/cargo-packing@2x.jpg')+' 2x,'+ require('../../img/general-area-img/cargo-packing@3x.jpg')+' 3x'}/>
        <section className="wider">
            <table>
              <tbody>
                <tr>
                  <td>
                    <svg className="small" viewBox="0 0 64 49">
                      <g fill="none" fillRule="evenodd">
                        <path fill="#0B1560" d="M38 39.467V5.334h-4.75V9.6c0 1.65-1.242 2.986-2.77 2.986-1.532 0-2.772-1.337-2.772-2.986V5.333H10.292v4.268c0 1.65-1.242 2.986-2.771 2.986-1.531 0-2.771-1.337-2.771-2.986V5.333H0V48h30.875L38 39.467zM1.064 16h35.675v22.075h-7.083v8.84H1.064V16zM6.141 1.23a1.23 1.23 0 1 1 2.456 0v8.206a1.229 1.229 0 0 1-2.456 0V1.23zm23.335 0a1.23 1.23 0 1 1 2.456 0v8.206a1.229 1.229 0 0 1-2.456 0V1.23z"/>
                        <text fill="#16086D" fontFamily="Amplitude Bold" fontSize="22">
                            <tspan x="13.945" y="37">2</tspan>
                        </text>
                        <path stroke="#0B1560" d="M42.742 6H50v42H38M56 6h7v42h-7"/>
                      </g>
                    </svg>
                  </td>
                  <td>A pallet build-up plan is created up to 2 days in advance</td>
                </tr>
                <tr>
                  <td>
                    <svg className="small" viewBox="0 0 72 38">
                      <g fill="none" fillRule="evenodd">
                          <path stroke="#0B1560" strokeLinecap="square" strokeLinejoin="bevel" d="M70.349 27.643H41.62M70.349 19.929H41.62"/>
                          <path fill="#0B1560" d="M71.48 29.661V4.306h-3.655v3.17c0 1.225-.956 2.218-2.132 2.218-1.178 0-2.132-.993-2.132-2.218v-3.17H48.919v3.17c0 1.225-.956 2.218-2.132 2.218-1.178 0-2.132-.993-2.132-2.218v-3.17H41V36h24.997l5.483-6.339zM42.368 12.23h27.75v15.113h-6.299v7.082H42.368V12.23zm3.357-10.97c0-.505.422-.915.945-.915.522 0 .945.41.945.914v6.095c0 .505-.423.914-.945.914-.523 0-.945-.41-.945-.914V1.258zm19.196 0c0-.505.422-.915.945-.915.521 0 .945.41.945.914v6.095c0 .505-.424.914-.945.914-.523 0-.945-.41-.945-.914V1.258z"/>
                          <path stroke="#0B1560" strokeLinecap="square" d="M48.888 12.23v22.484M56.445 12.23v22.484M64.002 12.23v22.484"/>
                          <g fill="#0B1560">
                              <path d="M27.2 15.103a13.381 13.381 0 0 1 1.711 6.555h-9.2c.022-2.034-1.572-3.7-3.56-3.723l-.033-.001V8.549c4.56.021 8.766 2.513 11.055 6.547l.027.007zm-9.472 5.586c.538.931.236 2.133-.674 2.684-.91.55-2.085.24-2.623-.69-.538-.932-.236-2.133.674-2.683l.005-.003a1.897 1.897 0 0 1 2.618.685v.007zM11.679 1.04C11.68.463 12.134 0 12.694 0h6.767c.56 0 1.014.464 1.014 1.038 0 .574-.454 1.038-1.014 1.038h-6.767c-.56 0-1.015-.464-1.015-1.038zm18.504 24.495C28.47 32.06 22.69 36.6 16.083 36.609c-8.07.01-14.62-6.675-14.63-14.932-.01-8.259 6.525-14.96 14.596-14.97 5.227-.007 10.06 2.844 12.674 7.475a15.156 15.156 0 0 1 1.46 11.352zM17.072 5.364a.992.992 0 0 0 0-.2V3.447h-2.03v1.717a.924.924 0 0 0 0 .194C6.238 5.88-.484 13.605.027 22.612.52 31.282 7.555 38.042 16.043 38c8.82-.005 15.963-7.324 15.957-16.345-.005-8.605-6.535-15.731-14.928-16.29z"/>
                          </g>
                      </g>
                    </svg>
                  </td>
                  <td>Pallet build-up time is measured against the scheduled time allocation</td>
                </tr>
                <tr>
                  <td>
                  <svg className="small" viewBox="0 0 81 57">
                      <defs>
                          <path id="a" d="M0 .18h28.751v28.175H0z"/>
                          <path id="c" d="M0 .18h28.751v28.175H0z"/>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                          <g transform="translate(13 14.464)">
                              <mask id="b" fill="#fff">
                                  <use href="#a"/>
                              </mask>
                              <path fill="#0B1560" d="M14.375 25.293c-6.212 0-11.25-4.937-11.25-11.025 0-6.09 5.038-11.025 11.25-11.025 6.215 0 11.252 4.935 11.252 11.025 0 6.088-5.037 11.025-11.252 11.025m0-25.113C6.436.18 0 6.488 0 14.268c0 7.78 6.436 14.087 14.375 14.087 7.94 0 14.376-6.307 14.376-14.087C28.751 6.488 22.315.18 14.375.18" mask="url(#b)"/>
                          </g>
                          <path fill="#0B1560" d="M28.47 20.77H26.28v8.406l5.321 5.214 1.547-1.515-4.68-4.587z"/>
                          <g transform="translate(40 14.464)">
                              <mask id="d" fill="#fff">
                                  <use href="#c"/>
                              </mask>
                              <path fill="#0B1560" d="M14.375.18C6.436.18 0 6.488 0 14.268c0 7.78 6.436 14.087 14.375 14.087 7.94 0 14.376-6.307 14.376-14.087C28.751 6.488 22.315.18 14.375.18" mask="url(#d)"/>
                          </g>
                          <path fill="#F4F4F4" d="M55.47 20.77H53.28v8.406l5.321 5.214 1.547-1.515-4.68-4.587z"/>
                          <g stroke="#0B1560">
                              <path d="M16.561 51.318C7.451 47.747 1 38.877 1 28.5 1 14.969 11.969 4 25.5 4"/>
                              <g strokeLinecap="square">
                                  <path d="M25.375 4L21 .5M25.375 4L21.5 8.5"/>
                              </g>
                          </g>
                          <g stroke="#0B1560">
                              <path d="M64.439 5.682C73.549 9.253 80 18.123 80 28.5 80 42.031 69.031 53 55.5 53"/>
                              <g strokeLinecap="square">
                                  <path d="M55.625 53L60 56.5M55.625 53l3.875-4.5"/>
                              </g>
                          </g>
                      </g>
                  </svg>
                  </td>
                  <td>Proactive planning also enables build-up throughout the night</td>
                </tr>
              </tbody>
          </table>
        </section>
        <section>
                <h2>What are the benefits of planning?</h2>
                <ol>
                    <li>Pre-planned pallet building allows us to maximise  the space in the aircraft hold.</li>
                    <li>If something is late, other shipments are ready to go and only the late item has to be processed at the last minute.</li>
                    <li>A shipment can be moved forward to ﬂy earlier if it makes sense.</li>
                </ol>
        </section>
        <section>
            <h2>To accomplish this, we need to receive the following info in advance: </h2>
            <ul className="checkbox">
            <li>Priority of the shipment</li> 
            <li>Dimensions of the shipment</li>  
            <li>Weight</li> 
            <li>Where it’s going</li>  
            <li>When it’s going to arrive at our hub</li> 
            <li>Special handling code</li>  
            </ul>
        </section>
      </div>
    )
  }
}

export class ContainerStorageArea extends React.Component {
  render() {
    return (
      <div>
        <img className="full-width" src={require('../../img/general-area-img/cargo-storage-container.jpg')}  srcSet={require('../../img/general-area-img/cargo-storage-container@2x.jpg')+' 2x,'+ require('../../img/general-area-img/cargo-storage-container@3x.jpg')+' 3x'} alt="" />
        <section><p>Between the tarmac and the terminal, we have a container storage area for organising and transferring ULDs. Inside this area, there are elevating transfer vehicles that allow us to prioritise ULDs based on which ones we want to handle first, rather than being forced to handle them in the order they arrive. This reduces clutter on the terminal floor because once a ULD is ready, it can be stored out of sight and retrieved on demand.</p></section>
        <section className="wider">
        <div className="left-table">
                <table style={{height: '44%'}}>
                  <tbody>
                    <tr>
                      <th>There are</th>
                    </tr>
                    <tr>
                      <td><span className="number">580</span><div>locations in the container storage area</div></td>
                    </tr>
                  </tbody>
                </table>
                <table style={{height: '54%'}}>
                  <tbody>
                    <tr>
                      <th>Daily cargo volume has gone up</th>
                    </tr>
                    <tr>
                      <td><span className="number">50%</span><div>in one year. But container storage area efficiency has kept average transfer times steady</div></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          <div className="right-narrow">
            <table>
              <tbody>
                <tr>
                  <th className="expand">cargo volume in relation to transfer times</th>
                </tr>
                <tr>
                  <td>
                    <CargoVolumGraph/>
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
                  <td className="expand-left-right">
                  <svg width="111" height="69" viewBox="0 0 78 69">
                      <g fill="none" fillRule="evenodd">
                          <path stroke="#0B1560" d="M4 68h19l-.594-68"/>
                          <path fill="#0B1560" d="M8 15.978a7 7 0 0 0-6.997 6.997A7 7 0 0 0 8 29.971a7 7 0 0 0 6.997-6.996A7 7 0 0 0 8 15.978M8 31c-4.414 0-8-3.586-8-8s3.586-8 8-8 8 3.586 8 8-3.586 8-8 8"/>
                          <path fill="#0B1560" d="M10.477 25a.742.742 0 0 1-.234-.052l-2.958-1.42A.49.49 0 0 1 7 23.063v-4.546a.519.519 0 0 1 1.037 0v4.236l2.673 1.292c.26.128.364.438.234.696-.078.156-.285.259-.467.259"/>
                          <path stroke="#0B1560" d="M33 62c0 2.21 1.566 4 3.5 4 1.933 0 3.5-1.79 3.5-4M45 62c0 2.21 1.566 4 3.5 4 1.933 0 3.5-1.79 3.5-4M56 62c0 2.21 1.567 4 3.5 4 1.934 0 3.5-1.79 3.5-4M68 62c0 2.21 1.566 4 3.5 4 1.933 0 3.5-1.79 3.5-4"/>
                          <path fill="#0B1560" d="M74.451 25H33.548c-.856 0-1.548.772-1.548 1.724v14.798c0 .297.069.59.2.848l5.465 10.756c.274.54.79.874 1.349.874h29.972c.557 0 1.073-.334 1.348-.874l5.465-10.756c.132-.257.201-.551.201-.848V26.724c0-.952-.694-1.724-1.549-1.724"/>
                          <path stroke="#0B1560" d="M74.451 25H33.548c-.856 0-1.548.772-1.548 1.724v14.798c0 .297.069.59.2.848l5.465 10.756c.274.54.79.874 1.349.874h29.972c.557 0 1.073-.334 1.348-.874l5.465-10.756c.132-.257.201-.551.201-.848V26.724c0-.952-.694-1.724-1.549-1.724zM30 60h48"/>
                          <path stroke="#FFF" d="M40 39h26M60 31l6 7.999L60 47"/>
                      </g>
                  </svg>
                  </td>
                  <th>Containers are stored and moved based on flight arrival and departure information</th>
                </tr>
              </tbody>
            </table>
          </section>
      </div>
    )
  }
}

export class SpecialHandlingCodes2 extends React.Component {
  render() {
    return (
      <div>
      <section>
        <svg viewBox="0 0 364 364">
          <g fill="none" fillRule="evenodd">
            <path stroke="#000" strokeWidth="5" d="M182 30.315L28.315 184 182 337.685 335.685 184 182 30.315z"/>
            <g>
              <mask id="b" fill="#fff">
                  <path transform="rotate(45) translate(76 -182)" d="M53.817 53.817h256.366v256.366H53.817z"/>
              </mask>
              <path stroke="#000" transform="rotate(45) translate(76 -182)" d="M54.317 54.317v255.366h255.366V54.317H54.317z"/>
              <path fill="#000" d="M-15.656-37.183h30.333V182h-30.333zM166.344-37.183h30.333V182h-30.333zM45.011-37.183h30.333V182H45.011zM227.011-37.183h30.333V182h-30.333zM105.677-37.183h30.333V182h-30.333zM287.677-37.183h30.333V182h-30.333zM348.344-37.183h30.333V182h-30.333z" mask="url(#b)"/>
            </g>
            <text fill="#000" fontFamily="Amplitude Book" fontSize="50">
                <tspan x="168.475" y="292.366">9</tspan>
            </text>
            <path stroke="#000" strokeLinecap="square" strokeWidth="2" d="M170.48 300.5H195"/>
          </g>
        </svg>
        <p>We handle a wide range of unique items. Each special handling code triggers an appropriate handling process based on the requirements for that type of item. </p>
      </section>
      <section className="wider">
        <h2>We have over 100 different handling codes. Here are a few examples:</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <svg className="handling-code" viewBox="0 0 93 61">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <g>
                        <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                      </g>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" fontWeight="300" letterSpacing="1.5">
                      <tspan x="28.5" y="54">AVI</tspan>
                    </text>
                  </g>
                </svg>

              </td>
              <td>
                <p>
                  <strong>AVI</strong> – (live animals) In some areas, local bee populations are in decline. So to help with pollination, we ship live bees from Finland to parts of Europe.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <svg className="handling-code" viewBox="0 0 93 61">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <g>
                          <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                      </g>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" letterSpacing="1.5">
                      <tspan x="25.113" y="54">RRE</tspan>
                    </text>
                  </g>
                </svg>
              </td>
              <td>
                <p>
                  <strong>RRE</strong> – (medical isotopes) We ship unique cargo for the medical field. For example, we carefully transport medical isotopes that are an important part of many cancer treatments. 
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <svg className="handling-code" viewBox="0 0 93 61">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <g>
                        <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                      </g>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" letterSpacing="1">
                      <tspan x="26.413" y="54">SHL</tspan>
                    </text>
                  </g>
                </svg>
              </td>
              <td>
                <p><strong>SHL</strong> – (saving human life) If medical supplies are urgently needed for disaster relief, we prioritise those shipments above everything else. </p>
              </td>
            </tr>
            <tr>
              <td>
                <svg className="handling-code" viewBox="0 0 93 61">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <g>
                        <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                      </g>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" letterSpacing="1">
                      <tspan x="23.938" y="54">OGH</tspan>
                    </text>
                  </g>
                </svg>
              </td>
              <td>
                <p><strong>OGH</strong>  – (overhang items) A large item like a large diesel engine will not fit into the automated stroage and retrieval system so we use volumetric scanning for accurate load planning. </p>
              </td>
            </tr>
            <tr>
              <td>
                <svg className="handling-code" viewBox="0 0 93 61">
                  <g fill="none" fillRule="evenodd">
                    <g fill="#0B1560">
                      <path d="M0 54h3V0H0zM17 54h1V0h-1zM6 54h1V0H6zM37 0l-3 .003V54h3zM38 54h1V0h-1zM9 54h6V0H9zM21 54h1V0h-1zM42 54h3V0h-3zM25 0v54l6-.003V0z"/>
                      <g>
                        <path d="M48 54h3V0h-3zM65 54h1V0h-1zM54 54h1V0h-1zM85 0l-3 .003V54h3zM86 54h1V0h-1zM57 54h6V0h-6zM69 54h1V0h-1zM90 54h3V0h-3zM73 0v54l6-.003V0z"/>
                      </g>
                    </g>
                    <path fill="#F4F4F4" d="M18 24h57v37H18z"/>
                    <text fill="#0B1560" fontFamily="Amplitude Book" fontSize="25" letterSpacing="1">
                      <tspan x="26.663" y="54">VAL</tspan>
                    </text>
                  </g>
                </svg>

              </td>
              <td>
                <p><strong>VAL</strong> – (valuables) When a shipment is marked as valuable, we initiate a special security process that adds additional layers of protection to the shipping process. </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      </div>
    )
  }
}


export class EmissionFreeForklifts extends React.Component {
  render() {
    return (
        <div>
        <img className="full-width" src={require('../../img/general-area-img/cargo-3-forklifts.jpg')} srcSet={require('../../img/general-area-img/cargo-3-forklifts@2x.jpg')+' 2x,'+ require('../../img/general-area-img/cargo-3-forklifts@3x.jpg')+' 3x'} alt="" />
        <section className="bold-text">Electric forklifts and renewable energy help reduce our carbon footprint</section>
        <section className="wider">
          <div className="left-table" style={{ height:'416px' }}>
              <table>
                <tbody>
                  <tr>
                    <th>WE OPERATE</th>
                  </tr>
                  <tr>
                    <td><span className="number">67 </span>electric forklifts, tow machines and pallet movers on a daily basis</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>WE USE</th>
                  </tr>
                  <tr>
                    <td><span className="number">10.4 <span className="unit">KWH</span></span>PER REGULAR FORKLIFT PER DAY</td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="right-equal" style={{ height:'416px' }}>
            <table>
              <tbody>
                <tr>
                  <th>WE HAVE</th>
                </tr>
                <tr>
                  <td><span className="number">1200 </span>solar panels on the roof of our terminal</td>
                </tr>
                </tbody>
              </table>
              <table>
              <tbody>
                <tr>
                  <th>OUR SOLAR PANELS GENERATE</th>
                </tr>
                <tr>
                    <td><span className="number">287 <span className="unit">MWH</span></span>of power per year</td>
                </tr>
                </tbody>
              </table>
            </div>
          </section>
      </div>
    )
  }
}

export class MoreShippingCapacity extends React.Component {
  render() {
    return (
      <div>
      <ShippingCapacityGraph/>
      <section>
        <table>
          <tbody>
            <tr>
                <th>A350s will bring</th>
            </tr>
            <tr>
                <td><span className="number">45%</span>additional cargo capacity</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>Our growth in shipping capacity means we have more room for your future cargo needs. As demand for shipping unique types of cargo rises, we are prepared to offer more temperature-controlled capacity to more destinations.</p> </div>
      </section>
    </div>
    )
  }
}

export class AutomatedStorageRetrievalSystem extends React.Component {
  render() {
    return (
        <div>
            <img className="full-width" src={require('../../img/general-area-img/cargo-storage-system.jpg')}  srcSet={require('../../img/general-area-img/cargo-storage-system@2x.jpg')+' 2x,'+ require('../../img/general-area-img/cargo-storage-system@3x.jpg')+' 3x'}/>
            <section>
              <table>
                <tbody>
                  <tr>
                      <th>Efficient automation</th>
                  </tr>
                  <tr>
                      <td><span className="number">360<span className="sub-text">In-house pallets</span></span>per hour in and out </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p>The automated storage and retrieval system (ASRS) uses computer-controlled automation to place and retrieve shipments in a pre-defined storage location. </p>
                <p className="table-title">The ASRS: </p>
                <ul>
                  <li>coordinates package movements for just-in-time storage and retrieval</li>
                  <li>reduces the time needed for a package to go through the hub</li>
                </ul>               
              </div>
            </section>
            <section>
                <p>The programming logic of the ASRS optimises transportation through the warehouse by finding the ideal storage location based on the entry point and the final destination.  If a shipment requires two pallets, both pallets are taken to the same location at the same time by two cranes with perfectly synchronised movements. </p>
                <h2>Efficient storage and retrieval saves time </h2>
            </section>
            <svg className="full-width" viewBox="0 0 582 615">
            <defs>
                <path id="a" d="M0 0h585v615H0z"/>
                <path id="b" d="M0 0h19v18H0z"/>
            </defs>
            <g fill="none" fillRule="evenodd">
                <use fill="#F4F4F4" transform="translate(-2)" href="#a"/>
                <g transform="translate(31 23)">
                    <mask id="c" fill="#fff">
                        <use href="#b"/>
                    </mask>
                    <path fill="#585858" d="M18.612 2.15l-4.843 4.604 2.343 9.65L14.434 18l-4.139-7.943-3.28 3.118.006 2.417-1.303 1.236-1.475-2.799-2.916-1.37 1.377-1.292 2.36.026 3.328-3.144L0 4.353 1.73 2.73l10.195 2.194L16.738.37a1.374 1.374 0 0 1 1.874 0c.517.492.517 1.29 0 1.782" mask="url(#c)"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M32 70h12v10.645H32zM32 82.419h12v10.645H32zM32 95h12v10.645H32zM32 119.677h12v10.645H32zM32 132.097h12v10.645H32zM32 144.516h12v10.645H32zM32 156.935h12v10.645H32zM32 169.355h12V180H32z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M206.491 70.12h11.84v10.66h-11.84zM206.491 82.556h11.84v10.659h-11.84zM206.491 94.99h11.84v10.66h-11.84zM206.491 107.426h11.84v10.659h-11.84zM206.491 119.86h11.84v10.66h-11.84zM206.491 132.296h11.84v10.659h-11.84zM206.491 144.73h11.84v10.66h-11.84zM206.491 157.166h11.84v10.659h-11.84zM206.491 169.6h11.84v10.66h-11.84zM206.491 182.036h11.84v10.659h-11.84z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M221.29 70.12h11.839v10.66h-11.84zM221.29 82.556h11.839v10.659h-11.84zM221.29 94.99h11.839v10.66h-11.84zM221.29 107.426h11.839v10.659h-11.84zM221.29 119.86h11.839v10.66h-11.84zM221.29 132.296h11.839v10.659h-11.84zM221.29 144.73h11.839v10.66h-11.84zM221.29 157.166h11.839v10.659h-11.84zM221.29 169.6h11.839v10.66h-11.84zM221.29 182.036h11.839v10.659h-11.84z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M221.29 359.085h11.839v10.659H221.29zM221 372h11.839v10.659H221zM221 383.955h11.839v10.659H221zM221.29 396.39h11.839v10.659H221.29zM221.29 408.825h11.839v10.659H221.29zM221.29 421.26h11.839v10.659H221.29z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M206.491 371.52h11.84v10.66h-11.84zM206.491 383.955h11.84v10.66h-11.84zM206.491 396.39h11.84v10.66h-11.84zM206.491 408.825h11.84v10.66h-11.84zM206.491 421.26h11.84v10.66h-11.84z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M64 70h12v10.696H64zM64 82.478h12v10.696H64zM64 94.957h12v10.696H64zM64 107h12v10.696H64zM32 107h12v10.696H32zM64 119.913h12v10.696H64zM64 132.391h12v10.696H64zM64 144.87h12v10.696H64zM64 157.348h12v10.696H64zM64 169.826h12v10.696H64zM64 182.304h12V193H64z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M110 70h12v10.645h-12zM110 82.419h12v10.645h-12zM110 94.839h12v10.645h-12zM110 107.258h12v10.645h-12zM110 119.677h12v10.645h-12zM110 132.097h12v10.645h-12zM110 144.516h12v10.645h-12zM110 156.935h12v10.645h-12zM110 169.355h12V180h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M158 70h12v10.664h-12zM158 82.442h12v10.664h-12zM158 94.884h12v10.664h-12zM158 107.326h12v10.664h-12zM158 119.768h12v10.664h-12zM158 132.209h12v10.664h-12zM158 144.651h12v10.664h-12zM158 157.093h12v10.664h-12zM158 169.535h12v10.664h-12zM158 181.977h12v10.664h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M173 70h12v10.664h-12zM173 82.442h12v10.664h-12zM173 94.884h12v10.664h-12zM173 107.326h12v10.664h-12zM173 119.768h12v10.664h-12zM173 132.209h12v10.664h-12zM173 144.651h12v10.664h-12zM173 157.093h12v10.664h-12zM173 169.535h12v10.664h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M158 371.568h12v10.664h-12zM158 384.01h12v10.664h-12zM158 396.452h12v10.664h-12zM158 408.894h12v10.664h-12zM158 421.336h12V432h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M173 359.126h12v10.664h-12zM173 371.568h12v10.664h-12zM173 384.01h12v10.664h-12zM173 396.452h12v10.664h-12zM173 408.894h12v10.664h-12zM173 421.335h12v10.664h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M256 69.758h11.863V80.43H256zM256 82.208h11.863V92.88H256zM256 94.658h11.863v10.672H256zM256 107.109h11.863v10.672H256zM256 119.758h11.863v10.672H256zM271 119.758h11.863v10.672H271zM256 132.009h11.863v10.672H256zM256 144.459h11.863v10.672H256zM256 156.91h11.863v10.672H256zM256 169.36h11.863v10.672H256z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M270.828 69.758h11.863V80.43h-11.863zM270.828 82.208h11.863V92.88h-11.863zM270.828 94.658h11.863v10.672h-11.863zM270.828 107.109h11.863v10.672h-11.863zM270.828 132.009h11.863v10.672h-11.863zM270.828 144.459h11.863v10.672h-11.863zM270.828 156.91h11.863v10.672h-11.863zM270.828 169.36h11.863v10.672h-11.863zM270.828 181.81h11.863v10.672h-11.863z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M256 383.978h11.863v10.672H256zM256 396.428h11.863V407.1H256zM256 408.878h11.863v10.672H256zM256 421.329h11.863V432H256z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M270.828 359.077h11.863v10.672h-11.863zM270.828 371.527h11.863V382.2h-11.863zM270.828 383.977h11.863v10.672h-11.863zM270.828 396.428h11.863V407.1h-11.863zM270.828 408.878h11.863v10.672h-11.863zM270.828 421.328h11.863V432h-11.863z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M350.309 69.758h11.863V80.43h-11.863zM365.309 69.758h11.863V80.43h-11.863zM350.309 81.758h11.863V92.43h-11.863zM365.309 81.758h11.863V92.43h-11.863zM350.309 94.658h11.863v10.672h-11.863zM350.309 107.109h11.863v10.672h-11.863zM350.309 119.559h11.863v10.672h-11.863zM350.309 132.009h11.863v10.672h-11.863zM350.309 144.459h11.863v10.672h-11.863zM350.309 156.91h11.863v10.672h-11.863zM350.309 169.36h11.863v10.672h-11.863zM350.309 181.81h11.863v10.672h-11.863z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M365.137 94.658H377v10.672h-11.863zM365.137 107.108H377v10.672h-11.863zM365.137 119.559H377v10.672h-11.863zM365.137 132.009H377v10.672h-11.863zM365.137 144.459H377v10.672h-11.863zM365.137 156.909H377v10.672h-11.863zM365.137 169.36H377v10.672h-11.863zM365.137 181.81H377v10.672h-11.863zM365.137 194.26H377v10.672h-11.863z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M350.309 396.428h11.863V407.1h-11.863zM350.309 408.878h11.863v10.672h-11.863zM350.309 421.328h11.863V432h-11.863z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M365.137 383.978H377v10.672h-11.863zM365.137 396.428H377V407.1h-11.863zM365.137 408.878H377v10.672h-11.863zM365.137 421.329H377V432h-11.863z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M304 70h12v10.664h-12zM304 82.442h12v10.664h-12zM304 94.884h12v10.664h-12zM304 107.326h12v10.664h-12zM304 119.768h12v10.664h-12zM304 132.209h12v10.664h-12zM304 144.651h12v10.664h-12zM304 157.093h12v10.664h-12zM304 169.535h12v10.664h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M319 70h12v10.664h-12zM319 82.442h12v10.664h-12zM319 94.884h12v10.664h-12zM319 107.326h12v10.664h-12zM319 119.768h12v10.664h-12zM319 132.209h12v10.664h-12zM319 144.651h12v10.664h-12zM319 157.093h12v10.664h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M304 384.01h12v10.664h-12zM304 396.452h12v10.664h-12zM304 408.894h12v10.664h-12zM304 421.336h12V432h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M319 384.01h12v10.664h-12zM319 396.452h12v10.664h-12zM319 408.894h12v10.664h-12zM319 421.336h12V432h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M398.243 70h11.892v10.664h-11.892zM398.243 82.442h11.892v10.664h-11.892zM398 107h11.892v10.664H398zM398 94.884h11.892v10.664H398zM398.243 119.768h11.892v10.664h-11.892zM398.243 132.209h11.892v10.664h-11.892zM398.243 144.651h11.892v10.664h-11.892zM398.243 157.093h11.892v10.664h-11.892z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M413.108 70H425v10.664h-11.892zM413.108 82.442H425v10.664h-11.892zM413.108 95H425v10.664h-11.892zM413.108 107.326H425v10.664h-11.892zM413.108 119.768H425v10.664h-11.892zM413.108 132.209H425v10.664h-11.892zM413.108 144.651H425v10.664h-11.892zM413.108 157.093H425v10.664h-11.892z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M398.243 396.452h11.892v10.664h-11.892zM398.243 408.894h11.892v10.664h-11.892zM398.243 421.336h11.892V432h-11.892z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M413.108 359.126H425v10.664h-11.892zM413.108 371.568H425v10.664h-11.892zM413.108 384.01H425v10.664h-11.892zM413.108 396.126H425v10.664h-11.892zM413.108 408.242H425v10.664h-11.892zM413.108 421.335H425v10.664h-11.892z"/>
                </g>
                <g>
                    <g fill="#B9E5EA">
                        <path d="M446.125 70h11.944v10.664h-11.944zM446.125 82.442h11.944v10.664h-11.944zM446.125 94.884h11.944v10.664h-11.944zM446.125 107.326h11.944v10.664h-11.944zM446.125 132.209h11.944v10.664h-11.944zM446.125 144.651h11.944v10.664h-11.944zM446.125 157.093h11.944v10.664h-11.944zM446.125 169.535h11.944v10.664h-11.944zM446.125 181.977h11.944v10.664h-11.944z"/>
                    </g>
                    <g fill="#B9E5EA">
                        <path d="M461.056 70H473v10.664h-11.944zM461.056 82.442H473v10.664h-11.944zM461.056 94.884H473v10.664h-11.944zM461.056 107.326H473v10.664h-11.944zM461.056 120H473v10.664h-11.944zM446.056 120H458v10.664h-11.944zM461.056 132.209H473v10.664h-11.944zM461.056 144.651H473v10.664h-11.944zM461.056 157.093H473v10.664h-11.944zM461.056 169.535H473v10.664h-11.944zM461.056 181.977H473v10.664h-11.944z"/>
                    </g>
                    <g fill="#D8D8D8">
                        <path d="M446.125 371.568h11.944v10.664h-11.944zM446.125 384.01h11.944v10.664h-11.944zM446.125 396.452h11.944v10.664h-11.944zM446.125 408.894h11.944v10.664h-11.944zM446.125 421.336h11.944V432h-11.944z"/>
                    </g>
                    <g fill="#D8D8D8">
                        <path d="M461.056 384.01H473v10.664h-11.944zM461.056 396.452H473v10.664h-11.944zM461.056 408.894H473v10.664h-11.944zM461.056 421.336H473V432h-11.944z"/>
                    </g>
                </g>
                <g fill="#B9E5EA">
                    <path d="M492 70h12v10.691h-12zM492 82.473h12v10.691h-12zM492 94.945h12v10.691h-12zM492 107.418h12v10.691h-12zM492 119.891h12v10.691h-12zM492 132.364h12v10.691h-12zM492 144.836h12v10.691h-12zM492 157.309h12V168h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M507 70h12v10.625h-12zM507 82.396h12v10.625h-12zM507 94.792h12v10.625h-12zM507 107.188h12v10.625h-12zM507 119.583h12v10.625h-12zM507 131.979h12v10.625h-12zM507 144.375h12V155h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M537 70h12v10.645h-12zM537 82.419h12v10.645h-12zM537 94.839h12v10.645h-12zM537 107.258h12v10.645h-12zM537 119.677h12v10.645h-12zM537 132.097h12v10.645h-12zM537 144.516h12v10.645h-12zM537 156.935h12v10.645h-12zM537 169.355h12V180h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M492 396h12v10.8h-12zM492 408.6h12v10.8h-12zM492 421.2h12V432h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M507 384h12v10.667h-12zM507 396.444h12v10.667h-12zM507 408.889h12v10.667h-12zM507 421.333h12V432h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M537 372h12v10.588h-12zM537 384.353h12v10.588h-12zM537 396.706h12v10.588h-12zM537 409.059h12v10.588h-12zM537 421.412h12V432h-12z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M79 70h12v10.645H79zM79 82.419h12v10.645H79zM79 94.839h12v10.645H79zM79 107.258h12v10.645H79zM79 119.677h12v10.645H79zM79 132.097h12v10.645H79zM79 144.516h12v10.645H79zM79 156.935h12v10.645H79zM79 169.355h12V180H79z"/>
                </g>
                <g fill="#B9E5EA">
                    <path d="M125 70h12v10.658h-12zM125 82.434h12v10.658h-12zM125 94.868h12v10.658h-12zM125 107.303h12v10.658h-12zM125 119.737h12v10.658h-12zM125 132.171h12v10.658h-12zM125 144.605h12v10.658h-12zM125 157.039h12v10.658h-12zM125 169.474h12v10.658h-12zM125 181.908h12v10.658h-12zM125 194.342h12V205h-12z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M32 396h12v10.8H32zM32 408.6h12v10.8H32zM32 421.2h12V432H32z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M64 384h12v10.667H64zM64 396.444h12v10.667H64zM64 408.889h12v10.667H64zM64 421.333h12V432H64z"/>
                </g>
                <g fill="#D8D8D8">
                    <path d="M110.148 372H122v10.612h-11.852zM110.148 384.381H122v10.612h-11.852zM110.148 396.761H122v10.612h-11.852zM110 409h11.852v10.612H110zM110 421.239h11.852v10.612H110z"/>
                </g>
                <path fill="#D8D8D8" d="M79 396h12v11H79zM79 409h12v11H79zM79 421h12v11H79z"/>
                <g fill="#D8D8D8">
                    <path d="M125 384h12v10.667h-12zM125 396.444h12v10.667h-12zM125 408.889h12v10.667h-12zM125 421.333h12V432h-12z"/>
                </g>
                <g fill="#3AC9C6">
                    <path d="M32 207.155h11.858v10.674H32zM32 232.061h11.858v10.674H32zM78.838 207.155h11.858v10.674H78.838zM110.261 207.155h11.858v10.674h-11.858zM125.084 232.061h11.858v10.674h-11.858zM158.286 207.155h11.858v10.674h-11.858zM173.108 194.702h11.858v10.674h-11.858zM206.31 207.155h11.858v10.674H206.31zM256.112 194.702h11.858v10.674h-11.858zM304.136 194.702h11.858v10.674h-11.858zM318.959 182.249h11.858v10.674h-11.858zM350.382 207.155h11.858v10.674h-11.858zM365.204 207.155h11.858v10.674h-11.858zM398.406 169.796h11.858v10.674h-11.858zM413.228 169.796h11.858v10.674h-11.858zM445.837 194.702h11.858v10.674h-11.858zM460.659 194.702h11.858v10.674h-11.858zM492.083 169.796h11.858v10.674h-11.858zM506.905 157.344h11.858v10.674h-11.858zM537.142 169.796H549v10.674h-11.858zM398.406 182.249h11.858v10.674h-11.858zM413.228 182.249h11.858v10.674h-11.858zM445.837 207.155h11.858v10.674h-11.858zM460.659 207.155h11.858v10.674h-11.858zM492.083 182.249h11.858v10.674h-11.858zM506.905 169.796h11.858v10.674h-11.858zM537.142 182.249H549v10.674h-11.858zM270.935 207.155h11.858v10.674h-11.858zM221.132 207.155h11.858v10.674h-11.858zM78.838 244.514h11.858v10.674H78.838zM110.261 244.514h11.858v10.674h-11.858zM125.084 269.42h11.858v10.674h-11.858zM158.286 244.514h11.858v10.674h-11.858zM173.108 232.061h11.858v10.674h-11.858zM206.31 244.514h11.858v10.674H206.31zM256.112 232.061h11.858v10.674h-11.858zM304.136 232.061h11.858v10.674h-11.858zM318.959 219.608h11.858v10.674h-11.858zM350.382 244.514h11.858v10.674h-11.858zM365.204 244.514h11.858v10.674h-11.858zM398.406 207.155h11.858v10.674h-11.858zM413.228 207.155h11.858v10.674h-11.858zM445.837 232.061h11.858v10.674h-11.858zM460.659 232.061h11.858v10.674h-11.858zM492.083 207.155h11.858v10.674h-11.858zM506.905 194.702h11.858v10.674h-11.858zM537.142 207.155H549v10.674h-11.858zM492.083 232.061h11.858v10.674h-11.858zM506.905 219.608h11.858v10.674h-11.858zM537.142 232.061H549v10.674h-11.858zM270.935 244.514h11.858v10.674h-11.858zM221.132 244.514h11.858v10.674h-11.858zM64.016 194.702h11.858v10.674H64.016zM64.016 232.061h11.858v10.674H64.016zM32 182.249h11.858v10.674H32zM78.838 182.249h11.858v10.674H78.838zM110.261 182.249h11.858v10.674h-11.858zM125.084 207.155h11.858v10.674h-11.858zM64.016 169.796h11.858v10.674H64.016zM32 219.608h11.858v10.674H32zM32 244.514h11.858v10.674H32zM78.838 219.608h11.858v10.674H78.838zM110.261 219.608h11.858v10.674h-11.858zM125.084 244.514h11.858v10.674h-11.858zM173.108 207.155h11.858v10.674h-11.858zM206.31 219.608h11.858v10.674H206.31zM256.112 207.155h11.858v10.674h-11.858zM304.136 207.155h11.858v10.674h-11.858zM318.959 194.702h11.858v10.674h-11.858zM350.382 219.608h11.858v10.674h-11.858zM365.204 219.608h11.858v10.674h-11.858zM270.935 219.608h11.858v10.674h-11.858zM221.132 219.608h11.858v10.674h-11.858zM78.838 256.967h11.858v10.674H78.838zM110.261 256.967h11.858v10.674h-11.858zM125.084 281.873h11.858v10.674h-11.858zM158.286 256.967h11.858v10.674h-11.858zM173.108 244.514h11.858v10.674h-11.858zM206.31 256.967h11.858v10.674H206.31zM256.112 244.514h11.858v10.674h-11.858zM304.136 244.514h11.858v10.674h-11.858zM318.959 232.061h11.858v10.674h-11.858zM350.382 256.967h11.858v10.674h-11.858zM365.204 256.967h11.858v10.674h-11.858zM398.406 219.608h11.858v10.674h-11.858zM413.228 219.608h11.858v10.674h-11.858zM460.659 244.514h11.858v10.674h-11.858zM492.083 219.608h11.858v10.674h-11.858zM506.905 207.155h11.858v10.674h-11.858zM537.142 219.608H549v10.674h-11.858zM492.083 244.514h11.858v10.674h-11.858zM506.905 232.061h11.858v10.674h-11.858zM537.142 244.514H549v10.674h-11.858zM256.112 256.967h11.858v10.674h-11.858zM304.136 256.967h11.858v10.674h-11.858zM318.959 244.514h11.858v10.674h-11.858zM350.382 269.42h11.858v10.674h-11.858zM365.204 269.42h11.858v10.674h-11.858zM398.406 232.061h11.858v10.674h-11.858zM413 232h11.858v10.674H413zM413 245h11.858v10.674H413zM413.228 256.967h11.858v10.674h-11.858zM256.112 269.42h11.858v10.674h-11.858zM304.136 269.42h11.858v10.674h-11.858zM318.959 256.967h11.858v10.674h-11.858zM270.935 256.967h11.858v10.674h-11.858zM221.132 256.967h11.858v10.674h-11.858zM78.838 269.42h11.858v10.674H78.838zM110.261 269.42h11.858v10.674h-11.858zM125.084 294.326h11.858V305h-11.858zM158.286 269.42h11.858v10.674h-11.858zM173.108 256.967h11.858v10.674h-11.858zM64.016 207.155h11.858v10.674H64.016zM64.016 219.608h11.858v10.674H64.016zM64.016 244.514h11.858v10.674H64.016zM32 194.702h11.858v10.674H32zM78.838 194.702h11.858v10.674H78.838zM110.261 194.702h11.858v10.674h-11.858zM125.084 219.608h11.858v10.674h-11.858zM158.286 194.702h11.858v10.674h-11.858zM173.108 182.249h11.858v10.674h-11.858zM206.31 194.702h11.858v10.674H206.31zM256.112 182.249h11.858v10.674h-11.858zM304.136 182.249h11.858v10.674h-11.858zM318.959 169.796h11.858v10.674h-11.858zM350.382 194.702h11.858v10.674h-11.858zM270.935 194.702h11.858v10.674h-11.858zM221.132 194.702h11.858v10.674h-11.858zM78.838 232.061h11.858v10.674H78.838zM110.261 232.061h11.858v10.674h-11.858zM125.084 256.967h11.858v10.674h-11.858zM158.286 232.061h11.858v10.674h-11.858zM173 220h11.858v10.674H173zM158.178 220h11.858v10.674h-11.858zM206.31 232.061h11.858v10.674H206.31zM256.112 219.608h11.858v10.674h-11.858zM304.136 219.608h11.858v10.674h-11.858zM318.959 207.155h11.858v10.674h-11.858zM350.382 232.061h11.858v10.674h-11.858zM365.204 232.061h11.858v10.674h-11.858zM398.406 194.702h11.858v10.674h-11.858zM413.228 194.702h11.858v10.674h-11.858zM445.837 219.608h11.858v10.674h-11.858zM460.659 219.608h11.858v10.674h-11.858zM492.083 194.702h11.858v10.674h-11.858zM506.905 182.249h11.858v10.674h-11.858zM537.142 194.702H549v10.674h-11.858zM270.935 232.061h11.858v10.674h-11.858zM221.132 232.061h11.858v10.674h-11.858zM64.016 182.249h11.858v10.674H64.016z"/>
                </g>
                <g stroke="#7A7A7A" transform="translate(49 56)">
                    <rect width="9" height="388" x=".5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="47.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="94.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="142.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="190.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="238.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="286.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="334.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="382.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="429.5" y=".5" rx="3"/>
                    <rect width="9" height="388" x="475.5" y=".5" rx="3"/>
                </g>
                <path fill="#B9E5EA" d="M32 506h12v11H32z"/>
                <path fill="#29CDE0" d="M32 526h12v11H32z"/>
                <path fill="#D8D8D8" d="M32 546h12v11H32z"/>
                <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="12" fontWeight="900" transform="translate(-2)">
                    <tspan x="62" y="31">AIRSIDE</tspan>
                </text>
                <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="12" fontWeight="900" transform="translate(-2)">
                    <tspan x="66" y="470">LANDSIDE</tspan>
                </text>
                <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="12" transform="translate(-2)">
                    <tspan x="65" y="515">TO PLANES</tspan>
                </text>
                <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="12" transform="translate(-2)">
                    <tspan x="65" y="535">SHIPMENTS IN TRANSIT</tspan>
                </text>
                <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="12" transform="translate(-2)">
                    <tspan x="65" y="555">TO TRUCKS</tspan>
                </text>
                <g fill="#585858">
                    <path d="M32.724 472.86h14.51V466h-14.51z"/>
                    <path d="M32.315 475.552v-2.802l14.18-.055-.234 2.836-5.557-.01C40 473.674 39.19 472.94 37.91 473c-1.258.057-2.088.872-2.573 2.552h-3.022z"/>
                    <path d="M52.022 471.726c0-1.687-.69-2.97-.976-3.505-.286-.536-.429-.737-1.191-.737h-1.932v2.728h1.385c.582 0 .873.224 1.005.587.076.208.176.517.3.927h1.409zm-5.437-4.887c1.38 0 2.73-.02 4.078.02.217.007.51.23.628.442 1.406 2.528 1.812 4.804 1.458 8.006h-1.307c-.15-2.83-4.632-3.473-5.215.245l.358-8.713z"/>
                    <path d="M48.952 476.796c.489-.078.843-.393.847-.985.005-.606-.363-.958-.906-.96-.55-.002-.897.371-.895.97.001.598.341.922.954.975m-.06-2.956c1.037-.007 1.835.86 1.834 1.993-.001 1.075-.803 1.964-1.783 1.98-1.023.015-1.869-.87-1.88-1.968-.011-1.12.79-1.997 1.83-2.005M38.045 476.795c.533-.083.875-.394.852-1.008-.023-.607-.38-.958-.925-.94-.547.018-.895.414-.875 1.002.02.583.372.915.948.946m-.008-2.953c1.02.012 1.84.932 1.81 2.031-.031 1.075-.852 1.936-1.838 1.93-1.034-.008-1.855-.899-1.842-2 .014-1.122.825-1.972 1.87-1.96"/>
                </g>
            </g>
        </svg>

        
        </div>
    )
  }
}




