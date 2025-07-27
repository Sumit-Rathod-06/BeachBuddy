import React from 'react'
import Searchbar from "../components/Searchbar"
import Twogrid from "../components/Twogrid"

const Searchresult = () => {
  return (
    <div className='bg-slate-200 font-(family-name:--font-poppins) md:mt-14'>
        <Searchbar/>
        <Twogrid/>
    </div>
  )
}

export default Searchresult