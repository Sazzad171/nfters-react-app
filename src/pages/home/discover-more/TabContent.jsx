import React from "react";

// import bootstrap components
import { Col, Row } from "react-bootstrap";

// import custom css
import "./discover-more.css";

// import imgs
import NFTS1 from "../../../assets/img/nfts-1.png";
import NFTS2 from "../../../assets/img/nfts-2.png";
import NFTS3 from "../../../assets/img/nfts-3.png";
import NFTS4 from "../../../assets/img/nfts-4.png";
import NFTSUser1 from "../../../assets/img/nfts-user-1.png";
import NFTSUser2 from "../../../assets/img/nfts-user-2.png";
import NFTSUser3 from "../../../assets/img/nfts-user-3.png";
import NFTSUser4 from "../../../assets/img/nfts-user-4.png";

// icons import
import { FaEthereum } from "react-icons/fa";

export default function DiscoverMore() {
	return (
		<Row>
      {/* first col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS1} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">ArtCrypto</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* second col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS2} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">This NFT</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* third col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS3} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">NameCrypto</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* fourth col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS4} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">KingCrypto</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* first col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS1} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">ArtCrypto</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* second col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS2} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">This NFT</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* third col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS3} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">NameCrypto</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* fourth col */}
      <Col md={6} lg={3}>
        <div className="nfts-item">
          <div className="main-img-box">
            <img src={NFTS4} alt="nfts img" className="img-fluid w-100" />
          </div>

          <div className="content-box">
            <div className="user-imgs d-flex mb-2">
              <img src={NFTSUser1} alt="user img" className="img-fluid" />
              <img src={NFTSUser2} alt="user img" className="img-fluid" />
              <img src={NFTSUser3} alt="user img" className="img-fluid" />
              <img src={NFTSUser4} alt="user img" className="img-fluid" />
            </div>

            <h6 className="font-dm-sans font-700 mb-2">KingCrypto</h6>
            <div className="eth-box d-flex justify-content-between">
              <div className="d-flex align-items-center gap-1">
                <p className="eth-text">
                  <FaEthereum /> 0.25ETH
                </p>
              </div>
              <div>
                <p className="count">1 of 321</p>
              </div>
            </div>

            <hr />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <button className="btn left-btn">3h 50m 2s left</button>
              </div>
              <div>
                <a href="#f" className="btn bid-btn">Place a bid</a>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
	);
}
