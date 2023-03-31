import React from 'react';

// import bootstrap components
import { Col, Container, Row } from 'react-bootstrap';

// import custom css
import './discover-more.css';

// import imgs
import MainColc from '../../../assets/img/main-colc.png';

// icons import
import {FaEthereum} from 'react-icons/fa';

export default function DiscoverMore() {

  return (
    <section className='discover-more-area'>
      <Container>
        <h3 className="section-heading">Discover more NFTs</h3>

        {/* nav tab */}
        <Row>
          {/* nav tab col */}
          <Col md={9}>
            
          </Col>
          {/* filter col */}
          <Col md={3}>
            
          </Col>
        </Row>

        {/* tab content */}
        
        <Row>
          {/* left col */}
          <Col md={3}>
            
          </Col>
          {/* middle col */}
          <Col md={3}>
            
          </Col>
          {/* right col */}
          <Col md={3}>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
