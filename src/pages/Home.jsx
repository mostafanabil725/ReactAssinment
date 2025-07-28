import React , {useState} from "react";
import img from '../assets/avataaars.svg'
 
 export default function Home(){

    return <>
    <div className="home">
      <img  src={img} width={"250px"} alt="" />
      <h1 className="fs-1">START FRAMEWORK</h1>
      <div className="my-2">
        <span className="icon">
            <i class="fa-solid fa-star"></i>
        </span>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
}
