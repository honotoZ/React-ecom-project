import React from 'react'
import Navbar from '../Pages/Navbar'
import Hero from './Hero'
import LatestCollection from './LatestCollection'
import Bestseller from './Bestseller'
import Ourpolicies from './Ourpolicies'
import Footer from '../Pages/Footer'
import Subscribe from './Subscribe'

function Home() {
    return (
        <>
            <Hero/>
            <LatestCollection/>
            <Bestseller/>
            <Ourpolicies/>
            <Subscribe/>
        </>
    )
}

export default Home