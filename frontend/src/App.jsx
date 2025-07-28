import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Searchresult from './pages/Searchresult';
import BaseLayout from "./layouts/BaseLayout"
import Beachdetail from './pages/Beachdetail';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path='search' element={<Searchresult/>} />
        <Route path='beach' element={<Beachdetail/>} />
      </Route>
    )
  );

  return (
    < RouterProvider router={router} />
  )
}

export default App