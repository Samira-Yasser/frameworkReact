import React from 'react'
import avt from '../assets/img/avataaars.svg'

export default function Home() {
  return (
    <div className="page vh-100 d-flex flex-column justify-content-center align-items-center text-white">
      <div>
        <img className='w-100' src={avt} alt="man-img"/>
      </div>

      <div className='text-center mb-3'>
        <h2 className='fs-1 fw-bold'>START FRAMEWORK</h2> 
        <span><i class="fa-solid fa-star text-white position-relative"></i></span>
      </div>

      <div className='fs-6 text-center'>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

    </div>
  )
}
