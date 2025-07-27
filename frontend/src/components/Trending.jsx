import React from 'react'
import Beachcard from './Beachcard'

const Trending = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-8 md:mx-0 mx-3'>
        <div className='flex flex-col justify-center items-center mb-5 text-center'>
            <h4 className='text-4xl font-semibold'>Trending on <span className='text-transparent bg-clip-text bg-orange-600'>Konkan Coast</span></h4>
            <p className='text-slate-600 text-lg mt-1'>Discover the most popular beaches with real-time safety scores and crowd predictions.</p>
        </div>
        <div className='mt-3 flex md:flex-row flex-col justify-center items-center gap-5 mx-10 my-10'>
            <Beachcard/>
            <Beachcard/>
            <Beachcard/>
        </div>
    </div>
  )
}

export default Trending