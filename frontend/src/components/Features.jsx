import React from 'react'
import {Shield,Clock,Users} from "lucide-react"

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 my-8'>
        <h2 className='text-4xl font-semibold'>Smart Beach Planning, <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300'>Simplified!</span></h2>
        <p className='text-center text-lg text-slate-600'>Make informed decisions with real-time data and AI-powered insights for the <br /> safest, most enjoyable beach experience</p>
        <div className='flex text-center justify-center items-center gap-5 py-4'>
            <div className='flex justify-center items-center flex-col gap-3 w-100 bg-blue-50 px-6 py-8 hover:bg-blue-100 hover:shadow-2xl rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <Shield className='bg-blue-400 text-white h-13 w-13 p-2 rounded-lg'/>
                <h4 className='text-xl font-semibold mt-2'>AI Safety Score</h4>
                <p className='text-slate-500'>Real-time analysis of weather conditions, water quality and environment factors to give you instant safety rating</p>
            </div>
            <div className='flex justify-center items-center flex-col gap-3 w-100 bg-green-50 px-6 py-8 hover:bg-green-100 hover:shadow-2xl rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <Users className='bg-green-400 text-white h-13 w-13 p-2 rounded-lg'/>
                <h4 className='text-xl font-semibold mt-2'>Crowd Predictor</h4>
                <p className='text-slate-500'>Real-time analysis of weather conditions, water quality and environment factors to give you instant safety rating</p>
            </div>
            <div className='flex justify-center items-center flex-col gap-3 w-100 bg-purple-50 px-6 py-8 hover:bg-purple-100 hover:shadow-2xl rounded-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <Clock className='bg-purple-400 text-white h-13 w-13 p-2 rounded-lg'/>
                <h4 className='text-xl font-semibold mt-2'>Perfect Timing</h4>
                <p className='text-slate-500'>Real-time analysis of weather conditions, water quality and environment factors to give you instant safety rating</p>
            </div>
        </div>
    </div>
  )
}

export default Features