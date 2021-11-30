import React from "react";

// Import Antd
import { Row, Col } from "antd";

// Main Component: CounterPartyPanel
const CounterPartyPanel = (props) => {
  return (
    <div>
      <h3 style={{ color: "#40A9FF" }}>Counter party</h3>
      <hr />
      <br />
      <Row style={{ textAlign: "center" }}>
        <Col span={8}>
          <h4>Trade Type</h4>
          {/* <p>{props.selectedTrade2.trade_id}</p> */}
        </Col>
        <Col span={8}>
          <h4>Cparty</h4>
          {/* <p>{props.selectedTrade2.cparty}</p> */}
        </Col>
        <Col span={8}>
          <h4>Security</h4>
          {/* <p>{props.selectedTrade2.quantity}</p> */}
        </Col>
        <Col span={8}>
          <h4>Quantity</h4>
          {/* <p>{props.selectedTrade2.fee}</p> */}
        </Col>
        <Col span={8}>
          <h4>Loan Value</h4>
          {/* <p>{props.selectedTrade2.rebate}</p> */}
        </Col>
        <Col span={8}>
          <h4>Ctrl Code</h4>
          {/* <p>{props.selectedTrade2.trade_date}</p> */}
        </Col>
        <Col span={8}>
          <h4>Haircur</h4>
          {/* <p>{props.selectedTrade2.settle_date}</p> */}
        </Col>
      </Row>
    </div>
  );
};

export default CounterPartyPanel;
