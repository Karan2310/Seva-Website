import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
    return (
        <>
            <nav className="uk-navbar-container " uk-navbar>

                <div className="uk-navbar-right">

                    <ul className="uk-navbar-nav ms-auto">
                        <li className="uk"><NavLink to="/">Home</NavLink></li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li className="uk-active"><NavLink to="/">Active</NavLink></li>
                                    <li><NavLink to="/products">Item</NavLink></li>
                                    <li><NavLink to="/products">Item</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>

                </div>

            </nav>
        </>
    )
}

export default Navbar
