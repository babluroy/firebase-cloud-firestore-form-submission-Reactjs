import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav  from 'react-bootstrap/Nav'

export default function NavbarT({companyName="Reactjs-Firebase"}) {
    return (
        <div>
<Navbar bg="primary" expand="lg">
  <Navbar.Brand href="index.html" className="text-light">{companyName}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="index.html" className="text-light">Home</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
