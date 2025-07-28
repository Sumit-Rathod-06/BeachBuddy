import React from 'react'
import Beachtitle from '../components/Beachtitle'
import Beachnav from '../components/Beachnav'
import Overview from '../components/Overview'
import Weather from '../components/Weather'
import Tides from '../components/Tides'
import Reviews from '../components/Reviews'
import Info from '../components/Info'

const Beachdetail = () => {
  return (
    <div className='bg-slate-200 font-(family-name:--font-poppins) md:mt-14'>
        <Beachtitle/>
        <Beachnav/>
        <Reviews/>
        {/*<Overview/>
        <Weather/>
        <Tides />
        <Reviews/>
        <Info/>*/}
    </div>
  )
}

export default Beachdetail