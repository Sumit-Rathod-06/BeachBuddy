import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Searchresult from './pages/Searchresult';
import BaseLayout from "./layouts/BaseLayout"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path='search' element={<Searchresult/>} />
      </Route>
    )
  );

  return (
    < RouterProvider router={router} />
  )
}

export default App