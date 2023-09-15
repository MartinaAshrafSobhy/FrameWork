import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='text-center'>  
     <div className='py-5'>
       <h2 className="text-uppercase mb-3 mt-4 fs-1 fw-bolder">CONATCT SECTION</h2>
       <div className="d-flex align-items-center justify-content-center my-3">
         <div className="line me-3 bg-dark"></div>
         <i className="fa-solid fa-star"></i>
         <div className="line ms-3 bg-dark"></div>
       </div>
       <form className="w-50 p-3 mx-auto mt-5">
        
        <input type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom my-5 position-relative"/>
        <input type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom my-5 position-relative"/>
        <input type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom my-5 position-relative"/>
        <input type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom my-5 position-relative"/>
        
        <button type='button' className="btn btn-outline-dark border-0 mt-4 text-white formBg "> send Message </button>
        </form>
     </div>
    </div>
    </>
  )
}
