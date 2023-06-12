import React, { useState } from 'react'
import '../stylesheets/Destination.css'
import moonImg from '../assets/destination/image-moon.png'
import marsImg from '../assets/destination/image-mars.png'
import europaImg from '../assets/destination/image-europa.png'
import titanImg from '../assets/destination/image-titan.png'
import { NavLink, useParams } from 'react-router-dom'
import data from '../data'

function Destination() {

    const [destination, setDestination] = useState('moon')

    const selectedDestination = data.planets[destination];
    return (
        <div className='destination'>
            <div className='planet-wrapper'>
                <h2 id='pick'><span className='grey'>01</span> PICK YUR DESTINATION</h2>
                <div className="planet" id='planet'>
                    {destination === 'moon' ? <img src={moonImg} alt="" />
                        : destination === 'mars' ? <img src={marsImg} alt="" />
                            : destination === 'europa' ? <img src={europaImg} alt="" />
                                : <img src={titanImg} alt="" />
                    }
                </div>
            </div>
            <div className="info">
                <ul>
                    <li className={destination === 'moon' ? 'active' : null}
                        onClick={() => setDestination('moon')}
                    >MOON</li>
                    <li className={destination === 'mars' ? 'active' : null}
                        onClick={() => setDestination('mars')}

                    >MARS</li>
                    <li className={destination === 'europa' ? 'active' : null}
                        onClick={() => setDestination('europa')}

                    >EUROPA</li>
                    <li className={destination === 'titan' ? 'active' : null}
                        onClick={() => setDestination('titan')}

                    >TITAN</li>
                </ul>
                <h1>{destination.toUpperCase()}</h1>
                <p>{selectedDestination.description}</p>
                <div className="divider" />

                <div className="stats">
                    <div className="dist">
                        <h3 >AVG. DISTANCE</h3>
                        <p>{selectedDestination.distance.toUpperCase()}</p>
                    </div>
                    <div className="time">
                        <h3>EST. TRAVEL TIME</h3>
                        <p>{selectedDestination.time.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination