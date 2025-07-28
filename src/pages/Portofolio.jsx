import React, { useState } from 'react'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'

let allImgs = [img1, img2, img3, img3, img2, img1];

export default function Portofolio() {

  const [model, setModel] = useState(false);
  const [currentImg , setCurrentImg] = useState(null);
  return (
     <>
    <div className="portofolio position-relative">
      <h1>PORTOFOLIO COMPONENT</h1>
       <div className="my-2">
        <span className="icon">
            <i class="fa-solid fa-star"></i>
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-4">
            <div onClick={() => {setModel(true) ,setCurrentImg(img1)}} className="item">
              <img className='w-100 rounded' src={img1} alt="" />
              <div className="layer rounded">
                   <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div onClick={() => {setModel(true) ,setCurrentImg(img2)}}  className="item">
              <img className='w-100 rounded' src={img2} alt="" />
              <div className="layer rounded">
                   <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div onClick={() => {setModel(true) ,setCurrentImg(img3)}}  className="item">
              <img className='w-100 rounded' src={img3} alt="" />
              <div className="layer rounded">
                   <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div onClick={() => {setModel(true) ,setCurrentImg(img1)}}  className="item">
              <img className='w-100 rounded' src={img1} alt="" />
              <div className="layer rounded">
                   <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div onClick={() => {setModel(true) ,setCurrentImg(img2)}}  className="item">
              <img className='w-100 rounded' src={img2} alt="" />
              <div className="layer rounded">
                   <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div onClick={() => {setModel(true) ,setCurrentImg(img3)}}  className="item">
              <img className='w-100 rounded' src={img3} alt="" />
              <div className="layer rounded">
                   <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {model? <div onClick={() => setModel(false)} className="imgLayer position-absolute top-0 bottom-0 end-0 start-0 bg-black bg-opacity-50">
          <img className='' src={currentImg} width={"38%"} alt="" />
      </div> : ""}

    </div>
    </>
  )
}
