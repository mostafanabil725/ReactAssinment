


import Home from "./pages/Home"
import About from "./pages/About"
import Portofolio from "./pages/Portofolio"
import Contact from "./pages/Contact"
import React from "react"
import Navbar from "./Navbar"

import Layout from "./Layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"



function App() {

  const router = createBrowserRouter([
   {path: "", element: <Layout />, children:[
     {path: "", element: <Home />},
     {path: 'contact', element: <Contact />},
     {path: 'about', element: <About />},
     {path: 'portofolio', element: <Portofolio />}

   ]}
  ])
  

  return <>
   <RouterProvider router={router}> </RouterProvider >
  </>
    
  
}

export default App
