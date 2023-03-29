import React from 'react';

// bootstrap components
import {Container, Row, Col} from 'react-bootstrap';

// import imgs
import BannerLayers from '../../../assets/img/banner-layers.png';

export default function Banner() {
  return (
    <section className="banner-area">
      <Container>
        <Row className='align-items-center'>
          <Col md={7}>
            <h1>Discover, and collect Digital Art  NFTs </h1>
            <p>
              Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <p>
              <a href="#f" className="btn btn-blue-lg">Explore Now</a>
            </p>
            <div className="d-flex gap-4">
              <div>
                <h2>98K+</h2>
                <p>Artwork</p>
              </div>
              <div>

              </div>
              <div>

              </div>
            </div>
          </Col>
          <Col md={5}>
            <img src={BannerLayers} alt="banner layers" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
