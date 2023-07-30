import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Welcome from '../components/Welcome'
import Works from '../components/Works'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import ServicesCard from '../components/ServicesCard'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Welcome />
            <Works />
            <ServicesCard />
            <Footer />
            <BackToTop />
        </>
    )
}

export default Homepage
