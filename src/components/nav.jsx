import React from 'react'
import logo from '../datatonic-logo-03.svg'
import '../styles/navbar.css'
import {NavLink, Link} from 'react-router-dom'

export default function Navbar() {


    return (
        <div className='nav-container'>
            <ul className='nav-list'>
                <li className='logo'>
                    <Link to='/' className='logo'> <img className='logo-image'  src={logo} alt='datatonic logo' />
                    </Link>
                </li>
                <li>
                <NavLink to="/dashboard" className='nav-item dashboard' activeClassName='active'>
                    Dashboard
                </NavLink>
                </li>
                <li>
                <NavLink to="/sources" className='nav-item' activeClassName='active'>
                    Sources
                </NavLink>
                </li>
                <li>
                <NavLink to="/inspector" className='nav-item' activeClassName='active'>
                    Inspector
                </NavLink>
                </li>
                <li>
                <NavLink to="/ingestion" className='nav-item' activeClassName='active'>
                    Ingestion
                </NavLink>
                </li>
            </ul>
            <div className='nav-item'>User001</div>
        </div>
    )
}