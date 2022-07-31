import React from 'react';
import '../Header/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fs-1 px-3' as={Link} to="/">Talat Mahmud</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto px-5 ">
                            <Nav.Link className='link-hover px-3' href="#home">Home</Nav.Link>
                            <Nav.Link className='link-hover px-3' href="#service">Service</Nav.Link>
                            <Nav.Link className='link-hover px-3' href="#blogs">Blogs</Nav.Link>
                            <Nav.Link className='link-hover px-3' href="#projects">Projects</Nav.Link>
                            <Nav.Link className='link-hover px-3' href="#skill">Skill</Nav.Link>


                        </Nav>
                        <Nav className=''>
                            <Nav.Link className='link-hover' href="#about">About</Nav.Link>
                            <Nav.Link className='link-hover' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>


    );
};

export default Header;