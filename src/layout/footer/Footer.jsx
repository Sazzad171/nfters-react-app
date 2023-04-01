import React from 'react';

// import bootstrap components
import { Col, Container, Row } from 'react-bootstrap';

// import custom css
import './footer.css';

// icons import
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-top">
          <Row>
            {/* logo col */}
            <Col xs={12} md={7} lg={4} className='mb-4 mb-md-0'>
              <p className='logo mb-3 mb-md-4'>
                <a href="/f" className="text-uppercase font-integralcfBold font-700">nfters</a>
              </p>
              <p className="comp-details">
                The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
              </p>
              <ul className="social-icons d-flex gap-2">
                <li>
                  <a href="#f" className='fb'><FaFacebookF /></a>
                </li>
                <li>
                  <a href="#f" className='twtr'><FaTwitter /></a>
                </li>
                <li>
                  <a href="#f" className='linkedin'><FaLinkedinIn /></a>
                </li>
              </ul>
            </Col>
            {/* market place col */}
            <Col xs={6} md={5} lg={2} className='mb-4 mb-md-0'>
              <h6 className="col-headings mb-3 mb-md-4">Market Place</h6>
              <ul className="link-items">
                <li>
                  <a href="#f">All NFTs</a>
                </li>
                <li>
                  <a href="#f">New</a>
                </li>
                <li>
                  <a href="#f">Art</a>
                </li>
                <li>
                  <a href="#f">Sports</a>
                </li>
                <li>
                  <a href="#f">Utility</a>
                </li>
                <li>
                  <a href="#f">Music</a>
                </li>
                <li>
                  <a href="#f">Domain Name</a>
                </li>
              </ul>
            </Col>
            {/* my account col */}
            <Col xs={6} md={5} lg={2} className='mb-4 mb-md-0'>
              <h6 className="col-headings mb-3 mb-md-4">My Account</h6>
              <ul className="link-items">
                <li>
                  <a href="#f">Profile</a>
                </li>
                <li>
                  <a href="#f">Favorite</a>
                </li>
                <li>
                  <a href="#f">My Collections</a>
                </li>
                <li>
                  <a href="#f">Settings</a>
                </li>
              </ul>
            </Col>
            {/* subs. col */}
            <Col xs={12} md={7} lg={4} className='mb-4 mb-md-0'>
              <h6 className="col-headings mb-3 mb-md-4">Stay in the loop</h6>
              <p className="subs-details mb-3 mb-md-4">
                Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
              </p>
              <form className="subscribe-form">
                <div className="position-relative">
                  <input type="email" className='form-control' placeholder='Enter your email address..' />
                  <button className="btn btn-blue-lg subs-btn position-absolute">Subscibe Now</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <p className="text-center font-averta-demo">Copyright &copy; 2022 Avi Yansah</p>
        </div>
      </Container>
    </footer>
  )
}