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
import Topcol1 from '../../../assets/img/top-col-1.png';
import Topcol2 from '../../../assets/img/top-col-2.png';
import Topcol3 from '../../../assets/img/top-col-3.png';
import Topcol4 from '../../../assets/img/top-col-4.png';
import Topcol5 from '../../../assets/img/top-col-5.png';
import Badge from '../../../assets/img/badge.png';


// icons import
import {FaEthereum} from 'react-icons/fa';

export default function TopCollections() {
  return (
    <section className='top-collection-area'>
      <Container>
        <Row>
          {/* left col */}
          <Col md={12} lg={4} className='mb-4 mb-lg-0'>
            <div className="main-colc-item-box">
              <img src={MainColc} alt="collection" className="img-fluid main-img" />
              <div className="d-flex justify-content-between">
                <div className='d-flex gap-3'>
                  <img src={user} alt="user" className="img-fluid user-img rounded-circle" />
                  <div>
                    <h6 className='font-dm-sans font-700 mb-1'>The Futr Abstr</h6>
                    <p className='user-stock'>10 in the stock</p>
                  </div>
                </div>
                <div className='bid'>
                  <p className='font-500 mb-1'>Highest Bid</p>
                  <div className="d-flex align-items-center">
                    <img src={Etherium} alt="icon" className="img-fluid me-2" />
                    <h6 className='font-dm-sans font-700 mb-0'>0.25 ETH</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* middle col */}
          <Col md={7} lg={4}>
            <div className="other-colc-items-box ps-lg-3">
              {/* item */}
              <div className="item d-flex">
                <div>
                  <img src={OtherCol1} alt="collection" className="colc-img" />
                </div>
                <div>
                  <h6 className='font-dm-sans font-700 mb-2'>The Futr Abstr</h6>
                  <div className="d-flex gap-2 align-items-center user-info mb-3">
                    <div>
                      <img src={user} alt="user" className="img-fluid user-img rounded-circle" />
                    </div>
                    <div>
                      <button className='btn d-flex gap-1 align-items-center'><FaEthereum className='eth-icon' /> 0.25 ETH</button>
                    </div>
                    <div>
                      <p>1 of 8</p>
                    </div>
                  </div>
                  <a href="#f" className="btn btn-transparent font-averta-demo">Place a bid</a>
                </div>
              </div>
              {/* item */}
              <div className="item d-flex">
                <div>
                  <img src={OtherCol2} alt="collection" className="colc-img" />
                </div>
                <div>
                  <h6 className='font-dm-sans font-700 mb-2'>The Futr Abstr</h6>
                  <div className="d-flex gap-2 align-items-center user-info mb-3">
                    <div>
                      <img src={user} alt="user" className="img-fluid user-img rounded-circle" />
                    </div>
                    <div>
                      <button className='btn d-flex gap-1 align-items-center'><FaEthereum className='eth-icon' /> 0.25 ETH</button>
                    </div>
                    <div>
                      <p>1 of 8</p>
                    </div>
                  </div>
                  <a href="#f" className="btn btn-transparent font-averta-demo">Place a bid</a>
                </div>
              </div>
              {/* item */}
              <div className="item d-flex">
                <div>
                  <img src={OtherCol3} alt="collection" className="colc-img" />
                </div>
                <div>
                  <h6 className='font-dm-sans font-700 mb-2'>The Futr Abstr</h6>
                  <div className="d-flex gap-2 align-items-center user-info mb-3">
                    <div>
                      <img src={user} alt="user" className="img-fluid user-img rounded-circle" />
                    </div>
                    <div>
                      <button className='btn d-flex gap-1 align-items-center'><FaEthereum className='eth-icon' /> 0.25 ETH</button>
                    </div>
                    <div>
                      <p>1 of 8</p>
                    </div>
                  </div>
                  <a href="#f" className="btn btn-transparent font-averta-demo">Place a bid</a>
                </div>
              </div>
            </div>
          </Col>
          {/* right col */}
          <Col md={5} lg={4}>
            <div className="top-colc-box">
              <div className="heading-area">
                <h6>Top Collections over</h6>
                <h6 className='font-dm-sans font-700 text-purple'>Last 7 days</h6>
              </div>

              {/* item 1 */}
              <div className="item d-flex align-items-center">
                <h5 className='font-dm-sans font-700'>1</h5>
                <div className="colc-img position-relative">
                  <img src={Topcol1} alt="user" className="img-fluid colc-img rounded-circle" />
                  <img src={Badge} alt="badge" className="badge-img position-absolute" />
                </div>
                <div>
                  <h6 className='colc-name font-dm-sans font-500 mb-1'>CryptoFunks</h6>
                  <p className='d-flex gap-1 align-items-center font-poppins font-600'><FaEthereum className='eth-icon' /> 19,769.39</p>
                </div>
                <h6 className="percentage font-poppins font-600 text-green">+26.52%</h6>
              </div>
              {/* item 2 */}
              <div className="item d-flex align-items-center">
                <h5 className='font-dm-sans font-700'>2</h5>
                <div className="colc-img position-relative">
                  <img src={Topcol2} alt="user" className="img-fluid colc-img rounded-circle" />
                </div>
                <div>
                  <h6 className='colc-name font-dm-sans font-500 mb-1'>Cryptix</h6>
                  <p className='d-flex gap-1 align-items-center font-poppins font-600'><FaEthereum className='eth-icon' /> 19,769.39</p>
                </div>
                <h6 className="percentage font-poppins font-600 text-red">+26.52%</h6>
              </div>
              {/* item 3 */}
              <div className="item d-flex align-items-center">
                <h5 className='font-dm-sans font-700'>3</h5>
                <div className="colc-img position-relative">
                  <img src={Topcol3} alt="user" className="img-fluid colc-img rounded-circle" />
                </div>
                <div>
                  <h6 className='colc-name font-dm-sans font-500 mb-1'>Frensware</h6>
                  <p className='d-flex gap-1 align-items-center font-poppins font-600'><FaEthereum className='eth-icon' /> 19,769.39</p>
                </div>
                <h6 className="percentage font-poppins font-600 text-green">+26.52%</h6>
              </div>
              {/* item 4 */}
              <div className="item d-flex align-items-center">
                <h5 className='font-dm-sans font-700'>4</h5>
                <div className="colc-img position-relative">
                  <img src={Topcol4} alt="user" className="img-fluid colc-img rounded-circle" />
                  <img src={Badge} alt="badge" className="badge-img position-absolute" />
                </div>
                <div>
                  <h6 className='colc-name font-dm-sans font-500 mb-1'>PunkArt</h6>
                  <p className='d-flex gap-1 align-items-center font-poppins font-600'><FaEthereum className='eth-icon' /> 19,769.39</p>
                </div>
                <h6 className="percentage font-poppins font-600 text-green">+26.52%</h6>
              </div>
              {/* item 5 */}
              <div className="item d-flex align-items-center">
                <h5 className='font-dm-sans font-700'>5</h5>
                <div className="colc-img position-relative">
                  <img src={Topcol5} alt="user" className="img-fluid colc-img rounded-circle" />
                </div>
                <div>
                  <h6 className='colc-name font-dm-sans font-500 mb-1'>Art Crypto</h6>
                  <p className='d-flex gap-1 align-items-center font-poppins font-600'><FaEthereum className='eth-icon' /> 19,769.39</p>
                </div>
                <h6 className="percentage font-poppins font-600 text-red">+26.52%</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
