import React from 'react'
import Twoelecard from './Twoelecard'

const Twoele = () => {
  return (
    <div className='h-111 md:h-134 w-full flex flex-col justify-start items-start gap-3 md:px-3 pt-1 overflow-y-auto scrollbar-hide'>
        <Twoelecard/>
        <Twoelecard/>
        <Twoelecard/>
        <Twoelecard/>
    </div>
  )
}

export default Twoele