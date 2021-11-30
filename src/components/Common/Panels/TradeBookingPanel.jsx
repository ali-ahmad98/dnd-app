import React, { useState } from "react";

// Import Antd
import { Table, Modal, Input, Button, Form, Row, Col } from "antd";

// Local Variables
const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Trade Type",
    dataIndex: "trade_type",
    key: "trade_type",
  },
  {
    title: "Cparty",
    dataIndex: "cparty",
    key: "cparty",
  },
  {
    title: "Security",
    dataIndex: "security",
    key: "security",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Loan Value",
    dataIndex: "loan_value",
    key: "loan_value",
  },
  {
    title: "Collateral Code",
    dataIndex: "collateral_code",
    key: "collateral_code",
  },
  {
    title: "Haircut",
    dataIndex: "haircut",
    key: "haircut",
  },
  {
    title: "Profit Ceter",
    dataIndex: "profit_ceter",
    key: "profit_ceter",
  },
  {
    title: "TermDate",
    dataIndex: "term_date",
    key: "term_date",
  },
];

const data = [
  {
    key: "1",
    status: "Pending",
    trade_type: "Loan",
    cparty: "0001",
    security: "IBM",
    quantity: 1000,
    loan_value: 100,
    collateral_code: 10000,
    haircut: 0.5,
    profit_ceter: -0.3,
    term_date: "OBFR",
  },
  {
    key: "2",
    status: "Sent",
    trade_type: "Loan",
    cparty: "0001",
    security: "IBM",
    quantity: 1000,
    loan_value: 100,
    collateral_code: 10000,
    haircut: 0.5,
    profit_ceter: -0.3,
    term_date: "OBFR",
  },
  {
    key: "3",
    status: "Error",
    trade_type: "Loan",
    cparty: "0001",
    security: "IBM",
    quantity: 1000,
    loan_value: 100,
    collateral_code: 10000,
    haircut: 0.5,
    profit_ceter: -0.3,
    term_date: "OBFR",
  },
];

// Main Component: TradeBookingPanel
const TradeBookingPanel = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState(data);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getFields = () => {
    const children = [];

    columns.map((col, i) => {
      children.push(
        col.key !== "status" && (
          <Col span={12} key={i}>
            <Form.Item
              name={col.key}
              label={col.title}
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
        )
      );
    });

    return children;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    values.key = tableData.length + 1;
    values.status = "pending";
    setTableData([...tableData, values]);
    handleCancel();
  };

  return (
    <div>
      <div>
        <h3 style={{ float: "left", color: "#40A9FF" }}>Trade Booking</h3>
        <div style={{ float: "right" }}>
          <Button type="primary">Upload Template</Button> &nbsp;
          <Button type="primary" onClick={showModal}>
            + Add New Trade
          </Button>
        </div>
      </div>
      <br />
      <br />
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        size="small"
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              props.setSelectedTrade(record);
            },
          };
        }}
      />
      <Modal
        title="Add New Trade"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={24}>{getFields()}</Row>
          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TradeBookingPanel;
