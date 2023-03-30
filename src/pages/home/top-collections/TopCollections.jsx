import React from 'react';

// import bootstrap components
import { Col, Container, Row } from 'react-bootstrap';

// import custom css
import './top-collections.css';

// import imgs
import MainColc from '../../../assets/img/main-colc.png';
import OtherCol1 from '../../../assets/img/other-colc-1.png';
import OtherCol2 from '../../../assets/img/other-colc-2.png';
import OtherCol3 from '../../../assets/img/other-colc-3.png';
import user from '../../../assets/img/user.png';
import Etherium from '../../../assets/img/ethereum-2.svg';

export default function TopCollections() {
  return (
    <section className='top-collection-area'>
      <Container>
        <Row>
          {/* left col */}
          <Col md={4}>
            <div className="main-colc-item-box">
              <img src={MainColc} alt="collection" className="img-fluid" />
              <div className="d-flex justify-content-between">
                <div className='d-flex'>
                  <img src={user} alt="user" className="img-fluid" />
                  <div>
                    <h6>The Futr Abstr</h6>
                    <p>10 in the stock</p>
                  </div>
                </div>
                <div>
                  <p>Highest Bid</p>
                  <div className="d-flex">
                    <img src={Etherium} alt="icon" className="img-fluid" />
                    <p>0.25 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* middle col */}
          <Col md={4}>
            <div className="other-colc-items-box">

            </div>
          </Col>
          {/* right col */}
          <Col md={4}>
            <div className="top-colc-box">

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
