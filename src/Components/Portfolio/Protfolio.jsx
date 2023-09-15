import React from 'react'
import one from './poert1.png'
import two from './port2.png'
import three from './port3.png'

export default function Protfolio() {
  return (
    <>
    <div className='text-center'>  
     <div className='py-5'>
       <h2 className="text-uppercase mb-3 mt-4 fs-1 fw-bolder">PORTFOLIO COMPONENT</h2>
       <div className="d-flex align-items-center justify-content-center my-3">
         <div className="line me-3 bg-dark"></div>
         <i className="fa-solid fa-star"></i>
         <div className="line ms-3 bg-dark"></div>
       </div>
       <div className='container'>
        <div className="row my-4">
          <div className="col-md-4">
            <img src={one} className='w-100 rounded-4'></img>
          </div>
          <div className="col-md-4">
            <img src={two} className='w-100 rounded-4'></img>
          </div>
          <div className="col-md-4">
            <img src={three} className='w-100 rounded-4'></img>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <img src={one} className='w-100 rounded-4'></img>
          </div>
          <div className="col-md-4">
            <img src={two} className='w-100 rounded-4'></img>
          </div>
          <div className="col-md-4">
            <img src={three} className='w-100 rounded-4'></img>
          </div>
        </div>
       </div>
     </div>
    </div>
    </>
  )
}
