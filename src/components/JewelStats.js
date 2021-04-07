import React from "react";
import { Col, Card } from "react-bootstrap";

export default function JewelStats({ currentCount, wins, count, losses }) {
  return (
    <Col sm={12} md={6} lg={6}>
      <br />
      <br />
      <Card fluid={true}>
        <Card.Header className="text-center" style={{ color: "#5f2c82" }}>
          Jewel Stats
        </Card.Header>
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
            <h6>W/L Ratio ~ {(wins / (losses || 1)).toFixed(3)}</h6>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
