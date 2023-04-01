import React from 'react';

// bootstrap components
import {Container, Row, Col} from 'react-bootstrap';

// import css
import './banner.css';

// import imgs
import BannerLayers from '../../../assets/img/banner-layers.png';
import DotImg from '../../../assets/img/banner-dot-bg.png';
import User from '../../../assets/img/user.png';
import BidImg from '../../../assets/img/ethereum.svg';

export default function Banner() {

  return (
    <section className="banner-area position-relative">
      <Container>
        <Row className='align-items-center'>
          {/* left col */}
          <Col lg={7} className='order-2 order-lg-1'>
            <h1 className='main-heading'>Discover, and collect <br /> Digital Art  NFTs </h1>
            <p className='par-block'>
              Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.
            </p>
            <p>
              <a href="#f" className="btn btn-blue-lg">Explore Now</a>
            </p>
            <div className="counting-box d-flex gap-4">
              <div>
                <h2 className='mb-0'>98K<span>+</span></h2>
                <p>Artwork</p>
              </div>
              <div>
                <h2 className='mb-0'>12K<span>+</span></h2>
                <p>Auction</p>
              </div>
              <div>
                <h2 className='mb-0'>15K<span>+</span></h2>
                <p>Artist</p> 
              </div>
            </div>
          </Col>
          {/* right col */}
          <Col lg={5} className='order-1 order-lg-2 mb-4 mb-lg-0'>
            <div className="img-box position-relative">
              <img src={BannerLayers} alt="banner layers" className='img-fluid' />
              <div className="user-info position-absolute">
                <h4 className='font-dm-sans'>Abstr Gradient NFT</h4>
                <div className="img-name d-flex align-items-center gap-3">
                  <img src={User} alt="user" className='rounded-circle' />
                  <h6 className='font-dm-sans'>Arkhan17</h6>
                </div>
              </div>
              <div className="bid-nd-time d-flex justify-content-between position-absolute">
                <div>
                  <p className='font-dm-sans'>Current Bid</p>
                  <div className="d-flex">
                    <img src={BidImg} alt="bid img" className="img-fluid" />
                    <h6 className='font-dm-sans'>Current Bid</h6>
                  </div>
                </div>
                <div>
                  <p className='font-dm-sans'>Ends in</p>
                  <h6 className='font-dm-sans'>5h  23m  11s</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* dot image */}
      <img src={DotImg} alt="dot img" className="dot-img position-absolute" />
    </section>
  )
}
