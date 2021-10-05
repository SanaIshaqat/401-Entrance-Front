import React, { Component } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";


export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">WATCHES</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="src/Components/Home.js">Home</Nav.Link>
                            <Nav.Link href="src/Components/Favorites.js">Favorites</Nav.Link>
                          
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
