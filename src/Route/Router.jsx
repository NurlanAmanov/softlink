
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../components/main/Home'
import OurService from '../components/pages/OurService'

function Router() {
  return (
    <>
    <Routes>
                <Route path='/' element={<Layout />} >
                <Route path='/' element={<Home/>} />
<Route path="/our" element={<OurService />} />
                </Route>
            </Routes>

    
    </>
  )
}

export default Router