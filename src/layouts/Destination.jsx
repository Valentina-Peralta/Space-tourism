import React, { useState } from 'react'
import '../stylesheets/Destination.css'
import moonImg from '../assets/destination/image-moon.png'
import marsImg from '../assets/destination/image-mars.png'
import europaImg from '../assets/destination/image-europa.png'
import titanImg from '../assets/destination/image-titan.png'
import { NavLink, useParams } from 'react-router-dom'
import data from '../data'
import backgroundVideo from '../assets/space.mp4'
import Caisto from '../components/Caisto'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Mars from '../components/Mars'
import Moon from '../components/Moon'
import Titan from '../components/Titan'

function Destination() {

    const [destination, setDestination] = useState('moon')

    const selectedDestination = data.planets[destination];
    return (
        <>

            <div className='destination'>


                <div className='planet-wrapper'>
                    <h2 id='pick'><span className='grey'>01</span> PICK YUR DESTINATION</h2>
                    <div className="planet" id='planet'>
                        <Canvas>

                            <directionalLight
                                position={[10, 0, 0]} intensity={1} />
                            <Stage intensity={0.6}>
                                {destination === 'moon' ?
                                    <Moon />
                                    : destination === 'mars' ? <Mars />
                                        : destination === 'titan' ? <Titan />
                                            : <Caisto />
                                }
                            </Stage>
                            <OrbitControls
                                enableZoom={false}
                                autoRotate={true}
                            />
                        </Canvas>
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
                        <li className={destination === 'callisto' ? 'active' : null}
                            onClick={() => setDestination('callisto')}

                        >CALLISTO</li>
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
        </>
    )
}

export default Destination