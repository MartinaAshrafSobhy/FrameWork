import React from 'react'

export default function Details() {
  return (
    <>
   <div className='nav-color fixed-bottom-bottom p-3 d-flex justify-content-center text-white text-center'>
   <div className='m-5 mx-auto'>
        <h2>LOCATION</h2>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div className='m-5 mx-auto'>
        <h2>AROUND THE WEB</h2>
        <div className='mt-3 d-flex justify-content-center'>
            <div className='border border-2 border-light rounded-circle crcl me-2'><i className='fa fa-brands fa-facebook'></i></div>
            <div className='border border-2 border-light rounded-circle crcl me-2'><i className='fa fa-brands fa-twitter'></i></div>
            <div className='border border-2 border-light rounded-circle crcl me-2'><i className='fa fa-brands fa-linkedin-in'></i></div>
            <div className='border border-2 border-light rounded-circle crcl'><i className='fa fa-fa-solid fa-globe'></i></div>
        </div>
    </div>
    <div className='m-5 w-25'>
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
   </div>
    </>
  )
}
