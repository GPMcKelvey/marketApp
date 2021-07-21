import { Row, Col, Card, CardGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination'
import { MdSearch } from 'react-icons/md'
import Market from "./marketHeader"
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination style={{marginLeft: '27rem', marginTop: '.5rem', marginBottom: '1rem'}}>{items}</Pagination>
  </div>
);


const Markets = () => {
    return (
        <div>


            <div >
            <Market />
            </div>

<Row>
                <Col style={{marginLeft: '15rem'}}>
                    {paginationBasic}
                </Col>
            </Row>
            <Row>
                <Col style={{marginLeft: '25rem'}}>
                    <MdSearch style={{fontSize: '3rem'}} />
                    <input style={{marginTop: '.5rem', width: '35vw'}} placeholder="Search Markets"></input>
                </Col>
            </Row>







            <Row className="g-4">
                <CardGroup>
                    <Col>
                        <Card>

                            <Card.Img variant="top"  class="w-100, h-50" src="https://cdn1.visitindy.com/web/2014/6/5/Binford-Farmers-Market-1.jpg" />

                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>Binford Farmer's Market</Card.Title>
                                <Card.Text>
                                Over 100 vendors from across the state gather in the parking lot of Northview Christian Church every Saturday May-October to show off their unique and delicious products. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Img variant="top"  class="w-100, h-50" src="http://www.broadrippleindy.org/wp-content/uploads/2021/07/Full-Hand-vegetables-7-3-21-scaled-e1625491685855.jpg" />

                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>Broad Ripple Farmer's Market</Card.Title>
                                <Card.Text>
                                Located in one of Indianapolis' unique cultural districts, the Broad Ripple Farmers' Market welcomes more than 60 vendors offering everything from fruits, vegetables and prepared food to fresh bison meat and treats for your pets.  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Img variant="top" class="w-100, h-50"   src="https://cdn2.visitindy.com/web/2015/12/22/farmmkt.jpg" />

                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>Garfield Park Farmer's Market</Card.Title>
                                <Card.Text>
                                Garfield Park Farmers Market was formed by local food advocates out of a need for better food access.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
            <Row className="g-4">
                <CardGroup>
                    <Col>
                        <Card>

                            <Card.Img variant="top"  class="w-100, h-50" src="https://cdntaco-americantownscom.netdna-ssl.com/content-img/lexe-farmers-market-20.jpg" />

                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>Irvington Farmer's Market</Card.Title>
                                <Card.Text>
                                From June – October, Ellenberger Park near Indy’s east side features the Irvington Farmers' Market on the second Sunday of each month.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Img variant="top"  class="w-100, h-50" src="https://live.staticflickr.com/5323/8866708005_51238be00d_b.jpg" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '3rem'}}>State House Market</Card.Title>

                                <Card.Text>
                                The Indiana Statehouse and Government Center Campus houses a unique farmers’ market every Thursday beginning in June and lasting through October. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Img variant="top"   class="w-100, h-50" src="https://cdn1.visitindy.com/web/2014/6/5/Downtown-Farmers-Market-1.jpg" />

                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>The Original Farmer's Market at the Indianapolis City Market</Card.Title>
                                <Card.Text>
                                The Indianapolis City Market has been a staple in downtown Indianapolis for many years and continues to offer an opportunity for downtown employees and residents to buy farm fresh produce.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
        </div>
    )
}

export default Markets