import React from 'react';
import '../Header/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand className='fs-1 px-3 ' as={Link} to="/"><span className='title'>Talat</span> Mahmud</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  ">
                            <Nav.Link className='link-hover px-3 text-light' href="#home">Home</Nav.Link>
                            <Nav.Link className='link-hover px-3 text-light' href="#service">Service</Nav.Link>
                            <Nav.Link className='link-hover px-3 text-light' href="#blogs">Blogs</Nav.Link>
                            <Nav.Link className='link-hover px-3 text-light' href="#projects">Projects</Nav.Link>
                            <Nav.Link className='link-hover px-3 text-light' href="#skill">Skill</Nav.Link>


                        </Nav>
                        <Nav className=''>
                            <Nav.Link className='link-hover text-light' href="#about">About</Nav.Link>
                            <Nav.Link className='link-hover text-light' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>


    );
};

export default Header;