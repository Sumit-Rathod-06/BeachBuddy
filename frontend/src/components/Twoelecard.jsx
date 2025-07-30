import React from 'react'
import Beachimg from '../assets/Beachimg.jpg'
import {MapPin,Shield,User,Sunrise,Sunset, MoveRight} from 'lucide-react'

const Twoelecard = ({name,address,description,mainImageURL}) => {

  return (
    <div className='flex md:flex-row flex-col items-start justify-start gap-3 bg-slate-300 w-full p-4 rounded-4xl hover:bg-slate-400 hover:scale-103 transform transition-transform duration-300'>
        <div className='w-full h-auto md:w-50 md:h-40 overflow-hidden rounded-3xl'>
            <img src={Beachimg} alt="beach-img" className='w-full h-full'/>
        </div>
        <div className='flex flex-col justify-start items-start gap-3 w-full'>
          <div className='flex w-full justify-between items-center'>
            <div className='flex flex-col'>
              <h4 className='text-lg font-semibold'>{name}</h4>
              <div className='flex gap-1'>
                <MapPin/>
                <p className='w-full'>{address}</p>
              </div>
            </div>
            <div className='hidden md:flex mr-10 justify-start items-start gap-2 text-blue-400 hover:text-blue-600 cursor-pointer'>
              <button className='cursor-pointer '>View</button>
              <MoveRight/>
            </div>
          </div>
          <div className='flex justify-evenly items-center w-full'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex gap-1 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-2xl'>
                  <Shield/>
                  <p>9.1</p>
                </div>
                <p>Safety Score</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex gap-1 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-2xl'>
                  <User/>
                  <p>Low</p>
                </div>
                <p>Crowd level</p>
              </div>
              <div className='hidden md:flex flex-col justify-center items-center'>
                <div className='flex gap-1 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-2xl'>
                  <Sunrise/>
                  <p>7:15 AM</p>
                </div>
                <p>Sunrise</p>
              </div>
              <div className='hidden md:flex flex-col justify-center items-center'>
                <div className='flex gap-1 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-2xl'>
                  <Sunset/>
                  <p>7:12 PM</p>
                </div>
                <p>Sunset</p>
              </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p>{description}</p>
            <button className='md:hidden bg-blue-500 p-1 rounded-2xl text-white hover:bg-blue-600'>View Details</button>
          </div>
        </div>
    </div>
  )
}

export default Twoelecard