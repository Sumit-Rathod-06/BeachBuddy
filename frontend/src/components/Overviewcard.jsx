import React from 'react'
import {Waves} from 'lucide-react'

const Overviewcard = () => {
  return (
    <div className='flex justify-between items-center bg-slate-200 rounded-2xl px-3 py-1'>
        <div className='flex items-center gap-3'>
            <Waves className='text-blue-600'/>
            <div>
                <p className='text-md m-0 p-0 font-medium'>Waves</p>
                <p className='text-sm text-gray-500'>Moderate Chop</p>
            </div>
        </div>
        <h3 className='text-md font-semibold'>1.2m</h3>
    </div>
  )
}

export default Overviewcard