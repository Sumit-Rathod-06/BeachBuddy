import React from 'react'

const Reviews = () => {
  return (
    <div className="grid grid-cols-2 px-35 pb-5 gap-6">
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">24-Hour Forecast</p>
      </div>
      <div className="w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">7-Day Forecast</p>
      </div>
    </div>
  )
}

export default Reviews