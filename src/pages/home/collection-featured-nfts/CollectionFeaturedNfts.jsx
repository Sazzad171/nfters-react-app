import React from 'react';

// import bootstrap components
import { Col, Container, Row } from 'react-bootstrap';

// import custom css
import './collection-featured-nfts.css';

// import imgs
import CFN1 from '../../../assets/img/cfn-big-1.png';
import CFN2 from '../../../assets/img/cfn-big-2.png';
import CFN3 from '../../../assets/img/cfn-big-3.png';
import CfnSml1 from '../../../assets/img/cfn-sm-1.png';
import CfnSml2 from '../../../assets/img/cfn-sm-2.png';
import CfnSml3 from '../../../assets/img/cfn-sm-3.png';
import user from '../../../assets/img/user.png';

export default function CollectionFeaturedNfts() {
  return (
    <section className='colc-featured-area'>
      <Container>
        <h4 className='section-heading'>Collection Featured NFTs</h4>
        <Row>
          {/* left col */}
          <Col md={4} className='mb-3 mb-md-0'>
            <div className="cfn-col">
              <Row className='img-row'>
                <Col md={9} className="pe-md-1">
                  <img src={CFN1} alt="collection img" className="img-fluid big-img" />
                </Col>
                <Col md={3} className="ps-1">
                  <img src={CfnSml1} alt="collection img" className="img-fluid small-img" />
                  <img src={CfnSml2} alt="collection img" className="img-fluid small-img" />
                  <img src={CfnSml3} alt="collection img" className="img-fluid small-img" />
                </Col>
              </Row>
              <Row className='align-items-end'>
                <Col md={7}>
                  <h6 className="font-dm-sans font-700">Amazing Collection</h6>
                  <div className="d-flex gap-2">
                    <img src={user} alt="user" className="img-fluid user-img rounded-circle" />
                    <h6 className="user-name font-dm-sans font-500">by Arkhan</h6>
                  </div>
                </Col>
                <Col md={5}>
                  <p className="text-md-end">
                    <a href="#f" className="btn btn-transparent">Total 54 Items</a>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          {/* middle col */}
          <Col md={4} className='mb-3 mb-md-0'>
            <div className="cfn-col">
              <Row className='img-row'>
                <Col md={9} className="pe-md-1">
                  <img src={CFN2} alt="collection img" className="img-fluid big-img" />
                </Col>
                <Col md={3} className="ps-1">
                  <img src={CfnSml1} alt="collection img" className="img-fluid small-img" />
                  <img src={CfnSml2} alt="collection img" className="img-fluid small-img" />
                  <img src={CfnSml3} alt="collection img" className="img-fluid small-img" />
                </Col>
              </Row>
              <Row className='align-items-end'>
                <Col md={7}>
                  <h6 className="font-dm-sans font-700">Amazing Collection</h6>
                  <div className="d-flex gap-2">
                    <img src={user} alt="user" className="img-fluid user-img rounded-circle" />
                    <h6 className="user-name font-dm-sans font-500">by Arkhan</h6>
                  </div>
                </Col>
                <Col md={5}>
                  <p className="text-md-end">
                    <a href="#f" className="btn btn-transparent">Total 54 Items</a>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          {/* right col */}
          <Col md={4} className='mb-3 mb-md-0'>
            <div className="cfn-col">
              <Row className='img-row'>
                <Col md={9} className="pe-md-1">
                  <img src={CFN3} alt="collection img" className="img-fluid big-img" />
                </Col>
                <Col md={3} className="ps-1">
                  <img src={CfnSml1} alt="collection img" className="img-fluid small-img" />
                  <img src={CfnSml2} alt="collection img" className="img-fluid small-img" />
                  <img src={CfnSml3} alt="collection img" className="img-fluid small-img" />
                </Col>
              </Row>
              <Row className='align-items-end'>
                <Col md={7}>
                  <h6 className="font-dm-sans font-700">Amazing Collection</h6>
                  <div className="d-flex gap-2">
                    <img src={user} alt="user" className="img-fluid user-img rounded-circle" />
                    <h6 className="user-name font-dm-sans font-500">by Arkhan</h6>
                  </div>
                </Col>
                <Col md={5}>
                  <p className="text-md-end">
                    <a href="#f" className="btn btn-transparent">Total 54 Items</a>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
