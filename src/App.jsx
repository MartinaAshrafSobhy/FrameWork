import React from 'react'
import './App.css';
import Layout from './Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import Protfolio from './Components/Portfolio/Protfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';


function App() {

  const routers = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {path:'',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Protfolio/>},
      {path:'contact',element:<Contact/>}
    ]}
  ])

  return <>
  
  <RouterProvider router={routers} />

  </>
}

export default App;