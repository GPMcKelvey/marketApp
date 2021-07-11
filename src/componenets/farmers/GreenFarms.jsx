import { Col, Row, Card, CardGroup } from 'react-bootstrap'
import FarmersHeader from './FarmersHeader'

const GreenFarms = () => {
    return (
        <div className='greenFarms'>
            <FarmersHeader />
                <CardGroup>
                <Col>
                    <Card style={{ width: '45vw', height: '50rem', marginLeft: '5%'}}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                        <Card.Text style={{marginTop: '5rem'}}>
                            Here at green farms we specialize in farming responsibly. We take specialized green energy techniques to bring the most responsible and declicious vegetables to you!
                        </Card.Text>
                        <Card.Text>www.greenfarms.com</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '45vw', height: '50rem'}}>
                        <Card.Title style={{fontSize: '5rem'}}>Green Farms</Card.Title>
                        <Card.Text style={{fontSize: '2.5rem'}}>Our Specialty: Carrots</Card.Text>
                        <Card.Text style={{fontSize: '2rem'}}>Upcoming Events: Weekly Bingo Night</Card.Text>
                        <Card.Text style={{fontSize: '2rem'}}>Located at 1234 Green Farm Rd, Indianapolis</Card.Text>
                        <Card.Img variant="bottom" src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555925872/shape/mentalfloss/screen_shot_2013-09-05_at_5.53.51_pm.png" />
                    </Card>
                </Col>
                </CardGroup>
        </div>
    )
}

export default GreenFarms
