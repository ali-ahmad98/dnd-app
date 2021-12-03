import React, { useState } from "react";
import TemplateTable from "./TemplateTable";
import { ExcelRenderer } from "react-excel-renderer";
import template from "../../../../Assets/Template.xlsx";
import { useDispatch } from "react-redux";
import { addSelectedBooking } from "../../../../actions";

// Import CSS
import classes from "./TradeBookingPanel.module.css";

// Import Antd
import { UploadOutlined } from "@ant-design/icons";
import { Table, Button, Checkbox } from "antd";

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
const TradeBookingPanel = () => {
  const [tableData, setTableData] = useState(data);
  const [isMatch, setIsMatch] = useState(false);

  const dispatch = useDispatch();
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
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    setIsMatch(!isMatch);
  }

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let uploadedData = [];
        resp.rows.map((row, index) => {
          index !== 0 &&
            uploadedData.push({
              status: row[0],
              trade_type: row[1],
              cparty: row[2],
              security: row[3],
              quantity: row[4],
              loan_value: row[5],
              collateral_code: row[6],
              haircut: row[7],
              profit_ceter: row[8],
              term_date: row[9],
            });
        });
        const temp = [...tableData, ...uploadedData];
        setTableData(temp);
      }
    });
  };

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
              <Button onClick={onFinish}>Book</Button>
            </div>
          </div>

          <br />

          <div style={{ float: "right" }}>
            <a href={template} download="Template.xlsx">
              <Button type="Primary">Download Template</Button>
            </a>
            &nbsp;
            <label className={classes.inputFile}>
              <UploadOutlined /> Upload Excel
              <input
                type="file"
                onChange={fileHandler}
                style={{ padding: "10px" }}
              />
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />

      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        size="small"
        onRow={(record) => {
          return {
            onClick: () => {
              dispatch(addSelectedBooking(record));
            },
          };
        }}
      />
    </div>
  );
};

export default TradeBookingPanel;
