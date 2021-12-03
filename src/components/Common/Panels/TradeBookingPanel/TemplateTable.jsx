import { DatePicker, Input } from "antd";
import moment from "moment";

// Import CSS
import classes from "./TradeBookingPanel.module.css";

const TemplateTable = ({
  isMatch,
  templateData1,
  setTemplateData1,
  templateData2,
  setTemplateData2,
}) => {
  const handleChange = (e, type) => {
    if (type === "1") {
      setTemplateData1({
        ...templateData1,
        trade_type: e.target.value,
      });
      if (e.target.value === "borrow") {
        setTemplateData2({
          ...templateData2,
          trade_type: "loan",
        });
      } else {
        setTemplateData2({
          ...templateData2,
          trade_type: "borrow",
        });
      }
    } else {
      setTemplateData2({
        ...templateData2,
        trade_type: e.target.value,
      });
      if (e.target.value === "borrow") {
        setTemplateData1({
          ...templateData1,
          trade_type: "loan",
        });
      } else {
        setTemplateData1({
          ...templateData1,
          trade_type: "borrow",
        });
      }
    }
    //  type === "1"
    //    ? setTemplateData1({
    //        ...templateData1,
    //        trade_type: e.target.value,
    //      })
    //    : setTemplateData2({
    //        ...templateData2,
    //        trade_type: e.target.value,
    //      });
  };
  const tableRow = (type) => {
    return (
      <tr className={classes.trInputs}>
        <th>
          <div>
            <select
              value={
                type === "1"
                  ? templateData1.trade_type
                  : templateData2.trade_type
              }
              onChange={(e) => handleChange(e, type)}
            >
              <option value="borrow">Borrow</option>
              <option value="loan">Loan</option>
            </select>
            {/* <input
              type="string"
              value={
                type === "1"
                  ? templateData1.trade_type
                  : templateData2.trade_type
              }
            /> */}
          </div>
        </th>
        <th>
          <div>
            <Input
              type="string"
              value={type === "1" ? templateData1.cparty : templateData2.cparty}
              onChange={(e) =>
                type === "1"
                  ? setTemplateData1({
                      ...templateData1,
                      cparty: e.target.value,
                    })
                  : setTemplateData2({
                      ...templateData2,
                      cparty: e.target.value,
                    })
              }
            />
          </div>
        </th>
        <th>
          <div>
            <Input
              type="string"
              value={templateData1.security}
              onChange={(e) =>
                setTemplateData1({
                  ...templateData1,
                  security: e.target.value,
                })
              }
            />
          </div>
        </th>
        <th>
          <div>
            <Input
              type="number"
              value={templateData1.quantity}
              onChange={(e) =>
                setTemplateData1({
                  ...templateData1,
                  quantity: e.target.value,
                })
              }
            />
          </div>
        </th>
        <th>
          <div>
            <Input
              type="number"
              value={templateData1.loan_value}
              onChange={(e) =>
                setTemplateData1({
                  ...templateData1,
                  loan_value: e.target.value,
                })
              }
            />
          </div>
        </th>
        <th>
          <div>
            <Input
              type="number"
              value={templateData1.collateral_code}
              onChange={(e) =>
                setTemplateData1({
                  ...templateData1,
                  collateral_code: e.target.value,
                })
              }
            />
          </div>
        </th>
        <th>
          <div>
            <Input
              type="string"
              value={templateData1.rate}
              onChange={(e) =>
                setTemplateData1({
                  ...templateData1,
                  rate: e.target.value,
                })
              }
            />
          </div>
        </th>
        <th>
          <div>
            <Input
              type="number"
              value={templateData1.haircut}
              onChange={(e) =>
                setTemplateData1({
                  ...templateData1,
                  haircut: e.target.value,
                })
              }
            />
          </div>
        </th>
        <th>
          <div>
            <Input
              type="number"
              className={classes.inputNumber}
              value={templateData1.profit_ceter}
              onChange={(e) =>
                setTemplateData1({
                  ...templateData1,
                  profit_ceter: e.target.value,
                })
              }
            />
          </div>
        </th>

        <th>
          <div>
            <DatePicker
              value={
                templateData1.term_date !== ""
                  ? moment(templateData1.term_date)
                  : undefined
              }
              onChange={(date, dateString) =>
                setTemplateData1({
                  ...templateData1,
                  term_date: dateString,
                })
              }
            />
          </div>
        </th>
      </tr>
    );
  };
  return (
    <div className={classes.templateMain}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.headerLabel}>B/L</th>
            <th className={classes.headerLabel}>Cparty</th>
            <th className={classes.headerLabel}>Security</th>
            <th className={classes.headerLabel}>Quantity</th>
            <th className={classes.headerLabel}>Loan Value</th>
            <th className={classes.headerLabel}>Collateral Code</th>
            <th className={classes.headerLabel}>Rate</th>
            <th className={classes.headerLabel}>Haircut</th>
            <th className={classes.headerLabel}>Profit Center</th>
            <th className={classes.headerLabel}>Term Date</th>
          </tr>
          {tableRow("1")}
          {isMatch && tableRow("2")}
        </thead>
        {/* <tbody>
          <tr>
            <td>5</td>
            <td>Michael Yang</td>
            <td>+1 (875) 492-3905</td>
            <td>DELPHIDE</td>
            <td>2016-08-15T01:31:55 -01:00</td>
            <td>false</td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
};
export default TemplateTable;
