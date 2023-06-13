import React from 'react'
import '../stylesheets/Home.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Earth from '../components/Earth'

function Home() {
    return (
        <div className='home'
        >
            <div className="main">

                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>  Let's face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world experience!

                </p>
            </div>
            <div className="explore">

                <Canvas style={{ width: '100%' }}>
                    <directionalLight />
                    <Stage environment="night" intensity={0.6}>
                        <Earth />
                    </Stage>
                    <OrbitControls
                        enableZoom={false}
                        autoRotate={true}
                    />
                </Canvas>
            </div>


        </div>
    )
}

export default Home