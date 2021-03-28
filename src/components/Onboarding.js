import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Onboarding = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}></Col>
          <Col sm={12} md={6} lg={6}>
            <h6>Select a jewel to get a random value and fill the meter</h6>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h6>
              Values can randomly change at any moment! Be very careful
              regarding your selections!
            </h6>
          </Col>
          <Col sm={12} md={6} lg={6}></Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6}></Col>
          <Col sm={12} md={6} lg={6}>
            <h6>
              Try to perfectly match the target goal to win the game. If you
              break the target score - you lose ☹️
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Onboarding;
