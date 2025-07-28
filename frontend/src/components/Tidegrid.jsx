import React from 'react'
import Tidegridcard from './Tidegridcard'

const Tidegrid = () => {
  return (
    <div className='grid grid-cols-2 gap-3 w-full h-50'>
        <Tidegridcard/>
        <Tidegridcard/>
        <Tidegridcard/>
        <Tidegridcard/>
    </div>
  )
}

export default Tidegrid