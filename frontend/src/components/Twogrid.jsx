import React from 'react'
import Oneele from './Oneele'
import Twoele from './Twoele'

const Twogrid = () => {
  return (
    <div className='grid grid-cols-5 gap-4 mx-8 mt-2'>
        <div className='col-span-2 mb-3.5'>
            <Oneele/>
        </div>
        <div className='col-span-3 mb-3.5'>
            <Twoele/>
        </div>
    </div>
  )
}

export default Twogrid