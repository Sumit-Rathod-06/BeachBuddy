import React from 'react'
import Twoelecard from './Twoelecard'
import { useContext } from 'react'
import { dataContext } from '../pages/Searchresult'

const Twoele = () => {

  const data = useContext(dataContext);
  console.log("Two Elecard: ",data);

  return (
    <div className='h-111 md:h-134 w-full flex flex-col justify-start items-start gap-3 md:px-3 pt-1 overflow-y-auto scrollbar-hide'>
        {data.map((item,index) => (
          <Twoelecard key={index} name={item.name} address={item.address} description={item.description} mainImageURL={item.mainImageURL}/>
        ))}
    </div>
  )
}

export default Twoele