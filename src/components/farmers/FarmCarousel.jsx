import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FarmCarousel = () => {
    return (
        <div className='farmCarousel'>
            <Carousel>
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
            </Carousel>
        </div>
    )
}

export default FarmCarousel