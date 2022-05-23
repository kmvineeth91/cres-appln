import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CRES</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Teacher</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header