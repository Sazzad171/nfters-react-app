import React from 'react';

// import bootstrap components
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';

// other components
import TabContentComp from './TabContent.jsx';

// import custom css
import './discover-more.css';

// icons import
import {BiFilter} from 'react-icons/Bi';

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
            <Col md={10}>
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
            <Col md={2}>
              <p>
                <button className="btn btn-filter d-flex align-items-center gap-2 ms-md-auto">
                  <BiFilter /> All Filters
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
