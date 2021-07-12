import React from 'react'
import './HomePage.css'

// import Farming from "./Video/Farming.mp4"


export const Events = (props) => {
    return (
 
      <div className = "card text-center ">
         
        
           
          <img src={props.imgsrc} alt="image1" className = "card-img-top opacity-100 h-50"/>
        

          <div className= "layer">
          <h1 class="text-center text-justify fs-2"> {props.Title}</h1>
            </div>
      

          <div className = "e">
          <a href="#" className="btn btn-outline-success"> View Event Schedule for this Month </a>
            </div>



      </div>




    )
}


export default Events