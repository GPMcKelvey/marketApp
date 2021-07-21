

import React, {Component} from "react"
import { Row, Col, Card, CardGroup } from 'react-bootstrap'





const FarmV = () => {
    return (


    <div>



<div style ={{marginTop: "10px", fontSize: "80px", marginLeft: "800px"}}>
    July
</div>
<div style ={{marginTop: "10px", fontSize: "20px", marginLeft: "800px"}}>

</div>
<Row className="g-4">
                <CardGroup>
                    <Col>
                        <Card style={{marginLeft: '25rem'}}>
                            <Card.Img variant="top"  class="w-100, h-50" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem',  marginTop:'-30px'}} >Green Farms: Weekends</Card.Title>
                                <Card.Text style={{ marginTop:'-20px', marginLeft: '3px',}} >
                                Saturday & Sunday 11AM-4PM
                                </Card.Text>
                                <Card.Text>
                                Green Farms are need in assitance with harvesting for the Autumn season. Volunteers will aid in tilling and planting crops.
                                </Card.Text>
                                <a href="#" style={{ marginTop: '10px',}} className="btn btn-outline-success" > Volunteer Here: +20 Points  </a>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col>
                        <Card>
                            <Card.Img variant="top"  class="w-100, h-50" src="https://www.aroundindy.com/images2014/original-farmers-market-july-24-2014.jpg" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem',  marginTop:'-30px'}}>Smith Farms: Every Wednesday</Card.Title>
                                <Card.Text style={{ marginTop:'-20px', marginLeft: '3px',}} >
                                Wednesday 3pm-5pm
                                </Card.Text>
                                <Card.Text>
                                Volunteers will help assist in packaging and assembling the crops so that they can be distrubted to the Markets.
                                </Card.Text>
                                <a href="#" style={{ marginTop: '33px',}} className="btn btn-outline-success"> Volunteer Here +15 Points  </a>
                            </Card.Body>
                        </Card>
                    </Col>



</CardGroup>

                    </Row>






                    <Row className="g-4">
                <CardGroup>
                    <Col>
                        <Card style={{marginLeft: '25rem'}}>
                            <Card.Img variant="top"  class="w-100, h-50" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem',  marginTop:'-30px'}} >Happy Farms</Card.Title>
                                <Card.Text style={{ marginTop:'-20px', marginLeft: '3px',}} >
                                Saturday & Sunday 11AM-4PM
                                </Card.Text>
                                <Card.Text>
                                Green Farms are need in assitance with harvesting for the Autumn season. Volunteers will aid in tilling and planting crops.
                                </Card.Text>
                                <a href="#" style={{marginLeft: '150px', marginTop: '10px',}} className="btn btn-outline-success" > Volunteer Here  </a>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col>
                        <Card>
                            <Card.Img variant="top"  class="w-100, h-50" src="https://www.aroundindy.com/images2014/original-farmers-market-july-24-2014.jpg" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem',  marginTop:'-30px'}}>S</Card.Title>
                                <Card.Text style={{ marginTop:'-20px', marginLeft: '3px',}} >
                                Wednesday 3pm-5pm
                                </Card.Text>
                                <Card.Text>
                                Volunteers will help assist 
                                </Card.Text>
                                <a href="#" style={{marginLeft: '150px', marginTop: '10px',}} className="btn btn-outline-success"> Volunteer Here  </a>
                            </Card.Body>
                        </Card>
                    </Col>



</CardGroup>

                    </Row>














                    </div>


    )

}

export default FarmV