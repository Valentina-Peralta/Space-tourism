import React, { useState } from 'react'
import '../stylesheets/Nav.css'
import { NavLink } from 'react-router-dom'

function Nav() {

    const [menu, setMenu] = useState(false)

    return (
        <div className='nav'>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            </div>
            <svg
                onClick={() => setMenu(true)}
                className='hamburguer' xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
            <ul className='desktop-ul'>
                <NavLink to='/'>

                    <li>00 HOME</li>
                </NavLink>

                <NavLink to='/destination'>
                    <li>01 DESTINATION</li>
                </NavLink>
                <NavLink to='crew'>
                    <li>02 CREW</li>
                </NavLink>
                <NavLink to='technology'>
                    <li>03 TECHNOLOGY</li>
                </NavLink>
            </ul>
            <div
                style={menu ? { display: 'flex' } : { display: 'none' }}
                className="mobile-nav">
                <svg
                    onClick={() => setMenu(false)}
                    viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>close [#1511]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"> </polygon> </g> </g> </g> </g></svg>
                <ul className='mobile-ul'>
                    <NavLink to='/'>
                        <li
                            onClick={() => setMenu(false)}
                        >00 HOME</li>
                    </NavLink>

                    <NavLink to='/destination'>
                        <li
                            onClick={() => setMenu(false)}
                        >01 DESTINATION</li>
                    </NavLink>
                    <NavLink to='crew'>
                        <li
                            onClick={() => setMenu(false)}
                        >02 CREW</li>
                    </NavLink>
                    <NavLink to='technology'>
                        <li
                            onClick={() => setMenu(false)}
                        >03 TECHNOLOGY</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Nav