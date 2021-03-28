import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  GiCutDiamond,
  GiEmerald,
  GiRupee,
  GiFloatingCrystal,
} from "react-icons/gi";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

const Game = () => {
  const [count, setCount] = useState(1);
  const [currentCount, setCurrentCount] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function gemAdd() {
    let gemVal = getRandomNumberBetween(25, 200);
    if (gemVal > 0) {
      setCurrentCount(currentCount + gemVal);
    }
  }

  function gemAdd2() {
    let gemVal2 = getRandomNumberBetween(0, 5);
    if (gemVal2 > 0) {
      setCurrentCount(currentCount + gemVal2);
    }
  }

  function gemAdd3() {
    let gemVal3 = getRandomNumberBetween(0, 100);
    if (gemVal3 > 0) {
      setCurrentCount(currentCount + gemVal3);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCount(getRandomNumberBetween(300, 1000));
    //console.log(count.currentVal);
  }, []);
  if (currentCount > count) {
    setCurrentCount(currentCount === 0);
    setLosses(losses + 1);

    Swal.fire({
      title: "You LOST",
      text: "You've exceeded the set value limit!",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: `Play Again`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCount(getRandomNumberBetween(300, 1000));
      } else if (result.isDismissed) {
        setCount(getRandomNumberBetween(300, 1000));
      }
    });
  }

  if (currentCount === count) {
    setCurrentCount(currentCount === 0);
    setWins(wins + 1);

    Swal.fire({
      title: "You WON",
      text: "You've perfectly matched the value limit!",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Play Again`,
      cancelButtonText: `Share with friends`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCount(getRandomNumberBetween(300, 1000));
      } else if (result.isDenied) {
        setCount(getRandomNumberBetween(300, 1000));
      } else if (result.isCancelled) {
        Swal.fire({
          title: "Share",
        });
      }
    });
  }
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="jewel-btns my-5">
              <GiRupee size={80} onClick={gemAdd2} className="jewel-icons" />
              <GiCutDiamond
                size={80}
                onClick={gemAdd}
                className="jewel-icons"
              />
              <GiEmerald size={72} onClick={gemAdd3} className="jewel-icons" />
              <GiFloatingCrystal
                size={80}
                onClick={gemAdd}
                className="jewel-icons"
              />
            </div>

            <ProgressBar now={currentCount} variant="info" min={0} max={1000} />
            <ProgressBar
              className="my-3"
              now={count}
              variant="success"
              min={0}
              max={1000}
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <br />
            <br />
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-around text-center">
                <div>
                  <h6>Current ~ {currentCount}</h6>
                  <h6>Wins ~ {wins}</h6>
                </div>
                <div>
                  <h6>Target ~ {count}</h6>
                  <h6>Losses ~ {losses}</h6>
                </div>
              </Card.Body>
              <Card.Footer className="text-center">Jewel Stats</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Game;
