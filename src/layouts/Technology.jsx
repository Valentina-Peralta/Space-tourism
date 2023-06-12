import React, { useState } from 'react'
import '../stylesheets/Technology.css'
import data from '../data'
import launchImg from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportImg from '../assets/technology/image-spaceport-portrait.jpg'
import spaceCapsuleImg from '../assets/technology/image-space-capsule-portrait.jpg'
function Technology() {
    const [tech, setTech] = useState('launchVehicle')
    const selectedTech = data.technology[tech]

    return (

        <div className='technology'>
            <div className="img-wrapper">
                <h1>
                    03 SPACE LAUNCH 101
                </h1>
                {tech === 'launchVehicle' ? <img src={launchImg} alt="" />
                    : tech === 'spaceport' ? <img src={spaceportImg} alt="" />
                        : <img src={spaceCapsuleImg} alt="" />
                }
            </div>
            <div className="info-wrapper">
                <div className="selector">
                    <div
                        onClick={() => setTech('launchVehicle')}
                        className={tech === 'launchVehicle' ? 'active' : null}>
                        1</div>
                    <div
                        onClick={() => setTech('spaceport')}
                        className={tech === 'spaceport' ? 'active' : null}>
                        2</div>
                    <div
                        onClick={() => setTech('spaceCapsule')}
                        className={tech === 'spaceCapsule' ? 'active' : null}>
                        3</div>
                </div>
                <div className="info">
                    <h3>THE TERMINOLOGY</h3>
                    <h2>{selectedTech.title.toUpperCase()}</h2>
                    <p>{selectedTech.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Technology