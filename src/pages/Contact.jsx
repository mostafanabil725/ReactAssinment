import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="contact">
      <div className="container w-50">
        <h1>CONTACT SECTION</h1>
       <div className="my-2">
        <span className="icon">
            <i class="fa-solid fa-star"></i>
        </span>
      </div>
         <div className='d-flex flex-column align-items-start'>
           <input type="text" className="w-100 mt-5" id="exampleFormControlInput1" placeholder="userName" />
           <input type="text" className="w-100 mt-5" id="exampleFormControlInput1" placeholder="userAge" />
           <input type="text" className="w-100 mt-5" id="exampleFormControlInput1" placeholder="userEmail" />
           <input type="text" className="w-100 mt-5" id="exampleFormControlInput1" placeholder="userPassword" />
           <button type="button" className="btn btn-primary mt-4">Send Message</button>
         </div>
      </div>
    </div>
    </>
  )
}
