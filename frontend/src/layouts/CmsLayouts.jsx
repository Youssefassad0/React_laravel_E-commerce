import { Container, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const CmsLayouts = () => {
    return (
        <Container fluid >
            <Row>
<Navbar bg="light" >
{/* <Navbar.Brand href="/cms" ></Navbar.Brand> */}
<Link to="/cms" className="navbar-brand" >
    {import.meta.env.VITE_APP_NAME}
</Link>
</Navbar>
            </Row>
        </Container>
    )
}