import { Col, Row, Card } from 'react-bootstrap'

const Farm = ({ farm }) => {
    return (
        <div className='farm'>
            <Row>
                <Card>
                    <Col><h3>{farm.farmName}{' '}</h3></Col>
                    <Col><p>{farm.description}</p></Col>
                    <Col><p>{farm.socialMedia}</p></Col>
                </Card>
            </Row>
        </div>
    )
}

export default Farm
