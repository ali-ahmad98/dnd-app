import React from "react";

// Import Antd
import { Row, Col } from "antd";

// Main Component: SecurityInfoPanel
const SecurityInfoPanel = (props) => {
  return (
    <div>
      <h3 style={{ color: "#40A9FF" }}>Security Info</h3>
      <hr />
      <br />

      <Row style={{ textAlign: "center" }}>
        <Col span={8}>
          <h4>Trade Type</h4>
          {/* <p>{props.selectedTrade.trade_type}</p> */}
        </Col>
        <Col span={8}>
          <h4>Cparty</h4>
          {/* <p>{props.selectedTrade.cparty}</p> */}
        </Col>
        <Col span={8}>
          <h4>Security</h4>
          {/* <p>{props.selectedTrade.security}</p> */}
        </Col>
        <Col span={8}>
          <h4>Quantity</h4>
          {/* <p>{props.selectedTrade.quantity}</p> */}
        </Col>
        <Col span={8}>
          <h4>Loan Value</h4>
          {/* <p>{props.selectedTrade.loan_value}</p> */}
        </Col>
        <Col span={8}>
          <h4>Ctrl Code</h4>
          {/* <p>{props.selectedTrade.collateral_code}</p> */}
        </Col>
        <Col span={8}>
          <h4>Haircur</h4>
          {/* <p>{props.selectedTrade.haircut}</p> */}
        </Col>
        <Col span={8}>
          <h4>Profilt Center</h4>
          {/* <p>{props.selectedTrade.profit_ceter}</p> */}
        </Col>
        <Col span={8}>
          <h4>Term Date</h4>
          {/* <p>{props.selectedTrade.term_date}</p> */}
        </Col>
      </Row>
    </div>
  );
};

export default SecurityInfoPanel;
