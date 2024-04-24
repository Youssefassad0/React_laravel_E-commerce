import { Col, Container, Row } from "react-bootstrap";

const IndexDashboard = () => {
     return (
          <>
               <Container>
                    <Row>
                         <Col xs="12" className="bg-white py-3 my-3 rounded-2 shadow-sm">
                              <Row>

                                   <Col>
                                        <h1>
                                             Dashboard
                                        </h1>
                                   </Col>
                              </Row>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}
export default IndexDashboard;