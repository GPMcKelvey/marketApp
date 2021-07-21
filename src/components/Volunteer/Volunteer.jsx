
import React, {Component, Image} from "react"
import "./Volun.css"
import { Row, Col, Card, CardGroup } from 'react-bootstrap'
import history from "../../Helpers/history"
// import ProgressBar from "./ProgressBar"
import Farmhero from "../../images/p-bar.png"

class Volun extends Component{
    render(){
        return(


<div>




<div style ={{marginTop: "100px", fontSize: "80px", marginLeft: "530px"}}>
    Volunteer Today
    
</div>

<div style ={{marginTop: "20px", fontSize: "40px", marginLeft: "670px"}}>
    Your Volunteer Points
</div>



<div style ={{ marginLeft: "530px", marginTop: "-12px"}}>
<img src = {Farmhero} alt="b"/>
</div>
<div style ={{ marginLeft: "750px", fontSize: "30px", marginTop: "-15px", alignContent: "row",}}>
   Your Level: Tier 3

</div>




{/* <Image
        
          source={{uri:
           
            "https://i1.wp.com/css-tricks.com/wp-content/uploads/2013/08/progress-bar-container.png?w=700"

          }}
        /> */}

{/* <div>
<Progressbar bgcolor="orange" progress='30'  height={30} />
</div>
    */}

<Row className="g-4">
                <CardGroup>
                    <Col>
                        <Card style={{marginLeft: '25rem'}}>
                            <Card.Img variant="top"  class="w-100, h-50" src="https://www.theindiaforum.in/sites/default/files/field/image/2021/05/28/ramkumar-radhakrishnan-wikimedia-1622193304.jpeg" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem',  marginTop:'-30px'}} >Farms</Card.Title>
                                <Card.Text>
                                Volunteers can assist with a variety of farm tasks such as planting, harvesting, and weeding. There are also site projects for those with carpentry and electrical skills.
                                </Card.Text>
                                <a href="#" style={{marginLeft: '150px', marginTop: '2rem',}} className="btn btn-outline-success" onClick={() => history.push('/FarmV')}> Volunteer Here  </a>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col>
                        <Card>
                            <Card.Img variant="top"  class="w-100, h-50" src="https://www.aroundindy.com/images2014/original-farmers-market-july-24-2014.jpg" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem',  marginTop:'-30px'}}>Markets</Card.Title>
                                <Card.Text>
                                Volunteer opportunities at our Farmers’ Markets include market setup, market tear-down, market ambassadors, parking management, Zero Waste, produce inventory, photography, information booth and customer counters.
                                </Card.Text>
                                <a href="#" style={{marginLeft: '150px', marginTop: '14px',}} className="btn btn-outline-success"> Volunteer Here  </a>
                            </Card.Body>
                        </Card>
                    </Col>



</CardGroup>

                    </Row>




<div style ={{marginTop: "400px"}}>
    
</div>



</div>

        )

    }

}

export default Volun;