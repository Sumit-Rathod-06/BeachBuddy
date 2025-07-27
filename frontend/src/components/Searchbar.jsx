import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex justify-center items-center py-5'>
        <input type="text" placeholder='Search perfect beach for you...' className='w-full h-10 ml-20 mr-5 bg-gray-500 rounded-xl p-4 text-white focus:outline focus:outline-black' />
        <button className='bg-blue-500 rounded-xl p-2 text-white mr-40 cursor-pointer hover:bg-blue-600'>Search</button>
    </div>
  )
}

export default Searchbar