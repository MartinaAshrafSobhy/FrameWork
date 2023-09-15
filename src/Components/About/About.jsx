import React from 'react'

export default function About() {
  return (
    <>
    <div className='bgColor text-center text-white py-5'>  
     <div className='py-5 w-75 mx-auto'>
       <h2 className="text-uppercase mb-3 mt-4 fs-1 fw-bolder">ABOUT COMPONENT</h2>
       <div className="d-flex align-items-center justify-content-center my-3">
         <div className="line me-3 bg-white"></div>
         <i className="fa-solid fa-star"></i>
         <div className="line ms-3 bg-white"></div>
       </div>
       <div className='d-flex text-start'>
        <div className='px-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
        <div className='px-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
       </div>
     </div>
    </div>
    </>
  )
}
