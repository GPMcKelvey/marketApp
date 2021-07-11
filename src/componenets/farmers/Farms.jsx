import { Col, Table } from "react-bootstrap"
import Farm from "./Farm"

const Farms = ({ farms }) => {
    return (
        <div>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Farm Name</th>
                            <th>Owner(s)</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Green Farms</td>
                            <td>Olivia Rogers</td>
                            <td>Here at green farms we specialize in farming responsibly.</td>
                        </tr>
                        <tr>
                            <td>Smith Farms</td>
                            <td>Bob Smith, Martha Smith</td>
                            <td>Smith farms produces the best beets in the state.</td>
                        </tr>
                        <tr>
                            <td>Happy Farms</td>
                            <td>Juan Mares</td>
                            <td>We specialize in co-op sourced farming where anyone can volunteer.</td>
                        </tr>
                        <tr>
                            <td>Figgs Farm</td>
                            <td>Jordan Figg</td>
                            <td>We have more than just figgs for sale!</td>
                        </tr>
                        <tr>
                            <td>Lowlands Farm</td>
                            <td>Robert Doll</td>
                            <td>Smith farms produces the best beets in the state.</td>
                        </tr>
                        <tr>
                            <td>The Big Farm</td>
                            <td>Angela Biggs</td>
                            <td>We may be small but we have big plans!</td>
                        </tr>
                        <tr>
                            <td>Flyin' Farm</td>
                            <td>Oliver Wright</td>
                            <td>We fly the crops in fast!</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </div>
    )
}
          
export default Farms
