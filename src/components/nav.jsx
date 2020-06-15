import React from 'react'
import logo from '../datatonic-logo-03.svg'
import '../styles/navbar.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {


    return (
        <div className='nav-container'>
            <ul className='nav-list'>
                <li className='logo'> <img className='logo-image'  src={logo} alt='datatonic logo' /></li>
                <li>
                <NavLink to="/dashboard" className='nav-item'>
                    Dashboard
                </NavLink>
                </li>
                <li>
                <NavLink to="/sources" className='nav-item'>
                    Sources
                </NavLink>
                </li>
                <li>
                <NavLink to="/inspector" className='nav-item'>
                    Inspector
                </NavLink>
                </li>
                <li>
                <NavLink to="/ingestion" className='nav-item'>
                    Ingestion
                </NavLink>
                </li>
            </ul>
            <div className='nav-item'>User001</div>
        </div>
    )
}