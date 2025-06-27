import React from 'react'

export default function Contact() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className='text-center mb-5'>
          <h2 className='fs-1 fw-bold text-uppercase'>conatct section</h2>
          <span className='icon3'><i class=" fa-solid fa-star text-black position-relative"></i></span>
        </div>

        <div>
          <div className='w-50 m-auto'>
            <div className="form-floating mb-3">
              <input type="text" className="form-control w-100 border-start-0 border-end-0 border-top-0" id="floatingInput" placeholder="name@example.com" /> 
              <label htmlFor="floatingInput">userName</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control w-100 border-start-0 border-end-0 border-top-0" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">userAge</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control w-100 border-start-0 border-end-0 border-top-0" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">userEmail</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control w-100 border-start-0 border-end-0 border-top-0" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">userPassword</label>
            </div>
            <button className='page mt-4 text-white p-2 rounded-2 border-0 fs-6 fw-medium'>send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}
