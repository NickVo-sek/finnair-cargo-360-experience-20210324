import React from 'react'

class ShippingCapacityGraph extends React.Component {
	render() {
		return (
            <svg className="full-width" viewBox="0 0 582 330">
                <g fill="none" fillRule="evenodd">
                    <path fill="#EEF2F9" d="M0 0h582v226H0z"/>
                    <g stroke="#C3C3C3">
                        <path d="M69.927 147.666H549.46M69.927 163.436H549.46M69.927 179.206H549.46M69.927 195.692H549.46M69.927 66.666H549.46M69.927 50.896H549.46M69.927 83.153H549.46M69.927 98.923H549.46M69.927 115.41H549.46M69.927 131.18H549.46"/>
                    </g>
                    <path fill="#0B1560" stroke="#0B1560" strokeLinecap="square" d="M91 211h60v-85H91z"/>
                    <path fill="#0B1560" stroke="#0B1560" d="M184 211h60v-89h-60z"/>
                    <path fill="#B9E5EA" d="M276 211h60V108h-60zM372 211h60V83h-60zM465 211h60V62h-60z"/>
                    <path stroke="#0B1560" d="M69.927 211.045H549.46"/>
                    <text fill="#696969" fontFamily="Amplitude Book" fontSize="10" letterSpacing=".84">
                        <tspan x="43.115" y="43">200</tspan> 
                    </text>
                    <text fill="#696969" fontFamily="Amplitude Book" fontSize="10" letterSpacing=".84">
                        <tspan x="44.925" y="124">150</tspan> 
                    </text>
                    <text fill="#696969" fontFamily="Amplitude Book" fontSize="10" letterSpacing=".84">
                        <tspan x="43.985" y="204">100</tspan> 
                    </text>
                    <g transform="translate(0 16)">
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="10" fontWeight="400">
                            <tspan x="26.56" y="8">MILLION</tspan> <tspan x="50.44" y="18">KG</tspan>
                        </text>
                        <path fill="#EDEDED" d="M0 212h592v102H0z"/>
                        <rect width="152" height="20" x="93.5" y="228.5" stroke="#464646" rx="10"/>
                        <rect width="248" height="20" x="276.5" y="228.5" stroke="#464646" rx="10"/>
                        <path stroke="#464646" strokeLinecap="square" d="M168.376 249v15.617M401.376 249v15.617"/>
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="12" letterSpacing=".2">
                            <tspan x="139.886" y="278">Capacity with </tspan> <tspan x="142.368" y="291">current fleet</tspan>
                        </text>
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="12" letterSpacing=".2">
                            <tspan x="339.89" y="278">Projected capacity with all </tspan> <tspan x="337.428" y="291">ordered A350s in operation</tspan>
                        </text>
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14">
                            <tspan x="108.116" y="242.569">2017</tspan>
                        </text>
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14">
                            <tspan x="482.554" y="242.569">2021</tspan>
                        </text>
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14">
                            <tspan x="200.572" y="242.569">2018</tspan>
                        </text>
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14">
                            <tspan x="292.675" y="242.569">2019</tspan>
                        </text>
                        <text fill="#1E1E1E" fontFamily="Amplitude Book" fontSize="14">
                            <tspan x="387.752" y="242.569">2020</tspan>
                        </text>
                    </g>
                </g>
            </svg>
		)
	}
}

export default ShippingCapacityGraph

