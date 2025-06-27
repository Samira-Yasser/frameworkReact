import React from 'react'

export default function About() {
  return (
  <div className="page vh-100 text-white d-flex justify-content-center align-items-center">
    <div className="container w-75">
      <div className='text-center mb-5'>
        <h2 className='fs-1 fw-bold text-uppercase'>about component</h2>
        <span className='icon'><i class="fa-solid fa-star text-white position-relative"></i></span>
      </div>

      <div>
        <div className="row row-cols-2">
          <div className="col">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>

          <div className="col">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
