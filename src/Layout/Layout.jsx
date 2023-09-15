import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Details from '../Components/Details/Details'

export default function Layout() {
  return (
    <>
    <Navbar/>

    <Outlet/>

    <Details/>

    <Footer/>
    
    </>
  )
}
