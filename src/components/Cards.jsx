import React, {Component} from "react"
import Home from "./HomePage";
// import CarouselCotainer from "./CarouselContainer";

import corn from "../images/farmfest.jpeg"
import farm from "../images/farming1.jpeg"
import farm2 from "../images/farming3.jpeg"
import field from "../images/a.jpeg"
import veg from "../images/b.jpeg"
import vegg from "../images/c.jpeg"
import Carousel from "./Carousel"
import "./Slider.css";
import ImageSlider from "./ImageSlider";
import {SliderData} from "./SliderData";
import Events from "./Events"
import Corn2 from "../images/corn2.jpeg"
import Market from "../images/market2.jpeg"
import Farmhero from "../images/farmgif.gif"
import Try from "../images/Try.png"


class Cards extends Component{
    render(){
        return(


          <div>

            <div className= "hero">
             
                <img src = {Farmhero} alt="b"/>
           

            <div class = "caption">
                <h1>Greener Together</h1>
                <p>Join the Community Today</p>
            </div>

              </div>




              <div className= "News">
                  Daily News
              </div>



            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">
    
                <div className="col-md-4"> 
                <Home imgsrc={corn} title="The Corn Harvest" information="After a hiatus in 2020 due to Covid, farmers and the local community are ready for the 2021 Autumn Harvest Festival "/>
                </div>
                <div className="col-md-4">
                    <Home imgsrc={farm} title="Labor Demands in farming" information="We look inside a local community farm in Indiana and see how it operates on a daily basis"/>
                     </div>
                <div className="col-md-4">
                <Home imgsrc={farm2} title="Climate and Crop Growth" information="New weather changes are adding challenges to many farmers across the Nation "/>
                </div>
                

                </div>

            </div>

            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">
    
                <div className="col-md-4"> 
                <Home imgsrc={field} title="The Corn Harvest" information="After a hiatus in 2020 due to Covid, farmers and the local community are ready for the 2021 Autumn Harvest Festival "/>
                </div>
                <div className="col-md-4">
                    <Home imgsrc={veg} title="Labor Demands in farming" information="We look inside a local community farm in Indiana and see how it operates on a daily basis"/>
                     </div>
                <div className="col-md-4">
                <Home imgsrc={vegg} title="Climate and Crop Growth" information="New weather changes are adding challenges to many farmers across the Nation "/>
                </div>
                

                </div>

            </div>



            <div className="Calender">
              Upcoming Events
            </div>

            <div className= "container-fluid d-flex justify-content-center ">
                <div className="row">
    
                <div className="col-md-4 font"> 
                <Events imgsrc= {Market}
                Title ="July"

                />
                </div>
                
                <div className="col-md-4">
                    <Events imgsrc= {Corn2}
                     Title ="September "
                     />
                     </div>
                <div className="col-md-4">
                <Events imgsrc= {corn}
                     Title ="October"
                     />
                </div>

                </div>

            </div>




           



<div className="Monthly">
              Pictures of the Month
            </div>



<div>
    <ImageSlider slides={SliderData} />
</div>


            </div>


        )
    }
}

export default Cards;