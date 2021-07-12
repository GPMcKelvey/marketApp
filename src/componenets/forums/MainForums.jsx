import React from 'react'
import { Card, Col, Row, CardGroup, Button} from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import { MdSearch } from 'react-icons/md'

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
    <Pagination style={{marginLeft: '50vw', marginTop: '2rem', marginBottom: '2rem'}}>{items}</Pagination>
  </div>
);



const MainForums = () => {
        return (
        <div>
            <Row>
                <Col>
                    {paginationBasic}
                </Col>
                <Col>
                    <MdSearch style={{fontSize: '3rem'}} />
                    <input style={{marginTop: '2rem', width: '22.75vw'}} placeholder="Search Forums"></input>
                </Col>
            </Row>
            <Row>
                <CardGroup>
                    <Col></Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem', marginLeft: '2.5rem'}}>
                        <Card bg={'success'} style={{ width: '15vw', height: '15rem'}}>
                            <Card.Img style={{ height: '10rem', width: '10rem', marginLeft: '25%', marginTop: '2.5rem' }} variant="top" src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon.png"></Card.Img>
                        </Card>
                    </Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem'}}>
                        <Card bg={'success'} style={{ width: '75vw', height: '15rem'}}>
                            <Card.Header as="h1" style={{height: '5rem'}}>Who has the best Lettuce?</Card.Header>
                            <Card.Body>
                                <Card.Title>Joseph Tonczak</Card.Title>
                                <Card.Title>I've been wondering who has the best Lettuce? Can anyone recommend any farmers market for it? Thanks!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
            <Row>
                <CardGroup>
                    <Col></Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem', marginLeft: '2.5rem'}}>
                        <Card bg={'success'} style={{ width: '15vw', height: '8rem'}}>
                            <Card.Img style={{ height: '5rem', width: '5rem', marginLeft: '35%', marginTop: '1.5rem' }} variant="top" src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon.png"></Card.Img>
                        </Card>
                    </Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem'}}>
                        <Card bg={'success'} style={{ width: '75vw', height: '8rem'}}>
                            <Card.Body>
                                <Card.Title>Jillian Burley</Card.Title>
                                <Card.Title>I always get my lettuce from Green Farms! Their lettuce always is the most crisp!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
            <Row>
                <CardGroup>
                    <Col></Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem', marginLeft: '2.5rem'}}>
                        <Card bg={'success'} style={{ width: '15vw', height: '8rem'}}>
                            <Card.Img style={{ height: '5rem', width: '5rem', marginLeft: '35%', marginTop: '1.5rem' }} variant="top" src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon.png"></Card.Img>
                        </Card>
                    </Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem'}}>
                        <Card bg={'success'} style={{ width: '75vw', height: '8rem'}}>
                            <Card.Body>
                                <Card.Title>Joseph Tonczak</Card.Title>
                                <Card.Title>Thanks! I'll check them out!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
            <Row>
                <CardGroup>
                    <Col></Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem', marginLeft: '2.5rem'}}>
                        <Card bg={'success'} style={{ width: '15vw', height: '8rem'}}>
                            <Card.Img style={{ height: '5rem', width: '5rem', marginLeft: '35%', marginTop: '1.5rem' }} variant="top" src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon.png"></Card.Img>
                        </Card>
                    </Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem'}}>
                        <Card bg={'success'} style={{ width: '75vw', height: '8rem'}}>
                            <Card.Body>
                                <input style={{marginTop: '2rem', width: '75%', textAlign: 'center'}} type="text" placeholder="Enter your comment"/>
                                <Button style={{marginLeft: '1rem', marginTop: '-.40rem'}} variant="primary" size="lg">Submit</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
            <Row style={{marginTop: '5rem'}}>
                <CardGroup>
                    <Col></Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem', marginLeft: '2.5rem'}}>
                        <Card bg={'success'} style={{ width: '15vw', height: '15rem'}}>
                            <Card.Img style={{ height: '10rem', width: '10rem', marginLeft: '25%', marginTop: '2.5rem' }} variant="top" src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon.png"></Card.Img>
                        </Card>
                    </Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem'}}>
                        <Card bg={'success'} style={{ width: '75vw', height: '15rem'}}>
                            <Card.Header as="h1" style={{height: '5rem'}}>I want to get into micro farming in my backyard.</Card.Header>
                            <Card.Body>
                                <Card.Title>Priya Singh</Card.Title>
                                <Card.Title>I was wondering if anyone or a farm could give me advice on getting started? I'd love to take a class or workshop if anyone knows of any around town?</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
            <Row>
                <CardGroup>
                    <Col></Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem', marginLeft: '2.5rem'}}>
                        <Card bg={'success'} style={{ width: '15vw', height: '8rem'}}>
                            <Card.Img style={{ height: '5rem', width: '5rem', marginLeft: '35%', marginTop: '1.5rem' }} variant="top" src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon.png"></Card.Img>
                        </Card>
                    </Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem'}}>
                        <Card bg={'success'} style={{ width: '75vw', height: '8rem'}}>
                            <Card.Body>
                                <Card.Title>Samwise Gamgee</Card.Title>
                                <Card.Title>I think Shire Farms hosts a class on getting into farming in August? You should check their events.</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
            <Row>
                <CardGroup>
                    <Col></Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem', marginLeft: '2.5rem'}}>
                        <Card bg={'success'} style={{ width: '15vw', height: '8rem'}}>
                            <Card.Img style={{ height: '5rem', width: '5rem', marginLeft: '35%', marginTop: '1.5rem' }} variant="top" src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon.png"></Card.Img>
                        </Card>
                    </Col>
                    <Col style={{paddingRight: '0rem', paddingLeft: '0rem'}}>
                        <Card bg={'success'} style={{ width: '75vw', height: '8rem'}}>
                            <Card.Body>
                                <input style={{marginTop: '2rem', width: '75%', textAlign: 'center'}} type="text" placeholder="Enter your comment"/>
                                <Button style={{marginLeft: '1rem', marginTop: '-.40rem'}} variant="primary" size="lg">Submit</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
        </div>
    )
}

export default MainForums