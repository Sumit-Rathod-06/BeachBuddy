import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import BaseLayout from "./layouts/BaseLayout"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return (
    < RouterProvider router={router} />
  )
}

export default App