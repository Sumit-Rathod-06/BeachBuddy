import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hamburger from '../components/Hamburger';    

const BaseLayout = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default BaseLayout