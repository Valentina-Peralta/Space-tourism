import React, { useState } from 'react'
import '../stylesheets/Crew.css'
import commander from '../assets/crew/image-douglas-hurley.png'
import missionSpecialist from '../assets/crew/image-mark-shuttleworth.png'
import pilot from '../assets/crew/image-victor-glover.png'
import flightEngineer from '../assets/crew/image-anousheh-ansari.png'
import { NavLink, useParams } from 'react-router-dom'
import data from '../data'

function Destination() {

    const [crew, setCrew] = useState('commander')
    const selectedCrew = data.crew[crew];

    return (
        <div className='destination crew-container'>

            <div className="crew">
                <h2 id="meet"> <span className='grey'>02</span> MEET YOUR CREW</h2>
                <div className="crew-img">
                    {crew === 'commander' ? <img src={commander} alt="" />
                        : crew === 'missionSpecialist' ? <img src={missionSpecialist} alt="" />
                            : crew === 'pilot' ? <img src={pilot} alt="" />
                                : <img src={flightEngineer} alt="" />
                    }
                    <div className="divider" />

                </div>

                <ul id='selector'>
                    <li className={crew === 'commander' ? 'active' : null}
                        onClick={() => setCrew('commander')}
                    ></li>
                    <li className={crew === 'missionSpecialist' ? 'active' : null}
                        onClick={() => setCrew('missionSpecialist')}

                    ></li>
                    <li className={crew === 'pilot' ? 'active' : null}
                        onClick={() => setCrew('pilot')}

                    ></li>
                    <li className={crew === 'flightEngineer' ? 'active' : null}
                        onClick={() => setCrew('flightEngineer')}

                    ></li>
                </ul>

            </div>

            <div className="info crew">
                <h1>{selectedCrew.title.toUpperCase()}</h1>
                <h3 className='name'>{selectedCrew.name.toUpperCase()}</h3>
                <p>{selectedCrew.description}</p>
            </div>

        </div>
    )
}

export default Destination