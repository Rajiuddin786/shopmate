import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="nav-container">
                    <a className="logo" href="/">
                        <img src={Logo} alt="Logo" width="30" height="24" />
                    </a>
                    <div className="nav-links-wrapper">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active nav-links" : "nav-links"}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) => isActive ? "active nav-links" : "nav-links"}>
                            Cart
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>


    )
}
