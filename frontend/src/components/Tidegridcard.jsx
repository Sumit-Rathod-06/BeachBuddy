import React from 'react'
import {Waves} from 'lucide-react'

const Tidegridcard = () => {
  return (
    <div className='bg-blue-100 flex flex-col justify-center items-center w-full h-full rounded-xl'>
        <Waves className='text-blue-600'/>
        <p className='mt-2 font-semibold'>1.2m</p>
        <p className='text-slate-600 text-sm'>Wave Height</p>
    </div>
  )
}

export default Tidegridcard