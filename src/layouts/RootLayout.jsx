import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import backgroundVideo from '../assets/space.mp4'


function RootLayout() {
    return (
        <div >
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    // maxWidth: '1400px',
                    height: '100%',
                    objectFit: 'cover',
                }}
            >
                <source src={backgroundVideo} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            <Nav />
            <Outlet />
        </div>
    )
}

export default RootLayout