import React from 'react'

export default function Footer() {
  return (
    <>
    <div className=" bg-dark text-white text-center pt-4">
      <div className="container p-5">
        <div className="row row-cols-3 text-white text-center">
          <div className="col">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col">
            <h3>AROUND THE WEB</h3>
            <div>
              <ul className="list-unstyled d-flex justify-content-center gap-3">
                <li className="border rounded-circle py-1 px-2"><i className="fa-brands fa-facebook" /></li>
                <li className="border rounded-circle py-1 px-2"><i className="fa-brands fa-twitter" /></li>
                <li className="border rounded-circle py-1 px-2"><i className="fa-brands fa-linkedin" /></li>
                <li className="border rounded-circle py-1 px-2"><i className="fa-solid fa-globe" /></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <h3>ABOUT FREELANCER</h3>
            <span>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
          </div>
        </div>
      </div>

      <div className="bg-black p-4 text-center text-white m-0">
        <span>Copyright © Your Website 2021</span>
      </div>
    </div>

    </>
    
  )
}
