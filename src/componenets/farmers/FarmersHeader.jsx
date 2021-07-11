import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FarmersHeader = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <Container>
                <Row style={{marginTop: 25}}>
                    <Col><h1>Meet Your Farmers!</h1></Col>
                    <Col><Link to="/Farms"><h3>See all Farms</h3></Link></Col>
                    {/* <Col lg ="2"><p style={{marginRight: -105, marginTop: 8}}>Add Your Farm</p></Col>
                    <Col lg="1"><Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /></Col> */}
                </Row>
            </Container>
        </header>
    )
}

export default FarmersHeader
