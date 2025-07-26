import React from 'react'
import {MapPin,Clock,Sun,Wind,Waves} from "lucide-react"
import Beachimg from "../assets/Beachimg.jpg"

const Beachcard = () => {
  return (
    <div className='flex flex-col justify-evenly bg-gray-300 overflow-hidden rounded-2xl text-slate-900 hover:bg-slate-300 hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:text-black'>
        <div className='w-100'> 
            <img src={Beachimg} alt="beach-img" className='h-50 w-full'/>
        </div>
        <div className='m-3'>
            <h4 className='text-xl font-semibold text-black'>Juhu Beach</h4>
            <div className='flex items-center gap-1'>
                <MapPin className='h-5 w-5'/>
                <p>Mumbai, Maharahtra</p>
            </div>
        </div>
        <div className='flex justify-evenly items-center m-2 bg-gray-400 rounded-xl mx-6 py-2'>
            <div className='flex flex-col justify-center items-center'>
                <Sun className='text-amber-300'/>
                <p>28C</p>
                <p>Temp</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Wind className='text-blue-300'/>
                <p>12 km/h</p>
                <p>Wind</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Waves className='text-blue-600'/>
                <p>1.2m</p>
                <p>Waves</p>
            </div>
        </div>
        <div className='m-3 flex flex-col gap-1'>
            <div className='flex justify-between'>
                <p>Crowd Level</p>
                <p>Moderate</p>
            </div>
            <div className='flex justify-between'>
                <p>Best Time</p>
                <div className='flex justify-center items-center gap-1'>
                    <Clock className='h-4 w-4'/>
                    <p>6:00AM - 9:00AM</p>
                </div>
            </div>
        </div>
        <button className='mb-3 mx-3 bg-blue-400 rounded-xl p-2 text-white font-semibold hover:bg-blue-600 cursor-pointer'>View Details</button>
    </div>
  )
}

export default Beachcard