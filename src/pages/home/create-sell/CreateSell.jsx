import React from 'react';

// import bootstrap components
import { Col, Container, Row } from 'react-bootstrap';

// import custom css
import './create-sell.css';

// import imgs
import CreateSell1 from '../../../assets/img/create-sell-1.png';
import CreateSell2 from '../../../assets/img/create-sell-2.png';
import CreateSell3 from '../../../assets/img/create-sell-3.png';

// icons import
import {FaEthereum} from 'react-icons/fa';

export default function CreateSell() {
  return (
    <section className='create-sell-area'>
      <Container>
        <Row className="align-items-center">
          {/* left col */}
          <Col xs={6} md={4}>
            <div className="left-imgs-box">
              <img src={CreateSell1} alt="img" className="img-fluid w-100 mb-3" />
              <img src={CreateSell2} alt="img" className="img-fluid w-100 img-2" />
            </div>
          </Col>
          {/* middle col */}
          <Col xs={6} md={3}>
            <div className="middle-imgs-box">
              <img src={CreateSell3} alt="img" className="img-fluid w-100" />
            </div>
          </Col>
          {/* right col */}
          <Col md={5}>
            <div className="content-box">
              <h3>Create and <br /> sell your NFTs</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
              </p>
              <a href="#f" className="btn btn-blue-lg font-averta-demo">Sign Up Now</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
