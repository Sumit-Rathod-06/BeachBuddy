import React from 'react'
import {Car} from 'lucide-react'

const Infocard = () => {
  return (
    <div className='flex justify-between items-center bg-slate-200 rounded-2xl px-3 py-1 w-full'>
        <div className='flex items-center gap-3'>
            <Car className='text-green-600'/>
            <div>
                <p className='text-md m-0 p-0 font-medium'>Parking</p>
                <p className='text-sm text-gray-500'>$20/hour</p>
            </div>
        </div>
        <h3 className='text-sm text-green-700 bg-green-100 px-2 rounded-2xl'>Available</h3>
    </div>
  )
}

export default Infocard