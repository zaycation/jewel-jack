import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import { FaBitcoin, FaGamepad } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container fluid={true} className="header-container">
        <Row>
          <Slide right>
            <Col>
              <h4 className="ml-3">Blackjack Inspired Jewel Game</h4>
              <br />
              <h6 className="ml-3">
                Test your skills by never breaking the target score!
              </h6>
              <br />
              <Link to="/donate">
                <Button className="ml-3" variant="secondary">
                  <FaBitcoin className="mr-2" />
                  Donate BTC
                </Button>{" "}
              </Link>
              <Link to="/app">
                <Button className="ml-3 game-btn" variant="secondary">
                  <FaGamepad className="mr-2" />
                  Test Your Skills
                </Button>{" "}
              </Link>
            </Col>
          </Slide>
        </Row>
      </Container>
    </>
  );
};

export default Header;
