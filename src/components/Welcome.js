import React from 'react'
import '../index.css'

const Welcome = () => {
    return (
        <>
            <div className="welcome container-fluid  py-5 px-2 px-md-5">
                <div className="container">
                    <h2>Welcome</h2>
                    <h1 className="pb-2 fw-bold">SEVA Enterprise</h1>
                    <p className="py-1">I would like to introduce our organization SEVA Enterprises (Facility Management & Services) that specializes in the business of providing all types of Housekeeping services in various sectors.
                        <br />

                        SEVA Enterprises (Facility Management & Services) holding 5 years of service experience in the hygiene sector for schools, colleges, corporate & hospitals. We officially Initiated in Nov 2018 as the provider of different sorts of washroom products and services. Currently, we are serving housekeeping material, housekeeping staff, and cleaning services for commercial offices.</p>

                    <button class="uk-button uk-button-danger mt-3">Read More</button>
                </div>
            </div>
        </>
    )
}

export default Welcome
