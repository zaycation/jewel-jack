import React from "react";
import { FaBitcoin, FaGamepad } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container fluid={true} className="header-container">
        <Row>
          <Col>
            <h4 className="ml-3">Blackjack Inspired Jewel Game</h4>
            <br />
            <h6 className="ml-3">
              Test your skills by never breaking the target score!
            </h6>
            <br />
            <Button className="ml-3" variant="secondary">
              <FaBitcoin className="mr-2" />
              Donate BTC
            </Button>{" "}
            <Button className="ml-3 game-btn" variant="secondary">
              <FaGamepad className="mr-2" />
              Test Your Skills
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
