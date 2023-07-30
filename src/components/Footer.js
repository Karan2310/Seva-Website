import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'


const Footer = () => {
    return (
        <>
            <div className="footer container-fluid py-3 pb-4 px-4 px-lg-5 bg-dark">
                <div className="row d-flex justify-content-center align-items-start">
                    <div className="col-md-3 align-items-lg-center">
                        <h3>Links</h3>
                        <div className="d-flex flex-column">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/products">Products</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </div>
                    <div className="col-md-5 align-items-lg-center">
                        <h3>Contact</h3>
                        <div className="text-start me-lg-5">
                            <h4 className="m-0">Address</h4>
                            <p >1605, Rainart, Pokharan Rd No. 1, Vartak Nagar, Thane (West), Maharashtra - 400606, India</p>
                            <h4>Phone Number</h4>
                            <a href="tel:+919930607290">(+91) 9930607290</a>
                            <h4>Email Address</h4>
                            <a href="mailto:sevaenterprises1916@gmail.com" style={{ fontSize: "1rem" }}>sevaenterprises1916@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <h3 className="mt-4">How to Reach ?</h3>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7535.107213886157!2d72.96108!3d19.21469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdafed47d3335e232!2sRainart!5e0!3m2!1sen!2sin!4v1634649551923!5m2!1sen!2sin" style={{ width: "90%", borderRadius: "8px", height: "40vh" }} className="mt-2"></iframe>
                    </div>
                </div>
            </div>
            <div className="cc bg-dark p-2">
                <p className="text-light text-center">© Copyrights</p>
            </div>
        </>
    )
}

export default Footer
