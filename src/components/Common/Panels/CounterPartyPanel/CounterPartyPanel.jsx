import React from "react";
import { useSelector } from "react-redux";

// Import Antd
import { Row, Col } from "antd";

// Main Component: CounterPartyPanel
const CounterPartyPanel = () => {
  const selectedBowser = useSelector((state) => state.selectedBowser);

  return (
    <div>
      <h3 style={{ color: "#40A9FF" }}>Counter party</h3>
      <hr />
      <br />
      <Row style={{ textAlign: "center" }}>
        <Col span={8}>
          <h3>Trade Type</h3>
          <p>{selectedBowser.trade_id}</p>
        </Col>
        <Col span={8}>
          <h3>Cparty</h3>
          <p>{selectedBowser.cparty}</p>
        </Col>
        <Col span={8}>
          <h3>Security</h3>
          <p>{selectedBowser.quantity}</p>
        </Col>
        <Col span={8}>
          <h3>Quantity</h3>
          <p>{selectedBowser.fee}</p>
        </Col>
        <Col span={8}>
          <h3>Loan Value</h3>
          <p>{selectedBowser.rebate}</p>
        </Col>
        <Col span={8}>
          <h3>Ctrl Code</h3>
          <p>{selectedBowser.trade_date}</p>
        </Col>
        <Col span={8}>
          <h3>Haircur</h3>
          <p>{selectedBowser.settle_date}</p>
        </Col>
      </Row>
    </div>
  );
};

export default CounterPartyPanel;
