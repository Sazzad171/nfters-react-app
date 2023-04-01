import React from 'react';

// import bootstrap components
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';

// other components
import TabContentComp from './TabContent.jsx';

// import custom css
import './discover-more.css';

export default function DiscoverMore() {

  return (
    <section className='discover-more-area'>
      <Container>
        <h3 className="section-heading">Discover more NFTs</h3>

        {/* tab start */}
        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
          {/* nav tab */}
          <Row className='tab-nav-row'>
            {/* nav tab col */}
            <Col md={9} lg={10} className='mb-2 mb-md-0'>
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="all">All Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="art">Art</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="celebrities">Celebrities</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="gaming">Gaming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sport">Sport</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="music">Music</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="crypto">Crypto</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            {/* filter col */}
            <Col md={3} lg={2}>
              <p>
                <button className="btn btn-filter d-flex align-items-center gap-2 ms-md-auto">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 120h480v48H16zm80 112h320v48H96zm96 112h128v48H192z"></path></svg>
                  All Filters
                </button>
              </p>
            </Col>
          </Row>

          {/* tab content */}
          <Tab.Content>
            <Tab.Pane eventKey="all">
              <TabContentComp />
            </Tab.Pane>
            <Tab.Pane eventKey="art">
              <TabContentComp />
            </Tab.Pane>
            <Tab.Pane eventKey="celebrities">
              <TabContentComp />
            </Tab.Pane>
            <Tab.Pane eventKey="gaming">
              <TabContentComp />
            </Tab.Pane>
            <Tab.Pane eventKey="sport">
              <TabContentComp />
            </Tab.Pane>
            <Tab.Pane eventKey="music">
              <TabContentComp />
            </Tab.Pane>
            <Tab.Pane eventKey="crypto">
              <TabContentComp />
            </Tab.Pane>
          </Tab.Content>
          
        </Tab.Container>
        {/* tab end */}
      </Container>
    </section>
  )
}
