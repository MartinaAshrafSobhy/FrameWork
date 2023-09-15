import React from 'react'
import avatar from './avataaars.png'

export default function Home() {
  return (
    <>
    <div className='bgColor text-center text-white py-4'>  
     <div className='py-5'>
       <img src={avatar}></img>
       <h2 className="text-uppercase mb-3 mt-4 fs-1 fw-bolder">start Framework</h2>
       <div className="d-flex align-items-center justify-content-center my-3">
         <div className="line me-3 bg-white"></div>
         <i className="fa-solid fa-star"></i>
         <div className="line ms-3 bg-white"></div>
       </div>
       <div>Graphic Artist - Web Designer - Illustrator</div>
     </div>
    </div>
    </>
  )
}
