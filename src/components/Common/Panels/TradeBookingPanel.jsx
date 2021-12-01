import React, { useState } from "react";
import classes from "./Panels.module.css";
import TemplateTable from "./TemplateTable";
// Import Antd
import { Table, Modal, Input, Button, Form, Row, Col, Checkbox } from "antd";

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
  const [templateData1, setTemplateData1] = useState({
    key: "22",
    status: "pending",
    trade_type: "borrow",
    cparty: "",
    security: "",
    quantity: Number,
    loan_value: Number,
    collateral_code: Number,
    rate: Number,
    haircut: Number,
    profit_ceter: Number,
    term_date: "",
  });
  const [templateData2, setTemplateData2] = useState({
    key: "33",
    trade_type: "loan",
    cparty: "",
    // security: "",
    // quantity: Number,
    // loan_value: Number,
    // collateral_code: Number,
    // rate: Number,
    // haircut: Number,
    // profit_ceter: Number,
    // term_date: "",
  });
  const [tableData, setTableData] = useState(data);
  const [isMatch, setIsMatch] = useState(false);
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
    if (isMatch) {
      let row2 = {
        ...templateData2,
        status: "pending",
        security: templateData1.security,
        quantity: templateData1.quantity,
        loan_value: templateData1.loan_value,
        collateral_code: templateData1.collateral_code,
        rate: templateData1.rate,
        haircut: templateData1.haircut,
        profit_ceter: templateData1.profit_ceter,
        term_date: templateData1.term_date,
      };
      console.log("Received values of form: ", templateData1, row2);
      setTableData([...tableData, templateData1, row2]);
    } else {
      setTableData([...tableData, templateData1]);
    }

    // values.key = tableData.length + 1;
    // values.status = "pending";
    // setTableData([...tableData, values]);
    // handleCancel();
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsMatch(!isMatch);
  }
  return (
    <div className={classes.main}>
      <div className={classes.bookingCard}>
        <div className={classes.upperContent}>
          <h3>Trade Booking</h3>
          <div className={classes.flex}>
            <div className={classes.flex1}>
              <Checkbox checked={isMatch} onChange={onChange}>
                Match
              </Checkbox>
            </div>
            <div className={classes.flex2}>
              <TemplateTable
                isMatch={isMatch}
                templateData1={templateData1}
                setTemplateData1={setTemplateData1}
                templateData2={templateData2}
                setTemplateData2={setTemplateData2}
              />
            </div>
            <div className={classes.flex3}>
              {" "}
              <Button onClick={onFinish}>Book</Button>
            </div>
          </div>

          {/* <div style={{ float: "right" }}>
            <Button type="primary">Upload Template</Button> &nbsp;
            <Button type="primary" onClick={showModal}>
              + Add New Trade
            </Button>
          </div> */}
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
              props.setSelectedTrade && props.setSelectedTrade(record);
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
