import React from "react";
import { useSelector } from "react-redux";

// Import Antd
import { Row, Col } from "antd";

// Main Component: SecurityInfoPanel
const SecurityInfoPanel = () => {
  const selectedBooking = useSelector((state) => state.selectedBooking);

  return (
    <div>
      <h3 style={{ color: "#40A9FF" }}>Security Info</h3>
      <hr />
      <br />

      <Row style={{ textAlign: "center" }}>
        <Col span={8}>
          <h3>Trade Type</h3>
          <p>{selectedBooking.trade_type}</p>
        </Col>
        <Col span={8}>
          <h3>Cparty</h3>
          <p>{selectedBooking.cparty}</p>
        </Col>
        <Col span={8}>
          <h3>Security</h3>
          <p>{selectedBooking.security}</p>
        </Col>
        <Col span={8}>
          <h3>Quantity</h3>
          <p>{selectedBooking.quantity}</p>
        </Col>
        <Col span={8}>
          <h3>Loan Value</h3>
          <p>{selectedBooking.loan_value}</p>
        </Col>
        <Col span={8}>
          <h3>Ctrl Code</h3>
          <p>{selectedBooking.collateral_code}</p>
        </Col>
        <Col span={8}>
          <h3>Haircur</h3>
          <p>{selectedBooking.haircut}</p>
        </Col>
        <Col span={8}>
          <h3>Profilt Center</h3>
          <p>{selectedBooking.profit_ceter}</p>
        </Col>
        <Col span={8}>
          <h3>Term Date</h3>
          <p>{selectedBooking.term_date}</p>
        </Col>
      </Row>
    </div>
  );
};

export default SecurityInfoPanel;
