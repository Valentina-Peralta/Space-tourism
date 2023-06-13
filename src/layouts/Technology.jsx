import React, { useState } from 'react'
import '../stylesheets/Technology.css'
import data from '../data'
import launchImg from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportImg from '../assets/technology/image-spaceport-portrait.jpg'
import spaceCapsuleImg from '../assets/technology/image-space-capsule-portrait.jpg'
import Spaceport from '../components/Spaceport'
import Launch from '../components/Launch'
import Capsule from '../components/Capsule'
import { Canvas } from '@react-three/fiber'
import { CameraControls, OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'


function Technology() {
    const [tech, setTech] = useState('launchVehicle')
    const selectedTech = data.technology[tech]
    console.log(tech)
    return (

        <div className='technology'>
            <div className="img-wrapper">
                <h1>
                    <span className='grey'>03</span>
                    SPACE LAUNCH 101
                </h1>
                {tech === 'launchVehicle' ? <img src={launchImg} alt="" />
                    : tech === 'spaceport' ? <img src={spaceportImg} alt="" />
                        : <img src={spaceCapsuleImg} alt="" />
                }
                {/* <Canvas style={{ width: '400px' }}>
                    <directionalLight />
                    <Stage
                        environment="city" intensity={0.6}>
                        {tech === 'launchVehicle' ? <Launch />
                            : tech === 'spaceport' ? <Spaceport />
                                : <Capsule
                                />
                        }
                    </Stage>

                    <OrbitControls
                        maxZoom={0.2}
                        enableZoom={false}
                        autoRotate={true}
                        rotateSpeed={0.3} // Ajusta la velocidad de rotación de la cámara según tus necesidades
                    />
                    <perspectiveCamera makeDefault
                        position={[5, 5, 5]} />
                </Canvas>
 */}
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