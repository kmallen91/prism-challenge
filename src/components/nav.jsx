import React from 'react'
import logo from '../datatonic-logo-03.svg'
import '../styles/navbar.css'

export default function Navbar() {


    return (
        <div className='nav-container'>
            <ul className='nav-list'>
                <li> <img className='logo' src={logo} alt='datatonic logo' /></li>
                <li className='list-item'> Dashboard </li>
                <li className='list-item'> Sources </li>
                <li className='list-item'> Inspector </li>
                <li className='list-item'> Ingestion </li>
            </ul>
            <div className='nav-item'>User001</div>
        </div>
    )
}