import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navmenu=()=> <Row>
<Navbar expand="lg" bg="light" >
    {/* <Navbar.Brand href="/cms" ></Navbar.Brand> */}
    <Container>
        <Link to="/" className="navbar-brand" >
            {import.meta.env.VITE_APP_NAME}
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="me-auto" >
                <Nav.Item>
                    <Link to="#" className="nav-link">
                        <i className="fa-solid fa-users me-2" />  Staffs
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="#" className="nav-link">
                        <i className="fa-solid fa-users me-2" />  Orders
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
</Row>