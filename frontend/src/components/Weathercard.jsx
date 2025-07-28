import React from 'react'
import { Thermometer,Wind,Droplets } from 'lucide-react'

const Weathercard = () => {
  return (
    <div className='flex justify-between items-center w-full bg-slate-200 rounded-xl py-2 px-3'>
        <div>
            <p className='text-lg'>6 PM</p>
        </div>
        <div className='flex justify-start items-center gap-3'>
            <div className='flex items-center justify-start gap-1'>
                <Thermometer className='text-orange-500'/>
                <p className='text-md text-slate-700'>28^C</p>
            </div>
            <div className='flex items-center justify-start gap-1'>
                <Droplets className='text-blue-500'/>
                <p className='text-md text-slate-700'>10%</p>
            </div>
            <div className='flex items-center justify-start gap-1'>
                <Wind className='text-gray-500'/>
                <p className='text-md text-slate-700'>18km/h</p>
            </div>
        </div>
    </div>
  )
}

export default Weathercard