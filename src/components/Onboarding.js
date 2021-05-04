import React from "react";
import {
  GiCutDiamond,
  GiEmerald,
  GiRupee,
  GiFloatingCrystal,
} from "react-icons/gi";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Onboarding = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
            className="sect1-bg"
          >
            <div></div>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 6, order: 2 }}
            className="my-5 text-right overflow-hidden"
          >
            <Slide right>
              <h6>When the game starts, a random target score is set</h6>
              <p>
                The goal of the game is to perfectly match this score by
                choosing the correct combination of jewels{" "}
              </p>
              <ProgressBar
                animated
                variant="success"
                now={Math.floor(Math.random() * 101)}
              />
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 3 }}
            sm={{ span: 12, order: 3 }}
            md={{ span: 6, order: 3 }}
            lg={{ span: 6, order: 3 }}
            className="my-5 text-left overflow-hidden"
          >
            <Slide left>
              <h6>Values may or may not randomly change at any moment...</h6>
              <p>
                Be very careful regarding your jewel choices. The best players
                find the right combinations to secure the win
              </p>
              <ProgressBar>
                <ProgressBar
                  striped
                  variant="success"
                  now={Math.random() * 26}
                  key={1}
                />
                <ProgressBar
                  striped
                  variant="warning"
                  now={Math.random() * 46}
                  key={2}
                />
                <ProgressBar
                  striped
                  variant="danger"
                  now={Math.random() * 96}
                  key={3}
                />
              </ProgressBar>
            </Slide>
          </Col>
          <Col
            xs={{ span: 12, order: 4 }}
            sm={{ span: 12, order: 4 }}
            md={{ span: 6, order: 4 }}
            lg={{ span: 6, order: 4 }}
            className="sect2-bg"
          >
            <div></div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 6 }}
            sm={{ span: 12, order: 6 }}
            md={{ span: 6, order: 5 }}
            lg={{ span: 6, order: 5 }}
            className="sect3-bg"
          >
            <div></div>
          </Col>
          <Col
            xs={{ span: 12, order: 5 }}
            sm={{ span: 12, order: 5 }}
            md={{ span: 6, order: 6 }}
            lg={{ span: 6, order: 6 }}
            className="my-5 text-right overflow-hidden"
          >
            <Slide right>
              <div>
                <GiCutDiamond className="jewel-icons" size={32} />
                <GiEmerald className="jewel-icons" size={32} />
                <GiRupee className="jewel-icons" size={32} />
                <GiFloatingCrystal className="jewel-icons" size={32} />
              </div>
              <h6>
                Try to get more than .500 Win/Loss ratio to get on the wall of
                fame!
              </h6>
              <p>
                Share the game and try to compete for the best w/l ratio amongst
                all your buds :p
              </p>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Onboarding;
