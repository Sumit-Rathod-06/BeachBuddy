import React from 'react'

const Reviews = () => {
  return (
    <div className="grid grid-cols-6 px-35 pb-5 gap-6">
      <div className="col-span-2 w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">Overall Rating</p>
      </div>
      <div className="col-span-4 w-full h-105 bg-white rounded-3xl p-5 flex flex-col justify-start items-start gap-4 overflow-y-auto scrollbar-hide">
        <p className="text-2xl font-semibold">Recent Reviews</p>
      </div>
    </div>
  )
}

export default Reviews