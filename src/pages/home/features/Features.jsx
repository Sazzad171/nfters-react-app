import React from 'react';

// bootstrap components
import {Container, Row, Col} from 'react-bootstrap';

// import css
import './features.css';

// import imgs
import CardImg from '../../../assets/img/transaction-icon.png';
import GrowthImg from '../../../assets/img/growth-icon.png';

export default function Features() {
  return (
    <section className="features-area">
      <Container>
        <Row>
          {/* left col */}
          <Col md={4} className='mb-3 mb-md-0'>
            <h4 className="features-heading">The amazing NFT art <br /> of the world here</h4>
          </Col>
          {/* middle col */}
          <Col md={4}>
            <div className="feature-item d-flex gap-3">
              <div>
                <img src={CardImg} alt="img" className="img-fluid" />
              </div>
              <div>
                <h6 className='font-dm-sans font-700'>Fast Transaction</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
          </Col>
          {/* right col */}
          <Col md={4}>
            <div className="feature-item d-flex gap-3">
              <div>
                <img src={GrowthImg} alt="img" className="img-fluid" />
              </div>
              <div>
                <h6 className='font-dm-sans font-700'>Growth Transaction</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
