import { Col, Row, Card } from 'react-bootstrap'

const Farm = ({ farm }) => {
    return (
        <div className='farm'>
            <Row>
                <Card style={{flex: 1}}>
                    <Col><Card.Img src="" ></Card.Img></Col>
                    <Col style={{marginTop: 15}}><h3>{farm.farmName}{' '}</h3></Col>
                    <Col style={{marginTop: 15}}><p>{farm.description}</p></Col>
                    <Col style={{marginTop: 15}}><p>{farm.socialMedia}</p></Col>
                </Card>
            </Row>
        </div>
    )
}

export default Farm
