import React, { useState } from "react";

// Import Antd
import { Table, Row, Col, DatePicker, Input, Button } from "antd";

// Local Variables
const columns = [
  {
    title: "TradeId",
    dataIndex: "trade_id",
    key: "trade_id",
  },
  {
    title: "Cparty",
    dataIndex: "cparty",
    key: "cparty",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Fee",
    dataIndex: "fee",
    key: "fee",
  },
  {
    title: "Rebate",
    dataIndex: "rebate",
    key: "rebate",
  },
  {
    title: "Trade Date",
    dataIndex: "trade_date",
    key: "trade_date",
  },
  {
    title: "Settle Date",
    dataIndex: "settle_date",
    key: "settle_date",
  },
];

const data = [
  {
    key: "1",
    trade_id: "TR111",
    cparty: "Loan",
    quantity: "0001",
    fee: "5999",
    rebate: "1000",
    trade_date: "10/8/2021",
    settle_date: "7/12/2021",
  },
  {
    key: "2",
    trade_id: "TR222",
    cparty: "Loan",
    quantity: "0001",
    fee: "5999",
    rebate: "1000",
    trade_date: "10/8/2021",
    settle_date: "7/12/2021",
  },
  {
    key: "3",
    trade_id: "TR333",
    cparty: "Loan",
    quantity: "0001",
    fee: "5999",
    rebate: "1000",
    trade_date: "10/8/2021",
    settle_date: "7/12/2021",
  },
];

// Main Component: TradeBrowserPanel
const TradeBrowserPanel = (props) => {
  const [tableData, setTableData] = useState(data);
  return (
    <div>
      <Row style={{ textAlign: "center" }}>
        <Col span={8}>
          <h3 style={{ float: "left", color: "#40A9FF" }}>Trade Bowsers</h3>
        </Col>
        <Col span={4}>
          <DatePicker placeholder="Start Date" />
        </Col>
        <Col span={4}>
          <DatePicker placeholder="End Date" />
        </Col>
        <Col span={4}>
          <Input placeholder="Security" />
        </Col>
        <Col span={4}>
          <Button type="primary">Query</Button>
        </Col>
      </Row>

      <br />

      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        size="small"
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              // props.setSelectedTrade2(record);
            },
          };
        }}
      />
    </div>
  );
};

export default TradeBrowserPanel;
