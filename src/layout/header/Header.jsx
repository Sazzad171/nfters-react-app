import React from 'react';
import { useState } from 'react';
import {Navbar, Container, Nav, Offcanvas, InputGroup, Form} from 'react-bootstrap';

// css import
import './header.css';

// icons import
import { CiSearch } from 'react-icons/ci';

export default function Header() {

  // state
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [isMobile] = useState(window.innerWidth < 992);

  // hide offCanvas on click link
  const toggleOffCanvas = () => {
    setShowOffCanvas( (showOffCanvas) => !showOffCanvas );
  }

  return (
    <header className='header'>
      <Navbar expand="lg">
        <Container>
          <a href="/" className='navbar-brand text-uppercase text-purple font-integralcfBold font-700'>
            nfters
          </a>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={toggleOffCanvas} />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" placement="end"
            show={ isMobile ? showOffCanvas : '' } onHide={toggleOffCanvas}>

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className='text-uppercase text-purple font-integralcfBold font-700'>
                nfters
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="me-auto align-items-center">
                <a href="/" className='nav-link' onClick={toggleOffCanvas}>Marketplace</a>
                <a href="/places" className='nav-link' onClick={toggleOffCanvas}>Resource</a>
                <a href="/videos" className='nav-link' onClick={toggleOffCanvas}>About</a>
              </Nav>
              <div className="buttons-search d-flex align-items-center flex-column flex-lg-row gap-3">
                <InputGroup className="search-input">
                  <Form.Control
                    placeholder="Search"
                  />
                  <InputGroup.Text className='pe-3'><CiSearch /></InputGroup.Text>
                </InputGroup>
                <a href="#f" className="btn btn-blue-sm">Upload</a>
                <a href="#f" className="btn btn-transparent">Connect Wallet</a>
              </div>
            </Offcanvas.Body>

          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}