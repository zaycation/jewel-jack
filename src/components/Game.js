import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  GiFloatingCrystal,
  GiCutDiamond,
  GiEmerald,
  GiRupee,
} from "react-icons/gi";
import {
  ProgressBar,
  Container,
  Button,
  Card,
  Row,
  Col,
  Toast,
} from "react-bootstrap";

const useStateWithLocalStorage = (localStorageKey) => {
  const [wins, setWins] = useState(
    parseInt(localStorage.getItem(localStorageKey)) || 0
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, wins);
  }, [localStorageKey, wins]);

  return [wins, setWins];
};

const useStateWithLocalStorage2 = (localStorageKey) => {
  const [losses, setLosses] = useState(
    parseInt(localStorage.getItem(localStorageKey)) || 0
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, losses);
  }, [localStorageKey, losses]);

  return [losses, setLosses];
};

const Game = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  const [currentCount, setCurrentCount] = useState(0);
  const [wins, setWins] = useStateWithLocalStorage("winsKey");
  const [losses, setLosses] = useStateWithLocalStorage2("lossesKey");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCount(getRandomNumberBetween(300, 1000));
    //console.log(count.currentVal);
  }, []);

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
        navigator.clipboard.writeText("https://jewel-jack.netlify.app");
        setShow(true);
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
            <div className="d-flex justify-content-center align-items-center py-3">
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={5000}
                autohide
              >
                <Toast.Header>
                  <strong className="mr-auto">Link copied to clipboard!</strong>
                  <small>0 secs ago</small>
                </Toast.Header>
                <Toast.Body>
                  Woohoo, you just copied the link to this app! Share it with
                  your friends by pasting it somewhere else! (Ctrl + V || Cmd +
                  V)
                </Toast.Body>
              </Toast>
            </div>
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

            <ProgressBar
              animated
              now={currentCount}
              variant="info"
              min={0}
              max={1000}
            />
            <ProgressBar
              striped
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
              <Card.Body className="d-flex align-items-center justify-content-between">
                <div>
                  <h6>Current ~ {currentCount}</h6>
                  <h6>Wins ~ {wins}</h6>
                </div>
                <div>
                  <h6>Target ~ {count}</h6>
                  <h6>Losses ~ {losses}</h6>
                </div>
                <div>
                  <h6>Ratio ~ {(wins / losses).toFixed(3)}</h6>
                </div>
              </Card.Body>
              <Card.Footer className="text-center">Jewel Stats</Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="py-3"></div>
            <Button
              block
              variant="info"
              onClick={() => {
                navigator.clipboard.writeText("https://jewel-jack.netlify.app");
                setShow(true);
              }}
            >
              Click me to share the link to friends
            </Button>
          </Col>
          <Col sm={12} md={12} lg={12}>
            <h4 className="py-5">Instructions</h4>
            <ol>
              <li>
                The bottom green bar is the target score aka the "dealer's
                hand".
              </li>
              <li>
                The goal is to choose the correct combination of jewels to
                perfectly match the dealer's hand. There is also a stats card to
                show you the corresponding digits.
              </li>
              <li>
                The value of the jewels may or may not change values. Choose
                carefully to ensure you match the dealer's hand!
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Game;
