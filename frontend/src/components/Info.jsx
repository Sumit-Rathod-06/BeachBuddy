import React from 'react'
import Infocard from './Infocard'

const Info = () => {
  return (
    <div className="grid grid-cols-2 px-35 pb-5 gap-6">
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">Amenities and Facilities</p>
        <Infocard/>
        <Infocard/>
        <Infocard/>
        <Infocard/>
        <Infocard/>
      </div>
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">Location</p>
      </div>
    </div>
  )
}

export default Info