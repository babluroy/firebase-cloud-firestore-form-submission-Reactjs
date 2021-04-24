import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav  from 'react-bootstrap/Nav'

export default function NavbarT({companyName="Reactjs-Firebase"}) {
    return (
        <div>
<Navbar bg="primary" expand="lg">
  <Navbar.Brand><Link to="/" className="text-light">{companyName}</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/" className="text-light">Home</Link></Nav.Link>
      <Nav.Link><Link to="/submissions" className="text-light">Form Submissions</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
