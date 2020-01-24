import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';



export function Header(props){
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Extract From Tarkov</Navbar.Brand>
            <Nav className="mr-auto">
                {/* <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#maps">Maps</Nav.Link> */}
            </Nav>
        </Navbar>
    );
}

export default Header;