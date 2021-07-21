import { Col, Card, Row, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
    <Pagination style={{marginLeft: '27rem', marginTop: '.5rem', marginBottom: '1rem'}}>{items}</Pagination>
  </div>
);

const FarmCarousel = () => {
    return (
        <div className='farmCarousel'>
            {/* <Carousel>
                <Carousel.Item>
                    <img
                        src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <Link to='/GreenFarms'><h1 style={{color: 'black', fontSize: 75, backgroundColor: 'green'}}>Green Farms</h1></Link>
                        <p style={{color: 'black', fontSize: 45, backgroundColor: 'green'}}>Here at Green Farms we specialize in farming responsibly.</p>
                        <p style={{color: 'black', fontSize: 45, backgroundColor: 'green'}}>www.greenfarms.com</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        src="https://images.unsplash.com/photo-1589922585618-dfd1fcd87c28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{color: 'black', fontSize: 75, backgroundColor: 'green'}}>Smith Farms</h1>
                        <p style={{color: 'black', fontSize: 45, backgroundColor: 'green'}}>Smith Farms produces the best beets in the state.</p>
                        <p style={{color: 'black', fontSize: 45, backgroundColor: 'green'}}>www.smithfarms.com</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        src="https://images.unsplash.com/photo-1533808510407-976bfd509dc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{color: 'black', fontSize: 75, backgroundColor: 'green'}}>Happy Farms</h1>
                        <p style={{color: 'black', fontSize: 45, backgroundColor: 'green'}}>We specialize in co-op sourced farming where anyone can volunteer.</p>
                        <p style={{color: 'black', fontSize: 45, backgroundColor: 'green'}}>www.happyfarms.com</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
            <Row>
                <Col>
                    {paginationBasic}
                </Col>
            </Row>
            <Row>
                <Col style={{marginLeft: '7rem'}}>
                    <MdSearch style={{fontSize: '3rem'}} />
                    <input style={{marginTop: '.5rem', width: '35vw'}} placeholder="Search Farmers"></input>
                </Col>
            </Row>
            <Row className="g-4">
                <CardGroup>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}><Link to='/GreenFarms'>Green Farms</Link></Card.Title>
                                <Card.Text>
                                Here at Green Farms we specialize in farming responsibly.
                                www.greenfarms.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589922585618-dfd1fcd87c28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>Smith Farms</Card.Title>
                                <Card.Text>
                                Smith Farms produces the best beets in the state.
                                www.smithfarms.com
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
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1533808510407-976bfd509dc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>Happy Farms</Card.Title>
                                <Card.Text>
                                We specialize in co-op sourced farming where anyone can volunteer.
                                www.happyfarms.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" />
                            <Card.Body>
                                <Card.Title style={{marginLeft: '2rem'}}>Figgs Farm</Card.Title>
                                <Card.Text>
                                    We have more than figgs for sale!
                                    www.figgsfarm.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardGroup>
            </Row>
        </div>
    )
}

export default FarmCarousel