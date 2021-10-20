import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
    return (
        <>
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav className="uk-navbar-container shadow-sm" uk-navbar>
                    <div className="uk-navbar-right">

                        {/* Mobile Nav */}
                        <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-overlay">
                            <img src="./assets/MenuIcon.png" alt="" style={{ padding: "1rem" }} className="d-block d-lg-none" />
                        </button>

                        <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar">

                                <button className="uk-offcanvas-close border-0 bg-transparent" type="button" uk-close>
                                    <img src="./assets/MenuClose.png" alt="" />
                                </button>

                                <div className="nav-body mt-3">
                                    <ul className="">
                                        <li className="uk"><NavLink to="/">Home</NavLink></li>
                                        <li>
                                            <NavLink to="/about">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products">Products</NavLink>
                                            <div className="">
                                            </div>
                                        </li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* Mobile Nav ends */}

                        <ul className="uk-navbar-nav ms-auto d-none d-lg-inline-flex">
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

                <div className="con-nav container-fluid  text-light w-100 h-25 d-none d-md-block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magnam.</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
