import React from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>Link-Bucket</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Button href='/create-snippet' variant='outline-info'>
                    Create Snippet
                </Button>
            </Nav>
        </Navbar>
    )
}

export default Header
