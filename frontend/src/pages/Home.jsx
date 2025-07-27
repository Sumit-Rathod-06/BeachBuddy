import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Ctoa from '../components/Ctoa'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className='bg-slate-200 font-(family-name:--font-poppins) md:mt-14'>
      <Hero/>
      <Features/>
      <Trending/>
      <Ctoa/>
      <Footer/>
    </div>
  )
}

export default Home