import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Header from './Header'

import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'

const Body = () => {
  // dispatch is used to disptch an action . 
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }
    ]);

    

  return (
    <div>
      
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body