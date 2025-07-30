import React from 'react'
import Oneele from './Oneele'
import Twoele from './Twoele'

const Twogrid = () => {
  return (
    <div className='md:grid md:grid-cols-5 md:gap-4 flex flex-col mx-8 mt-2 w-auto'>
        <div className='hidden md:block col-span-2 mb-3.5'>
            <Oneele/>
            {/* <div className="bg-gray-500 w-full h-134 rounded-4xl" id="map"></div> */}
        </div>
        <div className='md:col-span-3 mb-3.5 w-full'>
            <Twoele/>
        </div>
    </div>
  )
}

export default Twogrid