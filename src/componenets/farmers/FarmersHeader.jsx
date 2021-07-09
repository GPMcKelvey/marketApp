import Button from './Button'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

const FarmersHeader = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <Container>
                <Row style={{marginTop: 25}}>
                    <Col lg="6"><h1>Meet Your Farmers!</h1></Col>
                    <Breadcrumb><Breadcrumb.Item><h3>See All the Farmers</h3></Breadcrumb.Item></Breadcrumb>
                    <Col lg ="2"><p style={{marginRight: -105, marginTop: 8}}>Add Your Farm</p></Col>
                    <Col lg="1"><Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /></Col>
                </Row>
            </Container>
        </header>
    )
}

export default FarmersHeader
