import React from 'react'
import logo from '../datatonic-logo-03.svg'
import '../styles/navbar.css'

export default function Navbar() {


    return (
        <div className='nav-container'>
            <ul className='nav-list'>
                <li> <img className='logo' src={logo} alt='datatonic logo' /></li>
                <li className='nav-item'> Dashboard </li>
                <li className='nav-item'> Sources </li>
                <li className='nav-item'> Inspector </li>
                <li className='nav-item'> Ingestion </li>
            </ul>
            
        </div>
    )
}