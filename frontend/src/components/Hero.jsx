import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-full bg-gradient-to-r from-blue-700 to-blue-800  p-15 flex flex-col justify-center items-center gap-5 text-white'>
        <h2 className='text-center text-7xl font-semibold'>Your Perfect Beach Day,<br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400'>Predicted!</span></h2>
        <p className='text-center text-2xl'>AI-powered beach insights with real-time safety scores, crowd <br /> predictions, and perfect timing recommendations.</p>
        <div className='text-center relative'>
            <input type="text" placeholder='Search for a beach...' className='w-150 h-12 bg-white text-slate-500 rounded-xl p-3'/>
            <button className='bg-orange-600 hover:bg-orange-800 cursor-pointer absolute left-125 right-0 top-1 w-24 h-10 rounded-xl'>Search</button>
        </div>
        <div className='absolute left-20 top-10 h-20 w-20 bg-blue-600 rounded-full'></div>
        <div className='absolute left-45 top-70 h-10 w-10 bg-blue-500 rounded-full'></div>
        <div className='absolute left-300 top-22 h-15 w-15 bg-blue-500 rounded-full'></div>
    </div>
  )
}

export default Hero